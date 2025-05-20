import React, {useState}  from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClrClick = ()=> {
        console.log("clear text clicked");
        setText("");
        props.showAlert("All the text is cleared!", "success");
    }

    // copy text function
    // const handleCopy = () => {
    //     let textArea = document.getElementById("myBox");
    //     textArea.select();
    //     navigator.clipboard.writText(textArea.value);
    // }

    // Remove Extra Space
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // Function to make all the words first letter capital
    const capitalizeFirstLetter = () => {
        let newText = text.split(" ").map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
        setText(newText);
        
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>                
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={capitalizeFirstLetter}>Capitalize First Letter</button>
                <button className="btn btn-danger mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-secondary mx-2" onClick={handleClrClick}>Clear text</button>
                
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split("").length} minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textarea above to preview'}</p>
            </div>
        </>
    )
}


