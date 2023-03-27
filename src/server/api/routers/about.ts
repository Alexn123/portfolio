import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const aboutsRouter = createTRPCRouter({

  getAll: publicProcedure.query(async({ ctx }) => {
    const abouts = await ctx.prisma.about.findMany();

    console.log(abouts);
    return abouts.map(about =>{
      about.content
    })
    return abouts;


  }),
});
