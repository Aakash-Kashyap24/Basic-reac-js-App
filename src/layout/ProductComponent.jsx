import React from 'react';
import './productComponents.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchShowSummary } from '../actions/action';

function ProductComponent({ data }) {
 

  
  return (
    <div className='ProductLayout'>
      <div className="img-here">
        <img id='img-here' src={data?.image.original || data?.image.medium} alt="" />
      </div>
      <div className="overlay-rating">
        <div className="circle">
          <span>{data?.rating.average || 2.1}</span>
        </div>
        <div className="flex gap-20">
          {data?.genres.map((genres) => (
            <span className='genres'>{genres}</span>
          ))}
        </div>
      </div>
      <div className="content-details">
        <span className='name'>{data?.name}</span>
        <span className='opacity-low'>{data?.premiered}</span>
      </div>
      <Link to={`${data.id}`} className="view-details">
        <span >View</span>
      </Link>
    </div>
  );
}

export default ProductComponent;
