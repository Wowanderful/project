import MainPage from '../pages/main-page/main-page';

type AppProps = {
  OfferCount: number;
}

function App ({ OfferCount }: AppProps): JSX.Element {
  return (<MainPage OfferCount={OfferCount}/>
  );
}

export default App;
