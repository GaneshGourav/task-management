import React, { useEffect, useState } from "react";
import logo from "../assets/taskLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks, updateStatus } from "../Redux/taskReducer/action";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";

const DisplayTasksPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.authReducer.token);
  const tasks = useSelector((store) => store.taskReducer.tasks) || [];
  const isLoading = useSelector((store) => store.taskReducer.isLoading);
  const isError = useSelector((store) => store.taskReducer.isError);
  const [status, setStatus] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");

  const open = (id) => {
    setId(id);
    setIsUpdate(true);
  };

  const close = () => {
    setIsUpdate(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    try {
      dispatch(deleteTask(id, token)).then((res) => {
        alert(res.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id) => {
    try {
       dispatch(updateStatus(id, token)); 
      setStatus((prevStatus) => !prevStatus); 
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    dispatch(getTasks(token)); 
  }, [status]); 

  if (isLoading) {
    return (
      <div className="flex justify-center mx-auto items-center">
        <div>
          <img
            src="https://mdmtaskweb.rubi.ru.ac.za/site_media/img/477.GIF"
            alt="Loading Indicator"
            className="w-[100px]"
          />
        </div>
      </div>
    );
  }

  return (
    <>
    <section className=" w-[100%] bg-[#1f3344]   ">
      <nav className="border bg-[#18222d] border-black h-[50px] flex justify-between pl-2 pr-2 items-center text-white">
        <div>
        <span className="">Task-Management</span>
        </div>
        
        <div>
          <button
            onClick={openModal}
            className="bg-custom-pink px-4 py-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full"
          >
            Create-Task
          </button>
        </div>
      </nav>
   
      <Modal isOpen={isModalOpen} closeModal={closeModal} token={token} />
      <UpdateModal open={isUpdate} id={id} close={close} token={token} />
      {!isModalOpen && tasks.length === 0 ? (
        <div className="flex items-center justify-center">
          <img
            src="https://i.postimg.cc/jdH9H0BB/No-data-rafiki.png"
            alt="No Data"
            className="w-96 h-auto "
          />
         
         
        </div>
      ) : (
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
      )}
      </section>
    </>
  );
};

export default DisplayTasksPage;
