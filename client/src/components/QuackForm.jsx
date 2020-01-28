import React, {useState, useEffect} from 'react';

const QuackForm = props => {
    const handleChange = (e) => {
        debugger;

        if (e.nativeEvent.data === "@") {
            e.target.style.color = "blue"
        } else if (e.nativeEvent.data === " ") {
            e.target.style.color = "black"
        }
        updateQuack(e.target.value)
    }

    const autoSearch = (e) => {
        console.log("searching...")
        
    }

    const [quack, updateQuack] = useState("")
    return (
        <div>
            <textarea value={quack} onChange={handleChange}>
            </textarea>
        </div>
    )
}

export default QuackForm;