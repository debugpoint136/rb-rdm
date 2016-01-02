Nav = React.createClass({
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Wash U Repeat Browser</a></li>
                            <li><a href="/">Dashboard</a></li>
                            <li><a href="/repeats">Repeats</a></li>
                            <li><a href="/datasets">Datasets</a></li>
                            <li><a href="/matrix">Matrix</a></li>
                            <li><a href="#">Details View</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});