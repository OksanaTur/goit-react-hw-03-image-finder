import propTypes from 'prop-types';
import { Btn } from './Button.styled';


export const Button = ({ onClick }) => (
    <Btn type='button' onClick={onClick}>
        Load more
    </Btn>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};