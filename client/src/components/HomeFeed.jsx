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
            <button onClick={() => toggleQuackForm(true)}/>
            {quacking && <QuackForm />}
        </div>
    )
}

export default HomeFeed;