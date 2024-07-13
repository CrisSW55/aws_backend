/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $id: ID
    $name: String
    $when: String
    $where: String
    $description: String
  ) {
    onCreateTodo(
      id: $id
      name: $name
      when: $when
      where: $where
      description: $description
    ) {
      id
      name
      when
      where
      description
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $id: ID
    $name: String
    $when: String
    $where: String
    $description: String
  ) {
    onUpdateTodo(
      id: $id
      name: $name
      when: $when
      where: $where
      description: $description
    ) {
      id
      name
      when
      where
      description
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $id: ID
    $name: String
    $when: String
    $where: String
    $description: String
  ) {
    onDeleteTodo(
      id: $id
      name: $name
      when: $when
      where: $where
      description: $description
    ) {
      id
      name
      when
      where
      description
      __typename
    }
  }
`;
