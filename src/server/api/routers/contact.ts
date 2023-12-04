import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const contactRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const contacts = await ctx.db.contact.findMany();
    return {
      contacts,
    };
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        address: z.string().min(1),
        phone: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.contact.create({
        data: {
          ...input,
        },
      });
    }),
});
