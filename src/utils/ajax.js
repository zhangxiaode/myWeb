import axios from 'axios'

const ajax = axios.create();
console.log(ajax);
// class Ajax {
//     constructor(){
//         this.url = '';
//         this.paramater = {};
//         this.success = () => {};
//         this.error = () => {};
//     }
//     says(){
//         console.log(' url ' + this.url);
//     }
// }
// const x=new Ajax({
//     url:"123",
//     paramater:{

//     },
//     success:() => {

//     },
//     error:() => {

//     }
// })
export default ajax