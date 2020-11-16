import React from 'react';
import Axios from 'axios';

import './AllCurrencies.css';
import { URL } from '../../constants/constants';
import BackDrop from '../../library/BackDrop/BackDrop';
import CurrencyList from '../CurrencyList/CurrencyList';

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
  const [priceIdx, setPriceIdx] = React.useState({} as BitCoinPrices);
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    const config = {
      header: {},
      params: {

      }
    }
    Axios.get(`${URL}`, config)
      .then((res: any) => {
        setPriceIdx(res.data.bpi);
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

  const handleCurrClick = (e: React.MouseEvent) => {
    console.log({ e })
  }

  return (
    <>
      <h3>All Currencies</h3>
      {
        backDrop ?
          <BackDrop />
          :
          <CurrencyList errorMsg={errorMsg} priceIdx={priceIdx} />
      }
    </>
  )
}

export default AllCurrencies;