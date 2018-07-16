import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import EnlargedCard from '../components/EnlargedCard';
import { editModeStore, readModeStore } from './mocks/store';
import { editModeState, readModeState } from './mocks/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('EnlargedCard read mode', () => {
  let mountedEnlargedCard;

  const enlargedCard = () => {
    if (!mountedEnlargedCard) mountedEnlargedCard = mount(
      <Provider store={readModeStore}>
        <EnlargedCard article={readModeState.enlargedArticle}/>
      </Provider>
    );
    return mountedEnlargedCard;
  };

  beforeEach(() => {
    mountedEnlargedCard = undefined;
  });

  // Elements
  it('always renders a background section, an inner section and another inner section', () => {
    const sections = enlargedCard().find('section');
    expect(sections.length).toBe(3);
    const innerSections = sections.first().children().find('section');
    expect(innerSections.length).toBe(2);
    const innerInnerSections = innerSections.first().children().find('section');
    expect(innerInnerSections.length).toBe(1);
  });

  it('always renders a h1 with the title and 2 buttons inside the third section', () => {
    const section = enlargedCard().find('section').last();
    const h1 = section.find('h1');
    const buttons = section.find('button');
    expect(h1.length).toBe(1);
    expect(h1.first().text()).toBe(readModeState.enlargedArticle.title);
    expect(buttons.length).toBe(2);
  });

  it('always renders the author (h2), the content (p), if the article is published (h3) and the tags (p)', () => {
    const section = enlargedCard().find('section').at(1);
    const h2 = section.find('h2');
    const p = section.find('p');
    const h3 = section.find('h3');
    expect(h2.length).toBe(1);
    expect(h2.first().text()).toBe(readModeState.enlargedArticle.author);
    expect(p.length).toBe(2);
    expect(h3.length).toBe(1);
    expect(h3.first().text()).toBe(`${readModeState.enlargedArticle.published ? 'Actualmente publicado' : 'Pendiente de publicarse'}`);
    expect(p.first().text()).toBe(readModeState.enlargedArticle.content);
    expect(p.last().text()).toBe(`TAGS: ${readModeState.enlargedArticle.tags.join('; ')}`);
  });

  // Classes, attributes and ids
  it('always renders the sections: enlarged-card-background, card enlarged and card-header', () => {
    const sections = enlargedCard().find('section');
    expect(sections.find('.enlarged-card-background').length).toBe(1);
    expect(sections.find('.card').length).toBe(1);
    expect(sections.find('.enlarged').length).toBe(1);
    expect(sections.find('.card-header').length).toBe(1);
  });
});

describe('EnlargedCard edit mode', () => {
  let mountedEnlargedCard;

  const enlargedCard = () => {
    if (!mountedEnlargedCard) mountedEnlargedCard = mount(
      <Provider store={editModeStore}>
        <EnlargedCard article={editModeState.enlargedArticle}/>
      </Provider>
    );
    return mountedEnlargedCard;
  };

  beforeEach(() => {
    mountedEnlargedCard = undefined;
  });

  // Elements
  it('always renders a background section, an inner section and another inner section', () => {
    const sections = enlargedCard().find('section');
    expect(sections.length).toBe(3);
    const innerSections = sections.first().children().find('section');
    expect(innerSections.length).toBe(2);
    const innerInnerSections = innerSections.first().children().find('section');
    expect(innerInnerSections.length).toBe(1);
  });

  it('always renders an input with the title and 2 buttons inside the third section', () => {
    const section = enlargedCard().find('section').last();
    const input = section.find('input');
    const buttons = section.find('button');
    expect(input.length).toBe(1);
    expect(buttons.length).toBe(2);
  });

  it('always renders the author (input), the content (textarea) and the tags (input)', () => {
    const section = enlargedCard().find('section').at(1);
    const inputs = section.find('input');
    const textArea = section.find('textarea');
    expect(inputs.length).toBe(3); // Included the input in the third section
    expect(textArea.length).toBe(1);
  });

  // Classes, attributes and ids
  it('always renders the sections: enlarged-card-background, card enlarged and card-header', () => {
    const sections = enlargedCard().find('section');
    expect(sections.find('.enlarged-card-background').length).toBe(1);
    expect(sections.find('.card').length).toBe(1);
    expect(sections.find('.enlarged').length).toBe(1);
    expect(sections.find('.card-header').length).toBe(1);
  });

  it('always renders the default values in the input fields', () => {
    const section = enlargedCard().find('section').at(1);
    const inputs = section.find('input');
    const textArea = section.find('textarea');
    expect(inputs.first().prop('defaultValue')).toBe(editModeState.enlargedArticle.title);
    expect(inputs.at(1).prop('defaultValue')).toBe(editModeState.enlargedArticle.author);
    expect(inputs.last().prop('defaultValue')).toBe(editModeState.enlargedArticle.tags.join('; '));
  });
});