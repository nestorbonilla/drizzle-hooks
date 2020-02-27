import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import drizzleOptions from "./drizzleOptions";
import DrizzleLoader from './DrizzleLoader';
import DappComponent from './DappComponent';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

function App () {
    return (
      <DrizzleProvider drizzle={drizzle}>
        <DrizzleLoader>
          <DappComponent />
        </DrizzleLoader>
      </DrizzleProvider>
    );
  }

export default App;
