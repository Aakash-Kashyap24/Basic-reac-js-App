import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';
import { clearUserErrors, fetchShowSummary } from '../actions/action';
import ProductComponent from '../layout/ProductComponent';
import './productPage.css'

function ProductPage() {
  const dispatch = useDispatch();
  const { shows, error, loading } = useSelector((state) => state.data);


  useEffect(() => {
    if (error) {
      dispatch(clearUserErrors());
    }
  }, [dispatch]);

  return (
    <div className='ProductPage'>
      {loading ? (
        <Loader />
      ) : (
        <div className="showHere">
            {shows?.map((product) => (
           <ProductComponent key={product.id} data={product.show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
