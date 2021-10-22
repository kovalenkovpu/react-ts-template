import * as React from 'react';

import { Button } from '../Button';
import { BUTTON_TYPES } from '../Button/Button.types';
import { StyledSection } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledSection>
      Hello from React
      <hr />
      <Button btnType={BUTTON_TYPES.PRIMARY}>Click me primary</Button>
      <Button btnType={BUTTON_TYPES.PRIMARY} disabled>
        Click me disabled
      </Button>
      <Button btnType={BUTTON_TYPES.ERROR}>Click me error</Button>
    </StyledSection>
  );
};

export { App };
