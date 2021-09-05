export const FIRST_REGISTER_DATE_TYPE = 1
export const LAST_REGISTER_DATE_TYPE = 2

export interface ApiParams{
  'voivodeship': string,
  'dateFrom': string,
  'dateTo'?: string,
  'dateType'?: typeof FIRST_REGISTER_DATE_TYPE | typeof LAST_REGISTER_DATE_TYPE
}
