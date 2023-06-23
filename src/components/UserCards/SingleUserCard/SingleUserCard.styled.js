import styled from "@emotion/styled";

export const StyledUserCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  text-transform: uppercase;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.userCardShadow};
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.userCardBackground};
`;
export const StyledLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const StyledCardImage = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;
export const StyledDecorRectangle = styled.div`
  position: absolute;
  top: 214px;
  left: 0px;
  width: 380px;
  height: 8px;
  box-shadow: ${({ theme }) => theme.shadows.decorShadow};
  background: ${({ theme }) => theme.colors.primaryColor};
`;
export const StyledDecorCircle = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.decorShadow};
  background: ${({ theme }) => theme.colors.primaryColor};
`;
export const StyledAvatar = styled.img`
  top: 187px;
  left: 159px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.userCardBackground};
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-top: 284px;
  font-weight: 500;
`;
export const StyledTweets = styled.p``;
export const StyledFollowers = styled.p``;
export const StyledButton = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 26px;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  border-radius: 10px;
  background-color: ${({ theme, isFollowing }) =>
    isFollowing ? theme.colors.accent : theme.colors.primaryColor};
  font-size: ${({ theme }) => theme.fs.s};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
  transition: background-color 250ms ease, transform 250ms ease;

  :hover,
  :focus {
    background-color: ${({ theme, isFollowing }) =>
      isFollowing ? theme.colors.accent : theme.colors.primaryColor};
    transform: scale(0.95);
  }
`;
