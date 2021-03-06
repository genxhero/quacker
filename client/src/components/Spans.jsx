import React from 'react';
import styles from 'draft-js';

export const UserSpan = (props) => {
    if (props.decoratedText.length > 1) {
        props.performSearch(props.decoratedText, event.which); // eslint-disable-line no-restricted-globals
    } else {
        props.killSearch();
    }
    
    return (
            <span {...props} style={{"color":"blue"}}>
             {props.children}
            </span>
    )
}

export const TagSpan = (props) => {
    return (
        <span {...props} style={styles.hashtag}>
          {props.children}
        </span>
    )
}