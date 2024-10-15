import { useEffect,useState  } from "react";
import './App.css'
import axios from "axios";
import SearchBar from './components/SearchBar/SearchBar';



function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function imageGallery() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    imageGallery();
  }, []);

  return (
    <div>
<SearchBar />


      {images.length > 0 ? (
        <ul>
          {images.map(({ id, urls, alt_description }) => (
            <li key={id}>
              <a href={urls.full} target="_blank" rel="noreferrer noopener">
                <img src={urls.small} alt={alt_description || "Unsplash image"} />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
}
export default App
