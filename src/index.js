import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from '@/App'
import '@/assets/css/index.less'
import 'normalize.css'
import store from './store'
import theme from './assets/theme/index'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback="loading">
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
)
