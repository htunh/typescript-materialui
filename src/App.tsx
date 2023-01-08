import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import theme from './theme';
import Home from './views/pages/Home';
import { FetchProvider } from './context/fetchContext';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FetchProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </FetchProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
