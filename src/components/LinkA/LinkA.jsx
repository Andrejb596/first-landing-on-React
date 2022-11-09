import './linkA.scss'

export const LinkA = (props) => {
  return (
    <a href={props.link} className={props.className}>{props.title}</a>
  )
}

