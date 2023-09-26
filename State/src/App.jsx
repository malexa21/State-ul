import { useState } from "react";

//hota
//[0,5] = verde, [6,12] = mov, [12,15]= portocaliu, [>15]= rosu



function stadiuAer({count}) {
  if (count <= 5) {
    return <h1 className={stadiuAer}>Aer curat</h1>;
  }

  if (count > 5 && count < 12) {
    return <h1 className={stadiuAer}>Aer inchis</h1>;
  }

  if (count >= 12 && count < 15) {
    return <h1 className={stadiuAer}>Aer contaminat</h1>;
  }

  if(count >=15 && count < 22){
    return <h1 className={stadiuAer}>Periocol de sufocare</h1>;
  }
  
  return <h1>Pericol de incendiu</h1>
}



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    
    </div>
  );
}

export default App;
