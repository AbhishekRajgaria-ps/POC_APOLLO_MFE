import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routes";
import GetDetails from "./components/GetDetails/GetDetails";
import GetCustomers from "./components/GetCustomers/GetCustomers";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink1 = createHttpLink({
  uri: "https://eternal-tuna-91.hasura.app/v1/graphql",
});

const httpLink2 = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const httpLink3 = createHttpLink({
  uri: "http://devtest/v1/graphql",
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
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "cloud",
    from([authLink, httpLink1]),

    ApolloLink.split(
      (operation) => operation.getContext().clientName === "local",
      httpLink2,
      httpLink3
    )
  ),
  cache: new InMemoryCache(),
});

//sample components/routes created for demo use
export default ({ data }) => {
  return (
    <div>
      <ApolloProvider client={client}>
        <h2> MFE2 placeholder !</h2>
        <h3> data from container {data}</h3>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.MFE2} element={<GetDetails />} />
            <Route path={ROUTES.CUSTOMER} element={<GetCustomers />} />
            <Route
              exact
              path={ROUTES.ROOT}
              element={<Navigate to={ROUTES.MFE2} />}
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};
