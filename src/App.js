import {useState} from 'react'
import styled from 'styled-components'
import Lock from './components/Lock'
import Unlock from './components/Unlock'
import {GlobalStyle} from './styledComponents'

const Container = styled.div`
  background-color: #161617;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 10px;
  border-radius: 10px;
`

const App = () => {
  const [isLocked, setIsLocked] = useState(true)

  const toggleLock = () => {
    setIsLocked(prevIsLocked => !prevIsLocked)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {isLocked ? <Lock /> : <Unlock />}
        <div>
          <Button type="button" onClick={toggleLock}>
            {isLocked ? 'Unlock' : 'Lock'}
          </Button>
        </div>
      </Container>
    </>
  )
}

export default App
