import API from './api';

export {
    getAllAccidentes,
    addNewAccidente,
    getSingleAccidente,
    deleteAccidente,
}

function getAllAccidentes() {
    return API.get('/accidentes').then(res => res.data);
}

function addNewAccidente(accidente){
    return API.post('/accidentes', accidente).then(result => result.data);
}

function getSingleAccidente(idaccidente) {
    return API.get('/accidentes/'+idaccidente).then(res => res.data);
}

function deleteAccidente(idaccidente) {
    return API.delete('/accidentes/'+idaccidente).then(result => result.data);
}
