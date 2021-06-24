import Link from 'next/link';
// import Router from 'next/router';
import { withRouter } from 'next/router'
import router from 'next/dist/client/router';
import ActiveLink from './ActiveLink';
import { timingSafeEqual } from 'crypto';


// const NaviTest = (props) => (
//     <div>
//         <nav>
//                 <div className="navLeft">
//             <Link href="/">
//                 <a className="linkHomeStyle">
//                     <img className="linkLogoStyle" src="/static/images/logo/djneuroLogo.png" />
//                 </a>
//             </Link>
//         </div>
//         <div className="navRight">
//             <Link href="/about">
//                 <a className="linkStyle" style={props.isInView('about')}>About</a>
//             </Link>
//             <Link href="/services">
//                 <a className="linkStyle inView" style={props.isInView('services')}>Services</a>
//             </Link>
//             <Link href="/resources">
//                 <a className="linkStyle" style={props.isInView('resources')}>Resources</a>
//             </Link>
//             <Link href="/team">
//                 <a className="linkStyle" style={props.isInView('team')}>Team</a>
//             </Link>
//             <Link href="/news">
//                 <a className="linkStyle" style={props.isInView('news')}>News</a>
//             </Link>
//         </div>
//         </nav>
//         <style jsx>{`
//             nav {
//                 position: relative;
//                 display: inline-block;
//                 width: 100%;
//                 background: linear-gradient(#0f040f, #0f040f, #001226);
//                 padding: 0;
//             }
//             .navLeft {
//                 position: relative;
//                 float: left;
//             }
//             .navRight {
//                 position: relative;
//                 float: right;
//                 top: 42px;
//             }
//             .linkHomeStyle {
//                 border-bottom: none;
//                 padding-bottom: 0;
//             }
//             .linkLogoStyle {
//                 height: 65px;
//                 display: inline-block;
//             }
//             a {
//                 color: #DDD;
//                 text-decoration: none;
//                 padding: 15px 10px 9px 10px;
//             }

//             a.linkStyle {
//                 margin-right: 8px;
//             }

//             a.inView {
//                 border-bottom: solid 4px blueviolet;
//             }

//             a:hover {
//                 border-bottom: solid 4px black;
//             }
//             div {
//                 padding: 0;
//                 margin: 0;
//             }
//         `}</style>
//     </div>
// );
    
// NaviTest.getInitialProps = async function(context) {
//     console.log('inside navitest initialprops');
//     console.log('context.query is: ', context.query);
//     param = context.query;
//     return {
//         // isInView: function isInView(navItem) {
//         //     if (navItem === context.query) {
//         //         return { borderBottom: 'solid 4px blueviolet' }
//         //     }
//         // },
//         // isInView(navItem) {
//         //     if (navItem === context.query) {
//         //         return { borderBottom: 'solid 4px blueviolet' }
//         //     }
//         // },
//         param
//     }
// }

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    collapseClass(e) {
        // console.log('inside collapseClass()');
        // console.log(e);
        // consolelog('window.innerWidth?: ', window.innerWidth)
        // return (window && window.innerWidth > 1200 ? '' : 'collapse');
    }

    toggleMenu() {
        this.state.menuOpen = !this.state.menuOpen;
    }
    // constructor(props) {
    //     super(props);
    //     console.log('inside constructor');
    //     // console.log(Router.asPath);
    //     this.state = {
    //         // param: router.asPath
    //         // param: Router.asPath
    //     }; 
    // }
    // isInView(navItem) {
    //     if (navItem === this.state.param) {
    //         return { 
    //             borderBottom: 'solid 4px blueviolet',
    //             zIndex: '5',
    //             position: 'relative'
    //         }
    //     }
    // }
    render() {
        // console.log('props? ', this.state.param);
        return (
            <div>
                <nav>
                    <div className="navLeft">
                        <Link href="/">
                            <a className="linkHomeStyle">
                                 <img className="linkLogoStyle" src="/static/images/logo/djneuroLogo.png" />
                            </a>
                        </Link>
                    </div>
                    <div className={`navRight ${this.state.menuOpen ? 'visible': 'test'}`} onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
                        <div className="linkWrap">
                            <ActiveLink href="/about">About</ActiveLink>
                        </div>
                        <div className="linkWrap">
                            <ActiveLink href="/services">SciOps</ActiveLink>
                        </div>
                        <div className="linkWrap">
                            <ActiveLink href="/resources">Resources</ActiveLink>
                        </div>
                        <div className="linkWrap">
                            <ActiveLink href="/news">News</ActiveLink>
                        </div>
                        {/* <Link href="/about">
                            <a className="linkStyle" style={this.isInView('/about')}>About</a>
                        </Link>
                        <Link href="/services">
                            <a className="linkStyle" style={this.isInView('/services')}>Services</a>
                        </Link>
                        <Link href="/resources">
                            <a className="linkStyle" style={this.isInView('/resources')}>Resources</a>
                        </Link>
                        <Link href="/team">
                            <a className="linkStyle" style={this.isInView('/team')}>Team</a>
                        </Link>
                        <Link href="/news">
                            <a className="linkStyle" style={this.isInView('/news')}>News</a>
                        </Link> */}
                    </div>
                </nav>
                <style jsx>{`
                    nav {
                        position: relative;
                        display: inline-block;
                        width: 100%;
                        background: linear-gradient(#0f040f, #0f040f, #001226);
                        padding: 0;
                    }
                   .navLeft {
                       position: relative;
                       float: left;
                   }
                   .navRight {
                       position: relative;
                       float: right;
                       top: 42px;
                       display: flex;
                       flex-direction: row;
                   }
                   .linkHomeStyle {
                       border-bottom: none;
                       padding-bottom: 0;
                   }
                   .linkLogoStyle {
                       height: 65px;
                       display: inline-block;
                   }
                    // a {
                    //     color: #DDD;
                    //     text-decoration: none;
                    //     padding: 15px 10px 9px 10px;
                    // }

                    // a.linkStyle {
                    //     margin-right: 8px;
                    // }

                    a.inView {
                        border-bottom: solid 4px blueviolet;
                        position: relative;
                        z-index: 100;
                    }
                    .linkWrap {
                        padding: 15px 0px 9px 7px;
                        margin-top: -15px;
                    }

                    .linkWrap:hover { 
                        border-bottom: solid 4px #d6a9ff; // pastel blueviolet
                    }

                    @media(max-width: 768px) {
                        .navRight .linkWrap {
                            display: none;
                        }
                        .navRight:before {
                            content: "\u2261";
                            font-size: 50px;
                            color: white;
                            position: relative;
                            margin: 0 15px;
                            transform: translateY(-60%);
                        }
                        .navRight.visible {
                            display: block;
                            position: absolute;
                            z-index: 500;
                            flex-direction: column;
                            content: '';
                            background-color: #0f040f;
                            right: 0;
                            width: 66%;
                            text-align: center;
                            padding-left: 25px;
                        }
                        .navRight.visible .linkWrap {
                            display: block;
                            float: bottom;
                            padding: 20px 0;
                        }
                        .navRight.visible .linkWrap:hover {
                            border-bottom: none;
                            border-left: 10px solid #0f040f;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
export default Navigation;

// export default NaviTest;