import { formatDate } from '../date-utils'

describe('formats dates correctly', () => {
  test('validate single digit day and month formats correctly', () => {
    expect(formatDate('4-8-2021')).toEqual('8 April 2021')
  })

  test('validate double digit day and month formats correctly', () => {
    expect(formatDate('04-08-2021')).toEqual('8 April 2021')
  })

  test('validate function returns undefined and does not error if date string does not exist', () => {
    expect(formatDate(undefined)).toEqual('')
  })
})
