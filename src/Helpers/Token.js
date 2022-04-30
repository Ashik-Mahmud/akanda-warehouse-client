import axios from 'axios';
const Token = (id) => {
    axios
    .post(`http://localhost:5000/login`, {
      uid: id,
    })
    .then((res) => {
      sessionStorage.setItem("accessToken", res.data.token);
    });
}

export default Token