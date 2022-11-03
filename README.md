# Sample Hardhat + ReactJS Project

## Step by Step process

npm install hardhat
npm install ethers @nomicfoundation/hardhat-toolbox
npx hardhat init (to initialize initial code - select 'create simple javascript project')

- specify the configuration in 'hardhat.config.js' file
- write your smart contract under the 'contract' folder
- write script to deploy the contract under the 'scripts' folder

- npx hardhat compile (to compile the smart contract)
- npx hardhat node (to run the local blockchain in order to deploy our smart contract and later interact with it)
- npx hardhat test (to test the smart contract before deploying - ignore for this project)

## Now let's create the frontend before deploying our smart contract

- delete the 'README.md' file
  (otherwise it will cause an error while trying to create a react app as it will also create a README.md file and then both with clash with each other)
- open the terminal and write, 'npx create-react-app <app-name>' to get the initial boiler plate code ready
- now, we can deploy the contract (note that we have to set the 'artifacts' path before deployment - see 'hardhat.config.js' file)
- run 'npx hardhat run 'script/deploy.js'
- It will print the deployed address
  (keep that safe as we are going to use it in 'App.js' file under 'src' folder)
- Now, we can create the frontend and call smart contract functions from frontend
  (code and instructions available in 'App.js' fild under 'src' folder)
- For the design purpose, I have used Bootstrap which is included via link in 'index.html' file under 'public' folder.
  (just copy and paste this in your index.html file)
  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
