'use strict';
// 
function el(selector) {
  return document.querySelector(selector);
}

function createRequest(){
  let request = false;
  if (XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if (ActiveXObject){
    try {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    }
  }
  return request;
}

function myConsole(c, status='') {
  let message, alertClass, text;

  switch (c) {
    case 1:
        message = '1: Подготовка к отправке...';
        alertClass = 'alert-primary';
        break;
    case 2:
        message = '2: Отправлен...';
        alertClass = 'alert-primary';
        break;
    case 3:
        message = '3: Идет обмен...';
        alertClass = 'alert-warning';
        break;
    case 4:
        message = '4: Обмен завершен!';
        alertClass = 'alert-success';
        break;
    case 5:
        message = 'Ошибка: запрашиваемый скрипт не найден!';
        alertClass = 'alert-danger';
        break;
    case 6:
        message = 'Ошибка: сервер вернул статус: ' + status;
        alertClass = 'alert-danger';
        break;
    default:
      break;     
  }
  text = `<div class="alert ${alertClass}" role="alert">${message}</div>`;
	el("#console").innerHTML += text;
}

function sendRequest(){
  const request = createRequest();
  const url = "https://reqres.in/api/users?page=2";

  request.onreadystatechange = function(){
    switch (request.readyState) {
      case 1:
        myConsole(1);
        break;
      case 2:
          myConsole(2);
          break;
      case 3:
          myConsole(3);
          break;
      case 4:
        if (request.status === 200) {
          myConsole(4);
          el("#printResult").innerHTML = `<strong>${request.responseText}</strong>`;
        } else if(request.status === 404){
          myConsole(5);
        } else {
          myConsole(6, request.status);
        }            
        break;
      default:
        el("#printResult").innerHTML = `<strong>Unnow Status</strong>`;
        break;
    }
  };
  request.open("GET", url, true);
  request.send();

}


const fetchRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers : data ? {"Content-Type": "application/json"} : {}
  }).then(response => {
    if (response.status >= 400) {
      return response.json().then(err => {
        const error = new Error("Something went wrong!");
        error.data = err;
        throw error;
      });
    }
    return response.json();
  });
};
const url = "https://reqres.in/api/users?page=1";
const getData = () => {fetchRequest("GET", url).then(response => {
  myConsole(4);
  el("#printResult").innerHTML = `<strong>${JSON.stringify(response)}</strong>`;
});}

(function() {
  el('.getBtn').addEventListener('click', getData);
})();