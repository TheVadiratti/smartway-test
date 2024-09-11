import { useState, useCallback, useEffect } from 'react';

export default function useClipboardCopy(timeout: number) {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPaused(false);
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [isPaused, timeout]);

  const copy = useCallback((value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setIsPaused(true);
      })
      .catch((err) => {
        console.log('Не удалось скопировать текст', err);
      });
  }, []);
  return { isPaused, copy };
}
