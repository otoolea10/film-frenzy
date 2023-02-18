import React, { useState } from "react";
import { Users, useDeleteUserMutation } from "../../store/usersApi";
import { UserTabelStyles } from "./UserTableStyles";

//The user table component creates a table that the user details are pushed to from the database
//It is used to display all the users' email address, first name, surname, id, date of birth, and their access level (i.e if they are a user or admin)
const UserTable = ({ userData }: { userData: Array<Users> }) => {
  const [deleteUser] = useDeleteUserMutation();
  const [deletionSuccess, setDeletionSuccess] = useState(false);

  const handleDeleteUser = (fname: string) => {
    window.alert("Are you sure you want to delete this user?, Press delete button again and then Refresh your page.");
    deleteUser(fname).then(() => {
      setDeletionSuccess(true);
    });
  };
  return (
    <UserTabelStyles>
      {deletionSuccess && (
        <p style={{ color: "green" }}>
          Deletion successful. Please refresh the page.
        </p>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Access Level</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*maps the user data to a cell within the table*/}
          {userData &&
            userData.map(
              ({ _id, email, username, fname, sname, DOB, level }) => (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{email}</td>
                  <td>{username}</td>
                  <td>{fname}</td>
                  <td>{sname}</td>
                  {/*Converts date from string to readable standard format */}
                  <td>{new Date(DOB).toLocaleDateString("en-uk")}</td>
                  <td>{level}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(fname)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </UserTabelStyles>
  );
};
export default UserTable;
