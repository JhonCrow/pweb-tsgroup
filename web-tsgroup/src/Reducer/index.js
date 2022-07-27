const initialState = {
    students: [],
    allstudents: [],
    programs: [],
    allprograms: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_STUDENTS':
            return {
                ...state,
                students: action.payload,
                allstudents: action.payload
            };

        case 'GET_PROGRAMS':
            return {
                ...state,
                programs: action.payload,
                allprograms: action.payload
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

        case 'FILTER_BY_PROGRAMS':
            const allprograms = state.allprograms;
            const programsFilter = allprograms.filter(p => p.nombre === action.payload)
            return {
                ...state,
                programs: programsFilter
            }

        default:
            return state;
    };
};
