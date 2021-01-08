import React,{useEffect} from 'react'
import Board, { addCard } from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import {useSelector, useDispatch } from 'react-redux'
import {addPackage} from './../../actions/packagesActions'

export default function Index() {
  const board = useSelector(state => state.shipment)
  const onCardNew = (e)=>{
    const newCard = addCard(board,1,{id: 99, title: 'New Card'})
    return newCard
  }

    useEffect(() => {
      console.log("fetch packages")
    }, [])
  
    return (
      <div>
        <button onClick={addPackage} >Add Card</button>
         <Board onNewCardConfirm={onCardNew} initialBoard={board} />
      </div>
    )
}
