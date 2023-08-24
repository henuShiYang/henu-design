# Button

## 基本用法

按钮主要分为默认、主要、成功、警告、危险五种

```tsx
import { Button, Space } from 'henu-design';
const Index = () => {
  return (
    <Space>
      <Button>这是一个按钮</Button>
      <Button type="primary">这是一个按钮</Button>
      <Button type="success">这是一个按钮</Button>
      <Button type="warning">这是一个按钮</Button>
      <Button type="danger">这是一个按钮</Button>
    </Space>
  );
};
export default Index;
```

## 形状

分为圆形、半圆形

```tsx
import { Button, Space } from 'henu-design';
const Index = () => {
  return (
    <Space>
      <Button shap="circle">圆形</Button>
      <Button shap="round">半圆形</Button>
    </Space>
  );
};
export default Index;
```

## 按钮尺寸

总共分为大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。 默认为中

```tsx
import { Button, Space } from 'henu-design';
const Index = () => {
  return (
    <Space>
      <Button size="large">大</Button>
      <Button size="middle">中</Button>
      <Button size="small">小</Button>
    </Space>
  );
};
export default Index;
```

## 禁用状态

disabled 为 true 即可让按钮处于不可用状态，所有的事件都不会响应，同时按钮样式也会改变。

```tsx
import { Button, Space } from 'henu-design';
const Index: Fc<{
  /**
   * @description 属性描述
   * @default 默认值
   *
   *
   */
  disabled?: false;
}> = () => {
  return (
    <Space>
      <Button type="primary" disabled>
        禁用
      </Button>
    </Space>
  );
};

export default Index;
```

## 加载中

添加 loading 属性即可让按钮处于加载状态

```tsx
import { Button, Space } from 'henu-design';
const Index = () => {
  return (
    <Space>
      <Button type="primary" loading>
        loading
      </Button>
    </Space>
  );
};
export default Index;
```

<API id="Button"></API>
