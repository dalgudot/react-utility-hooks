[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@dalgu/react-utility-hooks.svg)](https://www.npmjs.com/package/@dalgu/react-utility-hooks)

# react-utility-hooks

Frequently used React Custom Hooks

<br/>

## Installation

```
npm i @dalgu/react-utility-hooks
```

```
yarn add @dalgu/react-utility-hooks
```

<br/>

## Usage

### `useMounted()`

The `useMounted()` hook returns true after the first rendering of the React component. This is a useful hook when you need to know the mounted state or devolop with Server Side Rendering(SSR).

```jsx
import { useMounted } from '@dalgu/react-utility-hooks';

const UtilityHooks = () => {
  const mounted = useMounted();
  console.log(mounted);

  return <></>;
};

export default UtilityHooks;
```

<br/>

## Contact

[dalgudot@gmail.com](mailto:dalgudot@gmail.com)

<br/>

## License

[MIT](https://github.com/dalgudot/react-toast/blob/main/LICENSE)
