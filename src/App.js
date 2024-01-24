import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from 'setup/router/routes';
import { useContext } from 'react';
import { ThemeContext } from 'setup/contexts/ThemeProvider/ThemeProvider';
import CustomCursor from 'pages-and-components/common-components/custom-cursor/CustomCursor'

function App() {
  const { mode } = useContext(ThemeContext);

  return (
    <div>

      <div data-theme={`${mode === 'dark' ? 'dark-theme' : 'light-theme'}`} className='App min-h-screen w-full bg-accent text-base-100'>
        <RouterProvider router={routes}></RouterProvider>
      </div>

      <CustomCursor></CustomCursor>
    </div>

  );
}

export default App;
