import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 28px;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadows.buttonShadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  font-size: ${({ theme }) => theme.fs.s};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
  transition: background-color 250ms ease, transform 250ms ease;

  :hover,
  :focus {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
