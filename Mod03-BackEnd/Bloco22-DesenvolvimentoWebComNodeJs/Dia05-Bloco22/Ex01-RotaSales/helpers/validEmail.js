const validEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
};

module.exports = validEmail;