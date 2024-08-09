//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Look from "./artifacts/contracts/Lock.sol/Lock.json";

//contract address
const lookAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



function App() {

  //helper functions
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchLook() {
    if(typeof window.ethereum!== "undefined"){
     /* const provider = new ethers.providers.Web3Provider(window.ethereum);
     / const contract = new ethers.Contract(lookAddress,Look.abi,provider);
      try{
        const data = await contract.Look();
        console.log("data", data);
      }catch(error){
        console.log('Error: ', error);
      }
        */
    }
  }

  return (
    <div className="App">
      <div className="App-Header"> 
        <div className='description'>
          <h1>ZKAyni MVP</h1>
          <h3>Full stack Dapp for PSE Core Program Hackathon</h3>
        </div>
        <div className="custom-buttons">
          <button style={{backgroudColor: "green"}}>Airdrop Manager</button>
          <button style={{backgroudColor: "red"}}>Beneficiary</button> 
        </div>
      </div>       
    </div>
  );
}

export default App;
