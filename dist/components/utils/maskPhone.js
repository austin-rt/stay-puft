const UseMaskPhone = (phone) => {
    let x = phone
        .toString()
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (x) {
        const phone = !x[2]
            ? x[1]
            : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        return phone;
    }
    else {
        return 'invalid phone number';
    }
};
export default UseMaskPhone;
//# sourceMappingURL=maskPhone.js.map