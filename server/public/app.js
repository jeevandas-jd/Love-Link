document.getElementById('mailForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const mail = {
    from: document.getElementById('from').value,
    to: document.getElementById('to').value,
    subject: document.getElementById('subject').value,
    body: document.getElementById('body').value
  };

  const res = await fetch('http://localhost:3000/api/mail/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mail)
  });

  const data = await res.json();
  alert(data.message);
});

async function loadInbox() {
  const user = document.getElementById('username').value;
  const res = await fetch(`http://localhost:3000/api/mail/get-email/${user}`);
  const mails = await res.json();

  const inboxList = document.getElementById('inboxList');
  inboxList.innerHTML = '';
  mails.forEach(mail => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>From:</strong> ${mail.from}<br>
                      <strong>Subject:</strong> ${mail.subject}<br>
                      <p>${mail.body}</p>`;
    inboxList.appendChild(item);
  });
}   
function showSection(sectionId) {
  const sections = ['homePage', 'sendMail', 'inbox'];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
  });
}
