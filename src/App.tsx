import * as C from './App.styles'
import LogoImg from './assets/devmemory_logo.png'


const App = ()=>{
  return(
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={LogoImg} width="200px"alt=''/>
         </C.LogoLink>

         <C.InfoArea>

         </C.InfoArea>
         <button>Reiniciar</button>

      </C.Info>
      <C.GridArea>

      </C.GridArea>
    </C.Container>
  )

}

export default App