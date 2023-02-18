import React from "react";
import { useGetAllUsersQuery } from "../../store/usersApi";
import UserTable from "../../components/UserTable/UserTable";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import adminBanner from "../../../public/assets/images/banners/admin-banner.jpg";

//If the user is an admin then they will be able to access this page
//The Users page displays all the users of the application and their information within a table
const Users = () => {
  const { isLoading, data } = useGetAllUsersQuery("");
  return (
    <>
      <HeroBanner heroBannerImage={adminBanner} />
      {/*Skinny banner to add the page title*/}
      <SkinnyBanner bannerHeading="Admin Portal" />
      {/* Loads the user data from the database into the user table*/}
      {!isLoading && !!data?.documents && (
        <UserTable userData={data.documents} />
      )}
    </>
  );
};
export default Users;
