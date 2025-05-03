import axios from 'axios'

import Meta from "../../layouts/Meta"
import ContentWrapper from "../../layouts/ContentWrapper"
import CompetitionDetails from "../../components/Competition/CompetitionDetails"
import { BASE_URL, ENDPOINTS } from "../../src/constants/endpoints"
import { METADATA } from "../../src/constants/metadata"

axios.defaults.baseURL = BASE_URL

const CompetitionDetailsPage = ({ competition }) => {
  return (
    <>
      <Meta
        title={METADATA.compDetails.title}
        description={METADATA.compDetails.description}
      />
      <ContentWrapper>
        <CompetitionDetails />
      </ContentWrapper>
    </>
  )
}

export default CompetitionDetailsPage

export const getServerSideProps = async (context) => {
  const { compId } = context.params

  const { data } = await axios.get(ENDPOINTS.competitionDetails(compId))

  return { props: { competition: data.data } }
}