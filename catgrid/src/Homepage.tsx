import styled from 'styled-components'
import { data } from './data'
import { useState } from 'react'
import CatCard from './CatCard'

interface Cat {
  name: string
  age: number
  personality: string[]
  img: string
  gender: string
  id: string
  declawed?: boolean
  size?: string
  breed?: string
}

const Homepage: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>(data.results)
  const [visibleCats, setVisibleCats] = useState<Cat[]>(
    data.results.slice(0, 12)
  )

  const loadMoreCats = () => {
    const nextCats = cats.slice(visibleCats.length, visibleCats.length + 12)
    setVisibleCats((prevCats) => [...prevCats, ...nextCats])
  }

  return (
    <>
      <h1>CatSPCA</h1>
      <CatGrid>
        {visibleCats.map(
          ({ name, age, gender, id, personality, img }: Cat, index: number) => {
            return (
              <CatCard
                key={`${id}${index}`}
                name={name}
                age={age}
                gender={gender}
                id={id}
                img={img}
                personality={personality}
              ></CatCard>
            )
          }
        )}
      </CatGrid>
      {visibleCats.length < cats.length && (
        <button onClick={loadMoreCats}>Load More</button>
      )}
    </>
  )
}

const CatGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Homepage
