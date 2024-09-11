// Правило отключено для масштабируемости.
// eslint-disable-next-line import/prefer-default-export
export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Ошибка: ${res.status}`);
};
