import React, { useState } from "react";
import "./faqs.css";

const faqData = [
    { question: "How do I install it?", answer: "You can install it by downloading the installer from our website and following the step-by-step instructions." },
    { question: "How it works?", answer: "It works by integrating seamlessly with your current tools and automating repetitive tasks." },
    { question: "What does the version include?", answer: "This version includes basic features, advanced settings, and compatibility with multiple platforms." },
    { question: "How do I access advanced features?", answer: "You can access advanced features by upgrading to the Pro version in your account settings." },
    { question: "Can I add more users to my team?", answer: "Yes, you can add more users from the team management section in your dashboard." },
    { question: "What about new versions and updates?", answer: "We release updates regularly. You will be notified within the app and via email." },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null); // Keeps track of the open FAQ

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Open/close the FAQ
    };


    return (
        <div className="faq-container">
            <h2 className="faq-header">Getting Started</h2>
            {faqData.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${openIndex === index ? "open" : ""}`}

                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">
                        {faq.question}
                        <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
                    </div>
                    {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default FAQs;
