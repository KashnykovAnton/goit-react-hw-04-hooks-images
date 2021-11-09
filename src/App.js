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
// import useScrollPosition from './hooks/useScrollPosition';

export default function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  // const scrollPosition = useScrollPosition();
  // console.log('scrollPosition:', scrollPosition);

  useEffect(() => {
    if (!value) return;
    setStatus('pending');
    fetchImages(value, page)
      .then(data => {
        if (data.length !== 0) {
          page === 1 ? setArr(data) : setArr(prev => [...prev, ...data]);
          setStatus('resolved');
          return;
        }
        toast.warn('Изображений с таким названием, к сожалению, нет');
        setStatus('idle');
      })
      .catch(err => {
        console.log(err);
        setStatus('error');
      })
      .finally(() => {
        windowScroll();
      });
  }, [value, page]);

  const windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = largeImageURL => {
    setShowModal(!showModal);
    setLargeImageURL(largeImageURL);
  };

  const clearRender = () => {
    setStatus('idle');
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
    // setTimeout(() => {
    //   windowScroll();
    // }, 500);
    console.log('arr in HandleClick:', arr);
    console.log('page in handleClick:', page);
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
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
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
