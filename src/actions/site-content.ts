"use server";

import { z } from "zod";

import { deleteRow, insertRow, runAdminAction, updateRow } from "@/lib/admin/actions";
import {
  aboutItemSchema,
  idSchema,
  siteSettingsSchema,
  type AboutItemInput,
  type SiteSettingsInput,
} from "@/lib/validation/admin";

// Admin actions for site settings and the About page cards.

/** Contact details, social links and opening hours (the single site_settings row). */
export async function updateSiteSettings(values: SiteSettingsInput) {
  return runAdminAction(siteSettingsSchema, values, (v, db) => updateRow(db, "site_settings", "1", v));
}

// --- About page cards: values, features, learning steps ----------------------

export async function createAboutItem(values: AboutItemInput) {
  return runAdminAction(aboutItemSchema, values, (v, db) => insertRow(db, "about_items", v));
}

export async function updateAboutItem(id: string, values: AboutItemInput) {
  return runAdminAction(z.object({ id: idSchema, values: aboutItemSchema }), { id, values }, (v, db) =>
    updateRow(db, "about_items", v.id, v.values),
  );
}

export async function deleteAboutItem(id: string) {
  return runAdminAction(idSchema, id, (rowId, db) => deleteRow(db, "about_items", rowId));
}
