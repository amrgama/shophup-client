import React from 'react'
import Answer from './Answer'
import { TfiCommentAlt } from "react-icons/tfi";
import AnswerQuestion from './AnswerQuestion';

const Answers = ({answers}) => {
  
    const renderedAnswers = answers.map((answer, i)=>{
        return <Answer {...answer} />;
    })

    return (
        <div className='d-flex gap-3'>
            <TfiCommentAlt className='text-muted fs-2' />
            <div className='border-start border-3 border-muted ps-4'>
                {renderedAnswers}
                <AnswerQuestion />
            </div>
        </div>
    )
}

export default Answers