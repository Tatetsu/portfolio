import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/'
//   baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyCKZSgj02CKB-fk_nvxMl2wxb3lOljFQkI]'

});

export default instance;