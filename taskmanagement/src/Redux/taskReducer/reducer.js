import { Add_Task, Delete_Task, Edit_Task, Task_Failure, Task_Request, Task_Success } from "../actionTypes"

const init = {
   isLoading:false,
   isError:false,
   tasks:[]
}
export const reducer = (state=init,{type,payload})=>{

    switch(type){

        case Task_Request:{
            return {...state,isLoading:true}
        }
       
       case Task_Success:{
          return {...state,isLoading:false,tasks:payload}
       }

       case Task_Failure:{
         return {...state,isLoading:false,isError:true}
       }

       case Add_Task:
        return {
          ...state,
          isLoading:false,
          tasks: [...state.tasks,payload.task],
        }

        case Delete_Task:{
          
          const updatedTask = state.tasks.filter((task) =>{
            return task._id !== payload.task._id
          } )
          console.log(updatedTask)
          return {...state,isLoading:false,tasks:[...updatedTask]}
        }

        case Edit_Task :{
          const updatedTask = state.tasks.map((task) =>{

            if(task._id === payload.updatedTask._id)
            return { ...task, ...payload.updatedTask }
            else
            return task
          })
           
           return {...state,isLoading:false,tasks:[...updatedTask]}
        }
      
        default:{
            return state
        }
    }
}