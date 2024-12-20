
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Home from './presentation/pages/Home/Home'
import Jobs from './presentation/pages/Jobs/Jobs'
import NotFound from './presentation/pages/NotFound/NotFound'

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
      element: <NotFound />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
