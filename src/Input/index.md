# Input

### 这是一个简单的用法

```tsx
import { Input } from 'henu-design';

export default () => {
  return <Input />;
};
```

### 可清除的 input 框

通过 clearable 属性控制是否显示清除按钮

```tsx
import { Input } from 'henu-design';

export default () => {
  return <Input allowClear />;
};
```

### 前缀或者后缀图标

在输入框上添加前缀或后缀图标。

```tsx
import { InfoCircleOutlined } from '@ant-design/icons';
import { Input, Space } from 'henu-design';
export default () => {
  return (
    <Space direction="verticale">
      <Input prefix={InfoCircleOutlined} allowClear />
      <Input suffix={InfoCircleOutlined} allowClear />
    </Space>
  );
};
```

### 密码框

密码框

```tsx
import { Input, Space } from 'henu-design';
export default () => {
  return (
    <Space direction="verticale">
      <Input type="password" allowClear />
    </Space>
  );
};
```

### Input 状态

状态

```tsx
import { Input, Space } from 'henu-design';
export default () => {
  return (
    <Space direction="verticale">
      <Input status="success" type="password" allowClear />
      <Input status="error" type="password" allowClear />
      <Input status="warning" type="password" allowClear />
      <Input status="success" type="password" allowClear />
    </Space>
  );
};
```
