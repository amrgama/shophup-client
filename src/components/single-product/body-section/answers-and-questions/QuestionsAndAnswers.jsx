import React from 'react'
import QuestionAndAnswers from './QuestionAndAnswers';
import SearchInput from './SearchInput';
import AskQuestion from './AskQuestion';
import { motion } from 'framer-motion'

const QuestionsAndanswers= [
    {
        question: {
            question: "Can dvds be played on apple computers?",
            by: "Ali Tufan",
            date: "April 24, 2023" 
        },
        answers: [
            {
                answer: "If you buy a separate CD/DVD drive.",
                by: {
                    name: "Ali Tufan",
                    type: "store manger"
                },
                date: "April 25, 2023"
            }
        ]
    }
]
const QuestionsAndAnswers = () => {

    const renderedQuestionAndAnswersList = QuestionsAndanswers.map((item, i)=>{
        return <QuestionAndAnswers {...item} />
    });

    return (
        <motion.div 
            id="questions-and-answers"
            variants={variants}
            initial="initial"
            animate= "animate"
            exit="exit"
            transition={{
                duration: 0.3, 
                type: "spring", 
                stiffness: "60"
            }}
            className='d-flex flex-column gap-5'
        >
            <SearchInput />
            <div className="d-flex flex-wrap gap-5 justify-content-between">
                <div
                    className='col-12 col-lg'
                >
                    {renderedQuestionAndAnswersList}
                </div>
                <AskQuestion />
            </div>
        </motion.div>
    )
}

const variants = {
    "initial": {
        visibility: "hidden", 
        opacity: 0, 
        position: "absolute", 
        translateY: "100%" 
    },
    "animate": {
        visibility: "visible", 
        opacity: 1, 
        position: "relative", 
        translateY: "0%"
    },
    "exit": {
        visibility: "hidden", 
        opacity: 0, 
        position: "absolute", 
        translateY: "-100%"
    }
}

export default QuestionsAndAnswers