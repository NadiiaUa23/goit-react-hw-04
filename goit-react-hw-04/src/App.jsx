import { useEffect,useState  } from "react";
import './App.css'
import axios from "axios";

function App() {

  const [images, setImag] = useState([]);

    useEffect (() => {
async function imageGallery() {
  const response = await axios.get(
    "https://api.unsplash.com/photos/?client_id=ap6Ua4fpzUMLURTa6HJBsMzGZdxERQbbEI_i0dC8JsU"
  );
  setImag(response.data);
}
imageGallery();
}, []);

  return (
    <div>
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
