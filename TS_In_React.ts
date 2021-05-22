import * as React from 'react';
interface UserThumbnailProps {
    img: string;
    alt: string
    url: string
}

export const UserThumbnail = (props = userThumbnailProps) => {
    <a href={props.url}>
        <img src={props.img} alt={props.alt} />
    </a>
}