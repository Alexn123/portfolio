import { createTRPCRouter } from "~/server/api/trpc";
import { projectsRouter } from "./routers/projects";
import { aboutsRouter } from "./routers/about";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  project: projectsRouter,
  about: aboutsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
