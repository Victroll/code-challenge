import React from 'react';
import { mount, configure } from 'enzyme';
import { readModeStore } from './mocks/store';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import NewArticle from '../components/NewArticle';

configure({ adapter: new Adapter() });

describe('NewArticle', () => {
  let mountedNewArticle;

  const newArticle = () => {
    if (!mountedNewArticle) mountedNewArticle = mount(
      <Provider store={readModeStore}>
        <NewArticle />
      </Provider>
    );
    return mountedNewArticle;
  };

  beforeEach(() => {
    mountedNewArticle = undefined;
  });

  // Elements
  it('always renders a section with a button inside', () => {
    const section = newArticle().find('section');
    expect(section.length).toBe(1);
    const button = section.find('button');
    expect(button.length).toBe(1);
  });

  // Classes, attributes and ids
  it('always renders a section with the class new-article', () => {
    const section = newArticle().find('section');
    expect(section.find('.new-article').length).toBe(1);
  });
});