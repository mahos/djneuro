import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {
    const inView = {
        borderBottom: router.pathname === href ? 'solid 4px #1CA9F9': 'solid 4px transparent',

    }

    const handleClick = e => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <div>
            <a className="link-style" href={href} onClick={handleClick} style={inView}>
                {children}
            </a>
            <style jsx>{`
                a.link-style {
                    color: #DDD;
                    text-decoration: none;
                    padding: 0 2px 4px 2px;
                    margin: 0 8px;
                }
                a.link-style:hover {
                    // border-bottom: solid 4px green;
                }
            `}</style>
        </div>
    )
}

export default withRouter(ActiveLink)