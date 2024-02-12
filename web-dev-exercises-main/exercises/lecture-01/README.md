# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture #1

- Виконайте інсталяцію Visual Code
- Виконайте інсталяцію git
- Виконайте початкове налаштування Git
- Зареєстрйтесь на github
- Створіть новий репозиторій з ім’ям свого облікового запису.

- В корені проекту виконайте команду:

git remote add origin https://github.com/<ім’я вашого облікового запису>/<ім’я вашого облікового запису>.github.io

### Виконайте наступні кроки
1. В корені проекту:
	- створіть файл README.md 
	- створіть файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>

```
На сайті https://favicon.io/ згенеруйте файл favicon.ico та помістіть його до кореня проекту.
Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Додайте тут іконку для вашого сайту -->
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>

</body>
</html>

```

2. Створіть дирексторію exercises

	- В середині exercises створіть файли index.html та README.md
	- В середині exercises створіть піддирексторію lecture-01
	- В середині lecture-01 створіть файли index.html та README.md

**Результатом повинна стати така структура:**
```
├── exercises
│   ├── index.html
│   ├── lecture-01
│   │   ├── index.html
│   │   └── README.md
│   └── README.md
├── index.html
├── LICENSE
└── README.md

```

3. Відредагуйте файл exercises/README.md

```
## Мої домашні вправи
```

4. Відредагуйте файл exercises/lecture-01/README.md

```
## Домашні вправи до лекції 1
```
5. Відкрийте термвнал та перейдіть у корінь проекту. Виконайте наступні команди з терміналу
	- git add .
	- git commit -m "added exercise 1"
	- git push origin main

6. В браузері викличте https://<ім’я вашого облікового запису>/<ім’я вашого облікового запису>.github.io 

## LICENSE
This repository follows the [MIT License](https://github.com/couchjanus/web-dev-exercises/tree/main/LICENSE).
