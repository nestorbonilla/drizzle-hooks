import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [SimpleStorage],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
