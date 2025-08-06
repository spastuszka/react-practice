import { PersonInfo } from './components/PersonInfo'
import dogImg from './assets/dog.jpg'

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
      {/* Adding an image from the public folder In public folder, you can place
      images directly accessible via the root URL and any static assets */}
      <h2>Image from Public Folder</h2>
      <img src="/dog.jpg" alt="" />
      {/*Adding an image from the assets folder // not workin in direct url, so
      we need to import it */}
      <h2>Image from Assets Folder</h2>
      <img src={dogImg} alt="" />
    </>
  )
}
