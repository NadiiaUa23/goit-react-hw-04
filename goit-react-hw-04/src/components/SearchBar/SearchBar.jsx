// import { useState } from "react"; // Імпортуємо useState для стану
// import PropTypes from "prop-types"; // Імпортуємо PropTypes для валідації
// import toast from "react-hot-toast"; // Імпортуємо бібліотеку для сповіщень
// // import styles from './SearchBar.module.css'; // Імпортуємо модулі стилів

// function SearchBar({ onSubmit }) {
//   const [query, setQuery] = useState(""); // Стан для введеного запиту

//   // Функція для обробки зміни тексту в полі введення
//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   // Функція для обробки сабміту форми
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Відміняємо стандартну поведінку форми

//     // Якщо поле порожнє, виводимо сповіщення
//     if (query.trim() === "") {
//       toast.error("Please enter a search query"); // Виводимо сповіщення, якщо інпут порожній
//       return;
//     }

//     // Викликаємо передану функцію onSubmit і передаємо запит
//     onSubmit(query);
//     setQuery(""); // Очищаємо поле після відправки
//   };

//   return (
//     <header >
//       <form onSubmit={handleSubmit} >
//         <input
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query} // Прив'язуємо стан до інпуту
//           onChange={handleInputChange} // Викликаємо обробник зміни тексту
//          // Стилізація інпуту
//         />
//         <button type="submit">
//           Search
//         </button>
//       </form>
//     </header>
//   );
// }

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired, // Валідація onSubmit як обов'язкової функції
// };

// export default SearchBar;
