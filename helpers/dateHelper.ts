export function isDateToday(date: Date) {
  const today = new Date()
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
}

export function formatDateISOWTD(date: Date){
  return date.toISOString().split('T')[0].replaceAll('-','')
}

export function dayDatesDiff(date1: Date, date2: Date): number{
  const diffTime = Math.abs(Number(date2) - Number(date1));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function datesInDayRange(date1: Date, date2: Date, daysRange: number): boolean{
  return dayDatesDiff(date1,date2) < daysRange
}
