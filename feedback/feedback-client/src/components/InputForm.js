import { useState } from "react";

const InputForm = ({ soket, currentFeedback }) => {
    const [feedback, setFeedback] = useState('');
    const [thanks, setThanks] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        if (feedback) {
            let sendFeedback = {
                id: currentFeedback,
                feedback: feedback
            };
            soket.emit("sendFeedback", sendFeedback);
            setThanks(true);
        };

    };
    if (thanks) {
        return (
            <p>Thanks for the feedback!</p>)
    };

    return (
        <form className="form" onSubmit={handleForm}>
            <input type="text"
                autoFocus
                id="feedbackInput"
                name="feedback"
                placeholder="Insert feedback here"
                onChange={e => setFeedback(e.target.value)}
            />
            <input type="submit" value="Submit feedback" disabled={!currentFeedback ? 'disabled' : ''} />
        </form>
    );
};

export default InputForm;