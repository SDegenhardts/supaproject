import sql from "./db";

export default async function Lista() {
  const personagens = await sql`select id, classe, descrição from personagens`;

  console.log(personagens);

  return (
    <ul>
      {personagens.map((p) => (
        <li key={p.id}>
          {p.id} - {p.classe} ({p.descrição})
        </li>
      ))}
    </ul>
  );
}