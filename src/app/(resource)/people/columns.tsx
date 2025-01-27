'use client';

import { type ColumnDef } from '@tanstack/react-table';

import { type People } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<People>[] = [
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
    accessorKey: 'birth_year',
    header: 'Birth Year',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'homeworld',
    header: 'Home World',
  },
  {
    accessorKey: 'height',
    header: 'Height',
  },
  {
    accessorKey: 'mass',
    header: 'Mass',
  },
  {
    accessorKey: 'films',
    header: 'Films',
    cell: ({ row }) => row.original.films.length,
  },
  {
    accessorKey: 'starships',
    header: 'Starships',
    cell: ({ row }) => row.original.starships.length,
  },
  {
    accessorKey: 'vehicles',
    header: 'Vehicles',
    cell: ({ row }) => row.original.vehicles.length,
  },
];
