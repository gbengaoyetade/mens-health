import Head from 'next/head';
import HairLossPage from '../components/HairLossPage';

const HairLoss = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Hair loss</title>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <HairLossPage questions={questions} />
    </>
  );
};

export async function getStaticProps() {
  let questionz = await fetch(
    'https://manual-case-study.herokuapp.com/questionnaires/972423.json'
  );

  const jsonResponse = await questionz.json();

  return { props: jsonResponse };
}
export default HairLoss;
