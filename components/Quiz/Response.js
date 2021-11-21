import { useState, useEffect } from 'react';
import style from './response.module.css';
import quizStyle from './quiz.module.css';
import { CSSTransition } from 'react-transition-group';

const Response = ({ setShowQuiz, answers }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const hasRejection = Object.values(answers).some(
    ({ isRejection }) => isRejection === true
  );

  return (
    <CSSTransition
      in={animate}
      timeout={500}
      classNames='animate'
      unmountOnExit
    >
      <div className={quizStyle.wrapper}>
        <section className={style['response-wrapper']}>
          {hasRejection ? (
            <p>
              Unfortunately, we are unable to prescribe this medication for you.
              This is because finasteride can alter the PSA levels, which maybe
              used to monitor for cancer. You should discuss this further with
              your GP or specialist if you would still like this medication.
            </p>
          ) : (
            <p>
              Great news! We have the perfect treatment for your hair loss.
              Proceed to <a href='https://manual.co'>www.manual.co</a>, and
              prepare to say hello to your new hair!
            </p>
          )}
          <button className={style.btn} onClick={() => setShowQuiz(false)}>
            Go Home
          </button>
        </section>
      </div>
    </CSSTransition>
  );
};

export default Response;
