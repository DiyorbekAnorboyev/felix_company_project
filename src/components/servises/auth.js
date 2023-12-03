import axios from "./api";

const key = window.localStorage.getItem("key")

const AuthService = {
  async postRegister(user) {
    const { data } = await axios.post("/signup", user);
    return data.data;
  },
  async userMe() {
    const { data } = await axios.get("/myself", { header: {"Key" : `${key}`, "Sign" : `${key}`} });
    return data.data;
  },
};

export default AuthService;