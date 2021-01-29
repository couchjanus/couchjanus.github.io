'use strict';
// 
function CreateRequest() {
	let httpRequest = false;

	if (window.XMLHttpRequest) {
		// Gecko-совместимые браузеры, Safari, Konqueror
		httpRequest = new XMLHttpRequest();
        httpRequest.overrideMimeType("text/plain; charset=x-user-defined");
	} else if (window.ActiveXObject) {
		// Internet explorer
		try {
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (CatchException) {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
	}

	if (!httpRequest) {
		console.log("Невозможно создать XMLHttpRequest");
	}

	return httpRequest;
}

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

function sendRequest() {
	// Создаём запрос: вызываем функцию CreateRequest();
	const request = CreateRequest();
	const url = 'https://reqres.in/api/products/1';

	// Проверяем существование запроса
	if (!request) {
		console.log("Невозможно создать XMLHttpRequest");
	} else {
		console.log("Ура! Мы создали XMLHttpRequest. Что с ним делать?");
        
		request.onreadystatechange = function () {
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
					{
						if (request.status == 200) {
							myConsole(4);
							el("#printResult").innerHTML = "<strong>" + request.responseText + "</strong>";
						} else if (request.status == 404) {
							myConsole(5);
						} else {
                            myConsole(6, request.status);
						}
						break;
					}
			}
		};
		request.open('GET', url, true);
		request.send('');
	}
}

// Пользователь нажимает на ссылку 
el('.getBtn').addEventListener('click', sendRequest);

	  