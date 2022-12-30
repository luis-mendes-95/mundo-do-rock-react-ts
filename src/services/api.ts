import axios from 'axios'

//58abca33-4f73-4cd5-b9c0-f760ece553c0 - Pantry ID

const api = axios.create({
    baseURL: '',
    timeout: 5000
})

export default api