import styled, { css } from "styled-components";

interface DropzoneProps {
  isDrag: boolean;
}

export const DropzoneContainer = styled.div<DropzoneProps>`
  width: 100%;
  background: #f6f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  ${(props) =>
    props.isDrag === true
      ? css`
          background: #f1f1fb;
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2397BEF4FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
        `
      : css`
          background: #f6f8fb;
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2397BEF4FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
        `}
  border-radius: 12px;
  transition: background 0.2s;

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #bdbdbd;
    line-height: 18px;
    letter-spacing: -0.035em;
    padding-top: 32px;
  }
`;
