import './styles.css';
import { Button, ButtonPrimary, Header, Footer, Card } from './components';

export default function App() {
  const clickHandler = () => {
    console.log(88);
  };

  return (
    <>
      <Header appTitle="App title" />
      <Card>
        <div>
          <ButtonPrimary label="Primär" onClick={clickHandler} />
          <Button label="Standard" onClick={clickHandler} />
        </div>
      </Card>
      <Footer />
    </>
  );
}
