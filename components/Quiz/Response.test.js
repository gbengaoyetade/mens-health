import { render } from '@testing-library/react';
import Response from './Response';

describe('Response', () => {
  const answers = {
    0: {
      value: 'Temples',
      isRejection: false,
    },
    1: {
      value: false,
      isRejection: false,
    },
    2: {
      value: false,
      isRejection: false,
    },
  };

  it('should show success message when answers has no rejection', () => {
    const { getByText } = render(<Response answers={answers} />);
    const successMessage =
      'Great news! We have the perfect treatment for your hair loss.';
    expect(getByText(successMessage, { exact: false })).toBeInTheDocument();
  });

  it('should show rejection messagen when answers has rejection', () => {
    const updatedAnswers = {
      ...answers,
      2: {
        value: false,
        isRejection: true,
      },
    };

    const { getByText } = render(<Response answers={updatedAnswers} />);
    const rejectionMessage =
      'Unfortunately, we are unable to prescribe this medication for you.';

    expect(getByText(rejectionMessage, { exact: false }));
  });
});
