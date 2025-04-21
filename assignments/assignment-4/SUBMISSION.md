
# Assignment 4: The Exciting World of JavaScrip

**Name:** Shokhabbos Mukhammatov  
**Student ID:** 922995460

##  Links
- **GitHub Repository:** https://github.com/shokhabbos-mukhammatov/CSC317/assignments/assignment-4/
- **Live GitHub Pages:** https://shokhabbos-mukhammatov.github.io/CSC317/assignments/assignment-4/index.html

##  Description
This project consists of a portfolio website and an interactive JavaScript-based iPhone-style calculator, 
both with fully functional theme switchers. The portfolio features responsive layout, project iframes, 
and interactive design enhancements. The calculator implements custom JavaScript for math operations,
error handling (e.g., divide by zero), and twoo AI-generated themes (cyberpunk, and pastel neumorphism)switchable using JavaScript.

The JavaScript includes custom logic to evaluate secure expressions, display results, 
and prevent invalid inputs like NaN chaining or undefined operations.
The site uses CSS Grid and Flexbox for responsive layout and includes semantic HTML and accessibility considerations.

##  Challenges
One challenge was handling expression evaluation securely without using `eval()` directly,
which led to implementing a `secureEval` function. 
Another was ensuring theme switchers worked consistently across both pages without layout breaking,
which was hard to achieve.
In AI-generated themes, I also fixed CSS overflow issues and corrected logic to stop NaN propagation.

##  Extra Features
- 2 AI-generated themes with distinct visual styles
- Theme switcher state persistence using `localStorage`
- Custom expression validator (`secureEval`)
- Fully aligned calculator grid with responsive scaling
-  Improved button visual styles and layout coherence

## 🙏 Acknowledgments
- Stack Overflow (layout merging in CSS Grid)
- ChatGPT for AI theme generation assistance and code analysis
- MDN Web Docs for JavaScript event handling and form evaluation
- CSS Tricks and CodePen for neumorphism inspiration
