import axios from 'axios'

import Stack from '@mui/material/Stack'

import Meta from '../layouts/Meta'
import ContentWrapper from "../layouts/ContentWrapper"
import Competition from '../components/Competition/Competition'
import { BASE_URL, ENDPOINTS } from '../src/constants/endpoints'
import { METADATA } from '../src/constants/metadata'

axios.defaults.baseURL = BASE_URL

export default function Home({ competitions }) {
  
  return (
    <>
      <Meta description={METADATA.home.description} />
      <ContentWrapper>
        <Stack spacing={8}>
          {competitions.map(comp => (
            <Competition key={comp.id} competition={comp} />
          ))}
        </Stack>
      </ContentWrapper>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(ENDPOINTS.competitions)

  return { props: { competitions: data.data } }
}
