import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import SecretChamber from "./pages/Secret"
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
      path:'/secret-chamber',
      element: <SecretChamber />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
