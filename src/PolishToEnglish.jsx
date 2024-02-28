import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import  Button  from './atoms/buttons/Button'

import './App.css'

function PolishToEnglish() {


  const data = [
    {"english": "passport", "polish": "paszport"},
    {"english": "boarding pass", "polish": "karta pokładowa"},
    {"english": "luggage", "polish": "bagaż"},
    {"english": "airport", "polish": "lotnisko"},
    {"english": "hotel", "polish": "hotel"},
    {"english": "reservation", "polish": "rezerwacja"},
    {"english": "ticket", "polish": "bilet"},
    {"english": "currency exchange", "polish": "kantor wymiany walut"},
    {"english": "tourist", "polish": "turysta"},
    {"english": "guidebook", "polish": "przewodnik"},
    {"english": "map", "polish": "mapa"},
    {"english": "camera", "polish": "aparat fotograficzny"},
    {"english": "sunscreen", "polish": "krem z filtrem"},
    {"english": "sunglasses", "polish": "okulary przeciwsłoneczne"},
    {"english": "hat", "polish": "kapelusz"},
    {"english": "backpack", "polish": "plecak"},
    {"english": "suitcase", "polish": "walizka"},
    {"english": "train", "polish": "pociąg"},
    {"english": "bus", "polish": "autobus"},
    {"english": "taxi", "polish": "taksówka"},
    {"english": "subway", "polish": "metro"},
    {"english": "rental car", "polish": "wynajem samochodu"},
    {"english": "hostel", "polish": "hostel"},
    {"english": "souvenir", "polish": "pamiątka"},
    {"english": "adventure", "polish": "przygoda"},
    {"english": "explore", "polish": "zwiedzać"},
    {"english": "journey", "polish": "podróż"},
    {"english": "destination", "polish": "cel podróży"},
    {"english": "beach", "polish": "plaża"},
    {"english": "mountain", "polish": "góra"},
    {"english": "lake", "polish": "jezioro"},
    {"english": "island", "polish": "wyspa"},
    {"english": "city", "polish": "miasto"},
    {"english": "country", "polish": "kraj"},
    {"english": "culture", "polish": "kultura"},
    {"english": "language", "polish": "język"},
    {"english": "tradition", "polish": "tradycja"},
    {"english": "safety", "polish": "bezpieczeństwo"},
    {"english": "emergency", "polish": "nagły wypadek"},
    {"english": "insurance", "polish": "ubezpieczenie"},
    {"english": "vaccination", "polish": "szczepienie"},
    {"english": "health", "polish": "zdrowie"},
    {"english": "budget", "polish": "budżet"},
    {"english": "guide", "polish": "przewodnik"},
    {"english": "tip", "polish": "napiwek"},
    {"english": "wifi", "polish": "wifi"},
    {"english": "internet", "polish": "internet"},
    {"english": "charger", "polish": "ładowarka"},
    {"english": "adapter", "polish": "adapter"},
    {"english": "plug", "polish": "wtyczka"}
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

    setSaveRandomNumb(numb?.[0] ?? {})


    const finalNumber = `${numb && numb[1]} `;


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
       

       <Link to='/'>
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

export default PolishToEnglish


