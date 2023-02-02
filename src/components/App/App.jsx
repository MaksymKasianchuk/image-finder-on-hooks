import { useState, useEffect } from 'react'
import { Container, ErrorMessage, LoadMoreBtnWrap } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import * as API from 'api/api';

const STATUSES = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved'
};

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUSES.IDLE);

  const handleSubmit = (values) =>{
    const { query } = values;
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage=> prevPage + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setStatus(STATUSES.PENDING);
      try {
        const newImages = await API.searchImages(query, page);
        if(newImages.length === 0){
          setError(`Nothing found for your request: ${query}`);
          setStatus(STATUSES.REJECTED);
        }
        else{
          setImages(prevImages => [...prevImages, ...newImages]);
          setStatus(STATUSES.RESOLVED);
        }
      } 
      catch (error) {
        setError(error);
        setStatus(STATUSES.REJECTED);
      }
    }

    if(!query) { return; }
    fetchImages();
  }, [query, page]);


  if(status === STATUSES.IDLE){
    return(
      <Searchbar submitHandler={handleSubmit} />
    );
  };

  if(status === STATUSES.PENDING || status === STATUSES.RESOLVED){
    return(
      <>
      <Searchbar submitHandler={handleSubmit} />
      <Container>
        <ImageGallery images={images}/>
        {status === STATUSES.PENDING ? (<Loader/>) : (
          <LoadMoreBtnWrap>
            <Button clickHandler={loadMore}/>
          </LoadMoreBtnWrap>
        )}
      </Container>
      </>
    );
  };

  if(status === STATUSES.REJECTED){
    return(
      <>
        <Searchbar submitHandler={handleSubmit} />
        <Container>
          <ErrorMessage>{error}</ErrorMessage>
        </Container>
      </>
    );
  };
}

export default App;