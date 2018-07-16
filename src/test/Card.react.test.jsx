import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Card from '../containers/Card';
import { bodyStore } from './mocks/store';
import { bodyState } from './mocks/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

const index = Math.floor(Math.random() * 10);

describe('Card', () => {
  let mountedCard;

  const card = () => {
    if (!mountedCard) mountedCard = mount(
      <Provider store={bodyStore}>
        <Card key={`card-${index}`} id={index} />
      </Provider>
    );
    return mountedCard;
  };

  beforeEach(() => {
    mountedCard = undefined;
  });

  // Elements
  it('it always renders 1 section, the title of the article (h1), the author (h2) and the excerpt (p)', () => {
    const section = card().find('section');
    expect(section.length).toBe(1);
    const h1 = section.find('h1');
    const h2 = section.find('h2');
    const p = section.find('p');
    expect(h1.length).toBe(1);
    expect(h1.first().text()).toBe(bodyState.articles[index].title);
    expect(h2.length).toBe(1);
    expect(h2.first().text()).toBe(bodyState.articles[index].author);
    expect(p.length).toBe(1);
    expect(p.first().text()).toBe(bodyState.articles[index].excerpt);
  });

  // Classes, attributes and ids
  it('always renders the main section with the class card', () => {
    const section = card().find('section');
    expect(section.find('.card').length).toBe(1);
  });
});