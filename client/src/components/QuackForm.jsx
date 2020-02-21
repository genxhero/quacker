import React, {useState } from 'react';
import {TagSpan, UserSpan} from './Spans';
import {usernameStrategy, tagStrategy} from '../utils/strategies';
import {Editor, EditorState, ContentState, RichUtils, CompositeDecorator, convertToRaw, convertFromRaw} from 'draft-js';
import UserSearch from './UserSearch';
import { useMutation } from '@apollo/react-hooks';
import ADD_QUACK from '../mutations/addQuack';
import homeFeedQuacks from '../queries/homeFeedQuacks';

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
        <div className={`quack-form ${isModal ? 'modal' : ''}`}>
            <p>{<span>Current User: {props.currentUser}</span>}</p>
            <Editor editorState={editorState} 
                    onChange={setEditorState}
                    keyBindingFn={handleBackspace}
                    >
                        
            </Editor>
            <button style={{"padding":"2rem", "color":"black"}}onClick={saveQuack} value="Quack">Quack</button>
            {userSearch.searching  && <UserSearch userSearch={userSearch} />}
        </div>
    )
}

export default QuackForm;

//{quack && <div dangerouslySetInnerHTML={{__html: quack}}></div>}

