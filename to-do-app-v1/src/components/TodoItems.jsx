import { ShowToDO } from "./AddToDo";


export default function TodoItems({items})
{
     
     return (<>
         {
           items.map((item,index)=>{
               return <ShowToDO item={item} key={index}/>
           })
         }
     </>);
}