import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    darkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    const buttonText = darkMode ? 'Light Mode' : 'Dark Mode'
    const name = darkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="card-container ">
        <div className={`${name} main-container `}>
          <h1 className="main-heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button-ele"
            onClick={this.onClickButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
