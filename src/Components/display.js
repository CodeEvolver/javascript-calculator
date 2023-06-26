//import '../App.scss';

function Display ({input, output}) {
    return (
        <div id="display">
            <h2 id="input">{input}</h2>
            <h2 id="output">{output}</h2>
        </div>
    )
}

export default Display;