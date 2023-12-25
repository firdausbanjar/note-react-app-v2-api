import { useState } from "react";

const useContent = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);

    const onValueChange = (event) => {
        setValue(event.target.innerHTML);
    };

    return [value, onValueChange];
};

export default useContent;
