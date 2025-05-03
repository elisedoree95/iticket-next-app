import Meta from '../../../layouts/Meta'
import ContentWrapper from '../../../layouts/ContentWrapper'
import { METADATA } from '../../../src/constants/metadata'

const Booking = () => {
  return (
    <>
      <Meta
        title={METADATA.booking.title}
        description={METADATA.booking.description}
      />
      <ContentWrapper>
        Content here
      </ContentWrapper>
    </>
  )
}

export default Booking