App = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            // all subscriptions go here
        }
    },
    componentWillMount() {
      this.loadCFSData();
    },
    getInitialState() {
      return {
        cfsData: [],
          selectedTE: []
      };
    },
    selectedCFS(picked) {
        this.setState({selectedTE: picked});
    },
    loadCFSData() {
        d3.csv("/CFS.csv")
            .row(function (d) {
                return {
                    id: d.id,
                    subfamily: d.subfamily,
                    family: d.family,
                    class: d.class
                    };
            }.bind(this))
            .get(function (error, rows) {
                if (error) {
                    console.error(error);
                    console.error(error.stack);
                }else{
                    this.setState({cfsData: rows});
                }
            }.bind(this));
    },
    showLayout() {
        if (this.props.content.props.name == 'Repeats') {
            return (
                <div className="row">
                    <div>
                        <div className="row">
                            {this.props.nav}
                        </div>
                        <div className="row content">
                            <div className="col-md-8 col-md-offset-2">
                                <Repeats data={this.state.cfsData} updateSelectionCFS={this.selectedCFS} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
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
                </div>
            )
        }
    },

  render() {
    return (
        <div className="row">
            { this.showLayout() }
        </div>
    );
  }
});
