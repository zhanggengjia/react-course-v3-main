// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main style={{ display: 'grid', placeItems: 'center', width: '100vw', height: '100vh' }}>
        <div className='loading'></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
