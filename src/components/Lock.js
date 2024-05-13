// src/components/Lock.js
import styled from 'styled-components'

const LockImage = styled.img`
  width: 100px;
  height: auto;
`

const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`

const Lock = () => (
  <div>
    <LockImage
      src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
      alt="lock"
    />
    <Paragraph style={{fontFamily: 'Roboto'}}>Your Device is Locked</Paragraph>
  </div>
)

export default Lock
