import React, { Component } from 'react';

class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
      }
    
      updateMessage = (msg) => {
        this.setState({message: msg});
      }
    
      render() {
        return (
          <div className='CreateRecipePage'>
            <div className="lottie">
              <CookingLottie />
            </div>
            <CreateRecipeForm 
                {...this.props} 
                updateMessage={this.updateMessage} 
            />
            <p>{this.state.message}</p>
          </div>
        );
      }
    }
}

export default AccountPage;