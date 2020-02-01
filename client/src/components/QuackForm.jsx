import React, {useState } from 'react';
import {TagSpan, UserSpan} from './Spans';
import {usernameStrategy, tagStrategy} from '../utils/strategies';
import {Editor, EditorState, RichUtils, CompositeDecorator} from 'draft-js';



const QuackForm = props => {

    const performSearch = (query, lastKey) => {
        console.log("last key:", lastKey)
        if (lastKey === " ") {
            updateSearch({query: "", searching: false})
        }
        console.log(query)
        updateSearch({query: query, searching: true});
    }

    const compositeDecorator = new CompositeDecorator([
        {
          strategy: usernameStrategy,
          component: UserSpan,
          props: {performSearch: performSearch}
        },
        {
          strategy: tagStrategy,
          component: TagSpan,
        },
      ]);

    const [editorState, setEditorState] = useState(
        EditorState.createEmpty(compositeDecorator),
      );

    const [userSearch, updateSearch ] = useState({query: "", searching: false});
   

    return (
        <div>
            <Editor editorState={editorState} onChange={setEditorState}>
            </Editor>
            {userSearch.searching && <div> Searching...</div>}
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

        <div>
                { searching && <span>Searching...for {query}</span>}
            </div>
            <div>
    {          <span>Your Quack is: {quack}</span>}
            </div>

 */