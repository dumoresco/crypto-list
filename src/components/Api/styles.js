import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: #17171a;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .coin-input {
    font-family: "Inter", sans-serif;
    border-radius: 0.2rem;
    width: 20rem;
    padding: 0.5rem 1rem;

    background-color: #333545;
    border: none;
    color: #ffffff;

    outline: none;
  }
`;

export const Sumario = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  margin-top: 5rem;
  .coin-row {
    display: flex;
    justify-items: start;
    align-items: center;
    height: 20px;
    margin-top: 30px;
    width: 900px;
  }

  .coin {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 24px;
    min-width: 200px;
    padding: 0 10px;

    h1 {
      font-size: 15px;
    }

    img {
      height: 30px;
      width: 30px;
      margin-right: 10px;
    }

    .coin-symbol {
      text-transform: uppercase;
      margin-left: 5px;
      color: #ffffff;
      opacity: 0.5;
    }
  }

  .coin-data {
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;

    .coin-price {
      width: 110px;
    }
    .coin-volume {
      width: 155px;
    }
    .coin-marketcap {
      width: 230px;
    }

    .red {
      color: red;
    }
    .green {
      color: #16c784;
    }
  }
`;
