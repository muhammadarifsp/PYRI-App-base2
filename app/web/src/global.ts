import { format as formatFNS, parseISO } from 'date-fns'
const md5 = require('md5');
var validator = require('validator');
var passwordValidator = require('password-validator');
const dateValidator = require('is-my-date-valid')
// var nodemailer = require('nodemailer');

const dateFormat = (
    value: any,
    format?: string,


) => {
    const inputFormat = format ? format : 'dd mmmm yyyy - HH:mm'
    try {
        if (typeof value === 'string') {
            return formatFNS(parseISO(value), inputFormat)
        } else {
            return formatFNS(value, inputFormat)
        }
    } catch (e) {
        return ''
    }
}

const encrypt = (value) => {
    return md5(value)
}
const validateEmail = (value) => {
    return validator.isEmail(value);
}
const validateDate = (value) => {
    var validate = validator({ format: 'yyyy-mm-dd' });
    return validate(value);
}

const validatePass = (value) => {
    // Create a schema
    var schema = new passwordValidator();
    schema
        .is().min(8)                                    // Minimum length 8
        .is().max(16)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                            // Must have at least 2 digits
        .has().not().spaces();                           // Should not have spaces

    return schema.validate(value);
}

// const sendVerifCode = (email, value) => {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'pyri.app0@gmail.com', // fill your mail
//             pass: 'pyriapp2021' // fill your password
//         }
//     });

//     var mailOptions = {
//         from: 'pyri.app@gmail.com', // fill your mail
//         to: email,
//         subject: 'Verification code PYRI-APP',
//         text: 'Your Verification code : ' + value
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//             return false;
//         } else {
//             console.log('Email sent: ' + info.response);
//             return true;
//         }
//     });
// }

export const globalVar = {
    dateFormat,
    encrypt,
    validateEmail,
    validatePass,
    validateDate,
    // sendVerifCode
}