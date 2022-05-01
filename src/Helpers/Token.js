import axios from 'axios';
const Token = (id) => {
    axios
    .post(`https://akanda-warehouse-server.herokuapp.com/login`, {
      uid: id,
    })
    .then((res) => {
      sessionStorage.setItem("accessToken", res.data.token);
    });
}

export default Token