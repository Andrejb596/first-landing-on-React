import './link.scss'

export const Link = ({children, ...rest}) => {
  return (
    <a {...rest}>{children}</a>
  )
}

