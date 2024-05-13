// src/components/Unlock.js
import styled from 'styled-components'

const UnlockImage = styled.img`
  width: 100px;
  height: auto;
`

const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`

const Unlock = () => (
  <div>
    <UnlockImage
      src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
      alt="unlock"
    />
    <Paragraph>Your Device is Unlocked</Paragraph>
  </div>
)

export default Unlock
