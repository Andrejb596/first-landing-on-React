import './selfCard.scss'

export const SelfCard = ({children}) => {
  return (
    <a href="#/Home">
      <div className="cardContainer">
      {children}
      </div>
    </a>
  )
}
