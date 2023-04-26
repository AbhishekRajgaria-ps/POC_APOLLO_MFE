import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../../graphql/usersQuery";

export default () => {
  const { data, loading, error, refetch } = useQuery(GET_CUSTOMERS, {
    enabled: false,
  });
  const handleClick = () => {
    console.log("data", data);
    refetch();
  };

  if (loading) return <div> LOADING ...</div>;

  if (error) return <div>Something Went Wrong ...</div>;

  return <>{<button onClick={handleClick}>GET Customers</button>}</>;
};
