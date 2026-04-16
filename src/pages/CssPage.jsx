import React from "react";

const CSSPage = () => {
  const questions = [
    {
      question: "1. Margin vs Padding?",
      answer:
        "Margin element ke bahar space deta hai, jab ke padding element ke andar space deta hai (content aur border ke darmiyan)."
    },
    {
      question: "2. display: none vs visibility: hidden?",
      answer:
        "display: none element ko completely remove kar deta hai layout se, jab ke visibility: hidden element ko hide karta hai lekin space rehta hai."
    },
    {
      question: "3. position: relative vs absolute?",
      answer:
        "relative apni original position se move hota hai, absolute nearest positioned parent ke according move hota hai."
    },
    {
      question: "4. id vs class?",
      answer:
        "id unique hoti hai (ek element ke liye), class multiple elements ke liye use hoti hai."
    },
    {
      question: "5. Flexbox?",
      answer:
        "Flexbox ek layout system hai jo items ko row ya column mein align karne ke liye use hota hai."
    },
    {
      question: "6. CSS Grid?",
      answer:
        "CSS Grid 2D layout system hai jo rows aur columns dono control karta hai."
    },
    {
      question: "7. Flexbox vs Grid?",
      answer:
        "Flexbox 1D (row ya column), Grid 2D (row + column) layout ke liye use hota hai."
    },
    {
      question: "8. Responsive layout?",
      answer:
        "Media queries, flexbox aur grid use karke different screen sizes ke liye layout adjust karte hain."
    },
    {
      question: "9. CSS variables?",
      answer:
        "Variables (custom properties) jo reuse hoti hain jaise --main-color."
    },
    {
      question: "10. CSS animations?",
      answer:
        "Animations keyframes ke through elements ko move ya change karti hain."
    },
    {
      question: "11. CSS specificity?",
      answer:
        "Specificity decide karti hai kaunsi CSS rule apply hogi (id > class > element)."
    },
    {
      question: "12. CSS performance optimize?",
      answer:
        "Unused CSS remove karo, minify karo, aur simple selectors use karo."
    },
    {
      question: "13. Sass & Less?",
      answer:
        "Ye CSS preprocessors hain jo variables, nesting aur functions provide karte hain."
    },
    {
      question: "14. Center element?",
      answer:
        "Flexbox use karo: display:flex, justify-content:center, align-items:center."
    },
    {
      question: "15. Navigation bar?",
      answer:
        "Flexbox use karke horizontal menu bana sakte hain with links."
    },
    {
      question: "16. h1 red rule?",
      answer:
        "h1 { color: red; }"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎨 CSS Interview Questions
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg text-purple-600">
              {q.question}
            </h2>
            <p className="text-gray-700 mt-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSSPage;