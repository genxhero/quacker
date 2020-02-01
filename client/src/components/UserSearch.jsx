import React, {useState, useEffect} from 'react';
import userSearch from '../queries/userSearch';
import { useQuery } from '@apollo/react-hooks';

const UserSearch = (props) => {
    const {loading, error, data} = useQuery(userSearch, {
        variables: { query: props.userSearch.query },
      });
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error...</p>

    //   if (data.userSearch.length === 0) return <div />
    console.log(data.userSearch)
    return (
        <div>
            {data.userSearch.map( user => {
                return (
                    <div> 
                        <span>user.username</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UserSearch;