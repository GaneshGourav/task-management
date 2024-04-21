import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editUser } from '../Redux/authReducer/action';

const Profile = () => {
  const user = useSelector((store) => store.authReducer.user);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const token = useSelector((store)=>store.authReducer.token)
  const dispatch = useDispatch()

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    // try{
    //   dispatch(editUser(editedUser,token,user._id))
    //   .then((res)=>{
    //     alert(res.message)
    //   })
    // }
    // catch(err){
    //   console.log(err)
    // }
    setEditMode(false);
  };

  return (
    <div className="max-w-md mx-auto mt-20 w-11/12 pl-8 pr-8 pb-8 pt-1 bg-custom-pink shadow-lg rounded-lg">
      <img
        src="https://cdn-icons-png.flaticon.com/256/345/345736.png"
        className="rounded-full m-auto w-24 h-24  -mt-16"
        alt="Profile Avatar"
      />
      <h2 className="text-2xl text-custom-green font-bold mb-4">Profile</h2>

      <div className="mb-4">
        <label className="block text-custom-green text-gray-600 text-sm font-semibold mb-2">
          Name:
        </label>
        {editMode ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="trans capitalize text-lg text-custom-darkpink font-bold border-b-2 focus:outline-none"
          />
        ) : (
          <p className="trans capitalize text-lg text-custom-darkpink font-bold">
            {user.name}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-custom-green text-gray-600 text-sm font-semibold mb-2">
          Username:
        </label>
        {editMode ? (
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
            className="text-lg text-custom-darkpink font-bold border-b-2 focus:outline-none"
          />
        ) : (
          <p className="text-lg text-custom-darkpink font-bold">
            {user.username}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-custom-green text-gray-600 text-sm font-semibold mb-2">
          Email:
        </label>
        {editMode ? (
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="text-lg text-custom-darkpink font-bold border-b-2 focus:outline-none"
          />
        ) : (
          <p className="text-lg text-custom-darkpink font-bold">{user.email}</p>
        )}
      </div>

      {editMode ? (
        <button
          onClick={saveChanges}
          className="bg-custom-darkpink mt-2 text-white py-2 px-4 rounded-md font-bold hover:rounded-full focus:outline-none"
        >
          Save Changes
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className="bg-custom-darkpink mt-2 text-white py-2 px-4 rounded-md font-bold hover:rounded-full focus:outline-none"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;
