import { useState } from "react";

function getColor(count) {
  if (count <= 5) {
    return "curat";
  }

  if (count >= 6 && count < 12) {
    return "inchis";
  }

  if (count >= 12 && count < 15) {
    return "contaminat";
  }

  if(count >= 15 && count <22){
    return "pericol-de-sufocare";
  }

  return "pericol-de-incendiu"
}

function StadiuAer({count, className}) {
  if (count <= 5) {
    return <h1 className={className}>curat</h1>;
  }

  if (count > 5 && count < 12) {
    return <h1 className={className}>inchis</h1>;
  }

  if (count >= 12 && count < 15) {
    return <h1 className={className}>contaminat</h1>;
  }

  if(count >=15 && count < 22){
    return <h1 className={className}>periocol de sufocare</h1>;
  }
  
  return <h1 className={className}>pericol de incendiu</h1>
}

function SchimbareStadiuAer({ count, setCount }) { 
  const handleMinusClick = () => { 
    setCount(count - 1); 
  }; 
  const handlePlusClick = () => { 
    setCount(count + 1); 
  }; 

  return ( 

  <div> 
    <h1>{count}</h1> 
    <StadiuAer  className={getColor(count)} count={count}/> 
    <br/>
    <button onClick={handleMinusClick}>-</button> 
    <button onClick={handlePlusClick}>+</button> 
    <br/>
    <br/>
    <progress className={getColor(count)} value={count} max="22">{count}</progress>
  </div> 
    ); 
  }

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <SchimbareStadiuAer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
