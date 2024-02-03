const generateOTP = (length = 4) => {
    if (length <= 0 || isNaN(length)) {
        throw new Error("Please enter a valid number for OTP length");
    }

    const code = parseInt('9' + '0'.repeat(length - 1), 10);
    return Math.floor(Math.random() * code).toString().padStart(length, '0');
};

module.exports = generateOTP;
