import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';




function App() {
  return (
    <div className="App">
      <Banner/>
      <NavBar/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;
