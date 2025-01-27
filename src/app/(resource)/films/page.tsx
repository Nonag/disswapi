import { Suspense } from 'react';

import { type Film } from '@/types';
import api from '@/services/api';
import { type ChartConfig } from '@/components/ui/chart';
import { DataTable } from '@/components/DataTable';
import { DataChart } from '@/components/DataChart';

import { columns } from './columns';

type SelectedColumn =
  | 'characters'
  | 'planets'
  | 'starships'
  | 'species'
  | 'vehicles';

const selectedColumns: (keyof Pick<Film, SelectedColumn>)[] = [
  'characters',
  'planets',
  'starships',
  'species',
  'vehicles',
];

const chartConfig = {
  episode_04: {
    label: 'A New Hope',
    color: 'hsl(var(--chart-1))',
  },
  episode_05: {
    label: 'The Empire Strikes Back',
    color: 'hsl(var(--chart-2))',
  },
  episode_06: {
    label: 'Return of the Jedi',
    color: 'hsl(var(--chart-3))',
  },
  episode_01: {
    label: 'The Phantom Menace',
    color: 'hsl(var(--chart-4))',
  },
  episode_02: {
    label: 'Attack of the Clones',
    color: 'hsl(var(--chart-5))',
  },
  episode_03: {
    label: 'Revenge of the Sith',
    color: 'hsl(var(--chart-6))',
  },
} satisfies ChartConfig;

export default async function Films() {
  const paginatedFilms = await api.films();
  const firstPageFilms = paginatedFilms.results;

  const chartFilms = firstPageFilms.reduce<
    { [key: string]: number | string }[]
  >((chartFilms, film) => {
    for (const selectedColumn of selectedColumns) {
      const column = chartFilms.find((item) => item.column === selectedColumn);
      const episodeKey = `episode_${film.episode_id.toString().padStart(2, '0')}`;

      if (column) {
        column[episodeKey] = film[selectedColumn].length;
      } else {
        chartFilms.push({
          column: selectedColumn,
          [episodeKey]: film[selectedColumn].length,
        });
      }
    }

    return chartFilms;
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataTable columns={columns} data={paginatedFilms} />

      <DataChart chartConfig={chartConfig} data={chartFilms} />
    </Suspense>
  );
}
