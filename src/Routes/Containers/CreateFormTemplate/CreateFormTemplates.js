import React, { useState, useEffect } from 'react';
import { FormBuilder, FormGenerator } from "cb-react-forms";
import { List, Button, Modal , Input } from 'antd';
import { ListFormTemplates } from '../../../Redux/actions/CreateFormTemplateAction/ListFormTemplates';
import { useDispatch, useSelector } from 'react-redux';



function CreateFormTemplates() {
    const [isCreateNewFormTemplate, setCreateNewFormTemplate] = useState(false);
    const [editFormTemplate, editCreateNewFormTemplate] = useState(false);
    const [formBuilderItem, setFormItemValue] = useState([]);
    const formsMetaData = useSelector(state => state.listFormTemplateReducer);
    const [openModal, openFormNameModal] = useState(false);
    const [newFormData, addNewFormData] = useState([]);
    const [formName, changeFormName] = useState(null);
    const dispatch = useDispatch();
    function handleClick(data) {
        openFormNameModal(true)
        addNewFormData(data)
    }
    function createNewForm() {
        setCreateNewFormTemplate(true);
    }
    useEffect(() => {
        dispatch(ListFormTemplates.fetchFormMetadata());
    }, []);
    function showSelectedForm(selectedItem) {
        const singleItem = formsMetaData.formList.find(item => item.name === selectedItem.name)
        setFormItemValue(singleItem.value);
        editCreateNewFormTemplate(true);
        changeFormName(selectedItem.name);
    }
    function addNewFormTemplate() {
        console.log(JSON.parse(newFormData));
         dispatch(ListFormTemplates.createNewForms({name: formName , value: JSON.parse(newFormData)}));
         openFormNameModal(false);
    }
    function handleCancel() {
        openFormNameModal(false);
    }

    function changeFormValue(event) {
        changeFormName(event.target.value)
    };
    function saveEditedForm(data){
        dispatch(ListFormTemplates.editExistingForms({name: formName , value: formBuilderItem}));
        changeFormName(null);
        editCreateNewFormTemplate(false)
    }

    return (
        <div className="row">
            <div className="col-md-3 left-section">
                <List
                    itemLayout="horizontal"
                    dataSource={formsMetaData.formList}
                    bordered
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a onClick={() => showSelectedForm(item)}>{item.name}</a>}
                            />
                        </List.Item>
                    )}
                />
                <Button type="primary" className="mt-3" onClick={createNewForm}>Create Form Records</Button>
            </div>
            {isCreateNewFormTemplate && <div className="col-md-9">
                <FormBuilder onSubmit={data => handleClick(data)} />
            </div>}
            {editFormTemplate && <FormGenerator formData={formBuilderItem} onSubmit={data => saveEditedForm(data)}/>}
            <Modal
                title="Enter Form Name"
                visible={openModal}
                onOk={addNewFormTemplate}
                onCancel={handleCancel}
            >
               <Input placeholder="Enter form name" onChange={changeFormValue}/>
            </Modal>
        </div>
    );

}

export { CreateFormTemplates };