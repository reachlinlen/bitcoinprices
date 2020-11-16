import React from 'react';

import './CurrencyList.css';
import Modal from '../../library/Modal/Modal';

interface BitCoinPrice {
  code: string,
  symbol: string,
  rate: string,
  description: string
}

interface BitCoinPrices {
  [key: string]: BitCoinPrice
}

type CurrencyProps = {
  errorMsg?: string,
  priceIdx?: BitCoinPrices
}

function CurrencyList({ errorMsg, priceIdx }: CurrencyProps) {

  const [open, setOpen] = React.useState(false);
  const [selCurr, setSelCurr] = React.useState('');

  const handleCurrClick = (curr: string) => (e: React.MouseEvent<HTMLLIElement>) => {
    setOpen(true);
    setSelCurr(curr);
  }

  const handleClose = () => {
    setOpen(false);
    setSelCurr('');
    return null;
  }

  return (
    <>
      {
        errorMsg ?
          <>
            <p>{errorMsg}</p>
          </>
          :
          <ul className="currencylist">
            {
              Object.keys(priceIdx ? priceIdx : {}).map((curr, index) => <li key={curr} className="currency" onClick={handleCurrClick(curr)}>{curr}</li>)
            }
          </ul>
      }
      {
        open &&
        <Modal handleChange={handleClose}>
          {
            Object.entries(priceIdx ? priceIdx[selCurr] : {}).map(([k, v]) => (
              <p key={k}>{k} : {v}</p>
            ))
          }
        </Modal>
      }
    </>
  )
}

export default CurrencyList;