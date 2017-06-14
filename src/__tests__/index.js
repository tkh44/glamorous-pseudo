/* eslint-env jest */
/* eslint-disable jsx-quotes */
import React from 'react'
import renderer from 'react-test-renderer'
import { matcher, serializer } from 'jest-glamor-react'
import glamorous from 'glamorous'
import Pseudo from '../index'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('restyles', () => {
  test('renders elements with styles', () => {
    const tree = renderer
      .create(
        <Pseudo
          after={{ content: '" after"', color: 'red' }}
          before={{ content: '"before "', color: 'green' }}
          focus={{ color: 'blue' }}
          hover={{ color: 'purple' }}
          active={{ fontSize: '0.8em' }}
          visited={{ color: '#5EDA7E' }}
          display="block"
          width={300}
          textAlign="center"
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshotWithGlamor()
  })

  test('renders elements with styles', () => {
    const tree = renderer
      .create(
        <Pseudo
          after={{ content: '" after"', color: 'red' }}
          component={glamorous.H1}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshotWithGlamor()
  })

  test('renders elements with styles', () => {
    const tree = renderer
      .create(
        <Pseudo hover={{ '& div': { color: 'blue' } }} component={glamorous.H1}>
          <h1>Blue H1 on hover</h1>
        </Pseudo>
      )
      .toJSON()

    expect(tree).toMatchSnapshotWithGlamor()
  })
})
