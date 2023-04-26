import {gql} from '@apollo/client';

export const GET_CHILD_DETAILS = gql`
  query GetChildDetails{
    Child_childDetails {
      email
      firstname
      id
      lastname
      middlename
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    customer {
      id
      first_name
      last_name
      username
      email
      phone
    }
  }
`;