import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '..';
import { BUTTON_TYPES } from '../Button.types';

describe('Button component', () => {
  test('should match the snapshot', () => {
    const { asFragment } = render(<Button btnType={BUTTON_TYPES.ERROR}>Click me</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should call onClick when clicked', () => {
    const onButtonClick = jest.fn();

    render(<Button onClick={onButtonClick}>Click me</Button>);

    const button = screen.getByRole('button', {
      name: /click me/i,
    });

    userEvent.click(button);

    expect(onButtonClick).toBeCalledTimes(1);
  });
});
