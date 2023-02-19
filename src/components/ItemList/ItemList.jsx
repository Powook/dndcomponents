import React, { useEffect, useState } from "react"
import axios from "axios"
import {SortableItem} from "../sortableItem"
import s from './ItemList.module.css'
import { closestCenter, DndContext } from "@dnd-kit/core"
import { arrayMove, SortableContext } from "@dnd-kit/sortable"

function ItemList (props) {
   const [users, setUsers] = useState([ ])
   
   useEffect(()=>{
      axios.get('https://dummyjson.com/products?limit=10')
      .then (response=>setUsers(response.data.products))
      .then(response=>console.log(response))
   }, [ ])

function handleDragEnd(event) {
   const {active, over} = event;
   if (active.id!==over.id) {
      setUsers((items)=>{
         const activeItem = items.find(item=>item.id==active.id)
         const overItem = items.find(item=>item.id==over.id)

        const activeIndex = items.indexOf(activeItem)
        const overIndex = items.indexOf(overItem)
        
         return arrayMove(items, activeIndex, overIndex)
      })
   }
}

   return (
      <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      >
         <SortableContext items ={users}>
         <div className={s.ItemList}>
            {users.map(item=><SortableItem info={item} id ={item.id} key={item.id}/>)}
         </div>
         </SortableContext>
      </DndContext>
   )
}

export default ItemList