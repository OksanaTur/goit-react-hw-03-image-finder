import propTypes from 'prop-types';
import {SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput, SearchHeader } from './Searchbar.styled';


export const Searchbar = ({ onSubmit }) => (
  <SearchHeader>
  <SearchForm onSubmit={onSubmit}>
    <SearchFormBtn type="submit" >
      <SearchFormBtnLabel>Search</SearchFormBtnLabel>
    </SearchFormBtn>

    <SearchFormInput
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchHeader>
)

Searchbar.prototype = {
    onSubmit: propTypes.func.isRequired,
}