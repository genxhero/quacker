import React from 'react';
import styles from 'draft-js';

export const UserSpan = (props) => {
    debugger;
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