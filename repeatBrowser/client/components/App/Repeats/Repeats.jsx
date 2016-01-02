Repeats = React.createClass({
    getInitialState() {
      return {
        selectedVal: 'nothing yet'
      };
    },

    showSelectedBucket(e) {
        e.preventDefault();
        this.setState({ selectedVal: $(e.target).val() });
    },
    showHeader() {
        if ( this.state.selectedVal === 'nothing yet') {
            return <h1>You selected {this.state.selectedVal}  above.. </h1>;
        } else {
            return <h1>Filtering on {this.state.selectedVal} </h1>;
        }
    },
  render() {
    return (
        <div className="container-fluid">
            <h5>Pick by :</h5>

            <div className="btn-group" id="repeat-options" onClick={this.showSelectedBucket}>
                <button type="button" value="Class" className="btn btn-default">Class</button>
                <button type="button" value="Family" className="btn btn-default">Family</button>
                <button type="button" value="Subfamily" className="btn btn-default">Subfamily</button>
            </div>

            <div className="jumbotron">
                <div className="container">
                    {this.showHeader()}

                    <p>Contents...</p>
                    <p>
                        <a className="btn btn-primary btn-lg">Learn more</a>
                    </p>
                </div>
            </div>
        </div>

    );
  }
});
