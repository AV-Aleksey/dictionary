import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import 'antd/dist/reset.css';
import './App.css';
import { Main } from './modules/Main';
import { Container } from './collaborative/layout/Container';
import { ConnectDataBase } from './collaborative/root/ConnectDataBase';

export default function App() {
  return (
    <Container>
      <ConnectDataBase>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </ConnectDataBase>
    </Container>
  );
}
