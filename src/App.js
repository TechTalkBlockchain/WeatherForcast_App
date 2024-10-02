import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App (){
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect(()=> {
    fetchData()

    }, [])
  
    const fetchData = async (city) => {
    try {
      const APIKEY = process.env.REACT_APP_API_KEY

      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'jos'}&appid=${APIKEY}&units=metric`)
      await setAllData ({
        city: result.data.name,
        country:result.data.sys.country,
        temperature:result.data.main.temp
      })
    } catch (e){
      console.log ('API not Loaded Correctly')
    }
  }
    

  return(

    <main>
    <div className="App">
      {console.log('1. Testing For: Successful Deployment', 
        '2. Test for fetching WeatherAPI (Country, City, Weather)',
         allData.country, allData.city, allData.temperature)}
    </div>
    <section>
      <h1> {allData.city}</h1>
      <h1>{allData.country}</h1>
      <h1> Temperature <br/>{allData.temperature}</h1>

    </section>
    </main>
    );
}

export default App;