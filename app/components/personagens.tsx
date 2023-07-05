import sql from '../db'

export default async function Personagens() {
  const personagens = await sql`select id, Classe, Descrição from personagens`;

  console.log(personagens);

  return (
    <ul>
      {personagens?
        personagens.map((p:any) => (
            <li key={p.id}>
            {p.id} - {p.Classe} "{p.Descrição}"
            </li>
        ))
      :<></>
      }
    </ul>
  );
}
