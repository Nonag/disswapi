import api from "@/services/api";

export default async function Films() {
  const films = await api.films();

  return (
    <>
      <div>current data: {JSON.stringify(films)}</div>
    </>
  );
}
