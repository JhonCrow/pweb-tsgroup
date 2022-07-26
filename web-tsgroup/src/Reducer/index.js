const initialState = {
    students: [],
    allstudents: [],
    detail: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_STUDENTS':
            return {
                ...state,
                students: action.payload,
                allstudents: action.payload
            };

        case 'FILTER_BY_NAME':
            const allstudents = state.allstudents;
            console.log(action.payload)
            console.log(allstudents)
            const studentsFilter = allstudents.filter(s => s.nombre === action.payload);
            console.log(studentsFilter)
            return {
                ...state,
                students: studentsFilter
            };

        default:
            return state;
    };
};
