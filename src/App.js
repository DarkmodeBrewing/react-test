import './styles.css';
import './components/Buttons/Button';
import { Button } from './components/Buttons/Button';
import { ButtonPrimary } from './components/Buttons/ButtonPrimary';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Card } from './components/Card/Card';

export default function App() {
  const clickHandler = () => {
    console.log(88);
  };

  return (
    <>
      <Header appTitle="App title" />
      <Card>
        <div style={{ height: 1000 }}>
          <ButtonPrimary label="Primär" onClick={clickHandler} />
          <Button label="Standard" onClick={clickHandler} />
        </div>
      </Card>
      <Footer />
    </>
  );
}
