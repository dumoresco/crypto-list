import styled from "styled-components";

export const Container = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .coin-row {
    display: flex;
    justify-items: start;
    align-items: center;
    height: 80px;
    width: 900px;
    border-bottom: 1px solid #232530;
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
