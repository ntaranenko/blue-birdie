import styled from "@emotion/styled";

export const StyledBackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(87, 54, 163, 0.5);
  color: white;
  animation: pulse 1s infinite;
  transition: color 250ms ease;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
