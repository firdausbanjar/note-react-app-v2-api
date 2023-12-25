import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useSearchQuery = (defaultValue = "") => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(() => {
        return searchParams.get(defaultValue) || "";
    });
    let search = {};

    const onChangeQuery = (event) => {
        search[defaultValue] = event.target.value;
        setQuery(event.target.value);
        setSearchParams(search);
    };

    return [query, onChangeQuery];
};

export default useSearchQuery;
