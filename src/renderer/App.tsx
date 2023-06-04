import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';

import './App.css';
import { Main } from './modules/Main';
import { Container } from './collaborative/layout/Container';
import { ConnectDataBase } from './collaborative/root/ConnectDataBase';
import { Training } from './modules/Training';
import { Navigation } from './collaborative/components';
import { routes } from './routes';
import { Words } from './modules/Words';

export default function App() {
  return (
    <Container>
      <ConnectDataBase>
        <Router>
          <Navigation />
          <Routes>
            <Route path={routes.main.path} element={<Main />} />
            <Route
              path={routes.main.children.training.path}
              element={<Training />}
            />
            <Route path={routes.main.children.words.path} element={<Words />} />
          </Routes>
        </Router>
      </ConnectDataBase>
    </Container>
  );
}
