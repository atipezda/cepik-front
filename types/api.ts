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

export interface CarRegistrationDataRowAttributes{
  "data-pierwszej-rejestracji-w-kraju": string
  "kategoria-pojazdu": string
  "marka": string
  "masa-wlasna": number
  "model": string
  "pochodzenie-pojazdu": string
  "pojemnosc-skokowa-silnika": null | number
  "rodzaj-paliwa": null | string
  "rodzaj-pojazdu": "PRZYCZEPA SPECJALNA"
  "rok-produkcji": "FABRYCZNY"
  "typ": "---"
  "wariant": "---"
  "wojewodztwo-kod": "14"
}
