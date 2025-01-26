import api from "@/services/api";

export default async function Planets() {
  const planets = await api.planets();

  return (
    <>
      <div>current data: {JSON.stringify(planets)}</div>
    </>
  );
}
