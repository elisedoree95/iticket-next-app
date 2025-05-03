import SettingList from "../components/Settings/SettingList"
import ContentWrapper from "../layouts/ContentWrapper"
import Meta from "../layouts/Meta"
import { METADATA } from "../src/constants/metadata"

const settings = () => {
  return (
    <>
      <Meta
        title={METADATA.settings.title}
        description={METADATA.settings.description}
      />
      <ContentWrapper>
        <SettingList />
      </ContentWrapper>
    </>
  )
}

export default settings