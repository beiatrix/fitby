/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome
  let cody = {
    firstName: 'Cody',
    lastName: 'Pug',
    email: 'cody@email.com',
    photo:
      'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
  }

  beforeEach(() => {
    userHome = shallow(<UserHome user={cody} />)
  })

  it('renders the user name in an h1', () => {
    expect(userHome.find('h1').text()).to.be.equal('Cody')
  })
})
