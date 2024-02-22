import { combineReducers } from '@reduxjs/toolkit';
import peopleSlice from './peopleSlice';

import usersSlice from './usersSlice';



export default combineReducers({
   
  users: usersSlice,
  people: peopleSlice
});
