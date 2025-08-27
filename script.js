const themeBtn = document.getElementById('themeBtn');
const regForm = document.getElementById('regForm');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

//theme change from light to dark
themeBtn.onclick = () => document.body.classList.toggle('dark-theme');

//submit button
regForm.onsubmit = e => {
  e.preventDefault(); //to stop the browser from automatically sumbiting the form
  const user = username.value.trim();
  const mail = email.value.trim();
  const pass = password.value.trim();
//requirement ng user to fill the form
  if (user.length < 3) return show("Username must be at least 3 characters.", "error");
  if (!mail.includes('@')) return show("Email must contain '@'.", "error");
  if (pass.length < 6) return show("Password must be at least 6 characters.", "error");

  show("Registration successful!", "success");
  regForm.reset();
};

username.oninput = () => {
  const u = username.value.trim();
  const m = email.value.trim();
  const p = password.value.trim();
  if (u.length < 3) show("Username must be at least 3 characters.", "error");
  else if (!m.includes('@')) show("Email must contain '@'.", "error");
  else if (p.length < 6) show("Password must be at least 6 characters.", "error");
  else show("", "success");
};

email.oninput = username.oninput;
password.oninput = username.oninput;

//will reset the form
resetBtn.onclick = () => {
  regForm.reset();
  message.textContent = '';
  message.className = '';
};

//displaying mesasage
function show(text, type) {
  message.textContent = text;
  message.className = type;
}

//yung sa console
document.getElementById('outer').addEventListener('click', () => console.log("Div Clicked"));
document.getElementById('outer').addEventListener('click', () => console.log("Div Clicked (capturing)"), true);
document.getElementById('inner').addEventListener('click', e => {
  console.log("Button Clicked");
  e.stopPropagation();
});