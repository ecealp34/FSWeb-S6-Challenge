import React, {useState, useEffect} from 'react';
import { setupWorker, rest } from 'msw'
import Karakter from "./components/Karakter";
import axios from "axios"
import '../src/App.css';


const App = () => {

const [data, setData] = useState([]);
const [loaded, setLoaded] = useState(false);


const worker = setupWorker(
  axios.get('https://github.com/octocat', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Mocked response JSON body',
      }),
    )
  }),
)

worker.start()

// 2.yol
// function fetchCharacters() {
//   axios
//   .get("https://swapi.dev/api/people/")
//   .then((res) => {
//    console.log("products:", res.data);
//    setData(res.data);
//    setLoaded(true);
//   })
//   .catch((err) => {
//    setLoaded(false);
//   }) 
//   .finally(() => {
//    console.log("final")
//   });
// }

// useEffect(() => {
//  fetchCharacters();
// }, []);




  return (

    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {!loaded && <p>Loading...<span role="img" aria-label='go!'>🚀</span>!</p>}
      {loaded &&<Karakter characters={data} />}
        
    </div>
  );

}
export default App;


