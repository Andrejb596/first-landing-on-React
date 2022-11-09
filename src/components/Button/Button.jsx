import './button.scss'
export const Button = (props) => {
  return (
    <button className={props.className}>{props.title}</button>
  )
}
