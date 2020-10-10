export const hackerSpeak = (words) => {
  
  return words.replace(/O/gi, 0).replace(/I/gi, 1).replace(/E/gi, 3).replace(/A/gi, 4).replace(/S/gi, 5)
}
