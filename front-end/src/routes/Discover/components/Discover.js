import * as React from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import { getPlaylist } from '../api/data-fetchers'
import { AuthContext } from '../../../context/authContext'

const Discover = () => {
  const { getUser } = React.useContext(AuthContext)
  const { token } = getUser()
  const [released, setReleased] = React.useState({ albums: { items: [] } })
  const [featured, setFeatured] = React.useState({ playlists: { items: [] } })
  const [categories, setCategories] = React.useState({
    categories: { items: [] },
  })

  React.useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const _released = await getPlaylist({ type: 'new-releases', token })
        setReleased(_released)
        const _featured = await getPlaylist({
          type: 'featured-playlists',
          token,
        })
        setFeatured(_featured)
        const _categories = await getPlaylist({ type: 'categories', token })
        setCategories(_categories)
      } catch (e) {
        console.log(e)
      }
    }
    fetchPlaylists()
  }, [token])

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        items={released?.albums?.items}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        items={featured?.playlists?.items}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        items={categories?.categories?.items}
        imagesKey="icons"
      />
    </div>
  )
}

export default Discover
