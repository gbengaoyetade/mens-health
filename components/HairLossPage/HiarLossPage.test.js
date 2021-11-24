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
});
