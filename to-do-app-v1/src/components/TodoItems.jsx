import { ShowToDO } from "./AddToDo";


export default function TodoItems({items,handleDelete})
{
     
     return (<>
         {
           items.map((item,index)=>{
               return <ShowToDO item={item} key={index} handleDelete={handleDelete}/>
           })
         }
     </>);
}