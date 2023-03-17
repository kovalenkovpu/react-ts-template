import classes from './App.module.scss';
import { Button } from '../Button';
import { BUTTON_TYPES } from '../Button/Button.types';

const App: React.FC = () => {
  return (
    <section className={classes.app}>
      Hello from React
      <hr />
      <Button>Click me primary</Button>
      <Button btnType={BUTTON_TYPES.PRIMARY} disabled>
        Click me disabled
      </Button>
      <Button btnType={BUTTON_TYPES.ERROR}>Click me error</Button>
    </section>
  );
};

export { App };
