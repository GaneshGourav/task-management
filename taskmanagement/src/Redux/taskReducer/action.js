import axios from "axios"
import { Add_Task, Delete_Task, Edit_Task, Task_Failure, Task_Request, Task_Success } from "../actionTypes"

const baseURL = "https://management-project-iq4n.onrender.com";

export const getTasks = (token)=>async(dispatch)=>{
  try{
    dispatch({type:Task_Request})
    try{
        const res = await axios.get(`${baseURL}/tasks/get`, {
            headers: {
              Authorization: token,
              },
          });
    
          console.log(res.data);
    
          dispatch({ type: Task_Success, payload: res.data });
    }
    catch (error) {
        dispatch({type:Task_Failure})
      }
  }
  catch (error) {
    console.log(error)
  }
}


export const getSingleTasks = (token, id) => async (dispatch) => {
  try {
    dispatch({ type: Task_Request });
    try {
      const res = await axios.get(`${baseURL}/tasks/get/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      console.log(res.data,"Single data");

      // dispatch({ type: Task_Success, payload: res.data });
    } catch (error) {
      dispatch({ type: Task_Failure });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = (id, token) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `${baseURL}/tasks/update/status/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(res.data, "updates status");
    // Dispatch any actions if needed
    // dispatch({type:Edit_Task,payload:res.data})
  } catch (error) {
    console.error("Error updating status:", error);
    // Handle error appropriately (e.g., dispatch an error action)
  }
};


export const adaddTask = (task,token)=>async(dispatch)=>{
    try{
        dispatch({type:Task_Request})
        try{
            const res = await axios.post(`${baseURL}/tasks/create-task`, task, {
                headers: {
                  'Authorization': token
                }
              })
              console.log(res?.data)
              dispatch({type:Add_Task,payload:res.data})
              return res?.data
        }
        catch (error) {
            dispatch({type:Task_Failure})
          }
    }
    catch (error) {
        console.log(error)
      }
   
}

export const deleteTask= (id,token)=>async(dispatch)=>{
  
   try{
    dispatch({type:Task_Request})
    try{
      const res = await axios.delete(`${baseURL}/tasks/delete/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      console.log(res?.data)
      dispatch({type:Delete_Task,payload:res.data})
      return res?.data
    }
    catch (error) {
      dispatch({type:Task_Failure})
    }
   }
   catch(err){
    console.log(err)
   }
}

export const editTask = (task,token,id) => async(dispatch)=>{
  try{
    dispatch({type:Task_Request})
    try{
      console.log(id,"id")
      const res = await axios.patch(`${baseURL}/tasks/update/${id}`,task, {
        headers: {
          'Authorization': token
        }
      })
      // console.log(res)
      console.log(res.data)
      dispatch({type:Edit_Task,payload:res.data})
      

      return res?.data
    }
    catch (error) {
      dispatch({type:Task_Failure})
    }
   }
   catch(err){
    console.log(err)
   }

}
 

