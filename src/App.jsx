import {BrowserRouter, Route, Routes } from 'react-router-dom'

import PolishToEnglish from './PolishToEnglish'
import EnglishToPolsih from './EnglishToPolsih'
import IrregularVerbs from './IrregularVerbs'


import './App.css'
import HomePage from './HomePage'

function App() {

  


  return (
      
   
<BrowserRouter>
     <Routes>
     <Route path='/english-words' element={<HomePage/>}></Route>
        <Route path='/PolishToEnglish' element={<PolishToEnglish/>}></Route>
        <Route path='/EnglishToPolsih' element={<EnglishToPolsih/>}></Route>
        <Route path='/IrregularVerbs' element={<IrregularVerbs/>}></Route>
     </Routes>
    </BrowserRouter>
    
    
     
      
  )
}

export default App
