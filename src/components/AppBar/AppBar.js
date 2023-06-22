import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import style from './AppBar.style.css';

export default function AppBar() {
    return (
        <header className={style.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
    )
}