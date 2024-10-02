import { useEffect, useState } from 'react';
import './App.css'


function App (){
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect(()=> {
    
  })
  return(
    <div className="App">
      {console.log('Testing 123')}
    </div>)
}

export default App;