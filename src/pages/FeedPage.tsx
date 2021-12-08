import React, {
  Dispatch,
  useState,
  SetStateAction,
  useEffect,
} from "react";
import { postData, postResponse, defaultPostData } from './../models/Post';
import Post from '../components/PostComp';

const fetchAllPosts = async (): Promise<postResponse> => {
  // get json data from API
  const postResJson = await fetch('http://localhost:3030/post/getAllPosts');
  // convert json to a JavaScript object
  const postResObj: postResponse = await postResJson.json();
  return postResObj;
}

function FeedPage() {
  // state variables
  const [allPosts, setAllPosts]: [postData, Dispatch<SetStateAction<postData>>] = useState(defaultPostData);

  const onMount = async () => {
    const allPostsFetch = await fetchAllPosts();
    if (allPostsFetch.success === true) {
      setAllPosts({
        isLoaded: true,
        posts: allPostsFetch.allPost
      });
    }
  }

  // runs only once at the page load
  useEffect(() => {
    onMount().catch(error => { console.error(error) });
  }, []);

  return (
    <div>
      {!(allPosts.isLoaded) && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {(allPosts.isLoaded && allPosts.posts.length > 0) && allPosts.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}

export default FeedPage;