import React from 'react'

const logicalQuestions = [
  {
    "id": 1,
    "category": "HTML/CSS",
    "question": "HTML kya hoti hai?",
    "answer": "HTML (HyperText Markup Language) ek markup language hai jo web pages ki structure define karti hai. Browser ko batati hai ke content kaise arrange karna hai.\n\nHTML elements tags se banate hain:\n- Headings: h1 se h6 tak\n- Paragraphs: p tag\n- Images: img tag\n- Links: a tag\n- Forms: form, input, button\n\nHar webpage ka foundation HTML hoti hai. CSS styling ke liye aur JavaScript interactivity ke liye use hoti hai, lekin structure sirf HTML deta hai."
  },
  {
    "id": 2,
    "category": "HTML/CSS",
    "question": "Semantic tags kya hote hain?",
    "answer": "Semantic tags wo HTML elements hain jo content ka meaning aur purpose batate hain.\n\nCommon semantic tags:\n- header: Page ka top section\n- nav: Navigation links\n- main: Primary content area\n- article: Self-contained content\n- section: Themed group of content\n- aside: Sidebar ya related content\n- footer: Page ka bottom section\n\nFayde:\n1. SEO better hota hai - search engines content samajhte hain\n2. Screen readers ke liye accessibility improve hoti hai\n3. Code readable aur maintainable rehta hai\n\ndiv se compare karein - div koi meaning nahi deta, sirf ek box hai."
  },
  {
    "id": 3,
    "category": "HTML/CSS",
    "question": "Div aur Span mein kya farq hai?",
    "answer": "div - Block-level element:\n- Apni line par start hota hai\n- Puri available width leta hai\n- Width/height set kar sakte hain\n- Use: sections, containers, layout wrappers\n\nspan - Inline element:\n- Text ke beech mein flow karta hai\n- Sirf content jitni jagah leta hai\n- Line break nahi karta\n- Use: text ke kisi hisse ko style karna\n```\n<div style=\"color:red\">Yeh puri line red hai</div>\n<p>Yeh <span style=\"color:red\">word</span> sirf red hai</p>\n```"
  },
  {
    "id": 4,
    "category": "HTML/CSS",
    "question": "Inline, Internal aur External CSS mein farq?",
    "answer": "Inline CSS: Direct element ke style attribute mein\n```\n<p style=\"color:red; font-size:16px\">Text</p>\n```\nSirf us element par apply, maintenance mushkil.\n\nInternal CSS: HTML head mein style tag ke andar\n```\n<style>\n  p { color: red; font-size: 16px; }\n</style>\n```\nSirf usi page par apply.\n\nExternal CSS: Alag .css file, link tag se connect\n```\n<link rel=\"stylesheet\" href=\"style.css\">\n```\nBest practice - ek file se puri website style, caching se performance better."
  },
  {
    "id": 5,
    "category": "HTML/CSS",
    "question": "Class aur ID mein kya farq hai?",
    "answer": "Class:\n- Multiple elements par apply ho sakti hai\n- CSS mein .classname se select\n- Jab ek style kai jagah chahiye\n```\n.button { background: blue; padding: 10px; }\n```\n\nID:\n- Sirf ek unique element ke liye\n- CSS mein #idname se select\n- ID ki specificity class se zyada hoti hai\n```\n#header { background: navy; height: 60px; }\n```\n\nRule of thumb: class prefer karein - zyada flexible aur reusable. ID sirf truly unique elements ke liye."
  },
  {
    "id": 6,
    "category": "HTML/CSS",
    "question": "Flexbox kya hota hai?",
    "answer": "Flexbox ek CSS layout system hai jo ek direction mein items align karta hai.\n\nContainer par display: flex lagate hain:\n```\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n```\n\nKey properties:\n- flex-direction: row ya column\n- justify-content: main axis (center, space-between, flex-start)\n- align-items: cross axis (center, flex-start, stretch)\n- flex-wrap: items ko wrap karne deta hai\n- gap: items ke beech spacing\n\nCommon use: navbar, card rows, centering elements."
  },
  {
    "id": 7,
    "category": "HTML/CSS",
    "question": "CSS Grid kya hota hai?",
    "answer": "CSS Grid ek two-dimensional layout system hai - ek saath rows aur columns dono.\n```\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  gap: 20px;\n}\n.featured {\n  grid-column: span 2;\n}\n```\n\nFlexbox vs Grid:\n- Flexbox: 1D ke liye (ek row ya column)\n- Grid: 2D ke liye (pura page layout)\n\nDono saath bhi use hote hain - Grid outer layout ke liye, Flexbox inner components ke liye."
  },
  {
    "id": 8,
    "category": "HTML/CSS",
    "question": "Responsive design kya hota hai?",
    "answer": "Responsive design mein website automatically har screen size par correctly display hoti hai.\n\n3 main pillars:\n1. Fluid layouts: Fixed pixels ki jagah % ya fr units\n2. Flexible images: max-width: 100%\n3. Media queries: Breakpoints par alag styling\n\nMobile-first approach:\n- Pehle chhote screens ke liye design\n- Phir min-width se bade screens ke liye expand\n\nFayde:\n- Better user experience\n- SEO ranking improve\n- Ek codebase sab devices ke liye"
  },
  {
    "id": 9,
    "category": "HTML/CSS",
    "question": "Media Queries kya hoti hain?",
    "answer": "Media queries CSS ka feature hain jo specific conditions par different styles apply karta hai.\n```\n/* Mobile default */\n.container { padding: 10px; }\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container { padding: 20px; }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .container { \n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\n```\n\nCommon breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop)."
  },
  {
    "id": 10,
    "category": "HTML/CSS",
    "question": "Position properties kya hoti hain?",
    "answer": "CSS mein 5 position values:\n\nstatic: Default. Normal document flow.\n\nrelative: Normal position se relative move hota hai.\n```\n.box { position: relative; top: 10px; left: 20px; }\n```\n\nabsolute: Nearest positioned ancestor ke relative. Flow se hata jata hai.\n```\n.tooltip { position: absolute; top: 0; right: 0; }\n```\n\nfixed: Viewport ke relative. Scroll par bhi jagah nahi badhti. (Sticky headers)\n\nsticky: Scroll karne par ek position par chipak jata hai."
  },
  {
    "id": 11,
    "category": "HTML/CSS",
    "question": "Z-index kya hota hai?",
    "answer": "Z-index overlapping elements ki stacking order control karta hai - kaun element upar dikhega.\n\nZyada value = upar dikhega:\n```\n.modal { z-index: 1000; }\n.overlay { z-index: 999; }\n.navbar { z-index: 100; }\n```\n\nImportant notes:\n- Sirf positioned elements par kaam karta hai (relative, absolute, fixed, sticky)\n- Static elements par kaam nahi karta\n- Har positioned element apna stacking context banata hai\n- Isliye kabhi kabhi z-index: 9999 bhi kaam nahi karta"
  },
  {
    "id": 12,
    "category": "HTML/CSS",
    "question": "Margin aur Padding mein farq?",
    "answer": "Padding: Content aur border ke beech space (andar)\n```\n.card {\n  padding: 20px; /* sab taraf */\n  padding: 10px 20px; /* top-bottom left-right */\n}\n```\nBackground color padding par bhi dikhti hai.\n\nMargin: Element ke bahar space - dusre elements se distance\n```\n.card {\n  margin: 0 auto; /* center horizontally */\n  margin-bottom: 24px;\n}\n```\nTransparent rehti hai - background nahi dikhti.\n\nBox model order: Content > Padding > Border > Margin\n\nMargin collapse: Adjacent block elements ke margins merge ho jate hain."
  },
  {
    "id": 13,
    "category": "HTML/CSS",
    "question": "Box model kya hota hai?",
    "answer": "CSS Box Model har HTML element ko ek rectangular box manta hai:\n\n1. Content: Actual text/image\n2. Padding: Content aur border ke beech\n3. Border: Padding ke baad ki line\n4. Margin: Element ke bahar ka space\n```\n.box {\n  width: 200px;      /* content width */\n  padding: 20px;\n  border: 2px solid;\n  margin: 10px;\n}\n```\n\nbox-sizing:\n- content-box (default): width = sirf content\n- border-box (recommended): width = content + padding + border\n\nModern practice: * { box-sizing: border-box; }"
  },
  {
    "id": 14,
    "category": "HTML/CSS",
    "question": "Pseudo-classes kya hoti hain?",
    "answer": "Pseudo-classes element ki specific state target karti hain:\n```\na:hover { color: blue; }\ninput:focus { border-color: blue; outline: none; }\nbutton:active { transform: scale(0.98); }\nli:first-child { font-weight: bold; }\nli:nth-child(2n) { background: #f0f0f0; }\na:visited { color: purple; }\ninput:disabled { opacity: 0.5; }\n```\n\nPseudo-elements (:: se) - virtual elements:\n```\np::first-line { font-weight: bold; }\n.card::before { content: ''; display: block; }\n```"
  },
  {
    "id": 15,
    "category": "HTML/CSS",
    "question": "display:none aur visibility:hidden mein farq?",
    "answer": "display: none:\n- Element completely remove DOM layout se\n- Koi jagah nahi leta\n- Screen readers bhi nahi dekhte\n- Page layout shift ho sakta hai\n```\n.hidden { display: none; }\n```\n\nvisibility: hidden:\n- Element invisible hai lekin jagah reserve rehti hai\n- Layout affect nahi hota\n```\n.invisible { visibility: hidden; }\n```\n\nopacity: 0:\n- Invisible, jagah bhi leta hai, events bhi receive karta hai\n\nDropdown menus ke liye visibility prefer karein. Content remove karne ke liye display:none."
  },
  {
    "id": 16,
    "category": "HTML/CSS",
    "question": "Transition aur Animation mein kya farq hai?",
    "answer": "Transition: State change par smooth change. Trigger chahiye.\n```\n.button {\n  background: blue;\n  transition: background 0.3s ease, transform 0.2s;\n}\n.button:hover {\n  background: darkblue;\n  transform: translateY(-2px);\n}\n```\n\nAnimation: Multi-step, complex movements. Bina trigger ke chal sakti hai.\n```\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.loader {\n  animation: spin 1s linear infinite;\n}\n```\n\nSimple hover effects ke liye transition kaafi hai."
  },
  {
    "id": 17,
    "category": "HTML/CSS",
    "question": "Flexbox se centering kaise karein?",
    "answer": "Flexbox se centering sabse easy hai:\n```\n/* Horizontally + Vertically center */\n.container {\n  display: flex;\n  justify-content: center; /* horizontal */\n  align-items: center;     /* vertical */\n  min-height: 100vh;\n}\n\n/* Multiple items center */\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Single item ko center */\n.child {\n  margin: auto; /* flex container mein }\n}\n```\n\nOld technique: position:absolute + transform se bhi hota tha lekin flexbox zyada clean hai."
  },
  {
    "id": 18,
    "category": "HTML/CSS",
    "question": "CSS Variables kya hoti hain?",
    "answer": "CSS Variables (Custom Properties) reusable values store karti hain:\n```\n:root {\n  --primary-color: #1a56db;\n  --secondary-color: #1e429f;\n  --font-size-base: 16px;\n  --spacing-md: 16px;\n  --border-radius: 8px;\n}\n\n.button {\n  background: var(--primary-color);\n  padding: var(--spacing-md);\n  border-radius: var(--border-radius);\n}\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary-color: #93c5fd;\n  }\n}\n```\n\nFayde: Ek jagah change, puri app update. Theming aur dark mode ke liye perfect."
  },
  {
    "id": 19,
    "category": "HTML/CSS",
    "question": "Hover effect kya hota hai?",
    "answer": "Hover effect mouse element par lane par style change karta hai:\n```\n.card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.card:hover {\n  background: #f8fafc;\n  border-color: #1a56db;\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0,0,0,0.1);\n}\n\n.btn:hover {\n  background: darkblue;\n  color: white;\n}\n```\n\nTransition property hover ko smooth banati hai. Bina transition abrupt change hoti hai."
  },
  {
    "id": 20,
    "category": "HTML/CSS",
    "question": "Navbar responsive kaise banate hain?",
    "answer": "Responsive navbar ka basic structure:\n```\n/* Desktop: horizontal */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 32px;\n}\n.nav-links { display: flex; gap: 24px; }\n\n/* Mobile: hamburger */\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    top: 60px; left: 0; right: 0;\n    background: white;\n    padding: 16px;\n  }\n  .nav-links.open { display: flex; }\n  .hamburger { display: block; }\n}\n```\n\nJS se hamburger click par .open class toggle karein."
  },

  {
    "id": 1,
    "category": "JavaScript",
    "question": "JavaScript kya hai?",
    "answer": "JavaScript ek high-level, interpreted programming language hai.\n\nPehle sirf browsers ke liye thi (client-side), ab Node.js ke zariye server par bhi chalti hai.\n\nWeb development ka trifecta:\n- HTML = Structure\n- CSS = Style\n- JS = Behavior / Interactivity\n\nJS se kya kar sakte hain:\n- DOM manipulate karna\n- Events handle karna\n- APIs se data fetch karna\n- Animations banana\n- Forms validate karna\n\nDynamically typed hai - variable ka type runtime par decide hota hai. Multi-paradigm - OOP, functional, event-driven sab support karta hai."
  },
  {
    "id": 2,
    "category": "JavaScript",
    "question": "var, let aur const mein farq?",
    "answer": "var (purani method, avoid karein):\n- Function-scoped\n- Hoisting hoti hai (undefined se initialize)\n- Re-declare aur re-assign ho sakta hai\n\nlet:\n- Block-scoped {}\n- Re-assign ho sakta hai, re-declare nahi\n- Jab value change hogi\n```\nlet count = 0;\ncount = count + 1; // OK\n```\n\nconst:\n- Block-scoped\n- Re-assign ya re-declare nahi\n- Object/array ke contents phir bhi change ho sakte hain\n```\nconst user = { name: 'Ali' };\nuser.name = 'Hassan'; // OK - object mutate\nuser = {}; // ERROR - re-assign nahi\n```\n\nBest practice: const default, sirf jab change hoga tab let."
  },
  {
    "id": 3,
    "category": "JavaScript",
    "question": "Data types JavaScript mein?",
    "answer": "JavaScript mein 8 data types hain:\n\nPrimitive (7):\n- String: 'Hello', \"World\"\n- Number: 42, 3.14, NaN, Infinity\n- BigInt: 9007199254740991n\n- Boolean: true / false\n- Undefined: declared but no value assigned\n- Null: intentional empty value\n- Symbol: unique identifier\n\nNon-primitive (1):\n- Object: Arrays, Functions, Plain objects sab objects hain\n\ntypeof operator:\n```\ntypeof 'hello'    // 'string'\ntypeof 42         // 'number'\ntypeof true       // 'boolean'\ntypeof undefined  // 'undefined'\ntypeof null       // 'object' (JS ka historical bug!)\ntypeof []         // 'object'\ntypeof function(){} // 'function'\n```"
  },
  {
    "id": 4,
    "category": "JavaScript",
    "question": "Array kya hota hai?",
    "answer": "Array ordered list hai jo multiple values store karta hai:\n```\nconst fruits = ['apple', 'mango', 'banana'];\nfruits[0]; // 'apple' (zero-indexed)\nfruits.length; // 3\n```\n\nImportant methods:\n```\n// Add/Remove\nfruits.push('orange');\nfruits.pop();\nfruits.unshift('grapes');\nfruits.shift();\n\n// Transform\n[1,2,3].map(x => x * 2);\n[1,2,3,4].filter(x => x > 2);\n[1,2,3].reduce((a,b) => a+b, 0);\n\n// Search\nfruits.find(f => f === 'mango');\nfruits.includes('apple');\nfruits.indexOf('mango');\n```"
  },
  {
    "id": 5,
    "category": "JavaScript",
    "question": "Arrow function kya hota hai?",
    "answer": "Arrow function ES6 mein aaya, concise syntax:\n```\nfunction add(a, b) { return a + b; }\nconst add = (a, b) => a + b;\nconst double = x => x * 2;\nconst greet = (name) => {\n  const msg = 'Hello ' + name;\n  return msg;\n};\n```\n\nRegular function se key difference - THIS:\n- Arrow function ka apna 'this' nahi\n- Regular function apna 'this' banata hai\n\nEvent handlers mein 'this' chahiye to arrow function se bachein."
  },
  {
    "id": 6,
    "category": "JavaScript",
    "question": "Closure kya hota hai?",
    "answer": "Closure tab banta hai jab inner function outer function ke variables access kare:\n```\nfunction counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst increment = counter();\nincrement();\n```\n\nUse cases:\n- Private variables\n- Memoization\n- Module pattern"
  },
  {
    "id": 7,
    "category": "JavaScript",
    "question": "Hoisting kya hoti hai?",
    "answer": "Hoisting JS ka behavior hai:\n```\ngreet();\nfunction greet() { console.log('Hello'); }\n\nconsole.log(x);\nvar x = 5;\n\nconsole.log(y);\nlet y = 10;\n```\n\nlet/const TDZ error dete hain."
  },
  {
    "id": 8,
    "category": "JavaScript",
    "question": "Event Loop kya hota hai?",
    "answer": "Event Loop JS ki concurrency mechanism hai.\n\nMicrotask (Promise) pehle execute hota hai phir macrotask (setTimeout).\n\nExample:\n```\nconsole.log('1');\nsetTimeout(() => console.log('3'), 0);\nPromise.resolve().then(() => console.log('2'));\n// Output: 1,2,3\n```"
  },
  {
    "id": 9,
    "category": "JavaScript",
    "question": "Promise kya hota hai?",
    "answer": "Promise async result represent karta hai.\nStates: Pending, Fulfilled, Rejected\n\n.then(), .catch(), .finally() use hote hain."
  },
  {
    "id": 10,
    "category": "JavaScript",
    "question": "Async/Await kya hota hai?",
    "answer": "Async/Await Promise ka cleaner syntax hai.\n\nawait Promise resolve hone tak wait karta hai.\n\ntry/catch se error handle karte hain."
  },
  {
    "id": 11,
    "category": "JavaScript",
    "question": "Fetch API kya hoti hai?",
    "answer": "Fetch API HTTP requests ke liye use hoti hai.\n\nGET, POST, PUT, DELETE sab support karta hai.\n\nres.ok check karna zaruri hai."
  },
  {
    "id": 12,
    "category": "JavaScript",
    "question": "JSON kya hota hai?",
    "answer": "JSON data exchange format hai.\n\nJSON.stringify() aur JSON.parse() use hote hain."
  },
  {
    "id": 13,
    "category": "JavaScript",
    "question": "Callback function kya hota hai?",
    "answer": "Callback ek function hai jo dusre function ko pass hota hai.\n\nAsync code me use hota hai."
  },
  {
    "id": 14,
    "category": "JavaScript",
    "question": "Scope kya hota hai?",
    "answer": "Scope define karta hai variable kahan accessible hai.\n\nTypes: Global, Function, Block scope."
  },
  {
    "id": 15,
    "category": "JavaScript",
    "question": "Debouncing kya hoti hai?",
    "answer": "Debounce function delay ke baad execute hota hai jab events ruk jayein."
  },
  {
    "id": 16,
    "category": "JavaScript",
    "question": "Throttling kya hoti hai?",
    "answer": "Throttle function ko interval ke andar limited times run karta hai."
  },
  {
    "id": 17,
    "category": "JavaScript",
    "question": "Local Storage vs Session Storage?",
    "answer": "localStorage permanent hota hai.\nsessionStorage tab close hone par clear ho jata hai."
  },
  {
    "id": 18,
    "category": "JavaScript",
    "question": "Map aur Filter methods?",
    "answer": "map() transform karta hai.\nfilter() condition match karta hai.\nreduce() ek value return karta hai."
  },
  {
    "id": 19,
    "category": "JavaScript",
    "question": "Spread aur Rest operator?",
    "answer": "... spread unpack karta hai.\nrest values collect karta hai."
  },
  {
    "id": 20,
    "category": "JavaScript",
    "question": "Truthy aur Falsy values?",
    "answer": "Falsy: false, 0, '', null, undefined, NaN\nBaaki sab truthy."
  },
  {
    "id": 21,
    "category": "JavaScript",
    "question": "setTimeout aur setInterval?",
    "answer": "setTimeout ek baar run hota hai.\nsetInterval repeat hota hai."
  },
  {
    "id": 22,
    "category": "JavaScript",
    "question": "DOM manipulation kaise karte hain?",
    "answer": "document.querySelector se element select karte hain aur change karte hain."
  },
  {
    "id": 23,
    "category": "JavaScript",
    "question": "Event Delegation kya hota hai?",
    "answer": "Parent par event laga kar child events handle karna."
  },
  {
    "id": 24,
    "category": "JavaScript",
    "question": "Object methods kya hote hain?",
    "answer": "Object.keys(), values(), entries() use hote hain."
  },
  {
    "id": 25,
    "category": "JavaScript",
    "question": "Error handling kaise karte hain?",
    "answer": "try-catch-finally use karte hain."
  },
  {
    "id": 26,
    "category": "JavaScript",
    "question": "Destructuring kya hota hai?",
    "answer": "Array aur object se values extract karna."
  },
  {
    "id": 27,
    "category": "JavaScript",
    "question": "Template Literals kya hote hain?",
    "answer": "Backticks ` se strings likhte hain aur ${} use karte hain."
  },
  {
    "id": 28,
    "category": "JavaScript",
    "question": "Modules kya hote hain?",
    "answer": "Code ko alag files me divide karte hain using import/export."
  },
  {
    "id": 29,
    "category": "JavaScript",
    "question": "Array higher-order functions?",
    "answer": "find, some, every, flat, sort jaise methods."
  },
  {
    "id": 30,
    "category": "JavaScript",
    "question": "Nullish Coalescing aur Optional Chaining?",
    "answer": "?? null/undefined check karta hai.\n?. safe access deta hai."
  },
  {
    "id": 31,
    "category": "JavaScript",
    "question": "Prototype aur Inheritance?",
    "answer": "JS me inheritance prototype chain se hoti hai."
  },
  {
    "id": 32,
    "category": "JavaScript",
    "question": "WeakMap aur WeakSet?",
    "answer": "WeakMap aur WeakSet weak references store karte hain."
  },
  {
    "id": 33,
    "category": "JavaScript",
    "question": "Generator functions kya hoti hain?",
    "answer": "function* aur yield se lazy execution hoti hai."
  },
  {
    "id": 34,
    "category": "JavaScript",
    "question": "Symbol kya hota hai?",
    "answer": "Symbol unique primitive value hota hai."
  }
,

  {
    "question": "React kya hai?",
    "answer": "React Facebook ka banaya open-source JavaScript library hai UI banane ke liye.\n\nLibrary hai framework nahi - sirf View layer handle karta hai.\n\nCore concepts:\n- Component-based: Reusable UI pieces se app banate hain\n- Virtual DOM: Performance optimization\n- Unidirectional data flow: Parent se child ko data\n- Declarative: UI kya hona chahiye batao, kaise nahi\n\nKyun use karein:\n- Large SPAs ke liye ideal\n- Reusable components\n- Strong ecosystem (Router, Redux, etc.)\n- Large community\n\nEcosystem:\n- React Router: Navigation\n- Redux/Zustand: Global state\n- Next.js: Full-stack SSR/SSG\n- React Query: Server state"
  },
  {
    "question": "Component kya hota hai?",
    "answer": "Component React ka building block hai - reusable, self-contained UI piece:\n\n// Simple functional component\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// With state\nfunction Counter({ initialCount = 0 }) {\n  const [count, setCount] = useState(initialCount);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(c => c + 1)}>+</button>\n      <button onClick={() => setCount(c => c - 1)}>-</button>\n    </div>\n  );\n}\n\nBest practices: Single responsibility, PascalCase names, chhote focused components."
  },
  {
    "question": "JSX kya hota hai?",
    "answer": "JSX JavaScript XML - JS mein HTML jaisa syntax:\n\n// JSX example\nconst element = (\n  <div className=\"card\">\n    <h1 style={{ color: 'blue' }}>Hello</h1>\n  </div>\n);\n\nJSX rules:\n- class -> className\n- camelCase events\n- {} for JS expressions\n- Single root element required"
  },
  {
    "question": "Props kya hoti hain?",
    "answer": "Props parent se child ko data pass karne ka mechanism - read-only:\n\nfunction UserCard({ name, age }) {\n  return <h2>{name}, {age}</h2>;\n}\n\nProps immutable hoti hain aur reuse ke liye use hoti hain."
  },
  {
    "question": "State kya hoti hai?",
    "answer": "State component ka dynamic data hota hai jo change hone par UI update karta hai:\n\nconst [count, setCount] = useState(0);\n\nState change = re-render UI automatically"
  },
  {
    "question": "useState hook kya karta hai?",
    "answer": "useState functional components mein local state manage karta hai:\n\nconst [value, setValue] = useState('');\n\nState update karne par component re-render hota hai."
  },
  {
    "question": "useEffect kya hota hai?",
    "answer": "useEffect side effects handle karta hai (API calls, subscriptions):\n\nuseEffect(() => {\n  fetchData();\n}, [dependency]);\n\nCleanup bhi return function mein hota hai."
  },
  {
    "question": "Virtual DOM kya hota hai?",
    "answer": "Virtual DOM real DOM ka lightweight copy hota hai:\n\n- React memory mein virtual tree banata hai\n- Diffing karta hai changes ka\n- Sirf required updates DOM mein apply hoti hain\n\nIs se performance fast hoti hai"
  },
  {
    "question": "React mein key prop kyun use hoti hai?",
    "answer": "key list items ko uniquely identify karti hai:\n\nkey={user.id}\n\nIs se React efficiently update karta hai lists ko."
  },
  {
    "question": "Conditional rendering kya hoti hai?",
    "answer": "Condition ke basis par UI show/hide karna:\n\n{isLoggedIn ? <Dashboard /> : <Login />}"
  },
  {
    "question": "React Router kya hota hai?",
    "answer": "React Router SPA navigation ke liye use hota hai:\n\n<Route path=\"/home\" element={<Home />} />\n\nPage reload ke bina navigation hoti hai."
  },
  {
    "question": "Controlled vs Uncontrolled Component?",
    "answer": "Controlled: React state control karta hai\nUncontrolled: DOM khud control karta hai\n\nControlled zyada recommended hota hai."
  },
  {
    "question": "Lifting state up kya hota hai?",
    "answer": "Jab shared state ko parent component mein move kar diya jaye taake siblings use kar saken."
  },
  {
    "question": "Context API kya hoti hai?",
    "answer": "Global state share karne ka method bina prop drilling ke:\n\n<AuthContext.Provider value={data}>"
  },
  {
    "question": "useRef kya hota hai?",
    "answer": "useRef DOM reference ya mutable value store karta hai without re-render."
  },
  {
    "question": "useMemo kya hota hai?",
    "answer": "Expensive calculations ko memoize karta hai taake unnecessary re-calculation na ho."
  },
  {
    "question": "useCallback kya hota hai?",
    "answer": "Function ko memoize karta hai taake re-renders avoid hon."
  },
  {
    "question": "React Fragment kya hota hai?",
    "answer": "Extra DOM node ke baghair multiple elements return karne ka tarika:\n<></>"
  },
  {
    "question": "Lazy Loading kya hoti hai?",
    "answer": "Components ko on-demand load karna taake initial load fast ho."
  },
  {
    "question": "Prop Drilling aur Context mein farq?",
    "answer": "Prop drilling mein data multiple levels se pass hota hai\nContext mein direct access mil jata hai"
  },
  {
    "question": "React mein forms handle kaise karein?",
    "answer": "Controlled components use karke form state manage ki jati hai."
  },
  {
    "question": "Custom Hooks kya hote hain?",
    "answer": "Reusable logic extract karne ke liye custom hooks banaye jate hain."
  },
  {
    "question": "React.memo kya hota hai?",
    "answer": "Component ko memoize karta hai taake unnecessary re-render na ho."
  },
  {
    "question": "useReducer kya hota hai?",
    "answer": "Complex state logic handle karne ke liye use hota hai useState ka alternative."
  },
  {
    "question": "Error Boundaries kya hoti hain?",
    "answer": "React components jo errors catch karke app crash hone se bachate hain."
  },
  {
    "question": "React mein Performance Optimization?",
    "answer": "Techniques: memo, useMemo, useCallback, lazy loading, code splitting, virtual lists"
  },
  {
    "question": "Redux kya hota hai?",
    "answer": "Global state management library for large applications."
  },
  {
    "question": "Next.js kya hota hai?",
    "answer": "React framework jo SSR, SSG aur full-stack features provide karta hai."
  },
  {
    "question": "React Query kya hota hai?",
    "answer": "Server state management tool with caching and auto-fetching."
  },
  {
    "question": "Zustand kya hota hai?",
    "answer": "Lightweight state management library alternative to Redux."
  },
  {
    "question": "React Testing kya hota hai?",
    "answer": "Testing library jo components aur user interactions test karti hai."
  },
  {
    "question": "Tailwind CSS React mein kaise use karein?",
    "answer": "Utility classes use karke styling ki jati hai without writing CSS files."
  }
]


const Logical = () => {
  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🚀 Interview Prep Hub
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {logicalQuestions.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 transition"
          >
            {/* Question */}
            <h2 className="text-lg font-semibold">{item.question}</h2>

            {/* Answer */}
            <p className="text-gray-700 mt-2 whitespace-pre-wrap">
              {item.answer}
            </p>

            {/* Category */}
            <span className="text-xs text-blue-500 mt-2 inline-block">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Logical