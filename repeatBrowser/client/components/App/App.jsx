App = React.createClass({
  render() {
    return (
       <div>
            <div className="row">
                {this.props.nav}
            </div>
            <div className="row content">
                <div className="col-md-8 col-md-offset-2">
                    {this.props.content}
                </div>
            </div>
       </div>
    );
  }
});
