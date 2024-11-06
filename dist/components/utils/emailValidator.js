const UseEmailValidator = (email) => {
    const regex1 = /^[^\s@]+@([A-Za-z0-9._%+-][A-Za-z0-9._%+-]*[A-Za-z0-9._%+-]\.|[A-Za-z0-9._%+-]\.)+([A-Za-z0-9._%+-][A-Za-z0-9._%+-]*[A-Za-z0-9._%+-]|[A-Za-z0-9._%+-])$/;
    const regex2 = /^(root@|abuse@|spam@)/;
    const emailLC = email.toLowerCase();
    let retVal = { error: false, message: 'success' };
    if (!email || email === '') {
        retVal = {
            error: true,
            message: 'Email is blank',
        };
    }
    if (!email.match(regex1)) {
        retVal = {
            error: true,
            message: 'The e-mail address you have entered is not valid. Email should be of the form abc@de.com',
        };
    }
    else if (emailLC.match(regex2)) {
        retVal = {
            error: true,
            message: 'Email address should not contain root or spam or abuse.',
        };
    }
    return retVal;
};
export default UseEmailValidator;
//# sourceMappingURL=emailValidator.js.map