'use client';

import { type ColumnDef } from '@tanstack/react-table';

import { type Species } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Species>[] = [
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
    accessorKey: 'homeworld',
    header: 'Home World',
  },
  {
    accessorKey: 'average_lifespan',
    header: 'Average Lifespan',
  },
  {
    accessorKey: 'average_height',
    header: 'Average Height',
  },
  {
    accessorKey: 'language',
    header: 'Language',
  },
  {
    accessorKey: 'people',
    header: 'People',
    cell: ({ row }) => row.original.people.length,
  },
  {
    accessorKey: 'films',
    header: 'Films',
    cell: ({ row }) => row.original.films.length,
  },
];
