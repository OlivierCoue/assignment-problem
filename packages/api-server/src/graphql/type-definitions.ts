import { mergeTypes } from 'merge-graphql-schemas'

import FindOptions from '../common/types/find-options.graphql'
import LanguageCode from '../common/types/language-code.graphql'
import Mock from '../modules/mock/types.graphql'
import User from '../modules/user/types.graphql'
import Role from '../modules/authorization/role/types.graphql'
import Permission from '../modules/authorization/permission/types.graphql'
import Solution from '../modules/solution/types.graphql'
import ProjectAssignment from '../modules/solution/project-assignment/types.graphql'

export const graphqlTypeDefs = mergeTypes(
  [
    // Dependencies

    // Common
    FindOptions,
    LanguageCode,
    // Modules
    User,
    Role,
    Permission,
    Mock,
    Solution,
    ProjectAssignment,
  ],
  { all: true }
)
