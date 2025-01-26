import api from "@/services/api";

export default async function Starships() {
  const starships = await api.starships();

  return (
    <>
      <div>current data: {JSON.stringify(starships)}</div>
    </>
  );
}
