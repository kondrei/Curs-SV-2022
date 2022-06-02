import { useState } from "react";

const InputForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        if (feedback) {
            console.log(feedback)
        }

    };

    return (
        <form className="form" onSubmit={handleForm}>
            <input type="text"
                name="feedback"
                placeholder="insert feedback here"
                onChange={e => setFeedback(e.target.value)}
            />
            <input type="submit" value="Submit feedback" />
        </form>
    );
};

export default InputForm;