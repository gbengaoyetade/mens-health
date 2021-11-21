import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should should match snapshots', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
