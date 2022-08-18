import React from 'react'
import * as C from './style'

type Props ={
    label:string;
    icon: any
    onClick: React.MouseEventHandler<HTMLDivElement>

}

export const button = ({label,icon,onClick}:Props) => {
  return (
    <C.Container onClick={onClick}>
        <C.IconArea>
            
        </C.IconArea>

    </C.Container>
    
  )
}
