'use client';

import { type ColumnDef } from '@tanstack/react-table';

import { type Planet } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Planet>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'population',
    header: 'Population',
  },
  {
    accessorKey: 'diameter',
    header: 'Diameter',
  },
  {
    accessorKey: 'rotation_period',
    header: 'Rotation Period',
  },
  {
    accessorKey: 'gravity',
    header: 'gravity',
  },
  {
    accessorKey: 'films',
    header: 'Films',
    cell: ({ row }) => row.original.films.length,
  },
];
