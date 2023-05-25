import './App.css';
import NavBar from './components/Navbar/navBar';
import Banner from './components/Banner/banner';
import Footer from './components/Footer/footer';
import RowPost from './components/RowPost/RowPost';
import { ComedyMovies, Documentaries, HorrorMovies, RomanceMovies, action, originals } from './constants/constants';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'></RowPost>
      <RowPost url={action} title='Action' isSmall></RowPost>
      <RowPost url={ComedyMovies} title='comedy' isSmall></RowPost>
      <RowPost url={HorrorMovies} title='horror' isSmall></RowPost>
      <RowPost url={RomanceMovies} title='Romantic' isSmall></RowPost>
      <RowPost url={Documentaries} title='Documentary' isSmall></RowPost>
      <Footer/>
    </div>
  );
} 

export default App;
 