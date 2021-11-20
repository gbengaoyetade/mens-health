import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

import style from './quiz.module.css';
import Response from './Response';
import { getQuestions } from '../../helpers/questions';

const Quiz = ({ setShowQuiz }) => {
  const questions = getQuestions();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [hasRejection, setHasRejection] = useState(null);

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      const hasRejection = Object.values(answers).some(
        ({ isRejection }) => isRejection === true
      );

      setHasRejection(hasRejection);
    }
  }, [answers]);

  const handleOptionSelect = (value, isRejection) => {
    const newAnswers = { ...answers, [questionIndex]: { value, isRejection } };
    setAnswers(newAnswers);
    setNextQuestion();
  };

  const setNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleBackButtonClick = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const getOptionClass = (value) => {
    if (answers[questionIndex]?.value === value) {
      return `${style.option} ${style.selected}`;
    }
    return style.option;
  };

  if (hasRejection !== null) {
    return <Response hasRejection={hasRejection} setShowQuiz={setShowQuiz} />;
  }

  return (
    <div className={style.wrapper}>
      <section className={style['questions-wrapper']}>
        {questionIndex > 0 && (
          <button onClick={handleBackButtonClick} className={style.btn}>
            &larr;
          </button>
        )}

        <p className={style.question}>{questions[questionIndex].question}</p>
        <div className={style['options-wrapper']}>
          {questions[questionIndex].options.map(
            ({ display, value, isRejection }, index) => {
              const purified = DOMPurify.sanitize(display);
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: purified,
                  }}
                  className={getOptionClass(value)}
                  onClick={() => handleOptionSelect(value, isRejection)}
                  key={index}
                ></div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
