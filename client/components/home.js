import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Animated} from 'react-animated-css'
// import logo from '../../public/img/fitby.png'
// import classNames from 'classnames'

/**
 * COMPONENT
 */
export const Home = props => {
  return (
    <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
      <div id="home">
        <img src="https://lh3.googleusercontent.com/wSGdv3Q-FRHVtQOmzz8AWvQoijNmlfyjCGkofprnGggWOyf162dwWsBJmFWz8hvgp3JSsg2Umf2eQDs-kXcXPyfLK8BXSIaJ7cLVSH6bdPeUJ6PfCsUwvfEDNCFn0Aze9cmhF2tQyb5GClz2qepV4xJvjqCZHw4c4ewXih6TzWSICdBtSZPr8JULMrmH-olyzv2Xbr66ghHdmlIQ3fbBZfToZWYPMjj2XtbUBt9oHJWk6EjYVzSBVIEWDgZAW9QZnKD6A_eTolGMwk6fMcTWkoaEHCfRrp9ZAH1VwZuTV9yqO-aaJBmKPcC36X0F8WtrU6JVAIKUzqv6r_9ZEQd0NnefQpV_lkF5_GlwPSeF-nZy83b166h2RrLuZvBALPW0lSO84H-6dCN6E98gyZPH_V62yXcYd7ecFFidPhn7FX2SQrH6WB4qMnv40Y8SRoyCuxqcvGdMu_VzSzBxV1Y_-dujd343eUVn8maWAnTSzxvL_McSa_oCW5gDrE5j5dI9nOIE_2Uv2Q3-S-Az8iyV2xaBS8Y1hObVJr5NsYdU-0hJZl_hsvKlpha7J9PyUca--wXNsDIygqUxwEFjvWcEaSjJNvX8sNua99BeynHDvnqppJtXCv8KfmYlfGl1gza0_RixGjU31zcH7I26xg=w433-h423-no" />

        <h3 id="subtitle">a minimalist fitness dashboard</h3>
      </div>
    </Animated>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
// Home.propTypes = {
//   email: PropTypes.string
// }
