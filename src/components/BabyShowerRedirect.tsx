import React, { useEffect } from 'react';

interface RedirectProps {
    url: string;
}

const BabyShowerRedirect: React.FC<RedirectProps> = ({ url }) => {
    useEffect(() => {
        // Redirect to the provided Amazon URL after the component mounts
        window.location.href = url;
    }, [url]);

    return (
        <div>
            <p>Redirecting you to the baby shower gift page...</p>
        </div>
    );
};

export default BabyShowerRedirect;
