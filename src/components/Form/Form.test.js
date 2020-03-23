import React from 'react';
// import Adapter from 'enzyme-adapter-react-15'
import App from '../App';


import enzyme, { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock-jest'
import waitforExpect from 'wait-for-expect'

describe('App', () => {
  beforeEach(() => {
    fetchMock.restore();
  })
  // it ('is alive at start', () => {
  //   const app = shallow(<App />)
  // });

  it ('changes state on click', async () => {
    fetchMock.any({ results: 'abcdef' })
    const app = mount(<App />)
    const button = app.find('#submitButton')
    button.simulate('click')

    await waitforExpect(() => {
      expect(app.state('results')).toEqual('abcdef')
    })
  });
});