import { LoadingOutlined } from '@ant-design/icons';
import cs from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.less';

interface ButtonProps {
  loading?: boolean;
  className?: string;
  shap?: string;
  type?: string;
  size?: string;
  onClick?: (e: Event) => void;
  disabled?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    loading,
    onClick,
    disabled,
    style,
    shap,
    className,
    type = 'default',
    size,
    children,
  } = props;

  const mergeClassName = cs({
    [className || '']: !!className,
    [`henu-btn-${type}`]: type,
    [`henu-btn-${shap}`]: shap,
    [`henu-btn-${size}`]: size,
    'henu-btn': true,
    'henu-btn-disabled': disabled,
    'henu-btn-loading': loading,
    shap: shap,
  });
  const handleClick = (e: any) => {
    if (loading || disabled) {
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      type="button"
      style={style}
      className={mergeClassName}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading && <LoadingOutlined />}
      {children}
    </button>
  );
};
export default Button;
