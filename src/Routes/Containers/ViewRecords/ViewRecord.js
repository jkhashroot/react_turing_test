import React, { useState, useEffect } from 'react';
import { FormBuilder, FormGenerator } from "cb-react-forms";
import { List, Button, Modal , Input } from 'antd';
import { ListFormTemplates } from '../../../Redux/actions/CreateFormTemplateAction/ListFormTemplates';
import { useDispatch, useSelector } from 'react-redux';



function ViewRecords() {
    const [editFormTemplate, editCreateNewFormTemplate] = useState(false);
    const [formBuilderItem, setFormItemValue] = useState([]);
    const formsMetaData = useSelector(state => state.listFormTemplateReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ListFormTemplates.fetchFormMetadata());
    }, []);
    function showSelectedForm(selectedItem) {
        const singleItem = formsMetaData.formList.find(item => item.name === selectedItem.name)
        setFormItemValue(singleItem.value);
        editCreateNewFormTemplate(true);
    }
   
    function saveEditedForm(data){
        editCreateNewFormTemplate(false);
    }

    return (
        <div className="row">
            <div className="col-md-12 left-section">
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
            </div>
            {editFormTemplate && <FormGenerator formData={formBuilderItem} onSubmit={data => saveEditedForm(data)}/>}
        
        </div>
    );

}

export { ViewRecords };