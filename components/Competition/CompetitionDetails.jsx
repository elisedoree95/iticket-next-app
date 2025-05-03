import axios from 'axios'
import { ENDPOINTS } from '../../src/constants/endpoints'
import Competition from './Competition'

const CompetitionDetails = ({ competition }) => {
  return (
    <Competition competition={competition} />
  )
}

export default CompetitionDetails

export const getServerSideProps = async (context) => {
  const { compId } = context.params

  const { data } = axios.get(ENDPOINTS.competitionDetails(compId))

  return { props: { competition: data.data } }
}