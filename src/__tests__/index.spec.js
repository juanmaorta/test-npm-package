/* global expect, describe, it */
import React from 'react'
import { shallow } from 'enzyme'

import MyComponent from '../index'

describe('MyComponent snapshots', () => {
  it('should match for MyComponent component', () => {
    const wrapper = shallow(
      <MyComponent />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
