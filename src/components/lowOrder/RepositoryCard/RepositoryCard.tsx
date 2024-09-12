import { type MouseEventHandler } from 'react';
import { type Repository } from '../../../store/repositories';
import Button from '../../ui/Button';
import Link from '../../ui/Link';
import Styles from './RepositoryCard.module.css';

interface Props {
  repository: Repository;
  onClick?: () => void;
}
export default function RepositoryCard({ repository, onClick }: Props) {
  const { id, ownerAvatar, fullName, url, starsCount, forksCount } = repository;

  const moreLinkClickHandler: MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.stopPropagation();
  };

  return (
    <li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div role="button" tabIndex={0} onClick={onClick} className={Styles.card}>
        <div>
          <p>
            NAME:&nbsp;
            <Link to={url} target="_blank">
              {fullName}
            </Link>
          </p>

          <p>{`STARS: ${starsCount}`}</p>
          <p>{`FORKS: ${forksCount}`}</p>
          <Link to={`/${id}`} onClick={moreLinkClickHandler}>
            <Button type="button">More</Button>
          </Link>
        </div>
        <img src={ownerAvatar} alt="Owner avatar" className={Styles.avatar} />
      </div>
    </li>
  );
}
