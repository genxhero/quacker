import React from 'react';
import Quack from './Quack';
import { useQuery } from '@apollo/react-hooks';
import homeFeedQuacks from '../queries/homeFeedQuacks';
import QuackForm from './QuackForm';

/**
 * This component renders a user's quacks as well as recent quacks from quackers 
 * that the user follows.
 * 
 * TODO: get quacks whose user_id matches the array of user ids known as "subs"
 */

const HomeFeed = (props) => {
    const {currentUser} = props;
    const {loading, error, data} = useQuery(homeFeedQuacks, {
        variables: { id: 1},
      });
    if (loading) return <p id="quackbody"> Loading ...</p>;
    if (error) return <p id="quackbody">Error...</p>
    const quacks = data.homeFeedQuacks;
    return (
        <div className="quack-feed">
            <QuackForm isModal={false} close={() => {}}/>
            <div className="col-lg">
                {quacks.map(quack => {
                    return <Quack quack={quack} key={`${quack.body}${quack.user.username}${Math.random()}`} layer={0}/> 
                 })}
            </div>
          
        </div>
    )
}

export default HomeFeed;