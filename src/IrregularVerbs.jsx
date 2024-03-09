import { useState, useEffect } from "react";

import { Link } from 'react-router-dom'

import  Button  from './atoms/buttons/Button'

function IrregularVerbs() {

  const data = [
      { "a": "be", "b": "was", "c": "been", "d": "być" },
      { "a": "begin", "b": "began", "c": "begun", "d": "zaczynać" },
      { "a": "break", "b": "broke", "c": "broken", "d": "łamać" },
      { "a": "bring", "b": "brought", "c": "brought", "d": "przynosić" },
      { "a": "build", "b": "built", "c": "built", "d": "budować" },
      { "a": "buy", "b": "bought", "c": "bought", "d": "kupować" },
      { "a": "catch", "b": "caught", "c": "caught", "d": "łapać" },
      { "a": "choose", "b": "chose", "c": "chosen", "d": "wybierać" },
      { "a": "come", "b": "came", "c": "come", "d": "przyjść" },
      { "a": "cost", "b": "cost", "c": "cost", "d": "kosztować" },
      { "a": "cut", "b": "cut", "c": "cut", "d": "ciąć" },
      { "a": "do", "b": "did", "c": "done", "d": "robić" },
      { "a": "draw", "b": "drew", "c": "drawn", "d": "rysować" },
      { "a": "drive", "b": "drove", "c": "driven", "d": "prowadzić" },
      { "a": "drink", "b": "drank", "c": "drunk", "d": "pić" },
      { "a": "eat", "b": "ate", "c": "eaten", "d": "jeść" },
      { "a": "fall", "b": "fell", "c": "fallen", "d": "upaść" },
      { "a": "feel", "b": "felt", "c": "felt", "d": "czuć" },
      { "a": "find", "b": "found", "c": "found", "d": "znajdować" },
      { "a": "fly", "b": "flew", "c": "flown", "d": "latać" },
      { "a": "forget", "b": "forgot", "c": "forgotten", "d": "zapominać" },
      { "a": "freeze", "b": "froze", "c": "frozen", "d": "zamarzać" },
      { "a": "get", "b": "got", "c": "got/gotten", "d": "dostać" },
      { "a": "give", "b": "gave", "c": "given", "d": "dać" },
      { "a": "go", "b": "went", "c": "gone", "d": "iść" },
      { "a": "grow", "b": "grew", "c": "grown", "d": "rosnąć" },
      { "a": "have", "b": "had", "c": "had", "d": "mieć" },
      { "a": "hear", "b": "heard", "c": "heard", "d": "słyszeć" },
      { "a": "hide", "b": "hid", "c": "hidden", "d": "chować" },
      { "a": "hit", "b": "hit", "c": "hit", "d": "uderzyć" },
      { "a": "hold", "b": "held", "c": "held", "d": "trzymać" },
      { "a": "hurt", "b": "hurt", "c": "hurt", "d": "ranić" },
      { "a": "keep", "b": "kept", "c": "kept", "d": "trzymać" },
      { "a": "know", "b": "knew", "c": "known", "d": "wiedzieć" },
      { "a": "lay", "b": "laid", "c": "laid", "d": "kłaść" },
      { "a": "lead", "b": "led", "c": "led", "d": "prowadzić" },
      { "a": "leave", "b": "left", "c": "left", "d": "opuszczać" },
      { "a": "let", "b": "let", "c": "let", "d": "pozwolić" },
      { "a": "lie", "b": "lay", "c": "lain", "d": "leżeć" },
      { "a": "lose", "b": "lost", "c": "lost", "d": "gubić" },
      { "a": "make", "b": "made", "c": "made", "d": "robić" },
      { "a": "mean", "b": "meant", "c": "meant", "d": "znaczyć" },
      { "a": "meet", "b": "met", "c": "met", "d": "spotykać" },
      { "a": "pay", "b": "paid", "c": "paid", "d": "płacić" },
      { "a": "put", "b": "put", "c": "put", "d": "kłaść" },
      { "a": "read", "b": "read", "c": "read", "d": "czytać" },
      { "a": "ride", "b": "rode", "c": "ridden", "d": "jeździć" },
      { "a": "ring", "b": "rang", "c": "rung", "d": "dzwonić" },
      { "a": "rise", "b": "rose", "c": "risen", "d": "wzrastać" },
  ]

  const [correct, setCorrect] = useState(0)
  const [uncorrect, setUncorrect] = useState(0)

  const [firstAnswer, setFirstAnswer] = useState('')
  const [secoundAnswer, setSecoundAnswer] = useState('')
  const [word, setWord] = useState([])
  const [flag, setFlag] = useState(false)
  const [translate, setTranslate] = useState(false)

  useEffect(() =>{
    toggleWord()

  },[])


  const toggleWord = () =>{
    const random = Math.floor(Math.random() * (49 - 0 + 1) + 0);
    const randomWord = data[random]
 
    setWord(randomWord)
    console.log(randomWord);
  }

  const handleChangeFirst = (e) =>{
    setFirstAnswer(e.target.value)
  }
  const handleChangeSecound = (e) =>{
    setSecoundAnswer(e.target.value)
  }

  const handleKeyDown = (e) =>{
    

    if(e.key === 'Enter' || e.target.type === 'submit'){
      console.log(word);
      console.log('b',firstAnswer, 'c',secoundAnswer);
      console.log(word.b === firstAnswer);
      
      if(word.b == firstAnswer & word.c == secoundAnswer){
        setCorrect(correct + 1)
      }else{
        setUncorrect(uncorrect + 1)
      }

      setFirstAnswer('')
      setSecoundAnswer('')
      toggleWord()
   
   }
   
  }

  const showAnswer = () =>{
   setFlag(!flag)
  
  }
  const showTranslate = () =>{
    setTranslate(!translate)
  }


  return (
    <div className="container">
      <Link to='/english-words'>
          <Button text={'BACK'} style={'backButton'} />
          </Link>
      <div className='workBox'>
                <div className='correct' id='correctNoumber'>
                  <h1>Correct: <span id='correctNoumber'>{correct}</span></h1>
                  </div>
                  <h1 id='numbersToMultiplication'>{word.a}</h1>
                  <h1 id='numbersToMultiplication'>{flag? word.b : ''}</h1>
                  <h1 id='numbersToMultiplication'>{flag? word.c : ''}</h1>
                  <h1 id='numbersToMultiplication'>{translate? word.d : ''}</h1>
               
                      <input 
                      onChange={handleChangeFirst}
                      onKeyDown={handleKeyDown}
                        value={firstAnswer}
                        placeholder='type your answer'
                        type="text"
                        ></input>
                        <input 
                      onChange={handleChangeSecound}
                      onKeyDown={handleKeyDown}
                        value={secoundAnswer}
                        placeholder='type your answer'
                        ></input>
                       
                        <Button className='mobileButton' handleChange={showAnswer} text={'CHECK ANSWER'} ></Button>
                        <Button className='mobileButton' handleChange={showTranslate} text={'Translate'} ></Button>
                       
                        <div className='uncorrect'>
                      <h1>Uncorrect: {uncorrect}</h1>
                      </div>
        </div>
      </div>
  )
}

export default IrregularVerbs