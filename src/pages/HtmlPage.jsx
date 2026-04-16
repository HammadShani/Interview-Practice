import React from "react";

const HTMLPage = () => {
  const questions = [
    {
      question: "1. HTML vs XML?",
      answer:
        "HTML web pages banane ke liye use hota hai jab ke XML data store aur transport ke liye use hota hai. HTML predefined tags use karta hai, XML custom tags allow karta hai."
    },
    {
      question: "2. HTML5 features?",
      answer:
        "HTML5 mein semantic tags, audio/video support, canvas, local storage aur better form controls aate hain."
    },
    {
      question: "3. Semantic tags?",
      answer:
        "Semantic tags wo hotay hain jo meaning define karte hain jaise <header>, <footer>, <article>."
    },
    {
      question: "4. Non-semantic tags?",
      answer:
        "Non-semantic tags sirf structure ke liye hotay hain jaise <div>, <span>."
    },
    {
      question: "5. label tag purpose?",
      answer:
        "Label input field ke sath text connect karta hai, usability aur accessibility improve karta hai."
    },
    {
      question: "6. button vs submit?",
      answer:
        "button general action ke liye hota hai jab ke submit form ko server par send karta hai."
    },
    {
      question: "7. alt attribute?",
      answer:
        "Alt image ka alternative text hota hai jo image load na ho to show hota hai aur SEO mein help karta hai."
    },
    {
      question: "8. Responsive images?",
      answer:
        "Responsive images ke liye max-width:100% use karte hain ya srcset attribute use hota hai."
    },
    {
      question: "9. HTML table?",
      answer:
        "Table <table>, <tr>, <td>, <th> tags se banayi jati hai."
    },
    {
      question: "10. head tag?",
      answer:
        "<head> tag mein meta info hoti hai jaise title, links, scripts jo page par directly show nahi hoti."
    },
    {
      question: "11. meta tags?",
      answer:
        "Meta tags page ke baare mein information dete hain jaise description, keywords aur viewport settings."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🧱 HTML Interview Questions
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg text-green-600">
              {q.question}
            </h2>
            <p className="text-gray-700 mt-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HTMLPage;