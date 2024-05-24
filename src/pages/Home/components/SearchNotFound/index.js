/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

import { Conatainer } from './styles';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Conatainer>
      <img src={magnifierQuestion} alt="Magnifier Question" />

      <span>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
      </span>
    </Conatainer>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
