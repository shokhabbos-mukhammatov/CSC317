CSC 317 Assignment 2 Submission
Name: Shokhabbos Mukhammatov
Student ID: 922995460
GitHub Username: shokhabbos-mukhammatov
Assignment Number: 2

HTML Personal Portfolio Website Assignment
Description:
In this assignment we supposed to create our portfolio website using HTML. Objectives were to show how semantically correct we can structure our website and show our skills. Main tasks 
were to separate content to sections with different structures (like paragraphs, lists of skills, some media content, etc). 

Approach / What I Did:
All right,
* Document Setup:
  To make sure the browser renders the page in standards mode, I began with the <!DOCTYPE html> declaration.
  The primary language is set by the <html lang="en"> attribute for SEO and accessibility reasons.
  I added viewport settings for mobile responsiveness, meta tags for character encoding, and descriptive tags (author, description, keywords) inside the <head> section. 
  The favicon link and <title> finish the fundamental configuration required for a page to be easily recognized in browser tabs and bookmarks.

* Next is Header Structure:
  I used the semantic <header> tag to group the introductory section: a main heading (<h1>), profile picture, SFSU logo, and a short paragraph about my background.
  This approach clarifies where the page’s main identity and overview are located.
  Using <h1> ensures that assistive technologies and search engines identify the content’s primary title.
  And of course, putting images there also makes it easier for visitors to immediately connect the images to my affiliation and identity.

* When it comes to body, there are 3 parts: Navigation, Main content and Footer:
  The <nav> element has an ordered list (<ol>) of anchor links that lead to different parts of the page, like Skills, Projects, and About.
  The main navigation sections of the website are easily understood by both users and screen readers thanks to this semantic use of <nav>.
  
  The <main> tag holds the core content, divided into logical <section> elements.
  Each section (About, Projects, Skills, Education) is labeled with a heading (<h2>) to create a clear structure.
  Inside the Projects section, I wrapped each project in an <article> tag to highlight each as a standalone piece of content.
  A live example is embedded using an <iframe>, giving visitors a direct look at one of my projects without leaving the page, for now it's my first made portfolio (I made it outside scope of the class).

  I grouped last page elements, such as the contact section and a short form for direct messages, using the <footer> tag at the end of the HTML.
  To make it easier for visitors to get in touch with me, the contact section includes links to my email, GitHub, and LinkedIn in addition to a submission form.
  Also, to indicate a ownership, a copyright notice is positioned at the bottom. Both readers and search engines can better grasp that these details mark the end of the page thanks to this layout convention.

 Additionally, I used <br> to make spacing, it is needed for showing that navigation through website works. Otherwise, with no gap it is challenging to notice any navigation though the page.
