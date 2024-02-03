
const chai = require('chai');
const generateOTP = require('../index');

const { expect } = chai;

describe('generateOTP', () => {
    it('should generate a 4-digit OTP by default', () => {
        const otp = generateOTP();
        expect(otp).to.match(/^\d{4}$/);
    });

    it('should generate an OTP of the specified length', () => {
        const otpLength = 6;
        const otp = generateOTP(otpLength);
        expect(otp).to.match(new RegExp(`^\\d{${otpLength}}$`));
    });

    it('should throw an error for invalid OTP length', () => {
        expect(() => generateOTP('invalid')).to.throw('Please enter a valid number for OTP length');
        expect(() => generateOTP(0)).to.throw('Please enter a valid number for OTP length');
    });
});

