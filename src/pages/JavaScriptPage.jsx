import React from "react";

const JSPage = () => {
  const questions = [
    {
      question: "1. What is JavaScript and how is it different from Java?",
      answer:
        "JavaScript ek scripting language hai jo web pages ko interactive banati hai. Java ek programming language hai jo backend aur applications ke liye use hoti hai. Dono bilkul different hain."
    },
    {
      question: "2. Difference between let, const, var?",
      answer:
        "var old hai aur function scoped hota hai. let aur const block scoped hotay hain. let change ho sakta hai, const change nahi hota."
    },
    {
      question: "3. null vs undefined?",
      answer:
        "undefined ka matlab value assign nahi hui, jab ke null ka matlab intentionally empty value."
    },
    {
      question: "4. == vs ===?",
      answer:
        "== sirf value compare karta hai, === value aur type dono compare karta hai."
    },
    {
      question: "5. this keyword?",
      answer:
        "this current object ko refer karta hai. iska value context ke hisaab se change hota hai."
    },
    {
      question: "6. Scope & Closures?",
      answer:
        "Scope variables ki access define karta hai. Closure function hota hai jo apne outer variables ko yaad rakhta hai."
    },
    {
      question: "7. Hoisting?",
      answer:
        "Hoisting mein variables aur functions top par le jaye jate hain. var hoist hota hai undefined ke sath, let/const temporal dead zone mein hotay hain."
    },
    {
      question: "8. Function declaration vs expression?",
      answer:
        "Declaration hoist hota hai, expression hoist nahi hota."
    },
    {
      question: "9. Arrow functions?",
      answer:
        "Arrow functions short syntax hotay hain aur apna this nahi hota, wo parent ka this use karte hain."
    },
    {
      question: "10. ES6 features?",
      answer:
        "let/const, arrow functions, template literals, destructuring, spread operator, modules."
    },
    {
      question: "11. Callbacks?",
      answer:
        "Callback ek function hota hai jo dusre function ko argument ke taur par pass hota hai."
    },
    {
      question: "12. Callback hell?",
      answer:
        "Nested callbacks ko callback hell kehte hain. Isko promises ya async/await se avoid karte hain."
    },
    {
      question: "13. Promises?",
      answer:
        "Promise async operation ka result hota hai jo pending, fulfilled ya rejected state mein hota hai."
    },
    {
      question: "14. async/await?",
      answer:
        "async/await asynchronous code ko synchronous jaisa readable bana deta hai."
    },
    {
      question: "15. Event loop?",
      answer:
        "Event loop asynchronous tasks ko handle karta hai aur callback queue se tasks execute karta hai."
    },
    {
      question: "16. Objects?",
      answer:
        "Objects key-value pairs hote hain jo data store karte hain."
    },
    {
      question: "17. map, filter, reduce?",
      answer:
        "map data change karta hai, filter select karta hai aur reduce combine karta hai."
    },
    {
      question: "18. Deep clone?",
      answer:
        "JSON.parse(JSON.stringify(obj)) se deep copy karte hain ya structuredClone use karte hain."
    },
    {
      question: "19. Fetch vs Axios?",
      answer:
        "Fetch built-in hai aur manual JSON handling karta hai, Axios automatic JSON parse karta hai aur features zyada hain."
    },
    {
      question: "20. Error handling?",
      answer:
        "try-catch aur .catch() se errors handle karte hain."
    },
    {
      question: "21. typeof null?",
      answer:
        "typeof null ka output 'object' hota hai jo JavaScript ka bug hai."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🟨 JavaScript Interview Questions
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg text-yellow-600">
              {q.question}
            </h2>
            <p className="text-gray-700 mt-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JSPage;