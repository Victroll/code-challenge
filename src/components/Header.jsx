import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <section className='header'>
        <img alt='logo' src={`http://localhost:3210/assets/logo01.png`} />
      </section>
    );
  }
}

export default Header;