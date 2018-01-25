import React from 'react';
import SingleRow from './table-row'

const Table = (props) => {
  const filterStyle = {color: '#fff', textDecoration: 'none' }

  return (
    <table>
      <tr className="table-header">
        <th className="table-col-1">#</th>
        <th className="table-header-col-3">Username</th>
        <th className="table-header-col-2">
          <a  href="#"
              name="recent"
              style={filterStyle}
              onClick={props.handleClick} >
              Last 30 days{props.recentMark}</a>
        </th>
        <th className="table-header-col-2">
          <a  href="#"
              name="allTime"
              style={filterStyle}
              onClick={props.handleClick} >
              All time{props.allTimeMark}</a>
        </th>
      </tr>
      {
        props.userData.map( (user, index) => {
          return (
            <SingleRow
            ranking={index + 1}
            username={user.username}
            img={user.img}
            recentPoints={user.recent}
            allTimePoints={user.alltime}
             />
          )
        })
      }
    </table>
  );
}


export default Table;
