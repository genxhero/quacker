import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import showQuack from '../queries/showQuack';

const Quack = (props) => {
    const quackId = parseInt(props.match.params.quackId)
    const {loading, error, data} = useQuery(showQuack, {
        variables: { id: quackId},
      });
      if (loading) return <p id="quackbody"> Loading ...</p>;
      if (error) return <p id="quackbody">Error...</p>
    const quack = data.showQuack;

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
            if (words[i][0] === "@" && quack.mentions.includes(words[i])) {
                html += '<span className="quack-text blue">' + '<a href="">' + words[i] + ' ' + '</a>' + '</span>';

            }else {
                html += '<span className="quack-text normal">' + words[i] + ' ' + '</span>';
            }
        }
        debugger;
        document.getElementById('quackbody').innerHTML = html;
    }
    console.log(quack)
    return (
        <div>
            <div>{quack.user.userName} Quacked</div>
            <div id="quackbody">
                {parseQuackString(quack.body)}
            </div>
        </div>
       

    )
}

export default Quack;