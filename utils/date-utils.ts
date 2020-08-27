export const formatDate = (date: string): string => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(Date.parse(date))
  } catch {
    return ''
  }
}
