import React from "react";

const ReactPage = () => {
  const questions = [
    {
      question: "1. What is React and why is it used?",
      answer:
        "React ek JavaScript library hai jo fast aur interactive UI banane ke liye use hoti hai. Isme components hotay hain jo reusable hotay hain."
    },
    {
      question: "2. What is JSX?",
      answer:
        "JSX ek syntax hai jo HTML jaisa lagta hai lekin JavaScript ke andar likha jata hai. React isko JS mein convert karta hai."
    },
    {
      question: "3. Functional vs Class Components?",
      answer:
        "Functional components simple functions hotay hain, jab ke class components classes use karte hain. Aaj kal mostly functional components use hotay hain."
    },
    {
      question: "4. Props and State?",
      answer:
        "Props parent se data lene ke liye hoti hain aur read-only hoti hain. State component ka apna data hota hai jo change ho sakta hai."
    },
    {
      question: "5. Props vs State?",
      answer:
        "Props change nahi hoti, state change hoti hai aur UI update karti hai."
    },
    {
      question: "6. Data pass kaise karte hain?",
      answer:
        "Parent se child component ko data props ke through pass karte hain."
    },
    {
      question: "7. Event handling?",
      answer:
        "React mein events handle karne ke liye onClick, onChange jaise attributes use karte hain."
    },
    {
      question: "8. Re-render kab hota hai?",
      answer:
        "Jab state ya props change hoti hain tab component re-render hota hai."
    },
    {
      question: "9. Virtual DOM?",
      answer:
        "Virtual DOM ek lightweight copy hoti hai real DOM ki jo fast updates karti hai aur performance improve karti hai."
    },
    {
      question: "10. Controlled vs Uncontrolled?",
      answer:
        "Controlled component React state se control hota hai, uncontrolled DOM khud handle karta hai."
    },
    {
      question: "11. Prop Drilling?",
      answer:
        "Data ko multiple components ke through pass karna prop drilling kehlata hai."
    },
    {
      question: "12. Context API?",
      answer:
        "Context API global data share karne ke liye use hoti hai bina props pass kiye."
    },
    {
      question: "13. useState?",
      answer:
        "useState hook state manage karta hai aur state change hone par UI update hoti hai."
    },
    {
      question: "14. useEffect?",
      answer:
        "useEffect side effects handle karta hai jaise API calls ya DOM updates."
    },
    {
      question: "15. useState vs useReducer?",
      answer:
        "useState simple state ke liye aur useReducer complex logic ke liye use hota hai."
    },
    {
      question: "16. useRef?",
      answer:
        "useRef DOM ko access karne aur value store karne ke liye use hota hai bina re-render ke."
    },
    {
      question: "17. useMemo?",
      answer:
        "useMemo expensive calculations ko cache karta hai taake performance improve ho."
    },
    {
      question: "18. useCallback?",
      answer:
        "useCallback function ko memoize karta hai taake unnecessary re-render na ho."
    },
    {
      question: "19. React.memo?",
      answer:
        "React.memo component ko unnecessary re-render se bachata hai."
    },
    {
      question: "20. HOC?",
      answer:
        "Higher Order Component ek function hota hai jo component ko wrap karke extra functionality deta hai."
    },
    {
      question: "21. Custom Hooks?",
      answer:
        "Custom hooks reusable logic ke liye banaye jate hain aur 'use' se start hotay hain."
    },
    {
      question: "22. Keys in lists?",
      answer:
        "Keys unique identifier hoti hain jo React ko batati hain kaunsa element change hua hai."
    },
    {
      question: "23. Lifting State Up?",
      answer:
        "State ko parent component mein move karna taake multiple components use kar saken."
    },
    {
      question: "24. Performance optimize?",
      answer:
        "React.memo, useMemo, useCallback aur lazy loading se performance optimize hoti hai."
    },
    {
      question: "25. Common performance issues?",
      answer:
        "Unnecessary re-renders, heavy calculations aur wrong keys issues create karte hain."
    },
    {
      question: "26. State management?",
      answer:
        "Application ka data manage karna aur components mein share karna."
    },
    {
      question: "27. Redux?",
      answer:
        "Redux ek centralized state management library hai jo predictable data flow provide karti hai."
    },
    {
      question: "28. Zustand?",
      answer:
        "Zustand lightweight state management library hai jo simple aur fast hoti hai."
    },
    {
      question: "29. Data fetch?",
      answer:
        "useEffect ke andar fetch API ya async/await se data fetch karte hain."
    },
    {
      question: "30. Loading & error?",
      answer:
        "Loading aur error states separate state variables se handle karte hain."
    },
    {
      question: "31. Debug?",
      answer:
        "console.log, React DevTools aur browser DevTools se debug karte hain."
    },
    {
      question: "32. Testing?",
      answer:
        "Jest aur React Testing Library use karke testing karte hain."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        ⚛️ React Interview Questions
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg text-blue-600">
              {q.question}
            </h2>
            <p className="text-gray-700 mt-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactPage;