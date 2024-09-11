import Link from '../../ui/Link';
import Styles from './Header.module.css';

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <h1 className={Styles.heading}>Поиск репозиториев GitHub</h1>
        <div className={Styles.infoContainer}>
          <p>Тестовое задание от Smartway.</p>
          <p>Выполнил: Белоусов Вадим.</p>
          <Link to="https://hh.ru/resume/075a84daff0d5185740039ed1f663370667957">
            Ссылка на резюме (HH.ru)
          </Link>
        </div>
      </div>
    </header>
  );
}
