import React from 'react';
import styles from 'draft-js';

export const UserSpan = (props) => {
    console.log(props.contentState)
    return (
            <span {...props} style={styles.handle}>
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