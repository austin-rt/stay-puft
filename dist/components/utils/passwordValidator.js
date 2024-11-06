const UsePasswordValidator = ({ password, length = 6, shouldHaveNumber = true, shouldHaveCapital = true, invalidChars = '?!', shouldHaveSpecialChars = true, }) => {
    let result = {
        error: false,
        message: `Password is valid`,
    };
    if (!password)
        return result;
    // test length
    if (password.length >= length) {
        for (let loop = 0; loop < password.length; loop += 1) {
            // cannot have spaces
            if (password.charCodeAt(loop) === 32) {
                // does not, throw an error
                result = {
                    error: true,
                    message: `Spaces are not allowed`,
                };
            }
        }
    }
    else {
        // does not, throw an error
        result = {
            error: true,
            message: `Your password must be at least ${length} characters long`,
        };
    }
    // test if it should have a number
    if (shouldHaveNumber === true && !/\d/.test(password)) {
        // does not, throw an error
        result = {
            error: true,
            message: `Passwords must have a number`,
        };
    }
    // test if there are  any invalid characters
    if (invalidChars.length > 0) {
        for (let loop = 0; loop < password.length; loop += 1) {
            if (invalidChars.indexOf(password.charAt(loop)) !== -1) {
                // has invalid char, throw error
                result = {
                    error: true,
                    message: `Password cannot contain ${invalidChars}`,
                };
            }
        }
    }
    // test if it has a capital letter
    if (shouldHaveCapital === true && !/[A-Z]/.test(password)) {
        // does not, throw an error
        result = {
            error: true,
            message: `Password must have a capital letter`,
        };
    }
    // test if it has a special character
    if (shouldHaveSpecialChars === true &&
        !/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
        // does not, throw an error
        result = {
            error: true,
            message: `Password must have a special character`,
        };
    }
    return Object.assign({}, result);
};
export default UsePasswordValidator;
//# sourceMappingURL=passwordValidator.js.map