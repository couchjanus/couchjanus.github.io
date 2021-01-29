'use strict';

function el(selector) {
    return document.querySelector(selector);
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

const promise = new Promise((resolve, reject) => {});

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
  
      xhr.responseType = 'json';
  
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
    
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
  
      xhr.onerror = () => {
        reject('Something went wrong!');
      };
  
      xhr.send(JSON.stringify(data));
    });

    // Возвращаем обещание, которое резолвится если xhr.status меньше 400 
    // или режектится если xhr.status >= 400
    return promise;
  };


  const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
        myConsole(4);
		el("#printResult").innerHTML = "<strong>" + JSON.stringify(responseData) + "</strong>";
        // console.log(responseData);
    });
  };

  el('.getBtn').addEventListener('click', getData);
