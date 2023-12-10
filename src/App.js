import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router/routes';

function App() {
  return (
    <div className='bg-accent text-base-100 min-h-screen'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
