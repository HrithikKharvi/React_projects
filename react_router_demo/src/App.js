import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js'
import Products from './pages/Products.js';
import ErrorPage from './pages/ErrorPage'
import SamplePage from './pages/SamplePage.js';
import RootPage from './pages/RootPage.js';

//OTHER WAY OF CREATING THE ROUTER

// const elements = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home></Home>}/>
//     <Route path="/products" element={<Products></Products>}/>
//   </Route>
// )

// const router = createBrowserRouter(elements);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement : <ErrorPage/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/products/:productId", element: <Products/> },
      { path: "/samplePage", element : <SamplePage/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
