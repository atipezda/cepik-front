export const FIRST_REGISTER_DATE_TYPE = 1
export const LAST_REGISTER_DATE_TYPE = 2

export interface CarApiParams {
  'wojewodztwo': string,
  'data-od': string,
  'data-do'?: string,
  'typ-daty'?: typeof FIRST_REGISTER_DATE_TYPE | typeof LAST_REGISTER_DATE_TYPE
}

export interface VoivodeshipsDictRecord {
  'klucz-slownika': number,
  'wartosc-slownika': string,
  'liczba-wystapien': number
}
