import React, {useState, useEffect} from "react"; //import useState and useEffect
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false); //create isLoaded array const containing variable and method
    const [fetchedPosts, setFetchedPosts] = useState([]); //create fetchedPosts array const containing variable and method

    //create useEffect function
    //replace componentDidMount method with the useEffect method 
    //call setTimeout function and set isLoaded, and fetchedPosts using their methods
    useEffect(()=>{
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);
    
    //save handleChange function as a const
    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        //replace this.setState method by using the setFetchedPosts method
        setFetchedPosts(filteredPosts)
    }

    //remove reference to {this} or {this.state}
    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchinput">Search</label>
                    <input 
                    type="search" 
                    id="searchinput" 
                    onChange={(e)=>{handleChange(e)}}
                    />
                    <h4>Posts Found: {fetchedPosts.length}</h4>
                </form>
                
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItem savedPosts={fetchedPosts} />
                    : <Loader />

                }  
    
            </div>
        </div>
    )
}

export default ContentHooks