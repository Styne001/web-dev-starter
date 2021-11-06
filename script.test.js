const rewire = require("rewire")
const script = rewire("./script")
const updateTime = script.__get__("updateTime")
// @ponicode
describe("updateTime", () => {
    test("0", () => {
        let callFunction = () => {
            updateTime()
        }
    
        expect(callFunction).not.toThrow()
    })
})
