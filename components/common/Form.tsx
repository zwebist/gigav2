import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React from 'react';
import FileUploader from './FileUploader';
import NarativeField from './NarativeField';

interface FormProps {
    onChange: any;
}

const Form = ({ onChange }: FormProps) => {
    return (
        <div className="col-12 p-0">
            <div className="card border-0">
                <h5>Create Post</h5>
                <form>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 border-round-xl font-bold">
                            <FileUploader onChange={onChange} />
                        </div>
                        <div className="field col-12 p-3 border-round-xl font-bold" style={{ backgroundColor: '#FAFAFA' }}>
                            <label htmlFor="title">Add a title</label>
                            <InputText id="title" name="title" type="text" onChange={(e) => onChange(e)} />
                        </div>
                        <div className="field col-12 p-3 border-round-xl font-bold" style={{ backgroundColor: '#FAFAFA' }}>
                            <label htmlFor="description">Add a description</label>
                            <InputTextarea id="description" name="description" rows={2} autoResize onChange={(e) => onChange(e)} />
                        </div>

                        <NarativeField title={'Add narrative'} onChange={onChange} />

                        <Button label="Submit" size="small" style={{ width: 'fit-content' }} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
