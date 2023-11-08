import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
// import { houses } from "@/server/db/schema";

export const quoteRouter = createTRPCRouter({
  // createQuote: publicProcedure
  //   .input(z.object({
  //     stAddress: z.string(),
  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //
  //     await ctx.db.insert(houses).values({
  //       createdById: ctx.session.user.id,
  //     });
  //   }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
