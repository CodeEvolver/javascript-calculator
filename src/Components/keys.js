const keyData = [
    {
        id:"zero",
        value: "0",
        class: "num"
    },
    {
        id:"one",
        value:  "1",
        class: "num"
    },
    {
        id:"two",
        value: "2",
        class: "num"
    },
    {
        id:"three",
        value: "3",
        class: "num"
    },
    {
        id:"four",
        value: "4",
        class: "num"
    },
    {
        id:"five",
        value: "5",
        class: "num"
    },
    {
        id:"six",
        value: "6",
        class: "num"
    },
        {
        id:"seven",
        value: "7",
        class: "num"
    },
    {
        id:"eight",
        value: "8",
        class: "num"
    },
    {
        id:"nine",
        value: "9",
        class: "num"
    },
    {
        id:"add",
        value: "+",
        class: "sign"
    },
    {
        id:"subtract",
        value: "-",
        class: "sign"
    },
    {
        id:"multiply",
        value: "*",
        class: "sign"
    },
    {
        id:"divide",
        value: "/",
        class: "sign"
    },
    {
        id:"decimal",
        value: ".",
        class: "dot"
    },
    {
        id: "equals",
        value: "=",
        class: "equator"
    },
    {
        id: "clear",
        value: "clear",
        class: "clear"
    }
]

function Keys ({evaluate, clear, handleNum, handleComma, handleSign}) {
    return (
        <div id="keys">
            {
            keyData.map((keys, idx) =>
            <button id={keys.id} key={idx} onClick={keys.value === "="? ()=> evaluate()
            : keys.value=== "clear"? ()=> clear()
            : keys.value=== "+"||keys.value=== "-"||keys.value=== "*"||keys.value=== "/"? (event)=>handleSign(event)
            : keys.value === "."? (event)=>handleComma(event)
            : (event)=>handleNum(event)} className={keys.class} value={keys.value}>{keys.value}</button>
            )}
        </div>
    )
}

export default Keys;