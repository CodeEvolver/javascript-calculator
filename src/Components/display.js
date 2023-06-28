//import '../App.scss';
//<h2 id="output">{output}</h2>

function Display ({input, output}) {
    return (
        <div id="display">
            <h2 id={output? "output": "input"}>{output? output: input}</h2>
        </div>
    )
}

export default Display;