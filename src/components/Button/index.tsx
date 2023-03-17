import classes from './Button.module.scss';
import { BUTTON_TYPES, ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  btnType = BUTTON_TYPES.PRIMARY,
  children,
  ...rest
}) => {
  return (
    <button {...rest} className={`${classes.button} ${classes[btnType]}`}>
      {children}
    </button>
  );
};

export { Button };
