import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const projectsRouter = createTRPCRouter({

  getAll: publicProcedure.query(async({ ctx }) => {
    const projects = await ctx.prisma.project.findMany();

    console.log(projects);
    return projects.map(project =>{
      project.title,
      project.content
    })
    return projects;


  }),
});
