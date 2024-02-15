import {z} from "zod";
import {eq} from 'drizzle-orm';
import {createTRPCRouter, publicProcedure,} from "@/server/api/trpc";
import {quotes} from "@/server/db/schema";
import { v4 as uuidv4 } from 'uuid';
import {inngest} from "@/server/inngest/client";


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
    .mutation(async ({ctx, input}) => {
      const newId = uuidv4()
      await ctx.db.insert(quotes).values({...input, status: "NEW_QUOTE", state: "California", id: newId})

      await inngest.send({
        name: "quote/guest.created",
        data: {
          email: input.email,
          name: input.name,
          phone: input.phone,
          houseId: newId,
          stAddress: input.stAddress,
          region: input.region,
          sqft: input.sqft,
          city: input.city,
          tourType: input.tourType
        },
      });
      return newId
    }),
  getQuote: publicProcedure
    .input(z.string())
    .query(({ctx, input}) => {
      return ctx.db.query.quotes.findFirst({where: eq(quotes.id, input)});
    }),
});
