import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Montserrat", sans-serif;
  color: #a9a9a9;
  p {
    font-size: 1.25rem;

    & strong {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 767.99px) {
    p {
      text-align: center;
    }
  }
`;
