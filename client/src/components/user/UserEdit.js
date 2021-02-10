import React from "react";
import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        {/* <TextInput source="name" /> */}
        <TextInput source="email" />
        <BooleanInput source="has_access" />
        <DateInput source="verified_at" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
