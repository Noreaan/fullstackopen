import axios from 'axios'

const baseUrl = 'http://localhost:3010/api/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const create = (person) => {
    return axios
        .post(baseUrl, person)
        .then(response => response.data)
}

const update = (id, person) => {
    return axios
        .put(`${baseUrl}/${id}`, person)
        .then(response => response.data)
}

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson }