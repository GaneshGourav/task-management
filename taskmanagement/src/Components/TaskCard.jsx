import React from "react";

export const TaskCards = ()=>{
    const tasks = useSelector((store) => store.taskReducer.tasks) || [];

return <>
{
tasks.map((task, index) => (
          <div
            key={task._id}
            className="grid justify-between items-center bg-white w-[300px] h-[300px] p-4 my-4 rounded-md "
          >
            <div className="justify-start border border-red-900 w-[250px]">
             
            <div className="flex justify-between gap-5">
                <h3 className="mb-1 text-custom-green">SNo : {index+1}</h3>
                <h2 className="text-lg font-serif md:text-xl text-custom-darkpink font-semibold mb-2">
                  {task.title}
                </h2>
                </div>

                <p className="text-black font-bold font-serif">{task.description}</p>
               
                <p
                  className={`text-md font-bold ${
                    task.status ? "text-green-500" : "text-yellow-400"
                  }`}
                >
                  {task.status ? "Completed" : "Inprogress"}
                </p>
                <div className="flex mt-2">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 px-3 py-2 mr-4 mt-2 shadow-lg text-white font-bold"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => open(task._id)}
                    className="bg-green-400 px-4 py-2 mr-4 mt-2 text-white font-bold"
                  >
                    Edit
                  </button>
                </div>
                <div>
              <input
                type="checkbox"
                className={`h-6 w-6 cursor-pointer ${
                  task.status ? "text-green-500" : "text-red-500"
                }`}
                style={{ marginRight: "10px" }}
                checked={task.status}
                onChange={() => handleStatus(task._id)}
              />
            </div>


              
            </div>



            {/* <div>
              <input
                type="checkbox"
                className={`h-6 w-6 cursor-pointer ${
                  task.status ? "text-green-500" : "text-red-500"
                }`}
                style={{ marginRight: "10px" }}
                checked={task.status}
                onChange={() => handleStatus(task._id)}
              />
            </div> */}
          </div>
        ))
    }


</>

}