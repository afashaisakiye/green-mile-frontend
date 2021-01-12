import React,{useEffect } from 'react'
import Board, { addCard , moveCard , removeCard} from '@lourenci/react-kanban'
import { useSelector , useDispatch } from "react-redux";
import './style.scss'

import { load_packages, update_package_status } from './../../api/pacakges'
import { account_type } from './../../api/auth'
import Card from './../../containers/Card'
import { updatePackage } from './../../actions/packagesActions'
import {packagesToCards} from './../../utils/packages'

export default function Index() {
  const auth = useSelector(state => state.authentication)  
  const board = useSelector(state => state.shipment)  
  const dispatch = useDispatch()
  
  const addcard =(e)=>{
    const newBoard = addCard(board,{ id: 1 },{
      id: 3,
      title: "dfdfdfdff",
      description: "SDfsfsf"
    })
    setBoard(newBoard)
  }

  const deletePackage=(e)=>{
  }
  
  const packageMoved = (card, source,destination)=>{
    const new_board  = moveCard(board,source,destination)
    dispatch(updatePackage(new_board))
      account_type(auth.token).then((res)=>{
        update_package_status(auth.token, res.account_type,card.id,destination.toColumnId,source.fromColumnId).then(res=>{
            if(!res){
              dispatch(updatePackage(board))
            }
          })
      })
  }

    useEffect(() => {
      account_type(auth.token).then((res)=>{
        load_packages(auth.token,res.account_type).then(res=>{
          dispatch(updatePackage(packagesToCards(res.results)))
        })
      })

    }, [])
  
    return (
        <Board 
          allowRemoveCard
          children={board}
          onCardDragEnd={packageMoved} 
          onRemoveCard = {deletePackage}
          renderCard={( card, dragging) =>{ 
            return <Card {...card } isDragging={dragging} />
          }}
        />
    )
}
