import cs from 'classnames';
import type { CSSProperties, ReactElement } from 'react';
import './index.less';

export interface SpaceProps {
  style: CSSProperties;
  children?: ReactElement;
  direction?: string;
  gap?: string;
}

const Space = (props: SpaceProps) => {
  const { style = {}, children, direction = 'horizontal', gap = '8px' } = props;
  const mergeClassName = cs('henu-space', `henu-space-${direction}`, {
    // 'henu-space-horizontal': direction === 'horizontal',
    // 'henu-space-verticale': direction === 'vertical',
  });

  return (
    <div style={{ ...style, gap }} className={mergeClassName}>
      {children}
    </div>
  );
};
export default Space;
