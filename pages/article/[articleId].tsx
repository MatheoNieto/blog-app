import {useRouter} from 'next/router';
import type {NextPage} from 'next';

const Article: NextPage = () => {
  const router = useRouter();
  const {articleId} = router.query;

  return(
    <h1>hello {articleId}</h1>
  )
};

export default Article;
