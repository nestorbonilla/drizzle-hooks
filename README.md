# DRIZZLE USING REACT HOOKS
> Project example using **Drizzle**
> by **Nestor Bonilla**

This project is a DApp template that use the features of Drizzle Hooks to manage state in a smooth way to interact with the Blockchain.


## Prerequisites 
> To engage with **DRIZZLE USING REACT HOOKS** you will need the following:

* NodeJS ([https://nodejs.org/en/](https://nodejs.org/en/))
	> npm install nodejs
* Ganache([https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache))
	>npm install ganache-cli -g
* Truffle([https://www.trufflesuite.com/truffle] (https://www.trufflesuite.com/truffle))
	> npm install truffle
* Metamask (Chrome Extension) 🦊
	> Metamask is a chrome extension that helps you interact with web pages that want access to a (your) Ethereum wallet.

## Configuring Truffle
> **Truffle** is a development environment, testing framework and asset pipeline for **Ethereum**, aiming to make life as an **Ethereum** developer easier.

The project folder will contain a `truffle-config.js` file which is the configuration file, located at the root of the project directory. 
```javascript
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
```
The default configuration ships with configuration for a single development network, running on  `127.0.0.1:7545`. There are many other configuration options, you can find more details on the official website:([https://www.trufflesuite.com/docs/truffle/reference/configuration](https://www.trufflesuite.com/docs/truffle/reference/configuration)).


## Configuring Ganache 

>Ganache is a virtual blockchain which sets up 10 default Ethereum addresses, complete with private keys, and pre-loads them with 100 simulated Ether each. Ganache comes in two flavors: CLI and UI. I *recommend* UI for visibility, and simplicity 

Ganache will default to a certain Port and IP address.  **We'll be using 7545**. *To change these settings, *click* the ⚙️ icon situated at the top right of the Ganache GUI window, under **server**.* 

>**Note:** Double check the RPC Address, Port and Network ID matching with the **truffle-config.js** file in the root directory. 
>
>**⚠️ Caution:** There may be a nonce sync issue thus you may need to reset the account if you run the ÐApp multiple time across different browser sessions. To do this click the MetaMask extension Icon ( 🦊) > click on the **colourful avatar** >  go to **settings** (⚙️) > click **Advanced** > finally, **Reset Accounts**. Also refresh the page so that these changes have been updated.
>

## Configuring MetaMask 🦊

If you're entirely new to **MetaMask** I recommend quickly reading [this introduction](https://bitfalls.com/2018/02/16/metamask-send-receive-ether/).

Having configured your Truffle & Ganache settings correctly, you'll need to add a new network by clicking **`Custom RPC`**, entering the correct **`RPC SERVER URL`**, and optionally, the network name.

> **Note:** You can find the `RPC SERVER URL` just above your mnemonic key, it should read HTTP://127.0.0.1:7545.

 As mentioned above Ganache sets up 10 default Ethereum addresses, including their private keys with pre-loaded test Ether. You can import your Ganache generated accounts (assuming it's pointing at the correct network) by logging out of MetaMask and selecting `Import using account seed phrase` where you'll paste your mnemonic provided by Ganache. 
 
## Deployment
>  Assuming you have set up all of the above correctly, with a test-net in the back running on port 7545, we can continue and deploy our main contract.
>  
Use truffle to migrate the main contract `SimpleStorage.sol`. This can be done by running the following commands in the root directory of the project:

> $ truffle migrate

Then we change into the client directory by executing `cd app` and install the neccessary modules by executing the following command:
> $ npm install
>
Having successfully installed everything within the client directory, we execute `npm start` to boot up the front-end locally.

##  Unit Tests
To test with truffle you can execute the following command:
> $ truffle test

## DAPP Interface

> The user interface was developed using Truffle drizze with its new feature Drizzle Hooks, which allow us through functional components make a more understandable code management of state all through the project.

> A specific consideration this project proposes is the interaction between the blockchain and the ux withouth the need of a third party database.

> A final consideration this project propose is a workflow to interact with the blockchain through different pages managed by `react-router-dom`.