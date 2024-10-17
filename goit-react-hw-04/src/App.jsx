import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from './components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
// import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU"
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, [query]);

  return (
    <div>
 <SearchBar onSubmit={handleSearchSubmit} />
  <Toaster /> 
 {/*Цей компонент відповідає за відображення тостів */}

 {images.length > 0 ? (
        <ul>
          {images.map(({ id, urls, alt_description, user, likes}) => (
            <li key={id}>
              <a href={urls.full} target="_blank" rel="noreferrer noopener">
                <img src={urls.small} alt={alt_description || "Unsplash image"} />
              </a>
               <p>Автор: {user.name}</p>
              <p>Лайки: {likes}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No images found.</p>
      )}


    </div>
  );
}
export default App;
