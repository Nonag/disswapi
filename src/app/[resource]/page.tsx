export default async function Resource({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const resource = (await params).resource;

  return <div>current resource: {resource}</div>;
}
