import getReadingTime from 'reading-time'

/**
 * Calculate reading time for a post content
 * @param content - The markdown content of the post
 * @returns Reading time information
 */
export function calculateReadingTime(content: string) {
  const readingTime = getReadingTime(content)
  const minutes = Math.max(1, Math.round(readingTime.minutes))
  
  return {
    text: `${minutes} min`,
    minutes: minutes,
    time: readingTime.time,
    words: readingTime.words
  }
}
