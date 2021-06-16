import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddHotal() {
const handleAddHotal =  async e  =>{
    e.preventDefault();
    console.log('it is working')
}
    return (
        <div>
            <h1>
                Add Hotals
            </h1>
            <form action="" onSubmit={handleAddHotal}>
            <TextField
                fullWidth
                id="standard-textarea"
                label="Add Hotal Name"
                placeholder="Enter Your Hotal Name"
                multiline
            />
<div className="col-12 my-3">
    <Button type="submit" variant="contained" color="primary">
                 Save
            </Button>
</div>
            
            </form>
            

        </div>
    )
}

export default AddHotal
