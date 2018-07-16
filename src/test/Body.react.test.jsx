import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Body from '../containers/Body';
import { bodyStore } from './mocks/store';
import { bodyState } from './mocks/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('Body', () => {
  let mountedBody;

  const body = () => {
    if (!mountedBody) mountedBody = mount(
      <Provider store={bodyStore}>
        <Body />
      </Provider>
    );
    return mountedBody;
  };

  beforeEach(() => {
    mountedBody = undefined;
  });

  // Elements
  it('always renders as <Card /> as store has and 1 NewArticle', () => {
    const cards = body().find('Card');
    expect(cards.length).toBe(bodyState.articles.length);
    const newArticle = body().find('NewArticle');
    expect(newArticle.length).toBe(1);
  });

  it('always renders 1 sections + 1 per card and the right amount of Card + 1 (NewArticle)', () => {
    const sections = body().find('section');
    expect(sections.length).toBe(2 + bodyState.articles.length);
  });

  // Classes, attributes and ids
  it('always renders a section with the class body and each Card with its id', () => {
    const section = body().find('section').find('.body');
    expect(section.length).toBe(1);
    const cards = body().find('Card');
    cards.forEach((card, i) => expect(card.prop('id')).toBe(i));
  });
});