import React, { useState, useEffect } from "react";
import Coin from "../Coin/Coin";
import { Container, Sumario } from "./styles";

function Api() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getInitialData() {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false"
      );

      const data = await response.json();
      setCoins(data);
      console.log(data);
    }
    getInitialData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <Container>
        <input
          type="text"
          placeholder="Search a currency"
          className="coin-input"
          onChange={handleChange}
        />
      </Container>
      <Sumario>
        <div className="coin-row">
          <div className="coin">
            <h1>Nome</h1>
          </div>
          <div className="coin-data">
            <p className="coin-price">Preço</p>
            <p className="coin-volume">Volume</p>
            <p className="coin-percent">24h %</p>
            <p className="coin-marketcap">Cap. de Mercado</p>
          </div>
        </div>
      </Sumario>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.total_volume}
          />
        );
      })}
    </>
  );
}

export default Api;
