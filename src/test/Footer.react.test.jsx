import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Footer from '../components/Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  let mountedFooter;

  const footer = () => {
    if (!mountedFooter) mountedFooter = mount(<Footer />);
    return mountedFooter;
  };

  beforeEach(() => {
    mountedFooter = undefined;
  });

  // Elements
  it('always renders sections nested', () => {
    const sections = footer().find('section');
    expect(sections.length).toBe(2);
    const innerSection = sections.first().children().find('section');
    expect(innerSection.length).toBeGreaterThanOrEqual(1);
  });

  it('always renders a title (h1) and some links (a) inside each inner section', () => {
    footer().find('section').first().children()
    .forEach(child => {
      const title = child.find('h1');
      const links = child.find('a');
      expect(title.length).toBe(1);
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  // Classes, attributes and ids
  it(`always renders a section with the class 'footer'`, () => {
    const section = footer().find('section').first();
    expect(section.hasClass('footer')).toBeTruthy();
  });

  it(`always renders some inner sections with the class 'flex-column'`, () => {
    footer().find('section').first().children()
    .forEach(section => expect(section.hasClass('flex-column')).toBeTruthy());
  });

  it('always renders some links (a) inside each inner section with href', () => {
    footer().find('section').first().children()
    .forEach(child => {
      child.find('a')
      .forEach(link => expect(link.prop('href').match(/https?/g)).toBeTruthy());
    });
  });
});