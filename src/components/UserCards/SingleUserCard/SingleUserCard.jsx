import PropTypes from "prop-types";
import logo from "../../../assets/images/logo.svg";
import cardImage from "../../../assets/images/card-image.svg";
import defaultAvatar from "../../../assets/images/default-avatar.svg";
import {
  StyledAvatar,
  StyledButton,
  StyledCardImage,
  StyledDecorCircle,
  StyledDecorRectangle,
  StyledFollowers,
  StyledInfoContainer,
  StyledLogo,
  StyledTweets,
  StyledUserCard,
} from "./SingleUserCard.styled";

const SingleUserCard = ({ id, user, avatar, tweets, followers }) => {
  const formattedFollowersAmount = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <StyledUserCard>
      <StyledLogo src={logo} alt="GoIT Logo" />
      <StyledCardImage src={cardImage} alt="Checkbox and Question mark" />
      <StyledDecorRectangle />
      <StyledDecorCircle>
        <StyledAvatar src={avatar ? avatar : defaultAvatar} alt="" />
      </StyledDecorCircle>
      <StyledInfoContainer>
        <p>{user}</p>
        <StyledTweets>{tweets} Tweets</StyledTweets>
        <StyledFollowers>{formattedFollowersAmount} Followers</StyledFollowers>
      </StyledInfoContainer>
      <StyledButton>Follow</StyledButton>
    </StyledUserCard>
  );
};

export default SingleUserCard;

SingleUserCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
