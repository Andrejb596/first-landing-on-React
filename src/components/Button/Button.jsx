import './button.scss'
export const Button = ({children, ...rest}) => {
  return (
    <button {...rest}>{children}</button>
  )
}
