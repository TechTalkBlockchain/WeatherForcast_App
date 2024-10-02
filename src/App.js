import { useState } from 'react';
import './App.css'


function App (){
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })
  return(
    <div className="App">
      {console.log('Testing 123')}
    </div>)
}

export default App;