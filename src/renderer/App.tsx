import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import 'antd/dist/reset.css';
import './App.css';
import { Container } from 'collaborative/layout/Container';
import { Main } from './modules/Main';

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Container>
  );
}
