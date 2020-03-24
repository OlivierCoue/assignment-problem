export type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export enum AccountStatus {
  PendingActivation = 'PENDING_ACTIVATION',
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}


/** ISO 639-1 language code */
export enum LanguageCode {
  /** English */
  En = 'en',
  /** French */
  Fr = 'fr'
}

export type Mutation = {
   __typename?: 'Mutation',
  Mock_createMock?: Maybe<Scalars['Boolean']>,
  Solution_compute: Solution,
  Solution_createOne: Solution,
  Solution_updateOne: Solution,
  Solution_deleteOne: Scalars['Boolean'],
  User_register: User,
  User_createOne: User,
  User_createMany: Array<Maybe<User>>,
  User_updateOne: User,
  User_updateMany: Array<Maybe<User>>,
  User_deleteOne: Scalars['Boolean'],
  User_deleteMany: Array<Maybe<Scalars['Boolean']>>,
  User_activateAccount: Scalars['Boolean'],
  User_sendPasswordResetToken: Scalars['Boolean'],
  User_setPasswordFromPasswordResetToken: Scalars['Boolean'],
  User_sendVerifyEmailToken: Scalars['Boolean'],
  User_sendActivateAccountToken: Scalars['Boolean'],
  User_verifyEmail: Scalars['Boolean'],
  Role_createOne: Role,
  Role_createMany: Array<Maybe<Role>>,
  Role_updateOne: Role,
  Role_updateMany: Array<Maybe<Role>>,
  Role_deleteOne: Scalars['Boolean'],
  Role_deleteMany: Array<Maybe<Scalars['Boolean']>>,
  ProjectAssignment_createOne: ProjectAssignment,
  ProjectAssignment_updateOne: ProjectAssignment,
  ProjectAssignment_deleteOne: Scalars['Boolean'],
};


export type MutationSolution_ComputeArgs = {
  computeInput: SolutionComputeInput
};


export type MutationSolution_CreateOneArgs = {
  createInput: SolutionCreateInput
};


export type MutationSolution_UpdateOneArgs = {
  updateInput: SolutionUpdateInput
};


export type MutationSolution_DeleteOneArgs = {
  deleteInput: SolutionDeleteInput
};


export type MutationUser_RegisterArgs = {
  createInput: UserCreateInput
};


export type MutationUser_CreateOneArgs = {
  createInput: UserCreateInput
};


export type MutationUser_CreateManyArgs = {
  createInputs: Array<Maybe<UserCreateInput>>
};


export type MutationUser_UpdateOneArgs = {
  updateInput: UserUpdateInput
};


export type MutationUser_UpdateManyArgs = {
  updateInput: Array<Maybe<UserUpdateInput>>
};


export type MutationUser_DeleteOneArgs = {
  deleteInput: UserDeleteInput
};


export type MutationUser_DeleteManyArgs = {
  deleteInputs: Array<Maybe<UserDeleteInput>>
};


export type MutationUser_ActivateAccountArgs = {
  userActivateAccountInput?: Maybe<UserActivateAccountInput>
};


export type MutationUser_SendPasswordResetTokenArgs = {
  email?: Maybe<Scalars['String']>
};


export type MutationUser_SetPasswordFromPasswordResetTokenArgs = {
  passwordResetInput?: Maybe<UserPasswordResetInput>
};


export type MutationUser_SendVerifyEmailTokenArgs = {
  uuid?: Maybe<Scalars['String']>
};


export type MutationUser_SendActivateAccountTokenArgs = {
  uuid?: Maybe<Scalars['String']>
};


export type MutationUser_VerifyEmailArgs = {
  userVerifyEmailInput?: Maybe<UserVerifyEmailInput>
};


export type MutationRole_CreateOneArgs = {
  createInput: RoleCreateInput
};


export type MutationRole_CreateManyArgs = {
  createInputs: Array<Maybe<RoleCreateInput>>
};


export type MutationRole_UpdateOneArgs = {
  updateInput: RoleUpdateInput
};


export type MutationRole_UpdateManyArgs = {
  updateInputs: Array<Maybe<RoleUpdateInput>>
};


export type MutationRole_DeleteOneArgs = {
  deleteInput: RoleDeleteInput
};


export type MutationRole_DeleteManyArgs = {
  deleteInputs: Array<Maybe<RoleDeleteInput>>
};


export type MutationProjectAssignment_CreateOneArgs = {
  createInput: ProjectAssignmentCreateInput
};


export type MutationProjectAssignment_UpdateOneArgs = {
  updateInput: ProjectAssignmentUpdateInput
};


export type MutationProjectAssignment_DeleteOneArgs = {
  deleteInput: ProjectAssignmentDeleteInput
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Permission = {
   __typename?: 'Permission',
  uuid: Scalars['String'],
  name?: Maybe<PermissionNames>,
};

export enum PermissionNames {
  SolutionCreateAny = 'SOLUTION_CREATE_ANY',
  SolutionReadAny = 'SOLUTION_READ_ANY',
  SolutionUpdateAny = 'SOLUTION_UPDATE_ANY',
  SolutionDeleteAny = 'SOLUTION_DELETE_ANY',
  SolutionCreateOwn = 'SOLUTION_CREATE_OWN',
  SolutionReadOwn = 'SOLUTION_READ_OWN',
  SolutionUpdateOwn = 'SOLUTION_UPDATE_OWN',
  SolutionDeleteOwn = 'SOLUTION_DELETE_OWN',
  UserCreateAny = 'USER_CREATE_ANY',
  UserReadAny = 'USER_READ_ANY',
  UserUpdateAny = 'USER_UPDATE_ANY',
  UserDeleteAny = 'USER_DELETE_ANY',
  UserCreateOwn = 'USER_CREATE_OWN',
  UserReadOwn = 'USER_READ_OWN',
  UserUpdateOwn = 'USER_UPDATE_OWN',
  UserDeleteOwn = 'USER_DELETE_OWN',
  Default = 'DEFAULT',
  RoleCreateAny = 'ROLE_CREATE_ANY',
  RoleReadAny = 'ROLE_READ_ANY',
  RoleUpdateAny = 'ROLE_UPDATE_ANY',
  RoleDeleteAny = 'ROLE_DELETE_ANY',
  RoleCreateOwn = 'ROLE_CREATE_OWN',
  RoleReadOwn = 'ROLE_READ_OWN',
  RoleUpdateOwn = 'ROLE_UPDATE_OWN',
  RoleDeleteOwn = 'ROLE_DELETE_OWN',
  ProjectAssignmentCreateAny = 'PROJECT_ASSIGNMENT_CREATE_ANY',
  ProjectAssignmentReadAny = 'PROJECT_ASSIGNMENT_READ_ANY',
  ProjectAssignmentUpdateAny = 'PROJECT_ASSIGNMENT_UPDATE_ANY',
  ProjectAssignmentDeleteAny = 'PROJECT_ASSIGNMENT_DELETE_ANY',
  ProjectAssignmentCreateOwn = 'PROJECT_ASSIGNMENT_CREATE_OWN',
  ProjectAssignmentReadOwn = 'PROJECT_ASSIGNMENT_READ_OWN',
  ProjectAssignmentUpdateOwn = 'PROJECT_ASSIGNMENT_UPDATE_OWN',
  ProjectAssignmentDeleteOwn = 'PROJECT_ASSIGNMENT_DELETE_OWN'
}

export type ProjectAssignment = {
   __typename?: 'ProjectAssignment',
  uuid?: Maybe<Scalars['String']>,
  solution?: Maybe<Solution>,
  projectName?: Maybe<Scalars['String']>,
  studentOneEmail?: Maybe<Scalars['String']>,
  studentTwoEmail?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type ProjectAssignmentCreateInput = {
  solutionUuid: Scalars['String'],
  projectName: Scalars['String'],
  studentOneEmail: Scalars['String'],
  studentTwoEmail: Scalars['String'],
};

export type ProjectAssignmentDeleteInput = {
  uuid: Scalars['String'],
};

export type ProjectAssignmentFindManyInput = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<ProjectAssignmentOrderByInput>,
  where?: Maybe<ProjectAssignmentSearchFieldsInput>,
};

export type ProjectAssignmentFindOneInput = {
  where?: Maybe<ProjectAssignmentSearchFieldsInput>,
};

export type ProjectAssignmentOrderByInput = {
  name?: Maybe<OrderByEnum>,
};

export type ProjectAssignmentSearchFieldsInput = {
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ProjectAssignmentUpdateInput = {
  uuid: Scalars['String'],
  solutionUuid?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  Solution_findOne?: Maybe<Solution>,
  Solution_findMany: Array<Maybe<Solution>>,
  User_getCurrent?: Maybe<User>,
  User_findOne?: Maybe<User>,
  User_findMany: Array<Maybe<User>>,
  User_findManyByPermission: Array<Maybe<User>>,
  User_getActivationTokenData?: Maybe<UserActivationTokenData>,
  User_getResetPasswordTokenData?: Maybe<Scalars['String']>,
  Role_findOne?: Maybe<Role>,
  Role_findMany: Array<Maybe<Role>>,
  ProjectAssignment_findOne?: Maybe<ProjectAssignment>,
  ProjectAssignment_findMany: Array<Maybe<ProjectAssignment>>,
};


export type QuerySolution_FindOneArgs = {
  findOneInput: SolutionFindOneInput
};


export type QuerySolution_FindManyArgs = {
  findManyInput: SolutionFindManyInput
};


export type QueryUser_FindOneArgs = {
  findOneInput: UserFindOneInput
};


export type QueryUser_FindManyArgs = {
  findManyInput: UserFindManyInput
};


export type QueryUser_FindManyByPermissionArgs = {
  input: UserFindManyByPermissionInput
};


export type QueryUser_GetActivationTokenDataArgs = {
  token: Scalars['String']
};


export type QueryUser_GetResetPasswordTokenDataArgs = {
  token: Scalars['String']
};


export type QueryRole_FindOneArgs = {
  findOneInput: RoleFindOneInput
};


export type QueryRole_FindManyArgs = {
  findManyInput: RoleFindManyInput
};


export type QueryProjectAssignment_FindOneArgs = {
  findOneInput: ProjectAssignmentFindOneInput
};


export type QueryProjectAssignment_FindManyArgs = {
  findManyInput: ProjectAssignmentFindManyInput
};

export type Role = {
   __typename?: 'Role',
  uuid: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  permissionNames?: Maybe<Array<Maybe<PermissionNames>>>,
  usersCount: Scalars['Int'],
};

export type RoleCreateInput = {
  name: Scalars['String'],
  permissions: Array<Maybe<PermissionNames>>,
};

export type RoleDeleteInput = {
  uuid: Scalars['String'],
};

export type RoleFindManyInput = {
  order?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  where?: Maybe<RoleSearchFieldsInput>,
};

export type RoleFindOneInput = {
  where?: Maybe<RoleSearchFieldsInput>,
};

export type RoleOrderByInput = {
  name?: Maybe<OrderByEnum>,
};

export type RoleSearchFieldsInput = {
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type RoleSearchManyInput = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
};

export type RoleUpdateInput = {
  uuid: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<PermissionNames>>>,
};

export type Solution = {
   __typename?: 'Solution',
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  projectAssignments?: Maybe<Array<Maybe<ProjectAssignment>>>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type SolutionComputeInput = {
  csvData: Array<Maybe<SolutionCsvDataInput>>,
};

export type SolutionCreateInput = {
  name: Scalars['String'],
};

export type SolutionCsvDataInput = {
  studentEmail: Scalars['String'],
  project: Scalars['String'],
  score: Scalars['Int'],
  teacherEmail: Scalars['String'],
};

export type SolutionDeleteInput = {
  uuid: Scalars['String'],
};

export type SolutionFindManyInput = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<SolutionOrderByInput>,
  where?: Maybe<SolutionSearchFieldsInput>,
};

export type SolutionFindOneInput = {
  where?: Maybe<SolutionSearchFieldsInput>,
};

export type SolutionOrderByInput = {
  name?: Maybe<OrderByEnum>,
};

export type SolutionSearchFieldsInput = {
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type SolutionUpdateInput = {
  uuid: Scalars['String'],
  name?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  uuid: Scalars['String'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  role?: Maybe<Role>,
  status?: Maybe<AccountStatus>,
  createdAt: Scalars['Date'],
  updatedAt: Scalars['Date'],
};

export type UserActivateAccountInput = {
  token: Scalars['String'],
  password: Scalars['String'],
};

export type UserActivationTokenData = {
   __typename?: 'UserActivationTokenData',
  firstName: Scalars['String'],
  email: Scalars['String'],
};

export type UserCreateInput = {
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  roleUuid?: Maybe<Scalars['String']>,
  roleName?: Maybe<Scalars['String']>,
  password: Scalars['String'],
};

export type UserDeleteInput = {
  uuid: Scalars['String'],
};

export type UserFindManyByPermissionInput = {
  permissionName: PermissionNames,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<UserOrderByInput>,
  where?: Maybe<UserSearchFieldsInput>,
};

export type UserFindManyInput = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<UserOrderByInput>,
  where?: Maybe<UserSearchFieldsInput>,
};

export type UserFindManyWithFiltersInput = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  dateStart?: Maybe<Scalars['String']>,
  dateEnd?: Maybe<Scalars['String']>,
  rolesUuids?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type UserFindOneInput = {
  where?: Maybe<UserSearchFieldsInput>,
};

export type UserOrderByInput = {
  email?: Maybe<OrderByEnum>,
  firstName?: Maybe<OrderByEnum>,
  lastName?: Maybe<OrderByEnum>,
};

export type UserPasswordResetInput = {
  token: Scalars['String'],
  password: Scalars['String'],
};

export type UserSearchFieldsInput = {
  uuid?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type UserSearchManyInput = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
};

export type UserUpdateInput = {
  uuid: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  roleUuid?: Maybe<Scalars['String']>,
};

export type UserVerifyEmailInput = {
  token: Scalars['String'],
};
export type Fragment_Solution_FieldsFragment = (
  { __typename?: 'Solution' }
  & Pick<Solution, 'uuid' | 'name'>
);

export type Fragment_Solution_AllFieldsFragment = (
  { __typename?: 'Solution' }
  & Pick<Solution, 'uuid' | 'name'>
  & { projectAssignments: Maybe<Array<Maybe<(
    { __typename?: 'ProjectAssignment' }
    & Pick<ProjectAssignment, 'uuid' | 'projectName' | 'studentOneEmail' | 'studentTwoEmail'>
  )>>> }
);

export type Query_Solution_FindManyQueryVariables = {
  input: SolutionFindManyInput
};


export type Query_Solution_FindManyQuery = (
  { __typename?: 'Query' }
  & { Solution_findMany: Array<Maybe<{ __typename?: 'Solution' }
    & Fragment_Solution_FieldsFragment
  >> }
);

export type Query_Solution_FindOneQueryVariables = {
  input: SolutionFindOneInput
};


export type Query_Solution_FindOneQuery = (
  { __typename?: 'Query' }
  & { Solution_findOne: Maybe<{ __typename?: 'Solution' }
    & Fragment_Solution_AllFieldsFragment
  > }
);

export type Mutation_Solution_ComputeMutationVariables = {
  input: SolutionComputeInput
};


export type Mutation_Solution_ComputeMutation = (
  { __typename?: 'Mutation' }
  & { Solution_compute: { __typename?: 'Solution' }
    & Fragment_Solution_AllFieldsFragment
   }
);

export type Fragment_User_FieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'uuid' | 'firstName' | 'lastName' | 'email' | 'createdAt' | 'updatedAt'>
  & { role: Maybe<(
    { __typename?: 'Role' }
    & Pick<Role, 'name'>
  )> }
);

export type Query_User_FindManyQueryVariables = {
  input: UserFindManyInput
};


export type Query_User_FindManyQuery = (
  { __typename?: 'Query' }
  & { User_findMany: Array<Maybe<{ __typename?: 'User' }
    & Fragment_User_FieldsFragment
  >> }
);

export type Query_User_GetCurrentQueryVariables = {};


export type Query_User_GetCurrentQuery = (
  { __typename?: 'Query' }
  & { User_getCurrent: Maybe<{ __typename?: 'User' }
    & Fragment_User_FieldsFragment
  > }
);
