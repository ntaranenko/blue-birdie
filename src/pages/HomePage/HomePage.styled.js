import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const StyledContainer = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 250px;
  padding: 20px;
  border-radius: 20px;
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: rgba(87, 54, 163, 0.5);

  ::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 100%;
    transform: translateY(-0.05px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: rgba(87, 54, 163, 0.5) transparent transparent transparent;
  }
`;

export const StyledLink = styled(Link)`
  padding: 14px 28px;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
  transition: background-color 250ms ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
