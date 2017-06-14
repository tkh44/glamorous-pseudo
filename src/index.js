import { createElement } from 'react'
import glamorous from 'glamorous'

export default function Pseudo ({
  active,
  after,
  before,
  hover,
  focus,
  visited,
  css,
  component: Component = glamorous.Div,
  ...rest
}) {
  const cssProp = [
    css,
    {
      ':active': active,
      ':after': after,
      ':before': before,
      ':focus': focus,
      ':hover': hover,
      ':visited': visited
    }
  ]
  return createElement(Component, { ...rest, css: cssProp })
}
