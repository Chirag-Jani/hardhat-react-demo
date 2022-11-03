const hre = require("hardhat");

async function main() {
  // getting 'Greeter' contract
  const Greeter = await hre.ethers.getContractFactory("Greeter");

  // deploying the contract
  const deployGreeter = await Greeter.deploy("Happy Diwali!!");

  // waiting until contract is deployed
  await deployGreeter.deployed();

  // logging the deployed contract's address (to use while interacting with the smart contract)
  console.log(`Deployed contract address: ${deployGreeter.address}`);
}

// calling the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
