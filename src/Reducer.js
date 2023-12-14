import React, { useState } from "react";
import { combineReducers } from "redux";

const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";

export function addUsers(user) {
  return {
    type: ADD_USER,
    user
  };
}

export function updateUsers(user) {
  return {
    type: UPDATE_USER,
    user
  };
}

const initialState = {
  user: { option: 1800, name: "safa", term: false }
};
const Users = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: {
          name: action.user.name,
          option: action.user.option,
          term: action.user.term
        }
      };
    case UPDATE_USER:
      const user = state.find((b) => action.user.name === b.name);
      const users = state.filter((b) => action.user.name !== b.name);
      return [
        ...users,
        {
          ...user,
          option: user.option,
          name: user.name,
          term: user.term
        }
      ];
    default:
      return state;
  }
};

const userApp = combineReducers({
  Users
});

export default userApp;
