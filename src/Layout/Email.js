import React from "react";
import {useHistory} from "react-router-dom"


function Email() {
const history = useHistory();

function cancelHandler(event) {
    event.preventDefault();
    history.goBack()
}

return <form action="mailto:joshuassorby@gmail.com" method="post" encType="text/plain">
    Name:<br/>
    <input type="text" name="name"/><br/>

    E-mail:<br/>
    <input type="text" name="mail"/><br/>

    Message:<br/>
    <textarea name="comment" rows="30" cols="100"/><br/><br/>
    <div className="buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={cancelHandler}>Cancel</button>
    </div>
</form>
}

export default Email;