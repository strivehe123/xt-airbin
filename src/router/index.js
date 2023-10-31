import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/home/index'))
const Entire = React.lazy(() => import('@/pages/entire/index'))
const Detail = React.lazy(() => import('@/pages/detail/index'))
const Demo = React.lazy(() => import('@/pages/demo/index'))
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/entire',
    element: <Entire />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]
export default routes
