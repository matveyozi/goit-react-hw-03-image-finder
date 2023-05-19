import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ handleLoadMore }) => {
    return (
        <ButtonLoadMore type="button" onClick={handleLoadMore}>
            Load more
        </ButtonLoadMore>
    );
}

Button.propTypes = {
    handleLoadMore: PropTypes.func,
};