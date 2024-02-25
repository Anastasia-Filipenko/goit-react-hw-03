import { useId } from 'react';
import css from '../SearchBox/SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  const search = useId();
  return (
    <div className={css.container}>
      <label htmlFor={search}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
        id={search}
      />
    </div>
  );
}
