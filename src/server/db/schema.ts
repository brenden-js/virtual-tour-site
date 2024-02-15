import { sql } from "drizzle-orm";
import {
  float,
  int,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const mysqlTable = mysqlTableCreator((name) => `virtual-tour-site_${name}`);

export const quotes = mysqlTable(
  "quote",
  {
    id: varchar("id", {length: 256 }).primaryKey(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
    stAddress: varchar("stAddress", { length: 256 }).notNull(),
    stAddress2: varchar("stAddressLine2", {length: 256}),
    city: varchar("city", {length: 256}),
    state: varchar("state", {length: 256}),
    region: varchar("region", {length: 32}),
    sqft: int("sqft").notNull(),
    zipCode: varchar("zipCode", {length: 64}),
    status: varchar("status", {length: 64}),
    lat: float("lat"),
    lng: float("lng"),
    tourType: varchar("tourType", {length: 64}),
    requestedTimes: varchar("requestedTimes", {length: 1024}),
    email: varchar("email", {length: 512}),
    name: varchar("name", {length: 128}),
    phone: varchar("phone", {length: 128})
  }
)

