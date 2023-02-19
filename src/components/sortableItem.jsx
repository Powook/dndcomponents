import React from "react"
import s from './sortableItem.module.css'
import {CSS} from '@dnd-kit/utilities';
import {useSortable} from '@dnd-kit/sortable'

export function SortableItem(props) {
   const {
     attributes,
     listeners,
     setNodeRef,
     transform,
     transition,
   } = useSortable({id: props.id});
   
   const style = {
     transform: CSS.Transform.toString(transform),
     transition,
   };
   
   return (
     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className={s.productWrapper}>
         <div className={s.productLogo}>

         </div>
         <div className={s.productInfo}>
            <div>{props.info.title}</div>
            <div>{props.info.price}</div>
            <div>{props.info.rating}</div>
         </div>
      </div>
     </div>
   );
 }

// function SortableItem (props) {
   
//    return(
      // <div className={s.productWrapper}>
      //    <div className={s.productLogo}>

      //    </div>
      //    <div className={s.productInfo}>
      //       <div>{props.info.title}</div>
      //       <div>{props.info.price}</div>
      //       <div>{props.info.rating}</div>
      //    </div>
      // </div>
//    )
// }

export default SortableItem