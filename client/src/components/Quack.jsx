import React from 'react';

const Quack = (props) => {
    const {body} = props;

    const parseQuackString = (string) => {
        if (!string) return;
        const words = string.split(" ");
        let html = '';
        for(let i = 0; i < words.length; i++) {
            if (words[i][0] === "@") {
                html += '<span className="quack-text blue">' + '<a href="">' + words[i] + ' ' + '</a>' + '</span>';

            }else {
                html += '<span className="quack-text normal">' + words[i] + ' ' + '</span>';
            }
        }
        document.getElementById('quackbody').innerHTML = html;
    }

    return (
        <div id="quackbody">

        </div>
    )
}

export default Quack;