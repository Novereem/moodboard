import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div id='card' className="card max-w-xs grid-item">
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

export default Card;