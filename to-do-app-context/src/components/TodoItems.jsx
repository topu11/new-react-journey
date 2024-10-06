import { ShowToDO } from "./AddToDo";
import {ItemContext} from '../store/items-context-store'
import { useContext } from "react";

export default function TodoItems()
{
  const {todoItems}=useContext(ItemContext);
  
     return (<>
         {
           todoItems.map((item,index)=>{
               return <ShowToDO item={item} key={index} />
           })
         }
     </>);
}