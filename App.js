import Home from './components/Home';
import { StoreProvider } from './store';

export default function App() {
  return (
    <StoreProvider>
      <Home/>
    </StoreProvider>
  );
}

