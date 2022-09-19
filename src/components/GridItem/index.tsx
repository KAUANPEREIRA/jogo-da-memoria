
import React from 'react'
import { GridItemType } from '../../types/GridItemType'
import * as C from './style'
import b7Logo from "../../svgs/b7.svg"
import {items} from '../../data/items'

type GridItemProps ={
    item:GridItemType
    onClick : ()=> void // função que não retorna nada 
}
export const GridItem = ({item,onClick}:GridItemProps)=>{
    return(
        <C.Container 
        showBackground={item.permanentShow===true || item.show === true}
        
        onClick={onClick}>
            
            {item.permanentShow=== false && item.show===false &&
             <C.Icon src={b7Logo} alt="" opacity={.1}/>
            }

            {(item.permanentShow || item.show )&& item.item !== null &&
            <C.Icon src={items[item.item].icon} alt=""/>


            
            }
        </C.Container>
    )
}