import { Suspense } from 'react';

import api from '@/services/api';
import { DataTable } from '@/components/DataTable';

import { columns } from './columns';

export default async function Starships() {
  const starships = await api.starships();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="overflow-auto">
        <DataTable columns={columns} data={starships} />
      </div>
    </Suspense>
  );
}
