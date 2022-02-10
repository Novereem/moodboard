import React, { Component } from 'react';

class ImageCard extends Component {
    render() {
        return (
            <div id='image_card' className="card max-w-xs grid-item ">
                <figure>
                    <img src="https://picsum.photos/id/1005/400/250"></img>
                </figure> 
                <div className="card-body">
                <p className="text-sm">Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                <div className="justify-start card-actions items-center">
                    <hr/>
                    <img className='avatar' src="https://picsum.photos/id/1005/400/250"></img>
                    <span className='name text-sm align-middle'>John Doe</span>
                </div>
              </div>
            </div> 
        );
    }
}

export default ImageCard;