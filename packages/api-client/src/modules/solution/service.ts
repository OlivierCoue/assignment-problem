import {
  Fragment_Solution_FieldsFragment,
  Query_Solution_FindManyQueryVariables,
  Query_Solution_FindManyQuery,
  Query_Solution_FindOneQueryVariables,
  Query_Solution_FindOneQuery,
  GraphQLClient,
  SolutionFindManyInput,
  SolutionFindOneInput,
  Fragment_Solution_AllFieldsFragment,
} from '../../internal'
import { CustomClientError } from '../../util/error'

import { QUERY_Solution_findMany, QUERY_Solution_findOne } from './requests.graphql'

export class SolutionService {
  static async findMany(input: SolutionFindManyInput): Promise<Fragment_Solution_FieldsFragment[]> {
    const result = await GraphQLClient.query<Query_Solution_FindManyQuery, Query_Solution_FindManyQueryVariables>({
      query: QUERY_Solution_findMany,
      variables: { input },
    })

    if (result.errors) throw new CustomClientError(result.errors)

    const {
      data: { Solution_findMany: stores },
    } = result

    if (stores === undefined) throw new Error('[Solution][findMany] failed')

    // @ts-ignore
    return stores
  }

  static async findOne(input: SolutionFindOneInput): Promise<Fragment_Solution_AllFieldsFragment> {
    const result = await GraphQLClient.query<Query_Solution_FindOneQuery, Query_Solution_FindOneQueryVariables>({
      query: QUERY_Solution_findOne,
      variables: { input },
    })

    if (result.errors) throw new CustomClientError(result.errors)

    const {
      data: { Solution_findOne: store },
    } = result

    if (store === undefined) throw new Error('[Solution][findOne] failed')

    return store
  }
}
