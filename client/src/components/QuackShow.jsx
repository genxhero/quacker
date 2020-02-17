import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import showQuack from '../queries/showQuack';
import Quack from './Quack';

const QuackShow = props => {
    const quackId = parseInt(props.match.params.quackId)
    const {loading, error, data} = useQuery(showQuack, {
        variables: { id: quackId},
      });
      if (loading) return <p id="quackbody"> Loading ...</p>;
      if (error) return <p id="quackbody">Error...</p>
      const quack = data.showQuack;
      return (
          <Quack quack={quack} />
      )
}

export default QuackShow;