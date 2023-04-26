import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routes";
import GetCustomers from "./components/GetCustomers/GetCustomers";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://eternal-tuna-91.hasura.app/v1/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "x-hasura-admin-secret":
      "YMhiFrdZVzyYNaHHpwXLjaxFbbgj85ftagIc0lXFqWbmZ2b3QJNaSf8KsxAr5smb",
    "content-type": "application/json",
  },
}));

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

//sample components/routes created for demo use
export default ({ data }) => {
  return (
    <div>
      <ApolloProvider client={client}>
        <h2> MFE1 placeholder !</h2>
        <h3> data from container {data}</h3>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.MFE1} element={<GetCustomers />} />
            <Route
              exact
              path={ROUTES.ROOT}
              element={<Navigate to={ROUTES.MFE1} />}
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};
