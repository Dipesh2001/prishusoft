import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrgAsync } from "../../features/orgSlice";
import Table from "../UI/Table";

const OrgList = () => {
  const dispatch = useDispatch();
  const { orgList } = useSelector((state) => state.org);
  useEffect(() => {
    dispatch(fetchAllOrgAsync());
  }, []);

  return (
    <div>
      {orgList.length > 0 ? (
        <Table data={orgList.slice(0, 4)} />
      ) : (
        "Fetching Data"
      )}
    </div>
  );
};

export default OrgList;
