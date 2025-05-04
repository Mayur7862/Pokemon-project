import { mergeRouters } from '@trpc/server';
import { publicProcedure, router } from './trpc';
import { pokemonRouter } from './routers/pokemon';

export const appRouter = mergeRouters({
  pokemon: pokemonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
