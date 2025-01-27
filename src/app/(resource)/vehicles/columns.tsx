'use client';

import { type ColumnDef } from '@tanstack/react-table';

import { type Vehicle } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Vehicle>[] = [
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
    accessorKey: 'manufacturer',
    header: 'Manufacturer',
  },
  {
    accessorKey: 'model',
    header: 'Model',
  },
  {
    accessorKey: 'cost_in_credits',
    header: 'Cost',
  },
  {
    accessorKey: 'crew',
    header: 'Crew',
  },
  {
    accessorKey: 'passengers',
    header: 'Passengers',
  },
  {
    accessorKey: 'length',
    header: 'Length',
  },
  {
    accessorKey: 'pilots',
    header: 'Pilots',
    cell: ({ row }) => row.original.pilots.length,
  },
  {
    accessorKey: 'films',
    header: 'Films',
    cell: ({ row }) => row.original.films.length,
  },
];
