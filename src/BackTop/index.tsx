import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface propsType {
  children: ReactNode;
  styles?: CSSProperties;
  target: () => HTMLElement | Window;
}
const BackTop = (props: propsType) => {
  const { styles, target } = props;
  const [visible, setVisible] = useState(false);

  const debounce = useMemo(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (params: () => void) => {
      console.log('timeoutId', timeoutId);
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      timeoutId = setTimeout(() => {
        params();
        timeoutId = null;
      }, 200);
    };
  }, []);

  const handleScrollTop = useCallback((e: Event) => {
    const scrollTop = (e.target as HTMLElement).scrollTop;
    debounce(() => {
      console.log('scrollTop', scrollTop > 10);
      setVisible(scrollTop > 10);
    });
  }, []);

  useEffect(() => {
    const targetDom = target?.() || window;

    targetDom.addEventListener('scroll', handleScrollTop);
    return () => targetDom.removeEventListener('scroll', handleScrollTop);
  }, []);
  return (
    <div
      onClick={() => {
        console.log('click');
      }}
      style={styles}
    >
      {visible && props.children}
    </div>
  );
};
export default BackTop;
