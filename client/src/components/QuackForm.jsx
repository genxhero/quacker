/**
 * 
 * Uses Mention.js, Copyright (c) 2013 Jacob Kelley https://github.com/jakiestfu/Mention.js 
 */

import React, {useState } from 'react';

const QuackForm = props => {
    const handleChange = (e) => {
        if (e.nativeEvent.data === "@") {
            e.target.style.color = "blue"
            toggleSearch(true)
        } else if (e.nativeEvent.data === " ") {
            e.target.style.color = "black"
            toggleSearch(false)
        }
        updateQuack(e.target.value)
    }

    const autoSearch = (e) => {
        console.log("searching...")
        
    }

    const [quack, updateQuack] = useState("")
    const [searching, toggleSearch] = useState(false)
    return (
        <div>
            <textarea value={quack} onChange={handleChange}>
            </textarea>
            <div>
                { searching && <span>Searching...</span>}
            </div>
        </div>
    )
}

export default QuackForm;