import React from 'react'

const RecipeCard = props => {
    return (
        <div className='RecipeCard'>
           <div 
                className="card" 
                style={{width: '18em'}}
            >
                <img 
                    src="https://i.imgur.com/iPRrXaM.jpg" 
                    class="card-img-top" 
                    alt="..."
                />
                <div class="card-body">
                    <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;