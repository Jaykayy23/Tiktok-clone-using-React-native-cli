/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        posts {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        posts {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      songID
      song {
        id
        songID
        name
        imageUri
        posts {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          owner
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          songID
          name
          imageUri
          owner
          createdAt
          updatedAt
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByIdAndUserID = /* GraphQL */ `
  query PostsByIdAndUserID(
    $id: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByIdAndUserID(
      id: $id
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          owner
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          songID
          name
          imageUri
          owner
          createdAt
          updatedAt
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsBySongIDAndUserID = /* GraphQL */ `
  query PostsBySongIDAndUserID(
    $songID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsBySongIDAndUserID(
      songID: $songID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          owner
          createdAt
          updatedAt
          __typename
        }
        songID
        song {
          id
          songID
          name
          imageUri
          owner
          createdAt
          updatedAt
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      songID
      name
      imageUri
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        songID
        name
        imageUri
        posts {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
