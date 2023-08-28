# Modal

这是一个简单的例子

```tsx
import { Button, Modal, Space } from 'henu-design';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const handleOnCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button onClick={() => setOpen(true)}>打开弹窗</Button>
        <Modal title="这是一个弹窗" open={open} onCancel={handleOnCancel} />
        <Modal>24334</Modal>
        <Modal>24334</Modal>
      </Space>
    </>
  );
};
```

异步关闭

```tsx
import { Button, Modal, Space } from 'henu-design';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const handleOnCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button onClick={() => setOpen(true)}>打开弹窗</Button>
        <Modal
          title="这是一个弹窗"
          open={open}
          onOk={() => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                reject();
              }, 3000);
            });
          }}
        />
      </Space>
    </>
  );
};
```

函数式调用

```tsx
import { Button, Modal, Space } from 'henu-design';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    Modal.info();
  };
  return (
    <>
      <Space>
        <Button onClick={handleClick}>打开弹窗</Button>
      </Space>
    </>
  );
};
```
