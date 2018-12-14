import React from 'react';

const Imagen = (props) => {
    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;
    return(
        <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="card">
                <img className="card-img-top" src={previewURL} />
                <div className="card-body"> 
                    <p className="card-text">{likes}</p>
                    <p className="card-text">{views}</p>

                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block"> Ver imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;