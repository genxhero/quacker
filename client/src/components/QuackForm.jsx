import React, {useState } from 'react';
import {Editor, EditorState, RichUtils, CompositeDecorator} from 'draft-js';



const QuackForm = props => {


    const [editorState, setEditorState] = useState(
        EditorState.createEmpty(),
      );

      const compositeDecorator = new CompositeDecorator([
        {
          strategy: handleStrategy,
          component: HandleSpan,
        },
        {
          strategy: hashtagStrategy,
          component: HashtagSpan,
        },
      ]);

    return (
        <div>
            <Editor editorState={editorState} onChange={setEditorState}>
            </Editor>
            <div>
                { searching && <span>Searching...for {query}</span>}
            </div>
            <div>
    {          <span>Your Quack is: {quack}</span>}
            </div>
        </div>
    )
}

export default QuackForm;

/**
 *     const handleChange = (e) => {
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
    }

    const autoSearch = (e) => {
        console.log("searching...")
        
    }


    const [quack, updateQuack] = useState("")
    const [searching, toggleSearch] = useState(false)
    const [query, updateQuery] = useState("")

 */