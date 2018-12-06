import React from 'react';

const ImageList = (props) => {
    const {images} = props

    const imageList = images.map((image) =>{
        return(
            <img key={image.id} src={image.urls.regular} alt=""/>
        )
    })

    return (
        <div>
            {imageList}
        </div>
    );
}

export default ImageList;
