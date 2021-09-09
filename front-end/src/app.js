import * as React from 'react'
import CoreLayout from './common/layouts/CoreLayout'
import { AuthContextProvider } from './context/authContext'
import Routes from './routes'
import { Authorize } from './common/components/Authorize/authorize'

const App = () => {
  // Kind of gross, but this will do for now
  const hash = window.location.hash
  const { access_token } = hash
    .substring(1)
    .split('&')
    .reduce((init, hashItem) => {
      if (hashItem) {
        let split = hashItem.split('=')
        init[split[0]] = decodeURIComponent(split[1])
      }
      return init
    }, {})

  return (
    <AuthContextProvider user={{ token: access_token, detail: null }}>
      <CoreLayout>
        <Routes />
      </CoreLayout>
      <Authorize />
    </AuthContextProvider>
  )
}

export default App
