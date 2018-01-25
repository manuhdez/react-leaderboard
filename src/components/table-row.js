import React from 'react';

const SingleRow = props => {
  const rowStyle = {textAlign: 'center', height: 45, 'margin-bottom': 20}
  const imgStyle = {height: 45, borderRadius: '50%', marginRight: 40, marginLeft: 25}
  const tdCentering = {display: 'flex', alignItems: 'center'}

  return (
    <tr style={rowStyle}>
      <td>{props.ranking}</td>
      <td style={{...tdCentering, textAlign: 'left'}}>
        <img src={props.img} style={imgStyle} />
        <a href={`https://www.freecodecamp.org/${props.username}`}
        style={{color: '#000', textDecoration: 'none'}}>
          {props.username}
        </a>
      </td>
      <td>{props.recentPoints}</td>
      <td>{props.allTimePoints}</td>
    </tr>
  )
}

export default SingleRow;
