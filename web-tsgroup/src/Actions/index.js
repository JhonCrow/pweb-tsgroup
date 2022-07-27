import axios from 'axios';

export function getStudents() {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/estudiantes`)
            .then(r => r.json())
            .then(json => dispatch({ type: 'GET_STUDENTS', payload: json }))
    }
}

export function getPrograms() {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/programas`)
            .then(r => r.json())
            .then(json => dispatch({ type: 'GET_PROGRAMS', payload: json }))
    }
}

export function filterStudents(name) {
    console.log(name)
    return {
        type: 'FILTER_BY_NAME',
        payload: name,
    };
};

export function filterPrograms(name) {
    console.log(name)
    return {
        type: 'FILTER_BY_PROGRAMS',
        payload: name,
    };
};
export function postStudent(payload) {
    return async function () {
        const stu = await axios.post('http://localhost:3000/api/estudiantes', payload);
        return stu;
    };
};

export function postProgram(payload) {
    return async function () {
        const pro = await axios.post('http://localhost:3000/api/programas', payload);
        return pro;
    };
};