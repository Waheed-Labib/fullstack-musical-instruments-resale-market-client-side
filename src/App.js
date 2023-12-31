import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router/routes';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeProvider/ThemeProvider';

function App() {
  const { mode } = useContext(ThemeContext)

  return (
    <>
      {
        mode === 'dark' ?
          <div data-theme="dark-theme" className='App min-h-screen w-full bg-accent text-base-100'>
            <RouterProvider router={routes}></RouterProvider>
          </div>
          :
          <div data-theme="light-theme" className='App min-h-screen w-full bg-accent text-base-100'>
            <RouterProvider router={routes}></RouterProvider>
          </div>
      }
    </>

  );
}

export default App;
