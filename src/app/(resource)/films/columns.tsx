"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { type Film } from "@/types";
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Film>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "episode_id",
    header: "Episode",
  },
  {
    accessorKey: "release_date",
    header: "Release",
  },
  {
    accessorKey: "director",
    header: "Director",
  },
  {
    accessorKey: "producer",
    header: "Producer",
  },
  {
    accessorKey: "characters",
    header: "Characters",
    cell: ({ row }) => row.original.characters.length,
  },
  {
    accessorKey: "planets",
    header: "Planets",
    cell: ({ row }) => row.original.planets.length,
  },
  {
    accessorKey: "starships",
    header: "Starships",
    cell: ({ row }) => row.original.starships.length,
  },
  {
    accessorKey: "species",
    header: "Species",
    cell: ({ row }) => row.original.species.length,
  },
  {
    accessorKey: "vehicles",
    header: "Vehicles",
    cell: ({ row }) => row.original.vehicles.length,
  },
];
