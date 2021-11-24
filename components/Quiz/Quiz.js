import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { CSSTransition } from 'react-transition-group';

import styles from './quiz.module.css';
import Response from './Response';

const Quiz = ({ setShowQuiz, questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [questionIndex, questions.length]);

  const handleOptionSelect = (value, isRejection) => {
    setAnimate(false);
    const newAnswers = [...answers];
    newAnswers[questionIndex] = { value, isRejection };
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
      return `${styles.option} ${styles.selected}`;
    }
    return styles.option;
  };

  if (answers.length === questions.length) {
    return <Response setShowQuiz={setShowQuiz} answers={answers} />;
  }

  return (
    <div className={styles.wrapper}>
      <CSSTransition
        in={animate}
        timeout={500}
        classNames='animate'
        unmountOnExit
        key={questionIndex}
      >
        <section className={styles['questions-wrapper']}>
          {questionIndex > 0 && (
            <button
              data-testid='back-btn'
              onClick={handleBackButtonClick}
              className={styles.btn}
            >
              &larr;
            </button>
          )}

          <p className={styles.question}>{questions[questionIndex].question}</p>
          <div className={styles['options-wrapper']}>
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
                    data-testid={`${questionIndex}_option_${index}`}
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
