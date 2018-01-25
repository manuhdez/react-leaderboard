import React from 'react';

const AppFooter = () => {
  const style = {
    width: '100%',
    height: 50,
    backgroundColor: '#006400',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <footer style={style}>
      <p>Built by
        <a href="https://github.com/manuhdez" target='blank'>  Manu Hdez</a>
      </p>
    </footer>
  )
}

export default AppFooter;
