import axios from 'axios'

import Meta from '../../../layouts/Meta'
import ContentWrapper from '../../../layouts/ContentWrapper'
import GameDetails from '../../../components/Game/GameDetails'
import { ENDPOINTS } from '../../../src/constants/endpoints'
import { METADATA } from '../../../src/constants/metadata'

const GameDetailsPage = ({ detail }) => {
  return (
    <>
      <Meta
        title={METADATA.gameDetails.title}
        description={METADATA.gameDetails.description}
      />
      <ContentWrapper>
        <GameDetails detail={detail} />
      </ContentWrapper>
    </>
  )
}

export default GameDetailsPage

export const getServerSideProps = async (context) => {
  const { gameId } = context.params

  const { data } = await axios.get(ENDPOINTS.gameDetails(gameId))

  return { props: { detail: data.data } }
}