import { testContext, testServices } from './test-context'

describe('User', () => {
  it(`user - create - success`, async () => {
    testContext.user0 = await testServices.userService.create({
      email: 'user0@test.com',
      firstName: 'user0-fn',
      lastName: 'user0-ln',
      roleName: 'admin',
      password: 'test',
    })
    testContext.user1 = await testServices.userService.create({
      email: 'user1@test.com',
      firstName: 'user1-fn',
      lastName: 'user1-ln',
      roleName: 'admin',
      password: 'test',
    })
    testContext.user2 = await testServices.userService.create({
      email: 'user2@test.com',
      firstName: 'user2-fn',
      lastName: 'user2-ln',
      roleName: 'admin',
      password: 'test',
    })

    expect(testContext.user0).toBeTruthy()
    expect(testContext.user0.id).toBeTruthy()
    expect(testContext.user0.uuid).toBeTruthy()
    expect(testContext.user0.email).toEqual('user0@test.com')

    expect(testContext.user1).toBeTruthy()
    expect(testContext.user1.id).toBeTruthy()
    expect(testContext.user1.uuid).toBeTruthy()
    expect(testContext.user1.email).toEqual('user1@test.com')
  })

  it(`user - findOne - success`, async () => {
    const seller0 = await testServices.userService.findOne({ where: { email: 'user0@test.com' } })
    const seller1 = await testServices.userService.findOne({ where: { email: 'user1@test.com' } })

    expect(seller0).toBeTruthy()
    if (seller0) expect(seller0.email).toEqual('user0@test.com')

    expect(seller1).toBeTruthy()
    if (seller1) expect(seller1.email).toEqual('user1@test.com')
  })

  it(`user - findMany - success`, async () => {
    const users = await testServices.userService.findMany({ take: 2 })

    expect(Array.isArray(users)).toBe(true)
    expect(users.length).toEqual(2)
  })

  it(`user - update - success`, async () => {
    if (!testContext.user0 || !testContext.user1) return
    await testServices.userService.update({ uuid: testContext.user0.uuid, email: 'user0.updated@test.com' })
    await testServices.userService.update({ uuid: testContext.user1.uuid, email: 'user1.updated@test.com' })

    const seller0 = await testServices.userService.findOne({ where: { uuid: testContext.user0.uuid } })
    const seller1 = await testServices.userService.findOne({ where: { uuid: testContext.user1.uuid } })

    expect(seller0).toBeTruthy()
    if (seller0) expect(seller0.email).toEqual('user0.updated@test.com')

    expect(seller1).toBeTruthy()
    if (seller1) expect(seller1.email).toEqual('user1.updated@test.com')
  })

  it(`user - delete - success`, async () => {
    if (!testContext.user2) return
    await testServices.userService.delete({ uuid: testContext.user2.uuid })
    const seller2 = await testServices.userService.findOne({ where: { uuid: testContext.user2.uuid } })
    expect(seller2).toBeFalsy()
  })
})
