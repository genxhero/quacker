import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import showQuack from '../queries/showQuack';
import parse from 'html-react-parser';

/**
 * This component needs to be split into two:
 * 1) The "show page" which handles the querying
 * 2) The Quack itself which just has data.
 */

const Quack = (props) => {
    const quackId = parseInt(props.match.params.quackId)
    const {loading, error, data} = useQuery(showQuack, {
        variables: { id: quackId},
      });
      if (loading) return <p id="quackbody"> Loading ...</p>;
      if (error) return <p id="quackbody">Error...</p>
    const quack = data.showQuack;
    const {username, firstName, lastName} = quack.user;
       //TODO: add avatarLink to user model.
    const avatarLink =  "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"

    /**
     * TODO: Check against reply to or quack_id to determine if something is a link!
     * has_at mayhaps or maybe ats can be an array of strings where
     * There's a million ways to do it but I gotta get lunch
     */

    const parseQuackString = (string) => {
        if (!string) return;
        const words = string.split(" ");
        let html = '<div>';
        for(let i = 0; i < words.length; i++) {
            if (words[i][0] === "@" && quack.mentions.includes(words[i])) {
                html += '<span className="quack-text blue">' + '<a href="">' + words[i] + ' ' + '</a>' + '</span>';

            }else {
                html += '<span className="quack-text normal">' + words[i] + ' ' + '</span>';
            }
        }
        html += '</div>'
        const element = parse(html)
        return element;
        // document.getElementById('quackbody').innerHTML = html;
    }
 
    return (
        <div className="card">
         <div className="container-fluid" width="10rem">
                <div id="quack-user-data" className="row"> 
                        <img className="rounded-circle"
                             src={avatarLink} 
                             alt={username}
                             /> 
                    <p className="col-s">
                        <p><strong>{firstName} </strong>{' '}<strong>{lastName}</strong></p>
                        <div>{`@${username}`} </div>
                    </p>  
                </div>
                <p id="quackbody" className="card-body">
                    {parseQuackString(quack.body)}
                </p>
            </div>
        </div>
       
        
       

    )
}

export default Quack;