import React, {useState } from 'react';
import {TagSpan, UserSpan} from './Spans';
import {usernameStrategy, tagStrategy} from '../utils/strategies';
import {Editor, EditorState, RichUtils, CompositeDecorator} from 'draft-js';
import UserSearch from './UserSearch';



const QuackForm = props => {

    const performSearch = (query, lastKey) => {
        // console.log("Key Code:", lastKey, "Query:", query)
        if (lastKey === 32 || lastKey === 13) {
           updateSearch({query: "", searching: false})
        } else if (query.length === 1 && lastKey === 8) {
            console.log("Else If Condition Satisfied")
           updateSearch({query: "", searching: false})
        }  else {
            updateSearch({query: query, searching: true});
        }
    }

    const handleBackspace = (e) => {
        console.log(e.keyCode)
    }

    const killSearch = () => {
        updateSearch({query: "", searching: false})
    }

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
                    keyBindingFn={handleBackspace}>
                        
            </Editor>
            {(userSearch.searching && userSearch.query.length > 1 ) && <UserSearch userSearch={userSearch} />}
        </div>
    )
}

export default QuackForm;
