import React from 'react';
import { render, mount } from 'enzyme';
import App from './';


import enzyme, { shallow } from 'enzyme'
import fetchMock from 'fetch-mock-jest'

describe('App', () => {
  beforeEach(() => {

  })
  it ('is alive at start', () => {
    const app = shallow(<App />)


    
  });

  it ('changes state on click', () => {
    fetchMock.getAny({ results: 'abcdef' })
    const app = mount( <App />)
    const button = app.find('#submit')
  });
});