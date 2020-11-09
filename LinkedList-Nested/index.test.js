const {arrayClient,arrayItem} = require('./data');
const LLNested = require('./LinkedListNested')
describe("Should  test for Client" , () => {
    const myLL = new LLNested();
    test("Should Add The first Client", () => {
      expect(myLL.pushFrontClient(arrayClient[0])).toEqual({
          head: {
              name: arrayClient[0].name,
              age: arrayClient[0].age,
              item : null,
              sizeItem: 0,
              next: null
          },
          length: 1
      })
    })
})