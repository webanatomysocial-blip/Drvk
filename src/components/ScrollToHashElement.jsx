import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    const hashElement = useMemo(() => {
        const hash = location.hash;
        const removeHashCharacter = (str) => {
            const result = str.slice(1);
            return result;
        };

        if (hash) {
            const element = document.getElementById(removeHashCharacter(hash));
            return element;
        }

        return null;
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            // Slight timeout to ensure page has rendered and measurements are correct
            const timer = setTimeout(() => {
                hashElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
            return () => clearTimeout(timer);
        } else if (location.hash === "" && location.pathname !== "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hashElement, location.hash, location.pathname]);

    return null;
};

export default ScrollToHashElement;
