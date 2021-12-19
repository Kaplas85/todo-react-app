import { useContext } from 'react'
import { TodoContext } from '../TodoContext';


export default function TodoSearch() {
  const { search, setSearch } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="mx-auto w-96">
      <input
        className="border-2 border-black shadow-md text-center py-2 px-4 mt-9 w-full focus:outline-none focus:ring-2 focus:border-opacity-0 focus:ring-blue-500"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
      />
    </div>
  );
}
