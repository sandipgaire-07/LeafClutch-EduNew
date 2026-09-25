"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm, type Control } from "react-hook-form";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import {
  toFormValues,
  toSubmitValues,
  type ActionResult,
  type FieldDef,
  type FormValues,
} from "./fields";

interface EntityFormProps {
  fields: FieldDef[];
  /** Existing row when editing; omit to create. */
  initial?: FormValues;
  /** Values the admin doesn't edit here, e.g. { section: "feature", type: "corporate" }. */
  fixed?: FormValues;
  /** A server action (or wrapper); it validates the values with Zod. */
  submit: (values: never) => Promise<ActionResult>;
  submitLabel?: string;
  onDone?: () => void;
  onCancel?: () => void;
  /** Clear the form after a successful save (for "add" forms). */
  resetOnSuccess?: boolean;
}

const selectClass =
  "h-9 w-full rounded-lg border border-input bg-white px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

/**
 * A form built from field descriptions. The server action validates with the
 * same Zod schema as everywhere else and its field errors are shown inline.
 */
export function EntityForm({
  fields,
  initial,
  fixed,
  submit,
  submitLabel = "Save",
  onDone,
  onCancel,
  resetOnSuccess,
}: EntityFormProps) {
  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const defaults = toFormValues(fields, initial);
  const {
    register,
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: defaults });

  const onSubmit = handleSubmit(async (raw) => {
    setFormError(null);
    setSaved(false);
    const result = await submit({ ...toSubmitValues(fields, raw), ...fixed } as never);
    if (!result.ok) {
      setFormError(result.error);
      for (const [name, messages] of Object.entries(result.fieldErrors ?? {})) {
        if (messages?.[0]) setError(name, { message: messages[0] });
      }
      return;
    }
    if (resetOnSuccess) reset(toFormValues(fields, undefined));
    setSaved(true);
    router.refresh();
    onDone?.();
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const error = errors[field.name]?.message as string | undefined;
          const id = `field-${field.name}`;
          return (
            <div key={field.name} className={cn(field.wide || field.type === "textarea" || field.type === "pairs" ? "sm:col-span-2" : "")}>
              {field.type === "checkbox" ? (
                <label className="flex items-center gap-2 pt-6 text-sm font-medium text-foreground">
                  <input type="checkbox" {...register(field.name)} className="size-4 accent-navy" />
                  {field.label}
                </label>
              ) : (
                <>
                  <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <Textarea id={id} rows={4} placeholder={field.placeholder} {...register(field.name)} aria-invalid={!!error} />
                  ) : field.type === "select" ? (
                    <select id={id} {...register(field.name)} className={selectClass} aria-invalid={!!error}>
                      {field.nullable && <option value="">—</option>}
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "multiselect" ? (
                    <MultiSelect name={field.name} options={field.options ?? []} control={control} />
                  ) : field.type === "pairs" ? (
                    <PairsInput name={field.name} keys={field.pairKeys!} control={control} />
                  ) : (
                    <Input
                      id={id}
                      type={field.type === "number" ? "number" : "text"}
                      step={field.type === "number" ? "any" : undefined}
                      placeholder={field.placeholder}
                      {...register(field.name)}
                      aria-invalid={!!error}
                      className="h-9 bg-white"
                    />
                  )}
                </>
              )}
              {field.hint && !error && <p className="mt-1 text-xs text-muted-foreground">{field.hint}</p>}
              {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg" disabled={isSubmitting} className="bg-navy text-white hover:bg-navy/90">
          {isSubmitting ? "Saving…" : submitLabel}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" size="lg" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <p role="status" aria-live="polite" className="text-sm">
          {formError && <span className="text-destructive">{formError}</span>}
          {saved && !formError && <span className="text-green-700">Saved.</span>}
        </p>
      </div>
    </form>
  );
}

function MultiSelect({
  name,
  options,
  control,
}: {
  name: string;
  options: { value: string; label: string }[];
  control: Control<FormValues>;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selected = (field.value as string[]) ?? [];
        return (
          <div className="flex flex-wrap gap-x-5 gap-y-2 rounded-lg border bg-white px-3 py-2">
            {options.map((option) => (
              <label key={option.value} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="size-4 accent-navy"
                  checked={selected.includes(option.value)}
                  onChange={(event) =>
                    field.onChange(
                      event.target.checked
                        ? [...selected, option.value]
                        : selected.filter((value) => value !== option.value),
                    )
                  }
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      }}
    />
  );
}

function PairsInput({
  name,
  keys,
  control,
}: {
  name: string;
  keys: [{ value: string; label: string }, { value: string; label: string }];
  control: Control<FormValues>;
}) {
  const [first, second] = keys;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const rows = (field.value as Record<string, string>[]) ?? [];
        const update = (index: number, key: string, value: string) =>
          field.onChange(rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
        return (
          <div className="space-y-2">
            {rows.map((row, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  aria-label={first.label}
                  placeholder={first.label}
                  value={row[first.value] ?? ""}
                  onChange={(event) => update(index, first.value, event.target.value)}
                  className="h-9 bg-white"
                />
                <Input
                  aria-label={second.label}
                  placeholder={second.label}
                  value={row[second.value] ?? ""}
                  onChange={(event) => update(index, second.value, event.target.value)}
                  className="h-9 bg-white"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Remove row"
                  onClick={() => field.onChange(rows.filter((_, i) => i !== index))}
                >
                  <X />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => field.onChange([...rows, { [first.value]: "", [second.value]: "" }])}
            >
              <Plus data-icon="inline-start" /> Add row
            </Button>
          </div>
        );
      }}
    />
  );
}
