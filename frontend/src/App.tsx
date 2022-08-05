import { useState } from "react";
import "./App.css";
import TextBold from "./components/TextBold";
import Login from "./pages/Login";

function App() {
  const [data, setData] = useState({
    value: 2,
  });
  return (
    <div>
      {/* <button onClick={() => setData({ value: data.value + 1 })}>
        Click me
      </button> */}
      <TextBold text="hello"></TextBold>
      <Login data={data} />
    </div>
  );
}

export default App;

// API / Socket
// redux - redux thunk / redux saga
// gPRC

// blockchain: web3js / etherumjs / wallets 
