import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

Redirect.propTypes = {
  from: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

// @see
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Route.js
// https://github.com/ReactTraining/react-router/issues/5866

// Redirect.propTypes = {
//   computedMatch: PropTypes.object,
//   path: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
//   exact: PropTypes.bool,
//   strict: PropTypes.bool,
//   sensitive: PropTypes.bool,
//   component: (props, propName) => {
//     if (props[propName] && !isValidElementType(props[propName])) {
//       return new Error(
//         `Invalid prop 'component' supplied to 'Route': the prop is not a valid React component`
//       );
//     }
//   },
//   render: PropTypes.func,
//   children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
//   location: PropTypes.object
// }