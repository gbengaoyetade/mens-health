import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

import style from './quiz.module.css';
import Response from './Response';

const questions = [
  {
    question: 'Which image best matches your hair loss?',
    type: 'ChoiceType',
    options: [
      {
        display:
          '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
        value: 'Temples',
        isRejection: false,
      },
      {
        display:
          '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x"/>',
        value: 'Temples & Crown',
        isRejection: false,
      },
      {
        display:
          '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
        value: 'Patchy',
        isRejection: true,
      },
      {
        display:
          '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x" />',
        value: 'Moderate',
        isRejection: false,
      },
      {
        display:
          '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x"/>',
        value: 'Extensive',
        isRejection: true,
      },
      {
        display:
          '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x" />',
        value: 'Complete',
        isRejection: true,
      },
    ],
  },
  {
    question:
      'Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?',
    type: 'ChoiceType',
    options: [
      {
        display: 'Yes',
        value: true,
        isRejection: true,
      },
      {
        display: 'No',
        value: false,
        isRejection: false,
      },
    ],
  },
  {
    question:
      'Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?',
    type: 'ChoiceType',
    options: [
      {
        display: 'Yes',
        value: true,
        isRejection: true,
      },
      {
        display: 'No',
        value: false,
        isRejection: false,
      },
    ],
  },
];

const Quiz = ({ setShowQuiz }) => {
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

  const handleBackButton = () => {
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
          <button onClick={handleBackButton} className={style.btn}>
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
