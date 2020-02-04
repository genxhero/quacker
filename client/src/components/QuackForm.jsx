import React, {useState } from 'react';
import {TagSpan, UserSpan} from './Spans';
import {usernameStrategy, tagStrategy} from '../utils/strategies';
import {Editor, EditorState, RichUtils, CompositeDecorator, convertToRaw, convertFromRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import UserSearch from './UserSearch';



const QuackForm = props => {

    const performSearch = (query, lastKey) => {
        // console.log("Key Code:", lastKey, "Query:", query)
        if (lastKey === 32 || lastKey === 13) {
           updateSearch({query: "", searching: false})
        } else if (query.length === 1 && lastKey === 8) {
           updateSearch({query: "", searching: false})
        }  else {
            updateSearch({query: query, searching: true});
        }
    }

    const handleBackspace = (e) => {
        if (e.keyCode === 8 && e.target.innerText.length === 2) {
            killSearch();
        }
    }

    const killSearch = () => {
        updateSearch({query: "", searching: false})
    }

    const  saveQuack =  (e) => {
        e.preventDefault();
        const html = stateToHTML(editorState.getCurrentContent());
        // const string =  JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        // const fromRaw = convertFromRaw(JSON.parse(string))
        updateQuack(html)
         debugger;
        
    }

    const [quack, updateQuack] = useState(null)


    const compositeDecorator = new CompositeDecorator([
        {
          strategy: usernameStrategy,
          component: UserSpan,
          props: {performSearch: performSearch, killSearch: killSearch}
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
            <p>{<span>Current User: {props.currentUser}</span>}</p>
            <Editor editorState={editorState} 
                    onChange={setEditorState}
                    keyBindingFn={handleBackspace}
                    >
                        
            </Editor>
            <button style={{"padding":"2rem", "color":"black"}}onClick={saveQuack} value="Quack">Quack</button>
            {userSearch.searching  && <UserSearch userSearch={userSearch} />}
            {quack && <div dangerouslySetInnerHTML={{__html: html}}></div>}
        </div>
    )
}

export default QuackForm;
