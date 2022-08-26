import { useEffect, useState } from 'react'
import * as C from './App.styles'
import LogoImg from './assets/devmemory_logo.png'
import InfoItem from './components/InfoItem'
import { Button } from './components/Button'
import RestartIcon from './svgs/restart.svg'
import { GridItemType } from './types/GridItemType'





/*nesse componente pai estou passando as props para o filho infoItem */
const App = () => {

  const [playIng,setPlayIng] = useState<boolean>(false) // state para saber se o jogo começou ou não
  const[timeEsladed,setTimeEsladed] = useState<number>(0) // para saber quanto tempo se passou desde o  inicio
  const [moveCount,setMoveCount]= useState<number>(0) //movimentos
  const [showCount,setShowCount] = useState<number>(0) //cards da jogada
  const [gridItems,setGridItems] = useState<GridItemType[]>([])


  let time = 'tempo'

  useEffect(() => {
    ResetGrid()
  }, [])

  /*funcao criada no componente filho , feita e utilizada no componente pai */
  const ResetGrid = () => {


  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={LogoImg} width="200px" alt='' />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label={time} value='00:00' />
          <InfoItem label='Movimentos' value='0' />
        </C.InfoArea>

        <Button label='Reiniciar' icon={RestartIcon} onClick={ResetGrid} />

      </C.Info>
      <C.GridArea>
        <C.Grid>

        </C.Grid>



      </C.GridArea>
    </C.Container>
  )

}

export default App