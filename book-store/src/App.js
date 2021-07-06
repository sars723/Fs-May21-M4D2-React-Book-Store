
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyCarousel from './components/MyCarousel';
import fantasyBooks from "./data/fantasy.json";
import romanceBooks from "./data/romance.json"
import horrerBooks from "./data/horrer.json";
import historyBooks from "./data/history.json";

function App() {
  return (
    <div className="App">
      <MyNavBar title="BookStore"/>
      <MyJumbotron/>
    
     
      <MyCarousel books={romanceBooks} title="Romance"/>
      <MyCarousel books={fantasyBooks} title="Fantasy"/>
      <MyCarousel books={horrerBooks} title="Horrer"/>
      <MyCarousel books={historyBooks} title="Romance"/> 
       <MyFooter />
    </div>
  );
}

export default App;
