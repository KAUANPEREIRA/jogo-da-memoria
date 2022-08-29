import { useEffect, useState } from 'react'
import * as C from './App.styles'
import LogoImg from './assets/devmemory_logo.png'
import InfoItem from './components/InfoItem'
import { Button } from './components/Button'
import RestartIcon from './svgs/restart.svg'
import { GridItemType } from './types/GridItemType'
import { items } from './data/items'
import { GridItem } from './components/GridItem'





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
    //passo 1 reset do jogo
    setTimeEsladed(0)
    setMoveCount(0)
    setShowCount(0)

    let temporarioGrid : GridItemType[] = []
    //passo 2 criar crid o vazio 
    for(let i=0;i<(items.length * 2 );i++){
      temporarioGrid.push({
        item:null,
        show:false,
        permanentShow:false
      })

    }
    // passo 2.1 preencher o grid 
    for(let w=0;w<2;w++){
      for(let i=0; i<items.length;i++){
        let pos = -1
        while(pos<0 || temporarioGrid[pos].item !==null){
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        temporarioGrid[pos].item = i
      }
    }


    //passo 2.3 jogar grid temporario no state
    setGridItems(temporarioGrid)

    //passo 3 criar jogo

    setPlayIng(true)
  }

  const handleItemClick =(index:number)=>{

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
          {gridItems.map((item,index)=>(
            <GridItem
            key={index}
            item={item}
            onClick={()=>handleItemClick(index)}


            
            />

            
          ))}

        </C.Grid>



      </C.GridArea>
    </C.Container>
  )

}

export default App