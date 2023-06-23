import { StyledContainer, StyledLink } from "./HomePage.styled";

const HomePage = () => {
  return (
    <StyledContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome!</h1>
      <p>To see your tweets, please click the link below:</p>
      <StyledLink to="/tweets">Go to Tweets</StyledLink>
    </StyledContainer>
  );
};

export default HomePage;
