import api from "@/services/api";

export default async function Species() {
  const species = await api.species();

  return (
    <>
      <div>current data: {JSON.stringify(species)}</div>
    </>
  );
}
