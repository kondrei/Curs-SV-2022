import { useEffect, useState } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 5000);
    }, [loading]);
    if (!loading)
        return (
            <>
                < img src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="waiting" width={50} height={50} />
                <p>Loading, please wait</p>
            </>
        )
    return (
        <div className="card loader">
            <p>Finished loading</p>
        </div>
    );
}

export default Loader;