import Link from 'next/link';
import Post from '../post/Post';
import { useLocale } from 'next-intl';
import { posts } from '@/data/posts';

const Posts = () => {
    const locale = useLocale()
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center px-6 md:px-8 lg:px-16'>
      {posts.map(post => (
        <Link  key={post.id} href={`/${locale}/insight/${post.id}`}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
