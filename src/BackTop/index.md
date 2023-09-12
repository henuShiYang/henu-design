# BackTop 返回顶部

## 基本用法

按钮主要分为默认、主要、成功、警告、危险五种

```tsx
import { BackTop, Button } from 'henu-design';
const Index = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '150px',
      }}
    >
      <div
        id="backTopWrapper"
        style={{
          height: '100px',
          overflowY: 'scroll',
        }}
      >
        This is the content This is the content This is the content This is the
        content This is the content This is the content This is the content This
        is the content This is the content This is the content This is the
        content This is the content This is the content This is the content
      </div>
      <BackTop
        target={() => document.getElementById('backTopWrapper')}
        styles={{ position: 'absolute', bottom: '10px', right: '5px' }}
      >
        <Button>返回顶部</Button>
      </BackTop>
    </div>
  );
};
export default Index;
```
