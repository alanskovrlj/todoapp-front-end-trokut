import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const performLogin = createAsyncThunk(
  "user/performLogin",
  async (data) => {
    const response = await fetch(
      "https://todolisttrokut.herokuapp.com/api/users/login",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    inputName: "",
    inputPass: "",
    data: [],
  },
  reducers: {
    handleInputChange: (state, action) => {
      console.log(action);
      state[action.payload.type] = action.payload.val;
    },
    addWordToSentence: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.totalSentence = state.totalSentence + " " + action.payload;
      } else {
        state.totalSentence = state.totalSentence + " " + state.input;
      }
      state.input = "";
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performLogin.pending, (state, action) => {
        state.data = "loading";
      })
      .addCase(performLogin.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { handleInputChange, addWordToSentence, loadTodos } =
  userSlice.actions;

export default userSlice.reducer;
