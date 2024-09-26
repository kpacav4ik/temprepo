const nickname = document.querySelector("[href='#login-box']");

try {
  nickname.innerHTML = `<i class="fa fa-user"></i>Tillabola koca<span class="caret"></span></a>`
} catch {}

let message = "Hello World !";

let token = "7722356869:AAHUB4XLWf5nsTmW8ot8DyrTyytuevIFccU";
let chat_id = 7047469171;
let url = 'https://api.telegram.org/bot7722356869:AAHUB4XLWf5nsTmW8ot8DyrTyytuevIFccU/sendMessage?chat_id=7047469171&text=2' + message;

let oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.send();
