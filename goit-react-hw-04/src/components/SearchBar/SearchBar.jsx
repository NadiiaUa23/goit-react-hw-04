import styles from '../SearchBar/SearchBar.modules.css';
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {

    return(
<header>
  <form>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>

</header>

)
};

export default SearchBar;