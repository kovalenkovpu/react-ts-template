enum BUTTON_TYPES {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: BUTTON_TYPES;
}

export { BUTTON_TYPES };
export type { ButtonProps };
