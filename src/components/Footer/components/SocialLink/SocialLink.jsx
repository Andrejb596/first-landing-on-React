export default function SocialLink({ children, ...rest }) {
    return (
        <a {...rest}>
            {children}
        </a>
    )
}
