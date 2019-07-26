import { gql } from "apollo-boost";

/* Learningunits Queries */
// export const GET_Learningunits = gql`
//   query {
//     showallLearningunits(filter: FilterInput) {
//       showallLearningunits(filter: $filter){
//         id
//         title
//         mc
//         url
//         description
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `;
export const GET_Learningunits = gql`
  query showallLearningunits($filter: FilterInput) {
      showallLearningunits(filter: $filter){
        id
        title
        mc
        url
        description
        createdAt
        updatedAt
      }
    }
`;

/* QueryById */
// export const GET_LearningunitById = gql`
//   query learningunit($id: String) {
//     learningunit(filter: { id: $id }){
//       id
//       title
//       mc
//       url
//       description
//       createdAt
//       updatedAt
//     }
//   }
// `;

export const GET_LearningunitById = gql`
  query learningunit {
    learningunit(id: "061837cb-5ae1-4804-9d5d-37a7d2313c75"){
      id
      title
      mc
      url
      description
      createdAt
      updatedAt
    }
  }
`;


/* Mutations */


