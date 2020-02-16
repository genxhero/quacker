import React, {useState} from 'react';
import Quack from './Quack';
import QuackForm from './QuackForm';
import { useQuery } from '@apollo/react-hooks';
import homeFeedQuacks from '../queries/homeFeedQuacks';

/**
 * This component renders 
 */

const HomeFeed = (props) => {
    const [quacking, toggleQuackForm] = useState(false);
    const {loading, error, data} = useQuery(homeFeedQuacks, {
        variables: { id: 1},
      });
    if (loading) return <p id="quackbody"> Loading ...</p>;
    if (error) return <p id="quackbody">Error...</p>
    debugger;
    return (
        <div className="quack-feed">
            You quack me up
            <div className="col-lg">
                {}
            </div>
            <div className="new-quack-btn"onClick={() => toggleQuackForm(true)}> Quack</div>
            {quacking && <QuackForm close={() => toggleQuackForm(false)} />}
        </div>
    )
}

export default HomeFeed;