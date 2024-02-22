import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



export type Person = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  url: string;
  created: string;
  edited: string;
};

export const getPeople = createAsyncThunk("people/get", async()=>{
    const response = await axios.get("https://swapi.dev/api/people");
     console.log(response.data.results);
     
    return response.data.results as Person[]
})


export const peopleSlice = createSlice({
  name: 'people',
  initialState: [] as Person[],
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getPeople.fulfilled, (state, action: PayloadAction<Person[]>)=>{
      state.push(...action.payload)
    })
  }

})



export default peopleSlice.reducer;