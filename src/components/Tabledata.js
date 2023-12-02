import React, { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

import { red } from "@mui/material/colors";
 const Tabledata = ({ user, onDelete, onUpdate, selectUser, checked }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: user.name,
    email: user.email,
    role: user.role,
  });


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleUpdate = () => {
    onUpdate(user.id, userData);
    setIsEditing(false);
  };
 

  const handleChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <tr key={user.id} className={checked ? "selected-row" : ""}>
      <td>
        <input type="checkbox" checked={checked} onClick={selectUser} />
      </td>
      <td>
        {isEditing ? (
          <input
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        ) : (
          userData.username
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        ) : (
          userData.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="role"
            value={userData.role}
            onChange={handleChange}
          />
        ) : (
          userData.role
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <div className="editButton" onClick={handleUpdate}>
              Update
            </div>
            <div className="editButton" onClick={handleCancelEdit}>
              Cancel
            </div>
          </>
        ) : (
          <>
            <EditIcon fontSize={"small"} onClick={handleEdit} />
            <DeleteOutlinedIcon
              sx={{ fontSize: 20, color: red[600] }}
              onClick={() => onDelete(user.id)}
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default Tabledata;
