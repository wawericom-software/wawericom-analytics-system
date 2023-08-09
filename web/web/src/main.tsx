import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>,
    rootElement
  );
}
