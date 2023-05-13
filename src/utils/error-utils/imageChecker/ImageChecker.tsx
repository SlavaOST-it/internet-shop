import React, {FC, useState} from 'react';

import baseImage from "../../../assets/image/imageNotFound.jpg"


type ImageCheckerType = {
    src: string
    alt: string
}

export const ImageChecker: FC<ImageCheckerType> = ({src, alt}) => {
    const [hasError, setHasError] = useState(false);

    function handleImageError() {
        setHasError(true);
    }

    return (
        <img
            onError={handleImageError}
            src={hasError ? baseImage : src}
            alt={alt}
        />
    );
};
