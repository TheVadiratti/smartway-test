import PageContainer from '../../components/highOrder/PageContainer';
import Link from '../../components/ui/Link';
import { type Repository } from '../../store/repositories';
import Styles from './Repository.module.css';

interface Props {
  repository: Repository;
}

export default function RepositoryPage({ repository }: Props) {
  return (
    <PageContainer extraClass={Styles.container}>
      <div className={Styles.infoSection}>
        <h2 className={Styles.heading}>{repository.fullName}</h2>
        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Description:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.description}
          </p>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Access:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.private ? 'Private' : 'Public'}
          </p>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Language:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.language}
          </p>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>Link:</p>
          <Link to={repository.url}>{repository.url}</Link>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Forks:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.forksCount}
          </p>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Stars:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.starsCount}
          </p>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Issues:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.openIssues}
          </p>
        </div>

        <div className={Styles.infoSection}>
          <p className={`${Styles.text} ${Styles.infoSectionHeading}`}>
            Watchers:
          </p>
          <p className={`${Styles.text} ${Styles.infoSectionValue}`}>
            {repository.watchersCount}
          </p>
        </div>
      </div>

      <div>
        <img
          src={repository.ownerAvatar}
          alt="Owner avatar"
          className={Styles.avatar}
        />
      </div>
    </PageContainer>
  );
}
