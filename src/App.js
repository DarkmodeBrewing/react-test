import './styles.css';
import {
  Button,
  ButtonPrimary,
  Header,
  Footer,
  Card,
  Menu,
} from './components';

export default function App() {
  const clickHandler = () => {
    console.log(88);
  };

  const menu = (
    <Menu>
      <ul>
        <li>Home</li>
        <li>Somewhere</li>
        <li>Caramba!</li>
      </ul>
    </Menu>
  );
  return (
    <>
      <Header appTitle="App title" menu={menu} />
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
