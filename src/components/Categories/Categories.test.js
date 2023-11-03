import Categories from './Categories';
import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';

describe('Categories component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Categories />);
    expect(asFragment()).toMatchSnapshot();
  });
});
