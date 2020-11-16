import React from 'react';
import Axios from 'axios';

import './AllCurrencies.css';
import { URL } from '../../constants/constants';
import BackDrop from '../../library/BackDrop/BackDrop';
import CurrencyList from '../../components/CurrencyList/CurrencyList';

interface BitCoinPrice {
  code: string,
  symbol: string,
  rate: string,
  description: string
}

interface BitCoinPrices {
  [key: string]: BitCoinPrice
}

function AllCurrencies() {
  const [backDrop, setBackDrop] = React.useState(true);
  const [coinPrices, setCoinPrices] = React.useState({} as BitCoinPrices);
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    const config = {
      header: {},
      params: {

      }
    }
    Axios.get(`${URL}`, config)
      .then((res: any) => {
        setCoinPrices(res.data.bpi);
        setBackDrop(false);
      })
      .catch(err => {
        const error: string = err.message.slice(-3);
        switch (error) {
          case '404':
            setErrorMsg("Requested resource is unavailable. Please revisit requested API");
            break;
          case '500':
            setErrorMsg("Server unresponsive. Please try again later");
            break;
          default:
            setErrorMsg(err.message);
        }
        setBackDrop(false);
      })
  }, [])

  return (
    <>
      <h3>All Currencies</h3>
      {
        backDrop ?
          <BackDrop />
          :
          <CurrencyList errorMsg={errorMsg} coinPrices={coinPrices} />
      }
    </>
  )
}

export default AllCurrencies;