import PropTypes from "prop-types";
import { StyledButton } from "./LoadMore.styled";

const LoadMore = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load More
    </StyledButton>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
