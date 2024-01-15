import { useLocation } from "react-router-dom";

const usePageName = () => {
    // Extracting page name from the pathname
    const pathname = useLocation().pathname;
    const pathnameDividedInArray = pathname.split('/');
    const pageName = pathnameDividedInArray[pathnameDividedInArray.length - 1]

    return pageName
}

export default usePageName;