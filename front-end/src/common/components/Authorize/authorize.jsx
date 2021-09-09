import * as React from 'react'
import './_authorize.scss'
import config from '../../../config'
import { AuthContext } from '../../../context/authContext'

const { api } = config

/** DEV NOTE
 * With time permitting, I would move this to a server request for security.
 * I just got it running with a more straight-forward auth method in order to start getting data back
 **/
export const Authorize = () => {
  const { getUser } = React.useContext(AuthContext)
  const user = getUser()

  return !!user.token ? null : (
    <div className="modalArea">
      <div className="modalContent">
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${api.clientId}&response_type=token&redirect_uri=${api.redirectUri}&scope=user-library-read&show_dialog=true`}
        >
          Log in
        </a>
      </div>
    </div>
  )
}
