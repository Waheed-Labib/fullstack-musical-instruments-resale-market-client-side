const { useEffect } = require("react");

const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
}

export default useScrollToTop;
