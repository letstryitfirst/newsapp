//import PropTypes from 'prop-types'
import React from 'react'
import Noimg from '../assets/noimage.jpeg'
const NewsItem=(props)=> {
   
        let { title, description, imageUrl,newsUrl,author,date } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?Noimg:imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem