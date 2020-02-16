import React, {useState} from 'react';
import Quack from './Quack';
import QuackForm from './QuackForm';
import { useQuery } from '@apollo/react-hooks';

/**
 * This component renders 
 */

const HomeFeed = (props) => {
    const [quacking, toggleQuackForm] = useState(false);
    return (
        <div className="quack-feed">
            You quack me up
            <div className="new-quack-btn"onClick={() => toggleQuackForm(true)}> Quack</div>
            {quacking && <QuackForm close={() => toggleQuackForm(false)} />}
        </div>
    )
}

export default HomeFeed;