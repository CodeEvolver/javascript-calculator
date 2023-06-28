import './App.scss';
import Display from './Components/display.js';
import Keys from './Components/keys.js';
import {useState, useEffect} from 'react';

function App() {
  const [input, setInput] = useState({
    num:"0",
    sign:[],
    display:"0"
  });
  const [output, setOutput] = useState("");
  
  const handleNum = (event) =>{
    setInput({
      ...input,
      num: input.num==="0" && event.target.className ==="num"? event.target.value
      : input.num.concat(event.target.value),
      display:output !== ""? event.target.value
      : input.display==="0" && event.target.className ==="num"? event.target.value
      : input.display.concat(event.target.value)
    })
    setOutput("");
  }
  const handleComma = (event)=> {
    setInput({
      ...input,
      num: !input.num.includes(".")? input.num.concat(event.target.value): input.num,
      display: !input.num.includes(".")? input.display.concat(event.target.value): input.display
    })
    
  }
  const handleSign=(event)=> {
    setInput({
      ...input,
      num:"0",
      sign: input.display !== "0"? event.target.value
      :input.sign,
      display:output !== ""? String(output).concat(event.target.value) :input.display !== "0"? input.display.concat(event.target.value): input.display
    })
    setOutput("");
    //console.log(input.num, input.sign, input.display);
  }
  const clearDisplay = () => {
    setInput({num:"0", sign:null, display:"0"});
    setOutput("");
    //console.log(input.display);
  }

  const evaluateInput = () => { 
    let values = input.display.split(/([+\-*/])/).filter((e)=> e !== '');
    let result;
    
    for (let i=0; i< values.length;i++) {
      if(i===0) {
        result= Number(values[i]);
      } else {
        let isDigit = Number(values[i+1]);
        let nextIsDigit = Number(values[i+2]);
        switch(values[i]) {
          case "+":
            result += Number(isDigit? values[i+1]: values[i+1] === "-" && nextIsDigit? Number(-values[i+2]): 0);
            break;
          case "/":
            result /= Number(isDigit? values[i+1]: values[i+1] === "-" && nextIsDigit? Number(-values[i+2]): 1);
            break;          
          case "*":
            result *= Number(isDigit? values[i+1] : values[i+1] === "-" && nextIsDigit? Number(-values[i+2]): 1);
            break;
           case "-":
            result -= Number(isDigit && Number(values[i-1])? values[i+1]: values[i+1] === "-" && nextIsDigit? Number(-values[i+2]): 0);
            break;
        }
      }
    }
    //console.log(values, result);
    setOutput(result);
  }

  /*useEffect(
    () => console.log(input.num, input.sign, input.display), [input]
  )*/

  return (
    <div id="web">
      <div id="calculator">
      <Display input={input.display} output={output}/>
        <Keys evaluate = {()=>evaluateInput()} clear = {()=>clearDisplay()} handleNum ={(event)=>handleNum(event)} handleComma ={(event)=>handleComma(event)} handleSign =  {(event)=>handleSign(event)}/>
      </div>
    </div>
  );
}

export default App;
