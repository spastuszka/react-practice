export function PersonInfo({ person }) {
  if (!person) {
    return <div>No person information available.</div>
  }
  return (
    <address>
      <h2>{person.name}</h2>
      <div>
        Email: <a href={`mailto:${person.mail}`}>{person.mail}</a>
      </div>
      {person.tel && (
        <div>
          Phone: <a href={`tel:${person.tel}`}>{person.tel}</a>
        </div>
      )}
      <div>Age: {person.age}</div>
    </address>
  )
}
