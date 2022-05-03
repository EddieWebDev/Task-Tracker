import PropTypes from "prop-types" // Used to set PropTypes.string

function Example({title}) { // title is passed as a prop from app.js
  return (
    <header>
        <h1 style={ExampleStyle}>{title}</h1>
    </header>
  )
}

Example.defaultProps = {title: "Example Default Prop"} // Default title if none is given

Example.propTypes = {title: PropTypes.string.isRequired} // Title is now required to be a string

const ExampleStyle = {color: "white", backgroundColor: "black"} // CSS in JS to style title

export default Example // Exports this component to App.js
