import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.2rem;
  line-height: 16px;
  letter-spacing: -0.035em;
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  background: #2f80ed;
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #286fcc;
  }
`;
