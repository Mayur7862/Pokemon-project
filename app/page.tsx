'use client';

import { trpc } from '@/utils/trpc';
import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server';

type RouterOutput = inferRouterOutputs<AppRouter>;
type Pokemon = RouterOutput['pokemon']['getAll'][number];

export default function HomePage() {
  const { data, isLoading, error } = trpc.pokemon.getAll.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || data.length === 0) return <p>No data found</p>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data.map((p: Pokemon) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
