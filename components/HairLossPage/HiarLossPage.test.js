import { render, fireEvent } from '@testing-library/react';
import HairLossPage from './HairLossPage';
import { getQuestions } from '../../helpers/questions';

const questions = getQuestions();

describe('HairLossPage', () => {
  it('should match snapshots', () => {
    const { container } = render(<HairLossPage questions={questions} />);

    expect(container).toMatchSnapshot();
  });

  it('should show quiz component when the Take The Quiz button is clicked', () => {
    const { getByText } = render(<HairLossPage questions={questions} />);

    fireEvent.click(getByText('TAKE THE QUIZ'));

    expect(
      getByText('Which image best matches your hair loss?')
    ).toBeInTheDocument();
  });

  it('should show back button when not answering the first question', () => {
    const { getByText, getByTestId } = render(
      <HairLossPage questions={questions} />
    );

    fireEvent.click(getByText('TAKE THE QUIZ'));
    fireEvent.click(getByTestId('0_option_0'));

    expect(getByTestId('back-btn')).toBeInTheDocument();
  });

  it('should show previous question when the back button is clicked', () => {
    const { getByText, getByTestId } = render(
      <HairLossPage questions={questions} />
    );

    fireEvent.click(getByText('TAKE THE QUIZ'));
    fireEvent.click(getByTestId('0_option_0'));
    fireEvent.click(getByTestId('back-btn'));

    expect(
      getByText('Which image best matches your hair loss?')
    ).toBeInTheDocument();
  });

  it('should should end the quiz when there are not more questions', () => {
    const { getByText, getByTestId } = render(
      <HairLossPage questions={questions} />
    );

    fireEvent.click(getByText('TAKE THE QUIZ'));
    fireEvent.click(getByTestId('0_option_0'));
    fireEvent.click(getByTestId('1_option_1'));
    fireEvent.click(getByTestId('2_option_1'));

    expect(
      getByText(
        'Great news! We have the perfect treatment for your hair loss.',
        { exact: false }
      )
    ).toBeInTheDocument();
  });
});
