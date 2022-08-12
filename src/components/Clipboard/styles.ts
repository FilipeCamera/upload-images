import styled from "styled-components";

export const ClipboardContainer = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  width: 100%;
  padding: 2px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;

  .__subcontainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #f6f8fb;
    justify-content: center;
    border-radius: 8px;
    height: 34px;
    width: 100%;

    p {
      flex: 1;
      padding: 5px;
      font-size: 1.2rem;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    button {
      background: #2f80ed;
      border-radius: 8px;
      border: none;
      font-size: 1.2rem;
      color: #fff;
      height: 34px;
      width: 74px;
      transition: opacity 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.95;
      }
    }
  }
`;
