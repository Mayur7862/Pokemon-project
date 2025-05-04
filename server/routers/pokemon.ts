import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { prisma } from '@/utils/prisma';

export const pokemonRouter = router({
  getAll: publicProcedure.query(async () => {
    return prisma.pokemon.findMany();
  }),
});