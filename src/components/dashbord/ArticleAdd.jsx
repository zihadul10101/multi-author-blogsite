import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const ArticleAdd = () => {
    return (
        <div className='add-article'>
            <Helmet>
                <title>
                    Article Add
                </title>
            </Helmet>
            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link to='/dashborad/all-artical'>All Article</Link>
                </div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Article Title</label>
                        <input type="text" name="title" placeholder="Article Title" id="title" className="form-control" />
                        <p>Please Provide artical Title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Artical Slug</label>
                        <input type="text" placeholder="Artical Slug" className="form-control" name="slug" id="slug" />
                        <p>Please Provide artical Title</p>

                    </div>
                    <button className="btn">Update</button>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category">
                            <option value="hh">Program</option>
                            <option value="">Algorithms</option>
                            <option value="">Computer</option>
                            <option value="">React</option>
                            <option value="">IOs</option>
                        </select>
                        <p>Please Provide artical Title</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select name="tag" id="tag">
                            <option value="hh">Program</option>
                            <option value="hh">Algorithms</option>
                            <option value="hh">Computer</option>
                            <option value="">React</option>
                            <option value="">IOs</option>
                        </select>
                        <p>Please Provide artical Title</p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArticleAdd;