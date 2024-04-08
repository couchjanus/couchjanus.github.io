
function createRequest() {
    let request = false;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }

    return request;
}

function myConsole(c, status='') {
    let message, alert, text;

    switch (c) {
        case 1:
            message = '1: Preparing request...'
            alert = 'alert-primary'
            break;
        case 2:
                message = '2: Sended...'
                alert = 'alert-primary'
                break;
        case 3:
                    message = '3: In progress...'
                    alert = 'alert-warning'
                    break;
        case 4:
                        message = '4: All done!'
                        alert = 'alert-success'
                        break;
        case 5:
                            message = '5 Error: URI not found!'
                            alert = 'alert-danger'
                            break;
        case 6:
                message = '6 Error: Server returned status:' + status;
                alert = 'alert-danger'
                break;
    }
    text = `<div class="alert ${alert}" role="alert">${message}</div> `
    document.getElementById('console').innerHTML += text;
}


function sendRequest() {
    const request = createRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    if(!request) {
        return;
    }

    request.onreadystatechange = function() {
        switch (request.readyState) {
            case 1:
                myConsole(1)
                break;
                case 2:
                    myConsole(2)
                    break;
                    case 3:
                        myConsole(3)
                        break;
                case 4: {
                    if (request.status == 200) {
                        myConsole(4)
                        document.getElementById('result').innerHTML = `
                        <strong>${request.responseText}</strong>
                        `
                    } else if (request.status === 404) {
                        myConsole(5)
                    } else {
                        myConsole(6, request.status)
                    }
                    break;
                }
            default:
                break;
        }
    }
    request.open('GET', url, true)
    request.send()
}

document.getElementById('request').addEventListener('click', sendRequest);