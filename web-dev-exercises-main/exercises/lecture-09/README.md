# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture #9 Управління потоком

1. В середині exercises створіть піддирексторію lecture-09. В середині lecture-09 створіть файли index.html та README.md. Відредагуйте файл index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lecture #9 Управління потоком</title>
	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <style>
      img {
        width: 250px;
        margin-left: 17px;
        margin-bottom: 10px;
      }
    </style>
</head>
<body>
  <h1>Управління потоком</h1>
  <p>
    Examples of the CSS float Property
    Below are some examples of how the CSS float property works.
    <img src="example.jpg">
  </p>
</body>
</html>
```
  - Перемістити зображення вправо

2. додайте до index.html таку розмітку:
```html
<p>Статичне позиціонування є типовим для кожного елемента. Це просто означає помістіть елемент у звичайне положення в документі.</p>
<p class="static-position">Статичне позиціонування є типовим для кожного елемента. Це просто означає помістіть елемент у звичайне положення в документі.</p>

<p class="relative-position">
    Відносне позиціювання. Положення елемента встановлюється відносно його поточного положення. Додавання властивостей left, top, right і bottom змінює позицію елемента і зрушує його в ту чи іншу сторону. Ця властивість дозволяє змінюва ти позицію елемента без зміни макету.
</p>
```
   - визначіть CSS-властивості position: static та background: yellow для класу static-position
   - визначіть CSS-властивості для класу relative-position position: relative, background: red, розташуйте його зверху та зліва на відстані 130px  
   - визначіть CSS-властивості для класу absolute-position position: absolute background: blueviolet, розташуйте його зверху та зліва на відстані 30px
   - додайте наступне до свого CSS, щоб зробити перший абзац також абсолютно позиціонованим:
```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```
   - Що потрібно додати до правила p:nth-of-type(1) щоб змінити порядок відображення першого абзацу у стеку розташування елементів

3. розмістіть елемент h1 у верхній частині вікна на білому тлі та зафікскйте його позицію

4. додайте таку розмітку:
```html
<style>
dt {
  background-color: black;
  color: white;
  padding: 10px;
  margin: 1em 0;
}
</style>

<h2>Sticky positioning</h2>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```
   - Що треба додати до визначення dt, щоб змусити панель навігації прокручуватися разом зі сторінкою до певної точки, а потім залишатися у верхній частині сторінки.

## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).
