import PropTypes from 'prop-types';
import { ButtonSearch } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonSearch type="button" onClick={onClick}>
      Load more
    </ButtonSearch>
  );
};

Button.prototype = {
  onClick: PropTypes.func.isRequired,
};
