import './demoView.scss'

export const DemoView = ({children}) => {
  return (
    <div className="demoViewContainer">
        <h1>{children}</h1>
    </div>
  )
}
