import { LIST_FORM_TEMPLATES , ADD_NEW_FORMS_LIST } from '../../constants';

import { Default } from './InitialState';

const ListFormTemplateReducer = (state = Default(), action) => {
    switch (action.type) {
        case LIST_FORM_TEMPLATES:
            return Object.assign(
                {},
                state,
                action.payload
            );
        case ADD_NEW_FORMS_LIST:
                return Object.assign(
                    {},
                    state,
                    action.payload
                );
        default:
            return state;
    }
};
export default ListFormTemplateReducer;
