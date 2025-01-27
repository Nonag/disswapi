import { Suspense } from 'react';

import api from '@/services/api';
import { DataTable } from '@/components/DataTable';

import { columns } from './columns';

export default async function Planets() {
  const planets = await api.planets();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="overflow-auto">
        <DataTable columns={columns} data={planets} />
      </div>
    </Suspense>
  );
}
