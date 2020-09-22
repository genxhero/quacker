import React, {useState } from 'react';
import {TagSpan, UserSpan} from './Spans';
import {usernameStrategy, tagStrategy} from '../utils/strategies';
import {Editor, EditorState, ContentState, CompositeDecorator} from 'draft-js';
// import {Editor, EditorState, ContentState, RichUtils, CompositeDecorator, convertToRaw, convertFromRaw} from 'draft-js';
import UserSearch from './UserSearch';
import { useMutation } from '@apollo/react-hooks';
import ADD_QUACK from '../mutations/addQuack';
import homeFeedQuacks from '../queries/homeFeedQuacks'; //eslint-disable-line no-unused-vars
//homeFeedQuacks is absolutely being used. Lint is a liar.

/**
 * Props
 * 
 * currentUser: Object, the current user performing the quack action.
 * close: Function, to be called upon completion of the form to close the form.
 * 
 * Plan
 * 
 * Make this into a modal using Bootstrap.
 */

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
        const quack = editorState.getCurrentContent().getPlainText();
        addQuack({ variables: { body: quack}, refetchQueries: ['homeFeedQuacks'] }).then(res => {
           
            if (props.isModal) {
                props.close();
            } else {
                const resetState = EditorState.push(editorState, ContentState.createFromText(''));
                setEditorState({ resetState });
            }
        
       });      
    }


    const [quack, updateQuack] = useState(null)
    const [addQuack, { data }] = useMutation(ADD_QUACK);


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
        <div className={`quack-form-${props.isModal ? 'modal' : 'feed'}`}>
            <div>
                {props.isModal && <div className="modal-close" onClick={props.close}>X</div>}        
            </div>
            <div>
                
                <p>{<span>Current User: {props.currentUser}</span>}</p>
                <Editor editorState={editorState} 
                        onChange={setEditorState}
                        keyBindingFn={handleBackspace}
                        className={"quack-form-text"}
                        id="quack-editor"
                        >
                            
                </Editor>
            </div>
                <div>
                    <button className={"quack-save-btn"} onClick={saveQuack} value="Quack">Quack</button>
                </div>
                {userSearch.searching  && <UserSearch userSearch={userSearch} />}
        </div>
    )
}

export default QuackForm;

//{quack && <div dangerouslySetInnerHTML={{__html: quack}}></div>}

