/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
