
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
import React,{ Component } from 'react';

class App extends Component {
  state={
    query:"",
    books:fantasyBooks,
    filterdBooks:""

  }
  render(){
    return (
      <div className="App">
        <MyNavBar books={fantasyBooks}/*  searchCallback={(childSearchquery)=>this.setState({query:childSearchquery})} */ filterdBooksCallback={(childFilterdBooks)=>this.setState({filterdBooks:childFilterdBooks})}/>
        <MyJumbotron/>
      
       
        <MyCarousel books={romanceBooks} filBooks={this.state.filterdBooks} title="Romance"/>
        <MyCarousel books={fantasyBooks} searchQuery={this.state.query} title="Fantasy"/>
        <MyCarousel books={horrerBooks}  searchQuery={this.state.query} title="Horrer"/>
        <MyCarousel books={historyBooks}  searchQuery={this.state.query} title="Romance"/> 
         <MyFooter />
      </div>
    );
  }
 
}

export default App;
