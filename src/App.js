// importing react utilities
import React, { useEffect, useState } from "react";

// importing ethers to interact with smart contract
import { ethers } from "ethers";

// importing .json file to get the functions availabe in deployed smart contract
import Greeter from "./artifacts//contracts/Greeter.sol/Greeter.json";

// address of deployed smart contract
const greeterContractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";

function App() {
  // state to manage greeting value (the one in the smart contract)
  const [greeting, setGreeting] = useState("");

  // getting greeting value from the smart contract
  const getGreeting = async () => {
    // if metamask is installed or not
    if (typeof window.ethereum !== undefined) {
      // setting metamask as provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // getting contract
      const contract = new ethers.Contract(
        greeterContractAddress,
        Greeter.abi,
        provider
      );

      // calling smart contract function
      try {
        const greet = await contract.greet();

        // setting greeting value equal to the one in the smart contract
        setGreeting(greet);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  // state to manage user's input while entering new value of greeting
  const [greetingText, setGreetingText] = useState("");

  // setting new greeting value
  const setGreetingValue = async () => {
    // if metamask is installed or not
    if (typeof window.ethereum !== undefined) {
      // giving options to the user to select account to call the function (as it will cost use ethers)
      await requestAccount();

      // setting metamask as provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // getting signer as we need signer to modify the state of the smart contract
      const signer = provider.getSigner();

      // getting contract
      const contract = new ethers.Contract(
        greeterContractAddress,
        Greeter.abi,
        signer
      );

      // calling function to update the greeting value
      const transaction = await contract.setGreet(greetingText);

      // waiting for transaction to get completed
      await transaction.wait();

      // to update the greeting value on the app
      getGreeting();
    }
  };

  // utility function used in setGreetingValue function
  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  // to get the initial value of greeting when component loads
  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div className="container my-3 text-center d-flex flex-column w-25">
      <h2 className="my-2">Greeting is: {greeting}</h2>
      <input
        className="my-3 p-2 text-center"
        type="text"
        placeholder="Enter new Greeting"
        // to update the state of input when user inputs text
        onChange={(e) => {
          setGreetingText(e.target.value);
        }}
      />
      <button className="btn btn-primary my-2" onClick={setGreetingValue}>
        Set Greeting
      </button>
    </div>
  );
}

export default App;
