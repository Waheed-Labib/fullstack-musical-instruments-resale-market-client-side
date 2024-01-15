import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router/routes';
import { useContext, useState } from 'react';
import { ThemeContext } from './contexts/ThemeProvider/ThemeProvider';
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
  const { mode } = useContext(ThemeContext);


  return (
    <div>
      {
        mode === 'dark' ?
          <div data-theme="dark-theme" className='App min-h-screen w-full bg-accent text-base-100'>
            <RouterProvider router={routes}></RouterProvider>
          </div>
          :
          <div data-theme="light-theme" className='App bg-[#fafaf5] light-mode min-h-screen w-full bg-accent text-base-100'>
            <RouterProvider router={routes}></RouterProvider>
          </div>
      }
      <CustomCursor></CustomCursor>
    </div>

  );
}

export default App;
