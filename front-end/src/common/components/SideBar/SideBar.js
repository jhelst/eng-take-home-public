import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg'
import './_sidebar.scss'
import { useAuthUser } from '../../../context/authContext'
import { getUserDetail } from '../../../services'

function renderSideBarOption(link, icon, text, { selected } = {}) {
  return (
    <div
      className={cx('sidebar__option', {
        'sidebar__option--selected': selected,
      })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
}

export default function SideBar() {
  const { user, setUser } = useAuthUser()
  console.log({ dsfasdfasdf: user })

  /** DEV NOTE
   * Ideally this, along with the auth call would be handled on the server, bundled, and returned in a single response to initialize user context
   */
  React.useEffect(() => {
    const getDetail = async () => {
      try {
        const deets = await getUserDetail({ token: user.token })
        setUser({ ...user, detail: deets })
      } catch {}
    }
    if (!!user.token) {
      getDetail()
    }
  }, [user.token])

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        {user?.detail?.images?.[0] ? (
          <img
            src={user.detail.images[0].url}
            alt="User Avatar"
            className="avatar"
          />
        ) : (
          <Avatar />
        )}
        <p>{user?.detail?.display_name || null}</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', {
          selected: true,
        })}
        {renderSideBarOption('/search', faSearch, 'Search')}
        {renderSideBarOption('/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('/charts', faStream, 'Charts')}
      </div>
    </div>
  )
}
