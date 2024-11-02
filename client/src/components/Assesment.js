import React,{ useState,useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { Brain,Activity,Compass,Users,ChevronRight,RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        question: "How frequently do you engage in physical exercise?",
        options: ["Daily","Weekly","Monthly","Rarely","Never"],
        icon: <Activity size={48} />,
        color: "#00ffff"
    },
    {
        question: "Do you find it difficult to concentrate on tasks?",
        options: ["Always","Often","Sometimes","Rarely","Never"],
        icon: <Brain size={48} />,
        color: "#ff00ff"
    },
    {
        question: "How often do you feel stressed or anxious?",
        options: ["Always","Often","Sometimes","Rarely","Never"],
        icon: <Compass size={48} />,
        color: "#ffff00"
    },
    {
        question: "How would you rate your overall mood?",
        options: ["Very Good","Good","Neutral","Bad","Very Bad"],
        icon: <Users size={48} />,
        color: "#00ff00"
    },
    {
        question: "How often do you feel socially connected?",
        options: ["Always","Often","Sometimes","Rarely","Never"],
        icon: <Brain size={48} />,
        color: "#ff00ff"
    }
];

const quotes = [
    "A peaceful mind leads to a healthy body and a harmonious life. — Sadhguru",
    "You must be the change you wish to see in the world. — Mahatma Gandhi",
    "The mind is everything. What you think, you become. — Buddha",
    "Good health is not just about being disease-free. It is a state of complete physical, mental, and social well-being. — Dr. Harsh Vardhan",
    "A calm mind brings inner strength and self-confidence, so that's very important for good health. — Dalai Lama",
    "The greatest wealth is health. — Mahatma Gandhi",
    "To achieve great things, two things are needed: a plan and not quite enough time. — Dr. A.P.J. Abdul Kalam",
    "You have to dream before your dreams can come true. — Dr. A.P.J. Abdul Kalam"
];

function Assessment() {
    const [answers,setAnswers] = useState(Array(questions.length).fill(''));
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [response,setResponse] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [quote,setQuote] = useState('');
    // const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }
    },[isLoading]);

    const handleAnswerChange = (value) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = value;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };

    const generatePrompt = () => {
        let prompt = "Based on the following mental health questionnaire responses, provide 5 concise, one-line suggestions for improving mental well-being:\n\n";
        questions.forEach((q,index) => {
            prompt += `${q.question}: ${answers[index]}\n`;
        });
        prompt += "\nPlease provide 5 brief, actionable suggestions, one per line:";
        return prompt;
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

        // Add error handling for missing API key
        if (!apiKey) {
            console.error('API key is missing');
            setResponse('Error: API key is not configured');
            setIsLoading(false);
            return;
        }

        const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';

        const requestBody = {
            contents: [
                {
                    parts: [
                        {
                            text: generatePrompt()
                        }
                    ]
                }
            ]
        };

        try {
            const response = await fetch(`${apiUrl}?key=${apiKey}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const generatedText = data.candidates[0].content.parts[0].text;
            setResponse(generatedText);
        } catch (error) {
            console.error('There was a problem with the fetch operation:',error);
            setResponse('Error fetching data');
        } finally {
            setIsLoading(false);
        }
    };

    // const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progress = (answers.filter(answer => answer !== '').length / questions.length) * 100;

    const handleRetakeAssessment = () => {
        setAnswers(Array(questions.length).fill(''));
        setCurrentQuestion(0);
        setResponse('');
        setIsLoading(false);
        setQuote('');
    };

    return (
        <div className="mindmosaic-assessment">
            <div className="mindmosaic-assessment__progress-container">
                <div className="mindmosaic-assessment__progress-text">
                    {`${Math.round(progress)}%`}
                </div>
                <div className="mindmosaic-assessment__progress-bar">
                    <motion.div
                        className="mindmosaic-assessment__progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
            {/* <div className="mindmosaic-assessment__progress-bar">
                <motion.div
                    className="mindmosaic-assessment__progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
                <div className="mindmosaic-assessment__progress-text">
                    {`${Math.round(progress)}%`}
                </div>
            </div> */}
            <div className="mindmosaic-assessment__container">
                <AnimatePresence mode="wait">
                    {!isLoading && !response && (
                        // ... (previous question rendering code remains unchanged)
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0,y: 50 }}
                            animate={{ opacity: 1,y: 0 }}
                            exit={{ opacity: 0,y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="mindmosaic-assessment__content"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2,type: "spring",stiffness: 260,damping: 20 }}
                                className="mindmosaic-assessment__icon"
                                style={{ color: questions[currentQuestion].color }}
                            >
                                {questions[currentQuestion].icon}
                            </motion.div>
                            <h2 className="mindmosaic-assessment__question" style={{ color: questions[currentQuestion].color }}>
                                {questions[currentQuestion].question}
                            </h2>
                            <div className="mindmosaic-assessment__options">
                                {questions[currentQuestion].options.map((option,index) => (
                                    <motion.button
                                        key={index}
                                        className={`mindmosaic-assessment__option ${answers[currentQuestion] === option ? 'selected' : ''}`}
                                        onClick={() => handleAnswerChange(option)}
                                        initial={{ opacity: 0,x: -50 }}
                                        animate={{ opacity: 1,x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </div>
                            <motion.button
                                className="mindmosaic-assessment__next-button"
                                onClick={handleNext}
                                disabled={!answers[currentQuestion]}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                                <ChevronRight size={20} />
                            </motion.button>
                        </motion.div>
                    )}
                    {isLoading && (
                        // ... (previous loading state code remains unchanged)
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mindmosaic-assessment__loading"
                        >
                            <p className="mindmosaic-assessment__quote">{quote}</p>
                            <div className="mindmosaic-assessment__spinner"></div>
                        </motion.div>
                    )}
                    {response && (
                        <motion.div
                            key="response"
                            initial={{ opacity: 0,y: 50 }}
                            animate={{ opacity: 1,y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mindmosaic-assessment__response"
                        >
                            <h2 className="mindmosaic-assessment__response-title">Your Personalized Suggestions:</h2>
                            <ul className="mindmosaic-assessment__suggestions">
                                {response.split('\n').map((line,index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0,x: -50 }}
                                        animate={{ opacity: 1,x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {line}
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.button
                                className="mindmosaic-assessment__retake-button"
                                onClick={handleRetakeAssessment}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Retake Assessment
                                <RefreshCw size={20} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Assessment;