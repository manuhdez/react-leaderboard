import React from 'react';

const Header = () => {
  const style = {
    width: '100%',
    height: 50,
    background: '#006400',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  }

  return (
    <header style={style}>
      <img
          src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
          style={{height: 35}}  />
    </header>
  )
}

export default Header;

//<h3>Freecodecamp leaderboard</h3>
