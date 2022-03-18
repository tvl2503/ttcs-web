import React from 'react'
import PropTypes from 'prop-types'
import "./button.scss"
const Button = props => {

    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'
    const cl = props.color ? 'color-' + props.color: 'txt-main-color'
    const size = props.size ? 'btn-' + props.size : ''


    return (
        <button
            className={`btn ${size} `}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className="btn__txt">{props.children}</span>
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func
}

export default Button
