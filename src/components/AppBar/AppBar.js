import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import 'components/AppBar/AppBar.style.css';

export default function AppBar() {
    return (
        <header className='header'>
      <Container>
        <Navigation />
      </Container>
    </header>
    )
}