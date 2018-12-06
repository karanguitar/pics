import React from 'react';
import './ImageList.scss'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const {images} = props

    const imageList = images.map((image) =>{
        return(
            <ImageCard className="image" key={image.id} image={image}/>
        )
    })

    return (
        <div className="image__list">
            {imageList}
        </div>
    );
}

export default ImageList;
