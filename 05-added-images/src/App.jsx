import { PersonInfo } from './components/PersonInfo'

export function App() {
  const John = {
    name: 'John',
    age: 30,
    mail: 'john.doe@test.com',
    tel: '123-456-7890',
  }
  const Kate = {
    name: 'Kate',
    age: 25,
    mail: 'kate.test@test.com',
    tel: '032-456-7890',
  }
  const Karol = {
    name: 'Karol',
    age: 27,
    mail: 'karol.test@test.com',
  }
  return (
    <>
      <h2>First Contact</h2>
      <PersonInfo person={John} />
      <h2>Second Contact</h2>
      <PersonInfo person={Kate} />
      <h2>Third Contact</h2>
      <PersonInfo person={Karol} />
    </>
  )
}
