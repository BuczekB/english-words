import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import  Button  from './atoms/buttons/Button'

import './App.css'

function EnglishToPolsih() {


  const data = [
    {"english": "Passport", "polish": "Paszport"},
    {"english": "Boarding pass", "polish": "Karta pokładowa"},
    {"english": "Luggage", "polish": "Bagaż"},
    {"english": "Airport", "polish": "Lotnisko"},
    {"english": "Hotel", "polish": "Hotel"},
    {"english": "Reservation", "polish": "Rezerwacja"},
    {"english": "Ticket", "polish": "Bilet"},
    {"english": "Currency exchange", "polish": "Kantor wymiany walut"},
    {"english": "Tourist", "polish": "Turysta"},
    {"english": "Guidebook", "polish": "Przewodnik"},
    {"english": "Map", "polish": "Mapa"},
    {"english": "Camera", "polish": "Aparat fotograficzny"},
    {"english": "Sunscreen", "polish": "Krem z filtrem"},
    {"english": "Sunglasses", "polish": "Okulary przeciwsłoneczne"},
    {"english": "Hat", "polish": "Kapelusz"},
    {"english": "Backpack", "polish": "Plecak"},
    {"english": "Suitcase", "polish": "Walizka"},
    {"english": "Train", "polish": "Pociąg"},
    {"english": "Bus", "polish": "Autobus"},
    {"english": "Taxi", "polish": "Taksówka"},
    {"english": "Subway", "polish": "Metro"},
    {"english": "Rental car", "polish": "Wynajem samochodu"},
    {"english": "Hostel", "polish": "Hostel"},
    {"english": "Souvenir", "polish": "Pamiątka"},
    {"english": "Adventure", "polish": "Przygoda"},
    {"english": "Explore", "polish": "Zwiedzać"},
    {"english": "Journey", "polish": "Podróż"},
    {"english": "Destination", "polish": "Cel podróży"},
    {"english": "Beach", "polish": "Plaża"},
    {"english": "Mountain", "polish": "Góra"},
    {"english": "Lake", "polish": "Jezioro"},
    {"english": "Island", "polish": "Wyspa"},
    {"english": "City", "polish": "Miasto"},
    {"english": "Country", "polish": "Kraj"},
    {"english": "Culture", "polish": "Kultura"},
    {"english": "Language", "polish": "Język"},
    {"english": "Tradition", "polish": "Tradycja"},
    {"english": "Safety", "polish": "Bezpieczeństwo"},
    {"english": "Emergency", "polish": "Nagły wypadek"},
    {"english": "Insurance", "polish": "Ubezpieczenie"},
    {"english": "Vaccination", "polish": "Szczepienie"},
    {"english": "Health", "polish": "Zdrowie"},
    {"english": "Budget", "polish": "Budżet"},
    {"english": "Guide", "polish": "Przewodnik"},
    {"english": "Tip", "polish": "Napiwek"},
    {"english": "Wifi", "polish": "Wifi"},
    {"english": "Internet", "polish": "Internet"},
    {"english": "Charger", "polish": "Ładowarka"},
    {"english": "Adapter", "polish": "Adapter"},
    {"english": "Plug", "polish": "Wtyczka"}
  ]

  const [printData, setPrintData] = useState()
  const [toggleRandomNumber, setToggleRandomNumber] = useState('')
  const [saveRandomNumb, setSaveRandomNumb] = useState()

  const [message, setMessage] = useState('')
  const [updated, setUpdated] = useState('')

  const [result, setResult] = useState('') 
  
  const [bgColor, setBgColor] = useState('App') 

  const [correct, setCorrect] = useState(0)
  const [uncorrect, setUncorrect] = useState(0)
  const [show, setShow] = useState(false)


  const [selectNumbers, setSelectNumbers] = useState([{ a: 99, b:0}])
 


  useEffect(() =>{
    toggleWord()
    
  },[])

  

  const toggleWord = (a,b) =>{

    console.log(a,b);

    const list = data.map((item) =>{
      return [item.english , item.polish ] 
       })
   
       setPrintData(list)

       

    const random = Math.floor(Math.random() * (49 - 0 + 1) + 0);
    console.log(random);
    
  
    
    const numb = list[random]
   
       console.log(numb);

    setSaveRandomNumb(numb?.[1] ?? {})


    const finalNumber = `${numb && numb[0]} `;


    setToggleRandomNumber(finalNumber)
   
  }

  const handleChange = (e) =>{
    setMessage(e.target.value)
  }

  const handleKeyDown = (e) =>{

   
    
    if(e.key === 'Enter' || e.target.type === 'submit'){
     setUpdated(message)
    
    console.log(saveRandomNumb);
     
     if(message == saveRandomNumb){
       
       setResult('true')
       setCorrect(correct + 1)
 
    
       
     }else{
      
       setResult('false')
       setUncorrect(uncorrect + 1)
       
    
       
     }
   
     
 
     setMessage('') 
     toggleWord()
    }
   }

   const showAnswe = () =>{
    setShow(!show)
   }

  return (
      <div className='container' >
       
       <Link to='/english-words'>
          <Button text={'BACK'} style={'backButton'} />
          </Link>
        

       <div className='workBox'>
       <div className='correct' id='correctNoumber'>
        <h1>Correct: <span id='correctNoumber'>{correct}</span></h1>
        </div>
    
     <div className='inputBox'>
     <h1 id='numbersToMultiplication'>{toggleRandomNumber}</h1>
     <h1 id='numbersToMultiplication'>{show? saveRandomNumb : ''}</h1>
      <input 
     onChange={handleChange}
     onKeyDown={handleKeyDown}
      value={message}
      id='valueToCheck'
      placeholder='type your answer'
      ></input>
     <button className='mobileButton' onClick={showAnswe} >CHECK ANSWER</button>
     </div>
      
     <div className='uncorrect'>
     <h1>Uncorrect: {uncorrect}</h1>
        </div>
       </div>
      
    
     
      </div>
  )
}

export default EnglishToPolsih


