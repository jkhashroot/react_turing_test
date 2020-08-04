import { LIST_FORM_TEMPLATES , ADD_NEW_FORMS_LIST} from '../../constants';
import singleFormObj from '../../../mock_data/formTemplatesList.json';
const formList = [singleFormObj];
export const ListFormTemplates = {
    fetchFormMetadata,
    createNewForms,
    editExistingForms

}
function fetchFormMetadata() {
    return dispatch => {
        dispatch(success());};
    function success() { return { type: LIST_FORM_TEMPLATES, payload :  {formList}} }
}

function createNewForms(singleFormData) {
    return dispatch => {
        formList.push(singleFormData);
        dispatch(success());};
    function success() { return { type: ADD_NEW_FORMS_LIST, payload :  {addedSuccessfully : true}} };
    function success() { return { type: LIST_FORM_TEMPLATES, payload :  {formList}} };
}

function editExistingForms(singleFormData ) {
    console.log(singleFormData);
    formList.filter((item , index) => {
      if(item.name === singleFormData.name){
        formList.splice(1,index);
      }
    })
    return dispatch => {
        console.log(formList , singleFormData)
        formList.push(singleFormData);
        dispatch(success());};
    function success() { return { type: LIST_FORM_TEMPLATES, payload :  {formList}} };
}