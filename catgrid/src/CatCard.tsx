import styled from 'styled-components'
import LazyImage from './LazyImage'

interface CatCardProps {
  name: string
  age: number
  gender: string
  id: string
  personality: string[]
  img: string
  declawed?: boolean
  size?: string
  breed?: string
}
const CatCard: React.FC<CatCardProps> = ({
  name,
  age,
  gender,
  img,
  personality,
}) => (
  <Card>
    <CatImageContainer>
      <LazyImage src={img} alt={'a cat'} />{' '}
      <HoverPersonality>
        {personality && personality.map((p) => <span key={p}>{p}</span>)}
      </HoverPersonality>
    </CatImageContainer>

    <h2>{name}</h2>
    <p>
      {age <= 5 ? `Baby` : age <= 10 ? 'Young' : 'Mature'} &nbsp;/ &nbsp;
      {gender}
    </p>
  </Card>
)

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  flex: 1 0 95%;
  margin: 8px;
  align-items: center;

  @media (min-width: 1280px) {
    flex: 1 0 21%; /* Desktop */
  }

  @media (min-width: 600px) and (max-width: 1279px) {
    flex: 1 0 30%; /* Tablet */
  }
`
const CatImageContainer = styled.div`
  position: relative;
`
const HoverPersonality = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow-wrap: break-word;
  word-break: break-all;

  ${Card}:hover & {
    opacity: 1;
  }

  span {
    margin: 0 5px;
  }
`

export default CatCard
