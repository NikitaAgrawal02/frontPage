import React from 'react'

const Form = () => {
    return (
        <div className="formWidth" style={{width:"50%", float: "left"}} >
        <form className="ui form" style={{ maxWidth: "50%", margin: "auto" }}>
            <div className="field">
                <label>First Name</label>
                <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden" />
                <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
    </div>
    )
}

export default Form
