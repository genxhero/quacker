import React from 'react';
import parse from 'html-react-parser';
import {withRouter} from 'react-router-dom';

/**
 * PROPS
 * 
 * quack: Object, it's the thing being quacked.
 *              {
 *                  body: String, 
 *                  user: {
 *                      firstName: String, 
 *                      lastName: String}, 
 *                  original: Quack, 
 *                  created: String
 *                }
 * layer: Integer, if 0 them it's  a quack. If 1, it's a requack
 */
const Quack = (props) => {
    //TODO: add avatarLink to user model.
    const avatarLink =  "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
    const quack = props.quack
    const {firstName, username, lastName} = quack.user;

    const parseQuackString = (string) => {
        if (!string) return;
        const words = string.split(" ");
        let html = '<div>';
        for(let i = 0; i < words.length; i++) {
            if (words[i][0] === "@" && quack.mentions.includes(words[i])) {
                html += '<span class="quack-text blue">' + `<a class="mention-link" href="/${words[i].slice(1)}">` + words[i] + ' ' + '</a>' + '</span>';

            }else {
                html += '<span class="quack-text normal">' + words[i] + ' ' + '</span>';
            }
        }
        html += '</div>'
        const element = parse(html)
        return element;
    }

    const link = `/${username}/status/${quack.id}`;
 
    return (
        <div className="quack card" onClick={() => props.history.push(link)}>
         <div className="container-fluid" width="10rem">
                <div id="quack-user-data" className="row"> 
                        <img className="rounded-circle"
                             src={avatarLink} 
                             alt={username}
                             /> 
                    <div className="col-s">
                             <div><strong>{firstName} </strong>{' '}<strong>{lastName}</strong> </div>
                        <div>{`@${username}`} </div>
                    </div>  
                </div>
                <div id="quackbody" className="card-body">
                    {parseQuackString(quack.body)}
                </div>
                {(quack.original && props.layer === 0)&& <Quack quack={quack.original} layer={1} />}
            </div>
        </div>
       
    )
}

export default withRouter(Quack);