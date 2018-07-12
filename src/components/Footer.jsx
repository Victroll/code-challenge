import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <section className='footer'>
        <section className='about flex-column'>
          <h1>Sobre mí</h1>
          <a href='https://www.linkedin.com/in/v%C3%ADctor-guti%C3%A9rrez-ba361359/'>
            <i className="fab fa-linkedin" />
          </a>
          <a href='https://github.com/Victroll'>
            <i className="fab fa-github" />
          </a>
        </section>
      </section>
    );
  }
}

export default Footer;