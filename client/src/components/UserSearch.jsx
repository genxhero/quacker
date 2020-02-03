import React from 'react';
import userSearch from '../queries/userSearch';
import { useQuery } from '@apollo/react-hooks';

const UserSearch = (props) => {
    const {loading, error, data} = useQuery(userSearch, {
        variables: { query: props.userSearch.query },
      });
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error...</p>
      if (data.userSearch.length === 0) return <div />
 
    return (
        <div className="user-search-results">
            {data.userSearch.map( user => {
                const link = user.avatar || "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                return (
                    <div className="user-search-card"> 
                        <div className="user-search-avatar"> 
                            <img src={link} alt={user.username}/> 
                        </div>
                        <div className="user-search-data"> 
                            <span className="user-search-name">{user.firstName} {user.lastName}</span>
                            <span>@{user.username}</span>
                        </div>
                      
                    </div>
                )
            })}
        </div>
    )
}

export default UserSearch;