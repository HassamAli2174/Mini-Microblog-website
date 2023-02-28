// import { useState } from "react";
// const Home = () => {
//   // const handleClick = (e) =>
//   // {
//   //   console.log("hello,ninjas",e);
//   // }
//   // const handleClickAgain = (name,e) =>
//   // {
//   //   console.log("hello " + name,e.target);
//   // }
// const [name, setName] = useState('Hassam');
// const [age ,setage] = useState(15);

//   // let name = 'Hassam';
//   const handleclick = () => 
//   {
//     setName('Ali');
//     setage(18);
//   }
//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       {/* <button onClick={handleClick}>Click me</button>
//       <button onClick={(e) => handleClickAgain('Hassam',e)}>Click me again</button> */}
//       <p>{ name } is { age} years old</p>
//       <button onClick={handleclick}>Click me</button>
//     </div>
//   );
// }
 



import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const { data: blogs, IsPending, Error } = useFetch('http://localhost:9000/blogs');


//USE-EFFECT DEPENDENCIES    


 // const [Name, setName]=useState('Hassam');
    
  // useEffect(() =>
  // {
  //   console.log('use effect ran');
  //   console.log(Name);
  // }, [Name]);



    return (
        <div className="home">
        {Error && <div>{ Error }</div>}
        {IsPending && <div>Loading....</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         {/* The following components below were used before tut 15*/}
         {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Hassam')} title="Hassam's Blogs!"/> */}
         {/* <button onClick={() => setName('Ali')}>Change Name</button>
         <p>{Name}</p> */}
        </div>
    );
}
export default Home;