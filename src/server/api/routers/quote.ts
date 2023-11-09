import { z } from "zod";
import { eq } from 'drizzle-orm';
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { quotes } from "@/server/db/schema";

export const quoteRouter = createTRPCRouter({
  createQuote: publicProcedure
    .input(z.object({
      stAddress: z.string(),
      city: z.string(),
      sqft: z.number(),
      zipCode: z.string(),
      tourType: z.string(),
      requestedTimes: z.string(),
      email: z.string(),
      name: z.string(),
      phone: z.string(),
      region: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(quotes).values({ ...input, status: "NEW_QUOTE", state: "California" });
    }),
  getQuote: publicProcedure
    .input(z.number())
    .query(({ ctx, input }) => {
    return ctx.db.query.quotes.findFirst({ where: eq(quotes.id, input)});
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
