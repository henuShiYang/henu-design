import { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.less';
const Popconfirm = (props: any) => {
  console.log('props', props);
  // const

  const nodeRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <>
      <span>{props.children}</span>

      <CSSTransition nodeRef={nodeRef} timeout={200}>
        <>
          {ReactDom.createPortal(
            <div className="henu-popconfirm-wrapper" ref={nodeRef}>
              23243434343
            </div>,
            document.body,
          )}
        </>
      </CSSTransition>
    </>
  );
};
export default Popconfirm;
