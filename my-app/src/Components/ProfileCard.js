import React from 'react'
function ProfileCard( {title, twiterHandler, image, altText,description}) {
//const {title, twiterHandler} = props;
return (
<div className="card">
    <div className="card-image">
        <figure className="image is-1by1">
            <img alt={altText} src={image}/>
        </figure>
    </div>
    <div className="card-content">
        <div className="media-conten">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{twiterHandler}</p>
            <p className="content">{description}</p>
        </div>
    </div>
</div>
)
}
export default ProfileCard