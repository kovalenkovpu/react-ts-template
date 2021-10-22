import * as React from 'react';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ btnType, children, ...rest }) => {
  return (
    <StyledButton btnType={btnType} {...rest}>
      {children}
    </StyledButton>
  );
};

export { Button };
