import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';

import './App.css';
import { Main } from './modules/Main';
import { Container } from './collaborative/layout/Container';
import { ConnectDataBase } from './collaborative/root/ConnectDataBase';
import { BaseWords } from './modules/BaseWords';
import { Navigation } from './collaborative/components';

export default function App() {
  return (
    <Container>
      <ConnectDataBase>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="words" element={<BaseWords />} />
          </Routes>
        </Router>
      </ConnectDataBase>
    </Container>
  );
}
