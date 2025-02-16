import { useEffect, useState } from "react";

type Category = {
    id: number,
    name: string,
    description: string;
}

const useCategory = (url: string) => {
    
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const getCategories = async() => {
            const response = await fetch(url);
            const data = await response.json();

            setCategories(data)
        }

        getCategories();
    }, [url])

    return [categories];
}

export default useCategory;