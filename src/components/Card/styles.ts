import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  z-index: 1;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 32px;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  .card {
    &__title {
      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: -0.035em;
      line-height: 27px;
      color: #4f4f4f;
    }
    &__subtitle {
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: -0.035em;
      line-height: 15px;
      color: #828282;
      padding: 8px 0 16px;
    }

    &__or {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.25rem;
      color: #bdbdbd;
      padding: 24px 0;
    }

    &__p-upload {
      text-align: left;
      font-size: 1.3rem;
      font-weight: 500;
      font-style: normal;
      color: #4f4f4f;
      width: 100%;
      margin-bottom: 32px;
    }

    &__figure {
      width: 100%;
      margin: 25px 0;

      img {
        width: 100%;
        border-radius: 12px;
      }
    }
  }

  @media screen and (max-width: 767.98px) {
    width: 90%;
  }
`;
