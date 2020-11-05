import React, { useEffect } from 'react';
import Header from './components/Header'
import IncomeExpenditure from './components';
import './App.css';

function App({incomeExpenditure, incomeExpenditureActions}) {
  
  const { fetch, success, error: errorAction } = incomeExpenditureActions;
  const { data, loading, error } = incomeExpenditure;

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <Header 
        imgSrc="https://storage.googleapis.com/ck-prod/logo-2020-03-09-223707-bbcc63e9-c0fd-4a6d-92dd-169c04eca060.jpg"
        imgAlt="centime logo"
      />
      <div className="content">
        { loading && <div> {'loading'} </div> }
        { error && <div> {error} </div> }
        { data && <> 
            <IncomeExpenditure data={data} />
          </>
        }
      </div>  
    </div>
  );
}

export default App;
