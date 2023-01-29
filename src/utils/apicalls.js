import API from './api';

export {
    getAllAccidentes,
    addNewAccidente,
    getSingleAccidente,
    //getMyBookmarks,
    deleteAccidente,
    getAllMovies,
    addNewBookmark,
    getSingleMovie,
    getMyBookmarks,
    deleteBookmark
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

// function getMyBookmarks(email) {
//    return API.get('/bookmarks/'+email).then(res => res.data);
//}

function deleteAccidente(idaccidente) {
    return API.delete('/bookmarks/'+idaccidente).then(result => result.data);
}


function getAllMovies() {
    return API.get('/movies').then(res => res.data);
}

function addNewBookmark(email, movie){
    return API.post('/bookmarks', {
        email,
        movie}).then(result => result.data);
}

function getSingleMovie(idmovie) {
    return API.get('/movies/'+idmovie).then(res => res.data);
 }

 function getMyBookmarks(email) {
    return API.get('/bookmarks/'+email).then(res => res.data);
}

function deleteBookmark(idbookmark) {
    return API.delete('/bookmarks/'+idbookmark).then(result => result.data);
}