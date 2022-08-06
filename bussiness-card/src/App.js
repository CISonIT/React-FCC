import './styles.css';
import About from "./components/About.js"
import Info from "./components/Info.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
