import { render } from '@testing-library/react';

import ReactLib from './react-lib';

describe('ReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
