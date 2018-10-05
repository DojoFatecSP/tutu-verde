import React from 'react'

const AppBar = (props) => {
        return (
            <section className="menu cid-r5xgmhEtNO" id="menu1-a">
                <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top">
                    
                    <div className="menu-logo">
                        <div className="navbar-brand">
                            <span className="navbar-caption-wrap">
                                <a className="navbar-caption text-white" href="#">
                                    {props.title}
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>
            </section>
        )
}

export default AppBar