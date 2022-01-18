// To send Email using Node: use nodemailer
const mailer = require('nodemailer');

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        // to use this : enable Less Secure Apps in Gmail  (2-Step Verification must be OFF)
        user:'firstEmail@gmail.com',
        pass:'password'
    }
})

let messageObj = {
    from:'firstEmail@gmail.com',
    to:'secondEmail@gmail.com',
    subject:'Email sending from nodemailer',
    text:'Sample Mail'
}

transport.sendMail(messageObj,(error,info)=>{
    if(error){
        console.log("Error: "+error);
    }
    else{
        console.log(info.response);
    }
});