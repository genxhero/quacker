import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import showQuack from '../queries/showQuack';

const Quack = (props) => {
    const {body} = props;

    /**
     * TODO: Check against reply to or quack_id to determine if something is a link!
     * has_at mayhaps or maybe ats can be an array of strings where
     * There's a million ways to do it but I gotta get lunch
     */
    const parseQuackString = (string) => {
        if (!string) return;
        const words = string.split(" ");
        let html = '';
        for(let i = 0; i < words.length; i++) {
            if (words[i][0] === "@" && words[i].length > 1) {
                html += '<span className="quack-text blue">' + '<a href="">' + words[i] + ' ' + '</a>' + '</span>';

            }else {
                html += '<span className="quack-text normal">' + words[i] + ' ' + '</span>';
            }
        }
        document.getElementById('quackbody').innerHTML = html;
    }

    return (
        <div>
            <div>You Quacked</div>
            <div id="quackbody">
                {parseQuackString(body)}
            </div>
        </div>
       

    )
}

export default Quack;