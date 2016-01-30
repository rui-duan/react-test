import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ArticleArea from '../../components/ArticleArea'

function setup(value = 0) {
  const actions = {
    more: expect.createSpy()
  }
  const component = TestUtils.renderIntoDocument(
    <ArticleArea articleLimit={articleLimit} {...actions} />
  )
  return {
    component: component,
    actions: actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button'),
    p: TestUtils.findRenderedDOMComponentWithTag(component, 'p')
  }
}

describe('ArticleArea component', () => {

  it('more button should display 3 more articles', (done) => {
    const { buttons, actions } = setup()
    TestUtils.Simulate.click(buttons[3])
    setTimeout(() => {
      expect(actions.more).toHaveBeenCalled()
      done()
    }, 1000)
  })
})
