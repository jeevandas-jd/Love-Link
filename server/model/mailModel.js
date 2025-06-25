
let mails=[];

const saveMail = (mail) => {
    mails.push(mail);

}

const getMailsForUser = (userId) => {
    return mails.filter(mail => mail.to === userId);
}

module.exports = {
    saveMail,
    getMailsForUser
}