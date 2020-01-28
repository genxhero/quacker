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
            updateQuery("")
            toggleSearch(false)
        }
        if (searching && e.nativeEvent.data !== "@" && e.nativeEvent.data !== " ") {
             updateQuery(`${query}${e.nativeEvent.data}`)
        }
        updateQuack(e.target.value)
        console.log(query)
    }

    const autoSearch = (e) => {
        console.log("searching...")
        
    }

    const [quack, updateQuack] = useState("")
    const [searching, toggleSearch] = useState(false)
    const [query, updateQuery] = useState("")
    return (
        <div>
            <textarea value={quack} onChange={handleChange}>
            </textarea>
            <div>
                { searching && <span>Searching...for {query}</span>}
            </div>
            <div>
                {quack}
            </div>
        </div>
    )
}

export default QuackForm;