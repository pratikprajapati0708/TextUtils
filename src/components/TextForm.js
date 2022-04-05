import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLCClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick=()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    const handlerevClick=()=>{
    let newText=text.split(" ").reverse( ).join(" ");
    setText(newText);
    props.showAlert("Text is reversed", "success");
    }

    const[text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>           
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLCClick} >Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handlerevClick} >Reverse the text</button>
            <button className="btn btn-primary" onClick={handleClearClick} >Clear</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
