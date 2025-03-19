# Responsive Web Page

This is a responsive web page built as part of my internship project. The project demonstrates the use of **HTML, CSS (Flexbox), and Media Queries** to create a fully responsive website that adapts to different screen sizes.

## 📌 Features
- Responsive **Navigation Bar** with a hamburger menu for mobile.
- **Flexbox Layout** for dynamic content arrangement.
- **Media Queries** for adapting the design across different devices.
- Clean and modern **UI/UX** design.

## 🚀 Technologies Used
- **HTML5** for structure
- **CSS3** for styling
- **Flexbox** for layout
- **Media Queries** for responsiveness

## 📂 Project Structure
```
📦 Responsive-Web-Page
├── 📜 index.html  # Main HTML file
├── 📜 styles.css  # CSS styling & media queries
├── 📜 README.md   # Project documentation
```

## 🖥️ Screenshots
### Desktop View
![Desktop View](link-to-desktop-screenshot)

### Tablet View
![Tablet View](link-to-tablet-screenshot)

### Mobile View
![Mobile View](link-to-mobile-screenshot)

## 📖 How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/responsive-web-page.git
   ```
2. Open `index.html` in your browser.
3. Resize the window to see the responsive behavior.

## 📜 Media Queries Used
```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }
    .nav-links {
        display: none;
    }
    .hamburger {
        display: flex;
    }
}

@media (max-width: 480px) {
    header {
        font-size: 18px;
    }
    .box {
        width: 90%;
        padding: 15px;
    }
}
```


