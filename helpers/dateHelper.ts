export function isDateToday(date: Date) {
  const today = new Date()
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
}

export function formatDateISOWTD(date: Date){
  return date.toISOString().split('T')[0].replaceAll('-','')
}
