import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call.
 */
const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
        setLoading(true);
        await wait(2000);
        setResponse({
            type: 'success',
            data: data
        })
        setLoading(false);
    };

    return { isLoading, response, submit };
}

export default useSubmit;
