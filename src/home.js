import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useState, useEffect } from 'react';


const Home = () => {  

  const {data:blogs, isPending, error}=useFetch( 'http://localhost:8000/blogs')
/*  const [blogs, setBlogs] = useState(null);
  const[isPending, setIsPending]= useState(true)
  const [error, setError]= useState(null);



  useEffect(() => {
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok){
          throw Error('Denied');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err=>{
        setIsPending(false)
        setError(err.message)
      })

    }, 1000)

  }, [])
*/
  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>loadng...</div>}
    {blogs && < BlogList blogs={blogs} title="All BLogs!" />}
    
    </div>
  );
}
 

 
export default Home;