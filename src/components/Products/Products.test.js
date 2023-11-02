import Products from './Products';
import { render } from '@testing-library/react';
import { describe, expect } from '@jest/globals';

describe('Products component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Products />);
    expect(asFragment()).toMatchSnapshot();
  });
});
