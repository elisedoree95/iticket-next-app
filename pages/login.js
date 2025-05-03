import LoginForm from '../components/LoginForm/LoginForm'
import ContentWrapper from '../layouts/ContentWrapper'
import Meta from '../layouts/Meta'
import { METADATA } from '../src/constants/metadata'

export default function login() {
  return (
    <>
    <Meta 
      title={METADATA.login.title}
      description={METADATA.login.description}
    />
    <ContentWrapper>
      <LoginForm />
    </ContentWrapper>
    </>
  )
}
