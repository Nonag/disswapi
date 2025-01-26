import api from "@/services/api";

export default async function People() {
  const people = await api.people();

  return (
    <>
      <div>current data: {JSON.stringify(people)}</div>
    </>
  );
}
