import React from "react";
import { useGetAllUsersQuery } from "../../store/usersApi";
import UserTable from "../../components/UseTable/UserTable";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import adminBanner from "../../../public/assets/images/banners/admin-banner.jpg";

const Users = () => {
  const { isLoading, data } = useGetAllUsersQuery("");
  return (
    <>
      <HeroBanner heroBannerImage={adminBanner} />
      <SkinnyBanner bannerHeading="Admin Portal" />
      {!isLoading && !!data?.documents && (
        <UserTable userData={data.documents} />
      )}
    </>
  );
};
export default Users;
