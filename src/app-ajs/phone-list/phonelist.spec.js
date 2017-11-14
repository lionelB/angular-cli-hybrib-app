import {phoneListModule} from './phone-list.module'

describe('PhoneList', () => {
  let $componentController
  let component

  beforeEach(angular.mock.module(phoneListModule))

  beforeEach(angular.mock.inject($injector => {
    $componentController = $injector.get('$componentController')
  }))

  describe('constructor', () => {
    beforeEach(angular.mock.inject(() => {
      component = $componentController('phoneList')
    }))

    it('should have a title', () => {
      expect(component.title).toEqual('Hello world')
    })
  })
})
