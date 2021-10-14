import axios from 'axios';
export default axios.create({
    baseURL: 'http://localhost/vias/index.php'//'http://192.168.20.9/vias/index.php'
    ,params:{
        terminaluid: '450' 
    }
})
