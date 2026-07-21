/**
 * =====================================================
 * Day 5 — DOM Demo 
 * Tip: each section matches an HTML block in index.html
 * =====================================================
 */


// =====================================================
// 1) Selectors
// HTML: #topic-selectors
// =====================================================
// Selectors help JavaScript find HTML elements on the page.


// ----- 1.1 getElementById -----
// Select ONE element by its id.
// Returns: one element (or null).

// var mainTitle = document.getElementById("mainTitle");
// console.log("1.1 getElementById:", mainTitle);
// mainTitle.style.color = "red";


// ----- 1.2 getElementsByClassName -----
// Select ALL elements with the same class.
// Returns: HTMLCollection (NOT a real array).

// var itemsByClass = document.getElementsByClassName("item");
// console.log("1.2 getElementsByClassName:", itemsByClass);
// console.log("1.2 length:", itemsByClass.length);
// console.log("1.2 first item:", itemsByClass[0]);
// itemsByClass.push("test"); // Error — no push()

// for (var i = 0; i < itemsByClass.length; i++) {
//   itemsByClass[i].style.borderBottom = "1px solid #ca1d1d";
// }


// ----- 1.3 getElementsByTagName -----
// Select ALL elements with the same tag name.
// Returns: HTMLCollection.

// var listItems = document.getElementsByTagName("li");
// console.log("1.3 getElementsByTagName('li'):", listItems);


// ----- 1.4 getElementsByName -----
// Select elements by the name attribute (forms).
// Returns: NodeList.

// var inputByName = document.getElementsByName("fname");
// console.log("1.4 getElementsByName('fname'):", inputByName);
// console.log("1.4 value:", inputByName[0].value);


// ----- 1.5 querySelector -----
// Select the FIRST element that matches a CSS selector.
// Returns: one element (or null).

// var firstItem = document.querySelector(".item");
// console.log("1.5 querySelector('.item'):", firstItem);
// firstItem.style.fontWeight = "bold";


// ----- 1.6 querySelectorAll -----
// Select ALL elements that match a CSS selector.
// Returns: NodeList.

// var allItems = document.querySelectorAll(".item");
// console.log("1.6 querySelectorAll('.item'):", allItems);
// console.log("1.6 last item:", allItems[allItems.length - 1]);


// ----- 1.7 document.body -----
// Direct access to the <body> element.

// console.log("1.7 document.body:", document.body);


// ----- 1.8 document.title -----
// Read or change the browser tab title.

// console.log("1.8 document.title:", document.title);
// document.title = "About Us";



// =====================================================
// 2) Content: innerHTML vs innerText vs textContent
// HTML: #topic-content
// =====================================================
// innerHTML   → can read/write HTML tags
// innerText   → visible text only
// textContent → all text as plain text


// var contentBox = document.getElementById("contentBox");
// var output = document.getElementById("output");

// console.log("2) innerHTML:", contentBox.innerHTML);
// console.log("2) innerText:", contentBox.innerText);
// console.log("2) textContent:", contentBox.textContent);

// output.innerHTML = "<strong>2)</strong> innerHTML can add HTML tags.";
// output.textContent = "<strong>2)</strong> textContent shows tags as text.";



// =====================================================
// 3) Attributes
// HTML: #topic-attributes
// =====================================================
// getAttribute() → read an attribute
// setAttribute() → change or add an attribute
// .value         → read/write input value


// var demoImage = document.getElementById("demoImage");
// var demoLink = document.getElementById("demoLink");
// var attrInput = document.getElementById("attrInput");

// console.log("3) link href:", demoLink.getAttribute("href"));
// console.log("3) input placeholder:", attrInput.getAttribute("placeholder"));
// console.log("3) input value:", attrInput.value , );

// demoLink.setAttribute("href", "https://www.google.com");
// demoLink.textContent = "Open Google";
// attrInput.setAttribute("data-demo", "dom-lesson");
// console.log("3) custom attribute:", attrInput.getAttribute("data-demo"));

// Change image src (example)
// demoImage.setAttribute("src", "./imgs/img1.png");



// =====================================================
// 4) Styles and Classes
// HTML: #topic-styles
// =====================================================
// style     → change one CSS property
// classList → add / remove / toggle / replace classes


// var subTitle = document.getElementById("subTitle");
// var toggleThemeButton = document.getElementById("toggleThemeButton");

// // Direct style
// subTitle.style.textAlign = "center";
// subTitle.style.letterSpacing = "1px";

// Or many styles at once:
// subTitle.style.cssText = "color:#fff; background:#09e; padding:20px;";

// subTitle.classList.add("demo-card");

// toggleThemeButton.addEventListener("click", function () {
//   subTitle.classList.toggle("productTwo");
//   console.log("4) classes now:", subTitle.className);
// });



// =====================================================
// stopPropagation (js method)

// 5) Click Event
// HTML: #topic-click
// =====================================================
// addEventListener() is the modern way to listen to events.


// var clickButton = document.getElementById("clickButton");
// var clickResult = document.getElementById("clickResult");

// clickButton.addEventListener("click", function () {
//   clickResult.textContent = "5) Button clicked! Text updated by JavaScript.";
// });

// Double click example:
// clickButton.addEventListener("dblclick", function () {
//   clickResult.textContent = "5) Double click detected.";
// });



// =====================================================
// 6) Mouse Events
// HTML: #topic-mouse
// =====================================================


// var hoverDiv = document.getElementById("hoverDiv");

// hoverDiv.addEventListener("mouseover", function () {
//   hoverDiv.classList.add("hover-active");
//   hoverDiv.textContent = "Mouse is over the card";
// });

// hoverDiv.addEventListener("mouseout", function () {
//   hoverDiv.classList.remove("hover-active");
//   hoverDiv.textContent = "Hover over me!";
// });



// =====================================================
// 7) Keyboard / Input Events
// HTML: #topic-keyboard
// =====================================================
// keydown → which key was pressed
// input   → runs every time the value changes


// var myInput = document.getElementById("myInput");
// var charCount = document.getElementById("charCount");

// myInput.addEventListener("keydown", function (event) {
//   // console.log(event);
  
//   console.log("7) Key pressed:", event.key);
// });

// myInput.addEventListener("input", function () {
//   charCount.textContent = "Characters: " + myInput.value.length;
//   console.log("7) Live value:", myInput.value);
// });



// =====================================================
// 8) Focus and Blur
// HTML: #topic-focus
// =====================================================


// var usernameField = document.getElementById("usernameField");
// var focusResult = document.getElementById("focusResult");

// usernameField.addEventListener("focus", function () {
//   focusResult.textContent = "8) Input field focused.";
//   usernameField.classList.add("input-focus");
// });

// usernameField.addEventListener("blur", function () {
//   focusResult.textContent = "8) Input field lost focus.";
//   usernameField.classList.remove("input-focus");
// });


// =====================================================
// 9) Submit Event (Form)
// HTML: #topic-submit
// =====================================================
// preventDefault() stops page refresh
// .value reads what the user typed


// var form = document.getElementById("myForm");
// var username = document.getElementById("username");
// var formResult = document.getElementById("formResult");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   formResult.textContent = "9) Welcome, " + username.value + "!";
//   username.value = "";
// });



// =====================================================
// 10) Change Event (Select)
// HTML: #topic-change
// =====================================================
// change runs after the user picks a new option
// input runs on every keystroke (different use case)


// var selectElement = document.getElementById("mySelect");
// var selectedFruit = document.getElementById("selectedFruit");

// selectElement.addEventListener("change", function () {
//   if (selectElement.value) {
//     selectedFruit.textContent = "Favorite fruit: " + selectElement.value;
//   } else {
//     selectedFruit.textContent = "Favorite fruit: not selected yet.";
//   }
// });



// =====================================================
// 11) Create / Append / Remove + event.target
// HTML: #topic-dynamic
// =====================================================
// createElement() → make a new element
// appendChild()   → add it to the page
// remove()        → delete it
// event.target    → the real element that was clicked


// var addItemButton = document.getElementById("addItemButton");
// var newItemInput = document.getElementById("newItemInput");
// var dynamicList = document.getElementById("dynamicList");
// var container = document.getElementById("container");
// var itemNumber = 4;

// // Add new item
// addItemButton.addEventListener("click", function () {
//   var text = newItemInput.value.trim() || ("item" + itemNumber);

//   var newItem = document.createElement("li");
//   newItem.className = "item created-item";
//   newItem.textContent = text + " — click to remove";
//   dynamicList.appendChild(newItem);

//   newItemInput.value = "";
//   itemNumber++;
//   console.log("11) New item added.");
// });

// // Remove clicked item using event.target
// dynamicList.addEventListener("click", function (event) {
//   console.log(event.target);
  
//   if (event.target.classList.contains("item")) {
//     // console.log("11) You clicked:", event.target.textContent);
//     event.target.remove();
//   }
// });

// Fill the empty container
// container.innerHTML = "<p>11) JavaScript can create content here.</p>";
// var note = document.createElement("p");
// note.textContent = "Click any list item to remove it.";
// container.appendChild(note);



// =====================================================
// Mini Challenges (for students)
// =====================================================
/*
  1) Use getElementById to change #mainTitle text to your name.
  2) Toggle a class on #subTitle when clicking #toggleThemeButton.
  3) Make a live character counter for #myInput.
  4) On form submit: preventDefault + show "Welcome, NAME" in #formResult.
  5) Add a new <li> from #newItemInput and remove items on click.
*/
