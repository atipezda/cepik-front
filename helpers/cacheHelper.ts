import { CarApiParams, CarRegistrationDataRowAttributes } from '~/types/api'
import { ResultStored } from '~/store/cars'

export function findCarResultinAllResults(params: CarApiParams, allResults: ResultStored[]): CarRegistrationDataRowAttributes[] | false {
  const cachedResult = allResults.find((result: ResultStored) => {
    return (
      result.dateFrom === params['data-od'] &&
      result.dateTo === params['data-do'] &&
      result.dateType === params['typ-daty'] &&
      result.voivodeship === params['wojewodztwo']
    )
  })

  if (cachedResult) {
    return cachedResult.result
  }
  return false
}
