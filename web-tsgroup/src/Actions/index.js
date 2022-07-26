export function getStudents() {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/estudiantes`)
            .then(r => r.json())
            .then(json => dispatch({ type: 'GET_STUDENTS', payload: json }))
    }
}

export function filterStudents(name) {
    console.log(name)
    return {
        type: 'FILTER_BY_NAME',
        payload: name,
    };
};