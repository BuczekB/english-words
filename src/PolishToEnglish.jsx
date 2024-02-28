import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import  Button  from './atoms/buttons/Button'

import './App.css'

function PolishToEnglish() {


  const data = [
    {"english": "Passport", "polish": "Paszport"},
    {"english": "Ticket", "polish": "Bilet"},
    {"english": "Luggage", "polish": "Bagaż"},
    {"english": "Hotel", "polish": "Hotel"},
    {"english": "Reservation", "polish": "Rezerwacja"},
    {"english": "Departure", "polish": "Odjazd"},
    {"english": "Arrival", "polish": "Przyjazd"},
    {"english": "Boarding pass", "polish": "Karta pokładowa"},
    {"english": "Visa", "polish": "Wiza"},
    {"english": "Currency", "polish": "Waluta"},
    {"english": "Map", "polish": "Mapa"},
    {"english": "Guidebook", "polish": "Przewodnik"},
    {"english": "Destination", "polish": "Cel podróży"},
    {"english": "Departure lounge", "polish": "Hala odlotów"},
    {"english": "Arrival lounge", "polish": "Hala przylotów"},
    {"english": "Taxi", "polish": "Taksówka"},
    {"english": "Subway", "polish": "Metro"},
    {"english": "Train", "polish": "Pociąg"},
    {"english": "Bus", "polish": "Autobus"},
    {"english": "Car rental", "polish": "Wynajem samochodów"},
    {"english": "Ferry", "polish": "Prom"},
    {"english": "Beach", "polish": "Plaża"},
    {"english": "Mountains", "polish": "Góry"},
    {"english": "Forest", "polish": "Las"},
    {"english": "Lake", "polish": "Jezioro"},
    {"english": "Ocean", "polish": "Ocean"},
    {"english": "Island", "polish": "Wyspa"},
    {"english": "Sightseeing", "polish": "Zwiedzanie"},
    {"english": "Tourist attraction", "polish": "Atrakcja turystyczna"},
    {"english": "Souvenir", "polish": "Pamiątka"},
    {"english": "Camera", "polish": "Aparat fotograficzny"},
    {"english": "Sunscreen", "polish": "Krem do opalania"},
    {"english": "Backpack", "polish": "Plecak"},
    {"english": "Suitcase", "polish": "Walizka"},
    {"english": "Sun hat", "polish": "Kapelusz przeciwsłoneczny"},
    {"english": "Guide", "polish": "Przewodnik"},
    {"english": "Traveler", "polish": "Podróżnik"},
    {"english": "Adventure", "polish": "Przygoda"},
    {"english": "Explore", "polish": "Eksplorować"},
    {"english": "Language", "polish": "Język"},
    {"english": "Culture", "polish": "Kultura"},
    {"english": "Tradition", "polish": "Tradycja"},
    {"english": "Local cuisine", "polish": "Lokalna kuchnia"},
    {"english": "Market", "polish": "Rynek"},
    {"english": "Street food", "polish": "Jedzenie uliczne"},
    {"english": "Restaurant", "polish": "Restauracja"},
    {"english": "Cafe", "polish": "Kawiarnia"},
    {"english": "Hotel room", "polish": "Pokój hotelowy"},
    {"english": "Suite", "polish": "Apartament"},
    {"english": "Hostel", "polish": "Hostel"},
    {"english": "Campground", "polish": "Kemping"},
    {"english": "Tent", "polish": "Namiot"},
    {"english": "Campfire", "polish": "Ognisko"},
    {"english": "Hiking", "polish": "Wędrówka"},
    {"english": "Backpacking", "polish": "Wędrówki z plecakiem"},
    {"english": "Safari", "polish": "Safari"},
    {"english": "Diving", "polish": "Nurkowanie"},
    {"english": "Snorkeling", "polish": "Snorkelowanie"},
    {"english": "Skiing", "polish": "Narciarstwo"},
    {"english": "Snowboarding", "polish": "Snowboard"},
    {"english": "Surfing", "polish": "Surfowanie"},
    {"english": "Kayaking", "polish": "Kajakarstwo"},
    {"english": "Rafting", "polish": "Spływ pontonowy"},
    {"english": "Paragliding", "polish": "Paralotniarstwo"},
    {"english": "Hot air balloon", "polish": "Balon na gorące powietrze"},
    {"english": "Cruise", "polish": "Rejs"},
    {"english": "Guide", "polish": "Przewodnik"},
    {"english": "Translator", "polish": "Tłumacz"},
    {"english": "Safety", "polish": "Bezpieczeństwo"},
    {"english": "Emergency", "polish": "Nagły wypadek"},
    {"english": "First aid kit", "polish": "Apteczka pierwszej pomocy"},
    {"english": "Insurance", "polish": "Ubezpieczenie"},
    {"english": "Embassy", "polish": "Ambasada"},
    {"english": "Consulate", "polish": "Konsulat"},
    {"english": "Passport control", "polish": "Kontrola paszportowa"},
    {"english": "Customs", "polish": "Celina"},
    {"english": "Duty-free shop", "polish": "Sklep bezcłowy"},
    {"english": "Lost and found", "polish": "Biuro rzeczy znalezionych"},
    {"english": "Tourist information", "polish": "Informacja turystyczna"},
    {"english": "Wifi hotspot", "polish": "Hotspot WiFi"},
    {"english": "Charging station", "polish": "Stacja ładowania"},
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

export default PolishToEnglish


