import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '../../components/Card'
import {
  mockPost,
  mockPostNoTopic,
  mockPostNoTopicNoTag,
} from '../__mocks__/postMock'

describe('Card component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Card post={mockPost} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const { getByText, queryByText, getByAltText } = render(
      <Card post={mockPost} />,
      {}
    )
    getByText('People and culture')
    expect(getByAltText('Post title illustration')).toHaveProperty(
      'src',
      'https://assets.ubuntu.com/v1/2eec3fd9-logo.svg'
    )
    expect(getByText('Post title').parentElement).toHaveProperty(
      'href',
      'https://canonical.com/'
    )
    expect(getByText('Billy Bob')).toHaveProperty(
      'href',
      'https://canonical.com/billy-bob'
    )
    expect(queryByText('24 August 2020')).not.toBeNull
    getByText('Articles')
  })

  it('displays the first tag if there is no topic', () => {
    const { getByText } = render(<Card post={mockPostNoTopic} />, {})

    getByText('careers')
  })

  it('displays the generic message if neither topic nor tag is present', () => {
    const { getByText } = render(<Card post={mockPostNoTopicNoTag} />, {})
    getByText('Canonical News')
  })
})
