import './HomePage.css'
import { Link } from 'react-router-dom'
import  Button  from './atoms/buttons/Button'

function HomePage() {

  return (
      <div className='container' >
     <Link to="/PolishToEnglish">
     <Button text='Polish To English'/>
     </Link>
     <Link to="/EnglishToPolsih">
     <Button text='English To Polsih'/>
     </Link>
      </div>
  )
}

export default HomePage
