import logoImg from '/logo.png'
import './logo.css'
const Logo = () => {
  return (
    <div className='logo'>
      <img src={logoImg} alt=""  className='logo-img'/>
      <h1 className='logo-text'>Works</h1>
    </div>
  )
}

export default Logo
