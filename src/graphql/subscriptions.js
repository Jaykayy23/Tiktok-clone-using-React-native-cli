/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong(
    $filter: ModelSubscriptionSongFilterInput
    $owner: String
  ) {
    onCreateSong(filter: $filter, owner: $owner) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong(
    $filter: ModelSubscriptionSongFilterInput
    $owner: String
  ) {
    onUpdateSong(filter: $filter, owner: $owner) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong(
    $filter: ModelSubscriptionSongFilterInput
    $owner: String
  ) {
    onDeleteSong(filter: $filter, owner: $owner) {
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
