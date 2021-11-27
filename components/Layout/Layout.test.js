import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  it('should match snapshots', () => {
    const { container } = render(<Layout />);

    expect(container).toMatchSnapshot();
  });
});
