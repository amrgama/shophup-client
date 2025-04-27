import React from 'react'
import Question from './Question'
import Answers from './Answers'

const QuestionAndAnswers = ({question, answers}) => {
  
    
    return (
        <>
            <Question {...question} />
            <Answers answers={answers} />
        </>
    )
}

export default QuestionAndAnswers