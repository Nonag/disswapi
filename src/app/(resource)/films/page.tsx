import { Suspense } from "react";

import api from "@/services/api";
import { DataTable } from "@/components/DataTable";
import { DataChart } from "@/components/DataChart";

import { columns } from "./columns";

export default async function Films() {
  const films = await api.films();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataTable columns={columns} data={films} />

      <DataChart />
    </Suspense>
  );
}
