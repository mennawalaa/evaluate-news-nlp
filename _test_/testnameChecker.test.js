import { checkForName } from "../src/client/js/nameChecker"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the nameChecker", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the namecheck() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        //has no input 
        // Define the expected output, if any, in the form of variables/array
        let output = 0;
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        //expected out put res.msg "ok"
        // console.log("output of function run", handleSubmit());
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(checkForName()).toEqual(output);
        expect(checkForName).toBeDefined();
    })
});