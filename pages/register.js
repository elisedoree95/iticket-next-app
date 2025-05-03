import RegisterForm from '../components/RegisterForm/RegisterForm'
import ContentWrapper from '../layouts/ContentWrapper'
import Meta from '../layouts/Meta'
import { METADATA } from '../src/constants/metadata'

const register = () => {
  return (
    <>
      <Meta
        title={METADATA.register.title}
        description={METADATA.register.description}
      />
      <ContentWrapper>
        <RegisterForm />
      </ContentWrapper>
    </>
  )
}

export default register