import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Header from '../components/Header';
import { ASSETS_DIR } from './constants/constants';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let mountedHeader;

  const header = () => {
    if (!mountedHeader) mountedHeader = mount(<Header />);
    return mountedHeader;
  };

  beforeEach(() => {
    mountedHeader = undefined;
  });

  // Elements
  it('always renders a section', () => {
    const section = header().find('section');
    expect(section.length).toBe(1);
  });

  it('always renders an image inside a section', () => {
    const img = header().find('section').find('img');
    expect(img.length).toBe(1);
  });

  // Classes, attributes and ids
  it('always renders a section with the class \'header\'', () => {
    const section = header().find('section');
    expect(section.hasClass('header')).toBeTruthy();
  });

  it(`always renders an img with alt='logo' and src including '${ASSETS_DIR}'`, () => {
    const img = header().find('section').find('img');
    expect(img.prop('alt')).toBe('logo');
    expect(img.prop('src').includes(ASSETS_DIR)).toBeTruthy();
  });
});