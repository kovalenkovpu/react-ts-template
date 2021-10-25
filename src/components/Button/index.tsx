import * as React from 'react';

import { getButtonStyles } from './Button.styles';
import { BUTTON_TYPES, ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = props => {
  const { btnType = BUTTON_TYPES.PRIMARY, children, ...rest } = props;

  return (
    <button {...rest} css={getButtonStyles(props)}>
      {children}
    </button>
  );
};

export { Button };
