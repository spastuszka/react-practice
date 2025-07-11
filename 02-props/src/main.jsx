import ReactDom from 'react-dom/client'
import { LinkComponent } from './components/LinkComponent.jsx'
import { DescriptionComponent } from './components/DescriptionComponent.jsx'

const element = (
  <div>
    <h1>Nasza strona</h1>
    <main>
      <LinkComponent text="http://zrozumreact.pl" shouldOpenNewTab={true}>
        Strona testowa
      </LinkComponent>
      <DescriptionComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex ad
        minima vitae perferendis laboriosam animi aliquid eius alias iste rerum,
        aut, cum fugit! Odit obcaecati accusantium maxime iure quo.
      </DescriptionComponent>
      <LinkComponent text="http://zrozumreact.pl" shouldOpenNewTab={false}>
        Strona testowa
      </LinkComponent>
      <DescriptionComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex ad
        minima vitae perferendis laboriosam animi aliquid eius alias iste rerum,
        aut, cum fugit! Odit obcaecati accusantium maxime iure quo.
      </DescriptionComponent>
      <LinkComponent text="http://zrozumreact.pl" shouldOpenNewTab={true}>
        Strona testowa
      </LinkComponent>
      <DescriptionComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex ad
        minima vitae perferendis laboriosam animi aliquid eius alias iste rerum,
        aut, cum fugit! Odit obcaecati accusantium maxime iure quo.
      </DescriptionComponent>
    </main>
  </div>
)

ReactDom.createRoot(document.getElementById('root')).render(element)
