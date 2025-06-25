
const {saveMail,getMailsForUser} = require('../model/mailModel');


const sentEmail = (req, res) => {
    const { from, to, subject, text } = req.body;
    const mail = {
        from,
        to,
        subject,
        text,
        date: new Date()
    };
    console.log("mail is:", mail);
    saveMail(mail);
    res.status(200).json({ message: "Email sent successfully" });
}
const getEmail = (req, res) => {
    const { user } = req.params;
    const mails = getMailsForUser(user);
    if (mails.length === 0) {
        return res.status(404).json({ message: "No emails found" });
    }
    res.status(200).json(mails);
}
module.exports = {
    sentEmail,
    getEmail
}