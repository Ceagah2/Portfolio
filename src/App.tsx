import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import Forbidden from "./pages/404"

import {
  RouterProvider,
  createBrowserRouter,
  

} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/jobs',
      
      element: <Jobs />
    },
    {
      path:'*',
      element: <Forbidden />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
