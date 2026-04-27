import React from 'react'
import { useState } from 'react';

const questionGroups = [
  {
    title: "JavaScript Basics",
    questions: [
      {
        question: "What is JavaScript? Is it single-threaded or multi-threaded?",
        answer:
          "JavaScript ek high-level, interpreted programming language hai jo web pages ko interactive banati hai (DOM manipulation, events, APIs). Ye single-threaded hoti hai, yani ek waqt me ek hi task execute karti hai. Lekin event loop aur async features ki wajah se non-blocking behavior provide karti hai."
      },
      {
        question: "What are the data types in JavaScript?",
        answer:
          "JavaScript me 2 types ke data types hotay hain: Primitive (String, Number, Boolean, null, undefined, Symbol, BigInt) aur Non-Primitive (Object, Array, Function). Primitive immutable hotay hain jab ke non-primitive reference type hotay hain."
      },
      {
        question: "Difference between null and undefined?",
        answer:
          "undefined tab hota hai jab variable declare ho lekin value assign na ho. null ek intentional empty value hoti hai jo developer khud assign karta hai. undefined system generate karta hai jab ke null developer define karta hai."
      },
      {
        question: "Difference between == and ===?",
        answer:
          "== loose equality hai jo type coercion karta hai (value ko convert karta hai), jab ke === strict equality hai jo value aur type dono compare karta hai. Best practice hai ke === use karein bugs avoid karne ke liye."
      },
      {
        question: "Difference between var, let, and const?",
        answer:
          "var function scoped hota hai aur re-declare ho sakta hai. let block scoped hota hai aur reassign ho sakta hai lekin re-declare nahi hota. const block scoped hota hai aur na reassign hota hai na re-declare. const objects ke andar values change ho sakti hain lekin reference change nahi hota."
      },
      {
        question: "What are truthy and falsy values?",
        answer:
          "Falsy values wo hoti hain jo boolean context me false ban jati hain: false, 0, '', null, undefined, NaN. Inke ilawa sab truthy hoti hain. Ye conditions aur logical operations me important hoti hain."
      },
      {
        question: "What is NaN?",
        answer:
          "NaN ka matlab Not a Number hai. Ye tab aata hai jab invalid mathematical operation perform ho, jaise 'abc' * 2. Ye ek special number type hai aur interesting baat ye hai ke NaN === NaN false hota hai."
      },
      {
        question: "Difference between primitive and non-primitive data types?",
        answer:
          "Primitive types value by copy hotay hain (independent copy ban jati hai). Non-primitive types reference by copy hotay hain, yani multiple variables same memory location ko point karte hain. Isi wajah se objects me changes reflect hotay hain."
      }
    ]
  },

  {
    title: "Scope & Hoisting",
    questions: [
      {
        question: "What is scope in JavaScript?",
        answer:
          "Scope define karta hai ke variable kahan accessible hai. Global scope har jagah accessible hota hai, function scope sirf function ke andar aur block scope {} ke andar (let/const). Scope code ko secure aur manageable banata hai."
      },
      {
        question: "What is lexical scope?",
        answer:
          "Lexical scope ka matlab hai ke function apni definition ke time ke parent scope ko follow karta hai, na ke execution ke time. Inner function outer function ke variables access kar sakta hai."
      },
      {
        question: "What is hoisting?",
        answer:
          "Hoisting JavaScript ka behavior hai jahan variable aur function declarations execution se pehle memory me upar move kar di jati hain. Sirf declaration hoist hoti hai, initialization nahi."
      },
      {
        question: "How does hoisting work with var, let, and const?",
        answer:
          "var hoist hota hai aur undefined se initialize hota hai. let aur const bhi hoist hotay hain lekin unhe initialize nahi kiya jata, is liye wo Temporal Dead Zone me rehte hain jab tak unki line execute na ho."
      },
      {
        question: "What is Temporal Dead Zone (TDZ)?",
        answer:
          "TDZ wo time hota hai jab variable declare ho chuka hota hai lekin initialize nahi hua hota aur usay access nahi kiya ja sakta. Ye let aur const ke sath hota hai aur errors prevent karta hai."
      }
    ]
  },

  {
    title: "Functions",
    questions: [
      {
        question: "What is a function?",
        answer:
          "Function code ka reusable block hota hai jo ek specific task perform karta hai. Ye parameters le sakta hai aur value return kar sakta hai."
      },
      {
        question: "What is a callback function?",
        answer:
          "Callback function wo hota hai jo kisi dusre function ko argument ke taur par pass kiya jata hai aur baad me execute hota hai. Ye async programming aur event handling me use hota hai."
      },
      {
        question: "Difference between arrow functions and normal functions?",
        answer:
          "Arrow functions ka syntax short hota hai aur unka apna this nahi hota, wo parent scope se this lete hain. Normal functions ka apna this hota hai jo call ke hisaab se change hota hai."
      },
      {
        question: "Difference between function declaration and function expression?",
        answer:
          "Function declaration hoist hota hai aur usay pehle call kiya ja sakta hai. Function expression hoist nahi hota aur sirf tab use ho sakta hai jab wo define ho chuka ho."
      },
      {
        question: "What are higher-order functions?",
        answer:
          "Higher-order function wo hota hai jo function ko argument me le ya function return kare. Ye functional programming ka core concept hai, jaise map, filter, reduce."
      }
    ]
  },

  {
    title: "Closures",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "Closure wo function hota hai jo apne outer function ke variables ko yaad rakhta hai even after outer function execute ho jaye. Ye lexical scope ka result hai."
      },
      {
        question: "What are practical use cases of closures?",
        answer:
          "Closures ka use data hiding (private variables), counters, memoization aur event handlers me hota hai. Ye state ko preserve karne ke liye useful hain."
      }
    ]
  },

  {
    title: "Objects & this",
    questions: [
      {
        question: "What is an object in JavaScript?",
        answer:
          "Object ek collection hota hai key-value pairs ka jo related data aur functionality store karta hai. Ye JavaScript ka core concept hai."
      },
      {
        question: "What is the this keyword?",
        answer:
          "this keyword current execution context ko refer karta hai. Object method me ye object ko refer karta hai, global scope me window ko (non-strict mode)."
      },
      {
        question: "How does this behave in arrow functions vs regular functions?",
        answer:
          "Arrow function apna this create nahi karta, wo parent scope ka this use karta hai. Regular function ka this dynamic hota hai jo call ke hisaab se change hota hai."
      }
    ]
  },

  {
    title: "Async JavaScript",
    questions: [
      {
        question: "Difference between synchronous and asynchronous JavaScript?",
        answer:
          "Synchronous code line by line execute hota hai aur wait karta hai. Asynchronous code wait nahi karta aur background me tasks perform karta hai, jaise API calls."
      },
      {
        question: "What is fetch()?",
        answer:
          "fetch ek built-in API hai jo server se data lene ke liye use hota hai. Ye Promise return karta hai jo response handle karne ke liye use hota hai."
      },
      {
        question: "What is a Promise?",
        answer:
          "Promise ek object hai jo future me complete hone wale async operation ka result represent karta hai. Iski states hoti hain: pending, fulfilled, rejected."
      },
      {
        question: "What is async/await?",
        answer:
          "async/await Promises ko handle karne ka modern syntax hai jo code ko readable aur synchronous jaisa banata hai. await Promise ke resolve hone ka wait karta hai."
      },
      {
        question: "What does setTimeout do?",
        answer:
          "setTimeout ek Web API function hai jo specified delay ke baad function execute karta hai. Ye asynchronous behavior provide karta hai."
      },
      {
        question: "What is the event loop?",
        answer:
          "Event loop JavaScript ka mechanism hai jo call stack aur callback queue ko manage karta hai. Ye ensure karta hai ke asynchronous tasks correct order me execute ho."
      }
    ]
  },

  {
    title: "React Basics",
    questions: [
      {
        question: "What is React?",
        answer:
          "React ek JavaScript library hai jo UI banane ke liye use hoti hai. Ye component-based architecture follow karti hai aur fast rendering ke liye virtual DOM use karti hai."
      },
      {
        question: "What are components in React?",
        answer:
          "Components reusable UI blocks hotay hain jo independent hote hain aur apni logic aur UI handle karte hain."
      },
      {
        question: "What is JSX?",
        answer:
          "JSX JavaScript ka syntax extension hai jo HTML jaisa lagta hai aur React me UI likhne ke liye use hota hai."
      },
      {
        question: "What are props?",
        answer:
          "Props data hota hai jo parent component child component ko pass karta hai. Ye read-only hota hai."
      },
      {
        question: "What is state in React?",
        answer:
          "State component ka internal data hota hai jo dynamic hota hai aur change hone par UI re-render hoti hai."
      },
      {
        question: "What is useState hook?",
        answer:
          "useState React hook hai jo functional components me state manage karne ke liye use hota hai."
      },
      {
        question: "What is useEffect hook?",
        answer:
          "useEffect side effects handle karta hai jaise API calls, subscriptions aur DOM updates."
      },
      {
        question: "What is conditional rendering?",
        answer:
          "Conditional rendering ka matlab hai ke condition ke hisaab se different UI show karna."
      },
      {
        question: "How does list rendering work in React?",
        answer:
          "List rendering me array ko map() method se iterate karke elements create kiye jate hain. Har element ko unique key dena zaroori hota hai."
      }
    ]
  }
];


const Juniour = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frontend Interview Questions
      </h1>

      {questionGroups.map((group, gIndex) => (
        <div key={gIndex} className="mb-10">
          {/* Category Title */}
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            {group.title}
          </h2>

          {/* Questions */}
          <div className="space-y-3">
            {group.questions.map((item, qIndex) => {
              const index = `${gIndex}-${qIndex}`;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {/* Question */}
                  <div
                    onClick={() => toggle(index)}
                    className="p-4 cursor-pointer flex justify-between items-center"
                  >
                    <p className="font-medium text-gray-800">
                      {item.question}
                    </p>
                    <span className="text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600 border-t">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Juniour