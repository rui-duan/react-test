import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ArticleArea from './components/ArticleArea'
import articleArea from './reducers'

const store = createStore(articleArea)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
  <ArticleArea articleLimit={store.getState()} more={() => store.dispatch(({ type: 'MORE' }))}/>,
  rootEl
  )
}

render()
store.subscribe(render)
