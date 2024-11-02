import React,{ useState } from 'react';
// import '../styles/FAQ.css';

const FAQ = () => {
    const [activeIndex,setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How does online therapy work?",
            answer: "Online therapy works through our secure platform where you can connect with licensed therapists through chat, video calls, or audio calls. You can choose the communication method that works best for you."
        },
        {
            question: "Is my information kept confidential?",
            answer: "Yes, we take your privacy seriously. All communications are encrypted, and we follow strict privacy guidelines to ensure your information remains confidential."
        },
        {
            question: "Can I change therapists if I'm not satisfied?",
            answer: "Absolutely! We want you to find the right match. You can switch therapists at any time through your account settings."
        },
        {
            question: "What are the payment options?",
            answer: "We accept all major credit cards, debit cards, and UPI payments. Subscriptions are billed monthly and can be cancelled anytime."
        },
        {
            question: "How often will I receive wellness content?",
            answer: "Premium and Ultimate subscribers receive daily motivational quotes and weekly wellness videos. Content is carefully curated by our mental health experts."
        }
    ];

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq,index) => (
                    <div className="faq-item" key={index}>
                        <div
                            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {faq.question}
                            <span className="arrow">{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;