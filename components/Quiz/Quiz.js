import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { CSSTransition } from 'react-transition-group';

import style from './quiz.module.css';
import Response from './Response';
import { getQuestions } from '../../helpers/questions';

const Quiz = ({ setShowQuiz }) => {
  const questions = getQuestions();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      setQuizCompleted(true);
    }
  }, [answers]);

  useEffect(() => {
    setAnimate(true);
  }, [questionIndex]);

  const handleOptionSelect = (value, isRejection) => {
    setAnimate(false);
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
    setAnimate(false);
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

  if (quizCompleted) {
    return (
      <Response
        quizCompleted={quizCompleted}
        setShowQuiz={setShowQuiz}
        answers={answers}
      />
    );
  }

  return (
    <div className={style.wrapper}>
      <CSSTransition
        in={animate}
        timeout={500}
        classNames='animate'
        unmountOnExit
        key={questionIndex}
      >
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
      </CSSTransition>
    </div>
  );
};

export default Quiz;
