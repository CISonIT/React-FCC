import './style.css';
import Navbar from "./components/Navbar.js" 
import Place from "./components/Place.js" 
import data from "./data.js"

function App() {

  const places = data.map(place => {
    return (
      <Place 
        key={place.id}
        place={place}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {places}
    </div>
  );
}

export default App;
