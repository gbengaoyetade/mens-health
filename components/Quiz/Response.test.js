import { render } from '@testing-library/react';
import Response from './Response';

describe('Response', () => {
  it('should show success message when hasRejection is false', () => {
    const { getByText } = render(
      <Response hasRejection={false} setShowQuiz={jest.fn()} />
    );
    const successMessage =
      'Great news! We have the perfect treatment for your hair loss.';
    expect(getByText(successMessage, { exact: false })).toBeInTheDocument();
  });

  it('should show rejection messagen when hasRejection is true', () => {
    const { getByText } = render(
      <Response hasRejection={true} setShowQuiz={jest.fn()} />
    );
    const rejectionMessage =
      'Unfortunately, we are unable to prescribe this medication for you.';

    expect(getByText(rejectionMessage, { exact: false }));
  });
});
