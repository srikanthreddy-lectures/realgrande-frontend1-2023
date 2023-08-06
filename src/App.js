import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import {Routes,Route} from 'react-router-dom';
import SearchedHouse from './components/SearchedHouse';
import axios from 'axios'; //https://www.npmjs.com/package/axios
import Login from './components/Login';
import SignUp from './components/SignUp';
import InquiriesList from './components/InquiriesList';


function App() {


  let [allHouses,setAllHouses] = useState([]);

  // console.log(process.env.REACT_APP_LINKTOBACKEND);
  /*
  getting data from local json file
  */

  // useEffect( () => {
  //   async function getHousesInfo(){
  //     let resp = await fetch('houses.json');
  //     let data = await resp.json();
  //     console.log(data);
  //     setAllHouses(data);
  //   }
  //   getHousesInfo();
  // },[]);


  //getting data from remote DB using axios
useEffect( ()=>{
  async function getHousesInfo(){
      try {
        // const response = await axios.get('http://localhost:3002/');
        const response = await axios.get(process.env.REACT_APP_LINKTOBACKEND);
        let data = await response.data;
        //console.log(data);
        setAllHouses(data);
      } catch (error) {
        console.error(error);
      }
    }
   getHousesInfo();
    
},[]);

console.log("role in home page is "+localStorage.getItem('role'));
  
  return (
    <div className="App">
      {/* <h1> Hello World!</h1> */}
      <Header/>
      <SearchFilter houses={allHouses}/>
      

{/* Routing */}
    <Routes>
      <Route path ="/" element={<House houses={allHouses}/>} />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/signup" element={<SignUp/>} />
      <Route path ="/inquiries" element={<InquiriesList/>} />
      <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
      <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
    </Routes>
    </div>
  );




}


export default App;


