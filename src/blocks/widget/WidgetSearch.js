import React, { useContext } from 'react';
import UserContext from '../../context';

const WidgetSearch = () => {
    const data = useContext(UserContext)
    const {setBlogs, blogs, oldBlogValue} = data
    const handleChange =(e)=>{
        e.preventDefault()
        const {value} = e.target
        const search = value==="" ? oldBlogValue : blogs.filter(blog =>blog.postTitle.toLowerCase().indexOf(value.toLowerCase())  !== -1 
        || blog.postContent.toLowerCase().indexOf(value.toLowerCase())  !== -1  )
        setBlogs(search)
    }
    return (
        <div className="widget widget_search">
            <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
                <div className="search input-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" placeholder="Search" name="s" />

                    <div className="input-group-append">
                        <button type="submit" className="btn btn-lg btn-link border-0 p-0 min-w-auto link-no-space"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WidgetSearch;
