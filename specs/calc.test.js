const Calpage = require('../pageObjects/calc.page');

let expected_value = 9

describe('First Calculator Operation', ()=>{
    it('Adding two values and get the result', async () => {
        await Calpage.btnFour.click();
        await Calpage.btnPlus.click();
        await Calpage.btnFive.click();
        await Calpage.btnEquals.click();
    })
})

describe('Second Calculator Operation', ()=>{
    it('Validate the calculator result value', async () => {
       let resvalue =  await Calpage.resvalue.getText()
    if (expected_value == resvalue) {
        console.log("Expected result value ===>", expected_value, "matches with the result of the calculator ===>", resvalue)
        console.log("=======================PASSED=======================")
    }
    else {
        console.log("Failed")
    }

    })
})

