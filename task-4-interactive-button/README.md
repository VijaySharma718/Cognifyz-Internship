# Interactive Button Project

## 📌 Project Description
This project is a simple interactive webpage where clicking a button changes the background color of the page randomly. It is built using **HTML, CSS, and JavaScript**.

## 🛠️ Technologies Used
- **HTML**: Structuring the webpage.
- **CSS**: Styling the button and layout.
- **JavaScript**: Adding interactivity to change background color dynamically.

## 📂 Project Structure
```
📁 Project Folder
│── index.html       # Main HTML file
│── styles.css       # Styling for the webpage
│── script.js        # JavaScript for interactive functionality
```

## 🚀 How to Run the Project
1. Download or clone the repository.
   ```bash
   git clone <repository-url>
   ```
2. Open the **index.html** file in any modern web browser.
3. Click the **button** to see the background color change dynamically.

## 🎯 Features
- A simple button with hover effects.
- Changes background color randomly on button click.
- Responsive and lightweight design.

## 📜 Code Explanation
### `index.html`
Defines the webpage structure with a button element.
```html
<button id="colorButton">Click Me ←</button>
```

### `styles.css`
Styles the button and layout for a modern look.
```css
button {
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
```

### `script.js`
Handles the button click event to generate a random color.
```js
document.getElementById("colorButton").addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
```
---
**Enjoy Coding! 🚀**
