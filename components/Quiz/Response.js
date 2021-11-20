import style from './response.module.css';
import quizStyle from './quiz.module.css';

const Response = ({ hasRejection, setShowQuiz }) => {
  return (
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
  );
};

export default Response;
