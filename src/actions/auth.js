import { axios } from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED } from "./types";

// load User

// export const loadUser = () => async (dispatch) => {
//   try {

//   } catch (err) {

//   }
// }

// Register User

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    console.log(name, email, password);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("/api/user", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      if (err == undefined) return;
      console.log(err);
      // const errors = err.response.data.errors;

      // if (errors) {
      //   errors.forEach((element) => {
      //     return dispatch(setAlert(element.msg, "error"));
      //   });
      // }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
