import styled from 'styled-components/macro'

// Button.propTypes = {
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func,
//   children: PropTypes.node,
// }

// export default function Button({ children, isActive, onClick }) {
//   return (
//     <DefaultButton
//       onClick={onClick}
//       className={isActive ? 'Button Button--active' : 'Button'}
//     >
//       {children}
//     </DefaultButton>
//   )
// }

const Button = styled.section`
  padding: 7px;
  margin: 7px;
  height: 40px;
  min-width: 40px;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${props => (props.isActive ? 'lightblue' : 'white')};
  text-align: center;

  &:hover {
    background-color: hotpink;
  }
`
export default Button
