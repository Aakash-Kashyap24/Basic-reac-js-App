import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../layout/Loader';
import { useParams } from 'react-router-dom';
import './viewproducts.css';

function ViewProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  const fetchShowSummary = async () => {
    try {
      const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setSummary(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowSummary();
  }, [id]);

  return (
    <div className='ViewProduct'>
      {loading ? (
        <Loader />
      ) : (
        <div className='showSummary'>
          <PRODUCTSHERE summary={summary} />
        </div>
      )}
    </div>
  );
}

const PRODUCTSHERE = ({ summary }) => {
  return (
    <div className="productsHere">
      <div className="img-h">
        <img id='img-h' src={summary?.image.original || summary?.image.medium} alt="Image Here" />
      </div>
      <div className="contentsHere">
        <div className="flex flex-col w-100 align-left">
          <span className='name'>{summary?.name}</span>
          <div className="flex gap-20">
            {summary?.genres.map((genre) => {
              return <span className='genres' key={genre}>{genre}</span>;
            })}
          </div>
          <span className="circle mt-10">{summary?.rating?.average||7.1}</span>
         </div>
          <div className="flex flex-col align-left ">
            <span className="mt-10">Overview</span>
            <span dangerouslySetInnerHTML={{ __html: summary?.summary }} />
          </div>
          <span>Language: {summary?.language}</span>
          <span>Status: {summary?.status}</span>
          <span>Premiered: {summary?.premiered}</span>
          <span>Type: {summary?.type}</span>
          <span>Runtime: {summary?.runtime} minutes</span>
          {/* <span>Official Site: <a href={summary?.officialSite}>{summary?.officialSite}</a></span>
        </div> */}
      </div>
    </div>
  );
};

export default ViewProduct;
