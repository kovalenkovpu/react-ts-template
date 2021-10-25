import styled from 'styled-components';

import { BUTTON_TYPES, ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: 1rem 0;
  background-color: ${props =>
    props.btnType === BUTTON_TYPES.ERROR ? '#e97b7a' : '#8a8af5'};
  border-width: 1px;
  margin: 2px;
`;

export { StyledButton };
