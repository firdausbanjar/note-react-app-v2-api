import { useState } from "react";

const useInput = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);

    const onChangeValue = (event) => {
        setValue(event.target.value);
    };

    return [value, onChangeValue];
};

export default useInput;
