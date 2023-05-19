import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };

state = {
    inputText: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputText.trim() === '') {
      alert('are you looking for a space?')
      return;
    }
    this.props.onSubmit(this.state.inputText);
    this.setState({ inputText: '' });
  };

  handleInput = event => {
    this.setState({ inputText: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <SearchBar>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchButton type="submit">
              <ButtonLabel>Search</ButtonLabel>
            </SearchButton>

            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search..."
              onChange={this.handleInput}
            />
          </SearchForm>  
        </SearchBar>
      </div>
    );
  }
}


