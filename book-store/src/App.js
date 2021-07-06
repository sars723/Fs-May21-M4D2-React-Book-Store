
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyCarousel from './components/MyCarousel';

function App() {
  return (
    <div className="App">
      <MyNavBar title="BookStore"/>
      <MyJumbotron/>
      <MyFooter />
      <MyCarousel/>
    </div>
  );
}

export default App;
