import * as React from 'react';

import { StyledButton } from './Button.styles';
import { BUTTON_TYPES, ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  btnType = BUTTON_TYPES.PRIMARY,
  children,
  ...rest
}) => {
  return (
    <StyledButton btnType={btnType} {...rest}>
      {children}
    </StyledButton>
  );
};

export { Button };
