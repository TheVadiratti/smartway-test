import { type ChangeEventHandler, useState, useRef } from 'react';
import { fetchRepositories } from '../../../../services/repositories';
import type {
  FoundRepositoriesDto,
  RepositoryDto,
} from '../../../../services/types.dto';
import TextCopyButton from '../../TextCopyButton';
import Styles from './SectionHeader.module.css';

interface Props {
  setFoundRepositoriesHandler: (list: RepositoryDto[]) => void;
}

export default function SectionHeader({ setFoundRepositoriesHandler }: Props) {
  const [value, setValue] = useState('');
  const timerRef = useRef<number | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Если есть предыдущий запрос - удаляет таймер.
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Если есть предыдущий запрос - прерывает его.
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Если строка не пустая - отправляется запрос.
    if (newValue.length) {
      timerRef.current = setTimeout(() => {
        abortControllerRef.current = new AbortController();

        fetchRepositories(newValue, abortControllerRef.current?.signal)
          .then((res: FoundRepositoriesDto) => {
            setFoundRepositoriesHandler(res.items);
          })
          .catch((err) => console.log(err));
      }, 2000);
    } else {
      // Если строка ввода пустая - очищает хранилище.
      setFoundRepositoriesHandler([]);
    }
  };

  return (
    <div className={Styles.container}>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="Find"
      />
      <TextCopyButton value={value} />
    </div>
  );
}
