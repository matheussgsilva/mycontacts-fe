import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>contato@matheussilva.dev.br</span>
            <span>(12) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button"><img src={trash} alt="Delete" /></button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>contato@matheussilva.dev.br</span>
            <span>(12) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button"><img src={trash} alt="Delete" /></button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>contato@matheussilva.dev.br</span>
            <span>(12) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button"><img src={trash} alt="Delete" /></button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
