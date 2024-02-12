# web-dev-exercises

## HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture #5 Стилізація шрифтів та тексту
1. В середині exercises створіть піддирексторію lecture-05. В середині lecture-05 створіть файли index.html, css/main.css та README.md

2. Відвідайте веб-сайт Google Fonts https://fonts.google.com/.
знайдіть шрифт Roboto, додайте шрифт «Roboto» за допомогою посилання на сторінку index.html.

3. Додайте до сторінки index.html наступну розмітку
```html
	<div>
	<span>Outer <span>inner</span> outer</span>
	</div>
```
	- Припустімо, що розмір шрифту для body встановлено на 16 пікселів. 
	- Слова «Outer» відображається з розміром 25,6 пікселів, а слово «inner» — 40,96 пікселів.
	- Всередині файла css/main.css 
		- визначте властивсть font-size для div, вказавши значення в одиницях виміру em.
		- визначте властивсть font-size для span, вказавши значення в одиницях виміру em.

4. Додайте до сторінки index.html наступну розмітку
```html
    <div>
        <strong>Outer <strong>inner</strong> outer</strong>
    </div>
```

	- Припустімо, що розмір шрифту для body встановлено на 16 пікселів. 
	- Всередині файла css/main.css визначте властивсть font-size для strong так, щоб всі слова мали однаковий відносний розмір, еквівалентний 25,6 пікселів.

5. Додайте до сторінки index.html наступну розмітку
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```
- стилізувати елементи списку за длпомогою стилю квадрат

6. Відредагуйте файл index.html вашого персонального сайту

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя домашня сторінка</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<!-- додайте тут Google Fonts «Roboto» -->
	<link href="css/main.css" rel="stylesheet">

</head>
<body>

</body>
</html>

```

7. Відредагуйте файл css/main.css вашого персонального сайту
	- Виконайте імпорт шрифтів font-awesomeза допомогою правила @import. 

8. Відредагувати файл css/common.css
```css
	html {
		--primary-text-color: #000;
		--primary-bg-color: #fff;
	}
	footer {
		--footer-text-color: #fff;
		--fuuter-bg-color: #000;
	}
```
	- Визначити у глобальній області видимості змінні:
		--primary-font-family: 'Roboto', sans-serif; 
		--primary-font-size: 0.875rem;

9. Відредагувати файл css/main.css
	- Встановити, за допомогою визначених у файлі css/common.css змінних, властивості елемента body:
		- font-family
		- font-size
	- Встановити властивість font-weight: 700 для елементів h1, h2, h3
	- Встановити властивість font-size: 1.45rem для елемента h1
	- Встановити властивість font-size: 1.3rem для елемента h2
	- Визначити клас .list-unstyled з властивістю list-style: none
	- Визначити клас .footer-social

10. Відредагуйте файл index.html
	- В розділі footer створіть section з атрибутом class="footer-social"
	- В середині цієї секції розмістіть елемент ul з атрибутом class="list-unstyled"
	- В середині ul розмістіть елементи li, кожний з яких має містити посилання на одну з соціальних мереж - facebook, twitter, github, linkedin, youtube, instagram.
	- Перегляньте документацію для font-awesome, знайдіть іконки відповідних соц-мереж та вставте їх як текст посилань

11. Відредагуйте файл index.html
	- В розділі header створіть ще один підрозділ nav
```html
	<header>
      	<nav>
            <!-- navigation -->
            <a href="index.html">Home</a> 
            <a href="catalog.html">Catalog</a> 
            <a href="blog.html">Blog</a> 
            <a href="about.html">About</a> 
            <a href="contact.html">Contact</a> 
    	</nav>
		
		створіть тут підрозділ nav з таким вмістом
			
			<a href="#"></a>
            <a href="cart.html"></a>
            <a href="#!"></a>
	</header>
```
	- Перегляньте документацію для font-awesome, знайдіть іконки кошик замовлення, сердечко та користувач. Для кожного з посилань визначте атрибут class зі значенням, що дорівнює одній з цих іконок
	- Встановіть для тега a властивість text-decoration: none; у файлі css/common.css

## LICENSE

This repository follows the [MIT License](https://github.com/couchjanus/web-dev-exercises/tree/main/LICENSE).
