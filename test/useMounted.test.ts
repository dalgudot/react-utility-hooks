import { useMounted } from './../src/hooks/useMounted';
import { renderHook } from '@testing-library/react-hooks';

describe('useMounted', () => {
  it('isMounted?', () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });
});
