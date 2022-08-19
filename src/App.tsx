import * as C from './App.styles'
import LogoImg from './assets/devmemory_logo.png'
import InfoItem from './components/InfoItem'
import { Button } from './components/Button'
import RestartIcon from './svgs/restart.svg'

/*nesse componente pai estou passando as props para o filho infoItem */
const App = ()=>{
  let time = 'tempo'

  /*funcao criada no componente filho , feita e utilizada no componente pai */
  const ResetGrid =()=>{


  }
  
  return(
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={LogoImg} width="200px"alt=''/>
         </C.LogoLink>

         <C.InfoArea>

        <InfoItem label={time} value='00:00'/>
        <InfoItem label='Movimentos' value='0'/>



         </C.InfoArea>
        
        <Button label='Reiniciar' icon={RestartIcon} onClick={ResetGrid}/>

      </C.Info>
      <C.GridArea>

        ...

      </C.GridArea>
    </C.Container>
  )

}

export default App