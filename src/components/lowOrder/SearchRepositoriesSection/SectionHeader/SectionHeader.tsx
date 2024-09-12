import { type ChangeEventHandler, useState, useRef } from 'react';
import { fetchRepositories } from '../../../../services/repositories';
import type { FoundRepositoriesDto } from '../../../../services/types.dto';
import repositories, {
  mapFromDtoToStoreData,
} from '../../../../store/repositories';
import TextCopyButton from '../../TextCopyButton';
import Styles from './SectionHeader.module.css';

export default function SectionHeader() {
  const [value, setValue] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const timerRef = useRef<number | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Если есть предыдущий запрос - удаляет таймер.
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      setIsFetching(false);
    }

    // Если есть предыдущий запрос - прерывает его.
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Если строка не пустая - отправляется запрос.
    if (newValue.length) {
      setIsFetching(true);

      timerRef.current = setTimeout(() => {
        abortControllerRef.current = new AbortController();

        fetchRepositories(newValue, abortControllerRef.current?.signal)
          .then((res: FoundRepositoriesDto) => {
            repositories.setSearchedRepositories(
              mapFromDtoToStoreData(res.items)
            );
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setIsFetching(false);
          });
      }, 2000);
    } else {
      // Если строка ввода пустая - очищает хранилище.
      repositories.resetSearchedRepositories();
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.inputContainer}>
        <h2 className={Styles.heading}>Search</h2>
        <input
          autoFocus
          type="text"
          value={value}
          onChange={changeHandler}
          placeholder="query"
        />
        <TextCopyButton value={value} />
      </div>
      <p className={Styles.status}>{isFetching ? 'Fetching...' : 'Ready'}</p>
    </div>
  );
}
