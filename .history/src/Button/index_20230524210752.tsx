// import {} from '';
import React from 'react';
interface ButtonProps {
  loading?: boolean;
  onClick?: (e: Event) => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { loading, onClick, disabled } = props;
  const handleClick = (e: any) => {
    if (loading || disabled) {
      return;
    }
    onClick?.(e);
  };
  const innerContext = () => {
    if (loading) {
      return;
    }
  };

  return (
    <button type="button" disabled={disabled} onClick={handleClick}>
      这是一个Button
    </button>
  );
};
export default Button;
