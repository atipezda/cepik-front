export function validateDataRange(_rule: any, value: string[], callback: Function): void {
  if (!value[0] || !value[1]) {
    callback(new Error('Data range validation error'))
  } else {
    callback()
  }
}
