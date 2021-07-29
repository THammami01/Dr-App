import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Pas trouvé
      </Typography>
      <Typography variant="body2" align="center">
        Aucun résultat trouvé pour &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Essayez à nouveau avec une entrée différente.
      </Typography>
    </Paper>
  );
}
