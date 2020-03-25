export type Maybe<T> = T;
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
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED'
}


/** ISO 639-1 language code */
export enum LanguageCode {
  /** English */
  en = 'en',
  /** French */
  fr = 'fr'
}

export interface Mutation {
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
}


export type MutationSolution_computeArgs = {
  computeInput: SolutionComputeInput
};


export type MutationSolution_createOneArgs = {
  createInput: SolutionCreateInput
};


export type MutationSolution_updateOneArgs = {
  updateInput: SolutionUpdateInput
};


export type MutationSolution_deleteOneArgs = {
  deleteInput: SolutionDeleteInput
};


export type MutationUser_registerArgs = {
  createInput: UserCreateInput
};


export type MutationUser_createOneArgs = {
  createInput: UserCreateInput
};


export type MutationUser_createManyArgs = {
  createInputs: Array<Maybe<UserCreateInput>>
};


export type MutationUser_updateOneArgs = {
  updateInput: UserUpdateInput
};


export type MutationUser_updateManyArgs = {
  updateInput: Array<Maybe<UserUpdateInput>>
};


export type MutationUser_deleteOneArgs = {
  deleteInput: UserDeleteInput
};


export type MutationUser_deleteManyArgs = {
  deleteInputs: Array<Maybe<UserDeleteInput>>
};


export type MutationUser_activateAccountArgs = {
  userActivateAccountInput?: Maybe<UserActivateAccountInput>
};


export type MutationUser_sendPasswordResetTokenArgs = {
  email?: Maybe<Scalars['String']>
};


export type MutationUser_setPasswordFromPasswordResetTokenArgs = {
  passwordResetInput?: Maybe<UserPasswordResetInput>
};


export type MutationUser_sendVerifyEmailTokenArgs = {
  uuid?: Maybe<Scalars['String']>
};


export type MutationUser_sendActivateAccountTokenArgs = {
  uuid?: Maybe<Scalars['String']>
};


export type MutationUser_verifyEmailArgs = {
  userVerifyEmailInput?: Maybe<UserVerifyEmailInput>
};


export type MutationRole_createOneArgs = {
  createInput: RoleCreateInput
};


export type MutationRole_createManyArgs = {
  createInputs: Array<Maybe<RoleCreateInput>>
};


export type MutationRole_updateOneArgs = {
  updateInput: RoleUpdateInput
};


export type MutationRole_updateManyArgs = {
  updateInputs: Array<Maybe<RoleUpdateInput>>
};


export type MutationRole_deleteOneArgs = {
  deleteInput: RoleDeleteInput
};


export type MutationRole_deleteManyArgs = {
  deleteInputs: Array<Maybe<RoleDeleteInput>>
};

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface Permission {
  uuid: Scalars['String'],
  name?: Maybe<PermissionNames>,
}

export enum PermissionNames {
  SOLUTION_CREATE_ANY = 'SOLUTION_CREATE_ANY',
  SOLUTION_READ_ANY = 'SOLUTION_READ_ANY',
  SOLUTION_UPDATE_ANY = 'SOLUTION_UPDATE_ANY',
  SOLUTION_DELETE_ANY = 'SOLUTION_DELETE_ANY',
  SOLUTION_CREATE_OWN = 'SOLUTION_CREATE_OWN',
  SOLUTION_READ_OWN = 'SOLUTION_READ_OWN',
  SOLUTION_UPDATE_OWN = 'SOLUTION_UPDATE_OWN',
  SOLUTION_DELETE_OWN = 'SOLUTION_DELETE_OWN',
  USER_CREATE_ANY = 'USER_CREATE_ANY',
  USER_READ_ANY = 'USER_READ_ANY',
  USER_UPDATE_ANY = 'USER_UPDATE_ANY',
  USER_DELETE_ANY = 'USER_DELETE_ANY',
  USER_CREATE_OWN = 'USER_CREATE_OWN',
  USER_READ_OWN = 'USER_READ_OWN',
  USER_UPDATE_OWN = 'USER_UPDATE_OWN',
  USER_DELETE_OWN = 'USER_DELETE_OWN',
  DEFAULT = 'DEFAULT',
  ROLE_CREATE_ANY = 'ROLE_CREATE_ANY',
  ROLE_READ_ANY = 'ROLE_READ_ANY',
  ROLE_UPDATE_ANY = 'ROLE_UPDATE_ANY',
  ROLE_DELETE_ANY = 'ROLE_DELETE_ANY',
  ROLE_CREATE_OWN = 'ROLE_CREATE_OWN',
  ROLE_READ_OWN = 'ROLE_READ_OWN',
  ROLE_UPDATE_OWN = 'ROLE_UPDATE_OWN',
  ROLE_DELETE_OWN = 'ROLE_DELETE_OWN'
}

export interface ProjectAssignment {
  uuid?: Maybe<Scalars['String']>,
  solution?: Maybe<Solution>,
  projectName: Scalars['String'],
  studentOneEmail: Scalars['String'],
  studentTwoEmail: Scalars['String'],
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
}

export interface ProjectAssignmentCreateInput {
  projectName: Scalars['String'],
  studentOneEmail: Scalars['String'],
  studentTwoEmail: Scalars['String'],
}

export interface Query {
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
}


export type QuerySolution_findOneArgs = {
  findOneInput: SolutionFindOneInput
};


export type QuerySolution_findManyArgs = {
  findManyInput: SolutionFindManyInput
};


export type QueryUser_findOneArgs = {
  findOneInput: UserFindOneInput
};


export type QueryUser_findManyArgs = {
  findManyInput: UserFindManyInput
};


export type QueryUser_findManyByPermissionArgs = {
  input: UserFindManyByPermissionInput
};


export type QueryUser_getActivationTokenDataArgs = {
  token: Scalars['String']
};


export type QueryUser_getResetPasswordTokenDataArgs = {
  token: Scalars['String']
};


export type QueryRole_findOneArgs = {
  findOneInput: RoleFindOneInput
};


export type QueryRole_findManyArgs = {
  findManyInput: RoleFindManyInput
};

export interface Role {
  uuid: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  permissionNames?: Maybe<Array<Maybe<PermissionNames>>>,
  usersCount: Scalars['Int'],
}

export interface RoleCreateInput {
  name: Scalars['String'],
  permissions: Array<Maybe<PermissionNames>>,
}

export interface RoleDeleteInput {
  uuid: Scalars['String'],
}

export interface RoleFindManyInput {
  order?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  where?: Maybe<RoleSearchFieldsInput>,
}

export interface RoleFindOneInput {
  where?: Maybe<RoleSearchFieldsInput>,
}

export interface RoleOrderByInput {
  name?: Maybe<OrderByEnum>,
}

export interface RoleSearchFieldsInput {
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface RoleSearchManyInput {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
}

export interface RoleUpdateInput {
  uuid: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<PermissionNames>>>,
}

export interface Solution {
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  projectAssignments?: Maybe<Array<Maybe<ProjectAssignment>>>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
}

export interface SolutionComputeInput {
  csvData: Array<Maybe<SolutionCsvDataInput>>,
}

export interface SolutionCreateInput {
  name: Scalars['String'],
  projectAssignments: Array<Maybe<ProjectAssignmentCreateInput>>,
}

export interface SolutionCsvDataInput {
  studentEmail: Scalars['String'],
  project: Scalars['String'],
  score: Scalars['Int'],
  teacherEmail: Scalars['String'],
}

export interface SolutionDeleteInput {
  uuid: Scalars['String'],
}

export interface SolutionFindManyInput {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<SolutionOrderByInput>,
  where?: Maybe<SolutionSearchFieldsInput>,
}

export interface SolutionFindOneInput {
  where?: Maybe<SolutionSearchFieldsInput>,
}

export interface SolutionOrderByInput {
  createdAt?: Maybe<OrderByEnum>,
}

export interface SolutionSearchFieldsInput {
  uuid?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface SolutionUpdateInput {
  uuid: Scalars['String'],
  name?: Maybe<Scalars['String']>,
}

export interface User {
  uuid: Scalars['String'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  role?: Maybe<Role>,
  status?: Maybe<AccountStatus>,
  createdAt: Scalars['Date'],
  updatedAt: Scalars['Date'],
}

export interface UserActivateAccountInput {
  token: Scalars['String'],
  password: Scalars['String'],
}

export interface UserActivationTokenData {
  firstName: Scalars['String'],
  email: Scalars['String'],
}

export interface UserCreateInput {
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  roleUuid?: Maybe<Scalars['String']>,
  roleName?: Maybe<Scalars['String']>,
  password: Scalars['String'],
}

export interface UserDeleteInput {
  uuid: Scalars['String'],
}

export interface UserFindManyByPermissionInput {
  permissionName: PermissionNames,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<UserOrderByInput>,
  where?: Maybe<UserSearchFieldsInput>,
}

export interface UserFindManyInput {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  order?: Maybe<UserOrderByInput>,
  where?: Maybe<UserSearchFieldsInput>,
}

export interface UserFindManyWithFiltersInput {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  dateStart?: Maybe<Scalars['String']>,
  dateEnd?: Maybe<Scalars['String']>,
  rolesUuids?: Maybe<Array<Maybe<Scalars['String']>>>,
}

export interface UserFindOneInput {
  where?: Maybe<UserSearchFieldsInput>,
}

export interface UserOrderByInput {
  email?: Maybe<OrderByEnum>,
  firstName?: Maybe<OrderByEnum>,
  lastName?: Maybe<OrderByEnum>,
}

export interface UserPasswordResetInput {
  token: Scalars['String'],
  password: Scalars['String'],
}

export interface UserSearchFieldsInput {
  uuid?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
}

export interface UserSearchManyInput {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
}

export interface UserUpdateInput {
  uuid: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  roleUuid?: Maybe<Scalars['String']>,
}

export interface UserVerifyEmailInput {
  token: Scalars['String'],
}
