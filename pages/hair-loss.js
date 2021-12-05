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
  let response = await fetch(process.env.QUIZ_URL);

  const jsonResponse = await response.json();

  return { props: jsonResponse };
}
export default HairLoss;
