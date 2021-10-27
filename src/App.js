import './App.css';
import './components/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import fetchImages from './services/api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import LoaderSpin from './components/Loader';

export default function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!value) return;
    setStatus('pending');
    console.log('page in useEffect:', page);
    fetchImages(value)
      .then(data => {
        if (data.length !== 0) {
          setArr(data);
          setStatus('resolved');
          setPage(prevPage => prevPage + 1);
          return;
        }
        toast.warn('Изображений с таким названием, к сожалению, нет');
        setStatus('idle');
      })
      .catch(err => {
        console.log(err);
        setStatus('error');
      });
  }, [value]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [arr]);

  const toggleModal = largeImageURL => {
    setShowModal(!showModal);
    setLargeImageURL(largeImageURL);
  };

  const clearRender = () => {
    setStatus('idle');
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
    console.log('page in handleClick:', page);
    fetchImages(value, page)
      .then(data => {
        setArr(prev => [...prev, ...data]);
        setStatus('resolved');
      })

      .catch(err => {
        console.log(err);
        setStatus('error');
      });
  };

  return (
    <div>
      <Searchbar
        onValueSubmit={setValue}
        clearRender={clearRender}
        onPageSubmit={setPage}
      />
      <ToastContainer theme="colored" autoClose={2000} />
      {status === 'idle' && <p>Начните поиск изображений</p>}

      {status === 'pending' && (
        <div className="Loader">
          <LoaderSpin />
        </div>
      )}

      {status === 'resolved' && (
        <ImageGallery
          arr={arr}
          handleClick={handleClick}
          onClose={toggleModal}
        />
      )}

      {showModal && (
        <Modal
          value={value}
          onClose={toggleModal}
          largeImageURL={largeImageURL}
        />
      )}
    </div>
  );

  // return<>
  //   <Searchbar onSubmit={setValue} clearRender={clearRender} />
  //   <ToastContainer theme="colored" autoClose={2000} />
  // </>

  // if (status === 'idle') {
  //   return <p>Начните поиск изображений</p>;
  // }

  // if (status === 'pending') {
  //   return (
  //     <div className="Loader">
  //       <LoaderSpin />
  //     </div>
  //   );
  // }

  // if (status === 'resolved') {
  //   return (
  //     <ImageGallery arr={arr} handleClick={handleClick} onClose={toggleModal} />
  //   );
  // }

  // if (showModal) {
  //   <Modal value={value} onClose={toggleModal} largeImageURL={largeImageURL} />;
  // }
}
