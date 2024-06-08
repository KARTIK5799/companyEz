
import './card.css'

const Card = ({cardHeading,icon}) => {
  return (
    <div className='card'>
      <div className="titleSection">
  <img src={`src/assets/Icons/${icon}.png`} alt={cardHeading.slice(0,5)} /> 
<h2 className='cardHeading'>{cardHeading}</h2>  
      </div>
      <div className='desc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.
      </div>
    </div>
  )
}

export default Card
