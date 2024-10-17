import { useEffect} from "react";//, useState 
import axios from "axios";
// import SearchBar from './components/SearchBar/SearchBar';
// import { Toaster } from 'react-hot-toast';
// import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  // const [images, setImages] = useState([]);
  // const [query, setQuery] = useState("");

  // const handleSearchSubmit = (searchQuery) => {
  //   setQuery(searchQuery);
  // };

  useEffect(() => {
    async function fetchImages(query) {
      try {
      const response = await axios.get(
       `https://api.unsplash.com/search/photos?query=${query}&client_id=ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU`
      );
      console.log(response.data.results); // дані з результатами пошуку
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
 
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Photo Search</h1>
      
    </div>
  );
}
export default App;
