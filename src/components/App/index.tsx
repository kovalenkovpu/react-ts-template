import { css } from '@emotion/react';
import * as React from 'react';

import { Button } from '../Button';
import { BUTTON_TYPES } from '../Button/Button.types';

const styles = css`
  background-color: antiquewhite;
  font-size: 2rem;

  margin: {
    top: 10px;
    bottom: 1px;
  }
`;

const App: React.FC = () => {
  return (
    <section css={styles}>
      Hello from React
      <hr />
      <Button btnType={BUTTON_TYPES.PRIMARY}>Click me primary</Button>
      <Button btnType={BUTTON_TYPES.PRIMARY} disabled>
        Click me disabled
      </Button>
      <Button btnType={BUTTON_TYPES.ERROR}>Click me error</Button>
    </section>
  );
};

export { App };
