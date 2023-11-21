import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
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
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
