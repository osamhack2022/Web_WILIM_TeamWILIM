import nodeMailer from 'nodemailer';
import "../env.js";
import { mail_id,mail_password, smtp_port} from "../db.js";

module.exports.send = function (data) {
    let transporter = nodeMailer.createTransport({
        service: 'naver',
        host: 'smtp.naver.com',
        port: smtp_port,
        auth: {
            user: `${mail_id}@naver.com`,
            pass: `${mail_password}`
        },
    })
    let option = {
        from: `"WILIM 관리자👻" <${mail_id}@naver.com>`,
        to: data.email,
        subject: data.title,
        text: data.message
    }
    transporter.sendMail(option, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    
}
module.exports.validation = (data) => {
    return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) && data.title != undefined && data.message != undefined
}