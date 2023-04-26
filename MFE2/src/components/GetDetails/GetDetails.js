import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHILD_DETAILS } from "../../graphql/usersQuery";

export default () => {
  const { data, loading, error, refetch } = useQuery(GET_CHILD_DETAILS, {
    enabled: false,
    context: { clientName: "local" },
  });
  const handleClick = () => {
    console.log("data", data);
    refetch();
  };

  if (loading) return <div> LOADING ...</div>;

  if (error) return <div>Something Went Wrong ...</div>;

  return <>{<button onClick={handleClick}>GET Child Details</button>}</>;
};
