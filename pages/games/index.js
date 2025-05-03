import axios from 'axios'

import Meta from '../../layouts/Meta'
import ContentWrapper from '../../layouts/ContentWrapper'
import GameList from '../../components/Game/GameList'
import { BASE_URL, ENDPOINTS } from '../../src/constants/endpoints'
import { METADATA } from '../../src/constants/metadata'

axios.defaults.baseURL = BASE_URL

const index = ({ games }) => {

  return (
    <>
      <Meta
        title={METADATA.games.title}
        description={METADATA.games.description}
      />
      <ContentWrapper>
        <GameList games={games} />
      </ContentWrapper>
    </>
  )
}

export default index

export const getServerSideProps = async () => {
  const { data } = await axios.get(ENDPOINTS.games)

  return { props: { games: data.data } }
}