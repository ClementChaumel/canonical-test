import { mockPost, mockPostNoTopic } from './../../test/__mocks__/postMock'
import { getTerm, getAuthor } from '../embedded-wp-utils'

describe('gets data correctly', () => {
  test('correctly returns the name', () => {
    expect(getTerm(mockPost._embedded, 2)).toEqual('People and culture')
  })

  test("returns undefined if the index doesn't exist", () => {
    expect(getTerm(mockPostNoTopic._embedded, 2)).toEqual(undefined)
  })

  test('validate function returns undefined and does not error if date string does not exist', () => {
    expect(getAuthor(mockPost._embedded)).toEqual({
      link: 'https://canonical.com/billy-bob',
      name: 'Billy Bob',
    })
  })
})
