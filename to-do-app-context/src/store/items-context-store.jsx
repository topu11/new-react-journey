import { createContext } from "react";

export const ItemContext=createContext({
    todoItems:[],
    handleDelete:()=>{},
    addToDo:()=>{}
});