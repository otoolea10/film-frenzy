import React from "react";
import { Users } from "../../store/usersApi";
import { UserTabelStyles } from "./UserTableStyles";

const UserTable = ({ userData }: { userData: Array<Users> }) => {
  return (
    <UserTabelStyles>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>FirstName</th>
            <th>Surname</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map(({ _id, email, username, fname, sname, DOB }) => (
              <tr>
                <td>{_id}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{fname}</td>
                <td>{sname}</td>
                <td>{new Date(DOB).toDateString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </UserTabelStyles>
  );
};
export default UserTable;
