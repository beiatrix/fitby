import React, {Component} from 'react'

class Dailies extends Component {
  render() {
    return (
      <div id="dailies">
        <div className="dailyRow">
          <div className="dailyLabel">
            <h3>CARDIO</h3>
          </div>
          <div className="dailyButtonContainer">
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
          </div>
        </div>

        <div className="dailyRow">
          <div className="dailyLabel">
            <h3>WEIGHTS</h3>
          </div>
          <div className="dailyButtonContainer">
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
            <button type="button" className="dailyButton" />
          </div>
        </div>
      </div>
    )
  }
}

export default Dailies
