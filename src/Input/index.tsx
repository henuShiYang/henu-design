import {
  CloseCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import cs from 'classnames';
import React, { CSSProperties, ElementType, ReactNode, useState } from 'react';
import './index.less';
interface propsType {
  style?: CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  value?: string;
  default?: string;
  placeholder?: string;
  prefix?: ElementType;
  className?: string;
  allowClear?: false;
  suffix?: ElementType;
  type?: string;
  maxLength: number;
  status?: string;
}
const Input = (props: propsType) => {
  const {
    onChange,
    value,
    placeholder,
    style,
    allowClear,
    suffix: Suffix,
    prefix: Prefix,
    type = 'text',
    maxLength = Infinity,
    status = 'default',
  } = props;

  const [inputValue, setInputValue] = useState(value);
  const [inputType, setInputType] = useState(type);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      return;
    }
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleInputClear = () => {
    setInputValue('');
    onChange?.('');
  };

  const handleSwitchPassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const mergeSuffix = (): ReactNode => {
    if (type === 'password') {
      if (inputType === 'password') {
        return <EyeInvisibleOutlined onClick={handleSwitchPassword} />;
      } else {
        return <EyeOutlined onClick={handleSwitchPassword} />;
      }
    }
    if (Suffix) {
      return <Suffix />;
    }
    return null;
  };

  return (
    <span
      className={cs('henu-input-wrapper', `henu-input-${status}`)}
      style={style}
    >
      {Prefix && (
        <span className="henu-input-preix">
          <Prefix />
        </span>
      )}

      <input
        className="henu-input"
        type={inputType}
        onChange={handleInputOnChange}
        value={inputValue}
        placeholder={placeholder}
      />

      {allowClear && (
        <span className="henu-input-clear">
          {allowClear && inputValue && (
            <CloseCircleOutlined onClick={handleInputClear} />
          )}
        </span>
      )}
      {(type === 'password' || Prefix) && (
        <span className="henu-input-suffix">{mergeSuffix()}</span>
      )}
    </span>
  );
};
export default Input;
