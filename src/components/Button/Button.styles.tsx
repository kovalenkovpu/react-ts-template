import { SerializedStyles, css } from '@emotion/react';

import { BUTTON_TYPES, ButtonProps } from './Button.types';

const getButtonStyles = (props: ButtonProps): SerializedStyles => css`
  padding: 1rem;
  margin: 2px;
  background-color: ${props.btnType === BUTTON_TYPES.ERROR ? '#e97b7a' : '#8a8af5'};
  border-width: 1px;
`;

export { getButtonStyles };
