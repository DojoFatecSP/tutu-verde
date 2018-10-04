import React from 'react'

const AppBar = (props) => {
        return (
            <section className="menu cid-r5xgmhEtNO" id="menu1-a">
                <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="menu-logo">
                        <div className="navbar-brand">
                            <span className="navbar-caption-wrap">
                                <a className="navbar-caption text-white display-4" href="#">
                                    TUTU VERDE
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <div className="navbar-buttons mbr-section-btn"><a className="btn btn-sm btn-primary display-4" href="#"><span className="mbri-paper-plane mbr-iconfont mbr-iconfont-btn"></span>LOGIN</a></div>
                    </div>
                </nav>
            </section>
        )
}

export default AppBar