import React from 'react';
import ContentLoader from "react-content-loader";

function ImageLoader() {
    return (
        <ContentLoader
            speed={2}
            width={768}
            height={450}
            viewBox="0 0 768 450"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="2" y="18" rx="0" ry="0" width="759" height="470" />
        </ContentLoader>
    );
}

export default ImageLoader;