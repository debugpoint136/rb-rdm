Experiments = React.createClass({
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
          <h5>List by :</h5>

          <div className="btn-group" id="repeat-options" onClick={this.showSelectedBucket}>
            <button type="button" value="Tissue" className="btn btn-default">Tissue</button>
            <button type="button" value="CellType" className="btn btn-default">Cell Type</button>
            <button type="button" value="Assay" className="btn btn-default">Assay</button>
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
