import api from "@/services/api";

export default async function Vehicles() {
  const vehicles = await api.vehicles();

  return (
    <>
      <div>current data: {JSON.stringify(vehicles)}</div>
    </>
  );
}
