import PageContainer from '../../components/highOrder/PageContainer';
import Link from '../../components/ui/Link';
import routes from '../../router/routes';

export default function NotFoundPage() {
  return (
    <PageContainer>
      <h1>Страница не найдена.</h1>
      <Link to={routes.main.index}>Вернутся на главную</Link>
    </PageContainer>
  );
}
