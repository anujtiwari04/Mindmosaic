import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion,AnimatePresence } from 'framer-motion';
import { Brain,Activity,Compass,Users } from 'lucide-react';

const Home = () => {
    const [activeSection,setActiveSection] = useState(0);
    const navigate = useNavigate();

    const sections = [
        {
            title: "Mindmosaic",
            subtitle: "For Every Low, A Place to Grow",
            icon: <Brain size={48} />,
            color: "#00ffff"
        },
        {
            title: "How It Works",
            content: [
                "• Take AI-powered assessments",
                "• Get personalized growth plans",
                "• Track progress with smart analytics",
                "• Access a vast library of resources"
            ],
            icon: <Activity size={48} />,
            color: "#ff00ff"
        },
        {
            title: "Your Journey",
            content: [
                "• Begin with a comprehensive assessment",
                "• Explore tailored strategies and exercises",
                "• Set goals and build positive routines",
                "• Celebrate milestones and track improvements"
            ],
            icon: <Compass size={48} />,
            color: "#ffff00"
        },
        {
            title: "Community & Support",
            content: [
                "• Join themed support groups",
                "• Participate in live webinars",
                "• Access 24/7 AI-assisted support",
                "• Contribute to our knowledge base"
            ],
            icon: <Users size={48} />,
            color: "#00ff00"
        }
    ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveSection((prev) => (prev + 1) % sections.length);
    //     },10000);
    //     return () => clearInterval(interval);
    // },[]);

    const handleNext = () => {
        if (activeSection === sections.length - 1) {
            navigate('/assessment');
        } else {
            setActiveSection((prev) => (prev + 1) % sections.length);
        }
    };

    return (
        <div className="mindmosaic-home">
            <div className="mindmosaic-home__container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0,y: 50 }}
                        animate={{ opacity: 1,y: 0 }}
                        exit={{ opacity: 0,y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="mindmosaic-home__content"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2,type: "spring",stiffness: 260,damping: 20 }}
                            className="mindmosaic-home__icon"
                            style={{ color: sections[activeSection].color }}
                        >
                            {sections[activeSection].icon}
                        </motion.div>
                        <h1 className="mindmosaic-home__title" style={{ color: sections[activeSection].color }}>
                            {sections[activeSection].title}
                        </h1>
                        {sections[activeSection].subtitle && (
                            <p className="mindmosaic-home__subtitle">{sections[activeSection].subtitle}</p>
                        )}
                        {sections[activeSection].content && (
                            <ul className="mindmosaic-home__list">
                                {sections[activeSection].content.map((item,index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0,x: -50 }}
                                        animate={{ opacity: 1,x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="mindmosaic-home__list-item"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </AnimatePresence>
                <div className="mindmosaic-home__button-container">
                    <button
                        onClick={handleNext}
                        className="mindmosaic-home__button"
                    >
                        {activeSection === sections.length - 1 ? "Start Assessment" : "Next"}
                    </button>
                </div>
            </div>
            <div className="mindmosaic-home__indicators">
                {sections.map((_,index) => (
                    <motion.div
                        key={index}
                        className="mindmosaic-home__indicator"
                        style={{
                            backgroundColor: index === activeSection ? sections[index].color : 'rgba(255, 255, 255, 0.3)',
                        }}
                        animate={{ scale: index === activeSection ? 1.5 : 1 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;