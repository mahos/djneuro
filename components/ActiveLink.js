import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {
    const inView = {
        borderBottom: router.pathname === href ? 'solid 4px #1CA9F9': 'transparent',

    }

    const handleClick = e => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <div>
            <a className="linkStyle" href={href} onClick={handleClick} style={inView}>
                {children}
            </a>
            <style jsx>{`
                a.linkStyle {
                    color: #DDD;
                    text-decoration: none;
                    padding: 15px 10px 9px 10px;
                    margin-right: 8px;
                }
                // a:hover {
                //     border-bottom: solid 4px black;
                // }
            `}</style>
        </div>
    )
}

export default withRouter(ActiveLink)