import { Post } from '../models/Post';

function PostComp(props: { post: Post }) {
  const formatDate = (dateToFormat: Date): string => {
    return new Date(dateToFormat).toLocaleDateString();
  }

  return (
    <div>
      <div>
        <h4>{props.post.title}</h4>
        <p>{props.post.text}</p>
        <p>Creation date: {formatDate(props.post.timestamp)}</p>
        <p>{`Modified ${props.post.version} times`}</p>
      </div>
    </div>
  )
}

export default PostComp;
