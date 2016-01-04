Repeats = React.createClass({
    getInitialState() {
      return {
        selectedVal: 'nothing yet',
          picked: {
              Class : [],
              Family : [],
              Subfamily: []
          }
      };
    },
    handleClick(event) {
        var newState = event.target.value;
        var currentState = this.state.picked;

        var foundIndex = currentState[this.state.selectedVal].indexOf(newState);

        if(foundIndex==-1) {
            currentState[this.state.selectedVal].push(newState); // not found
        } else {
            // if already picked, delete it
            currentState[this.state.selectedVal].splice(foundIndex, 1);
        }

        this.setState({picked: currentState}); //save the state
        this.props.updateSelectionCFS(this.state.picked); // send this back to parent
    },
    checked() {
        if ( this.state.selectedVal )
            return true;
    },

    showSelectedBucket(e) {
        e.preventDefault();
        this.setState({ selectedVal: $(e.target).val() });
    },
    showContent() {
        if ( this.state.selectedVal === 'Class') {
            return this.renderClass();
        } else if ( this.state.selectedVal === 'Family') {
            return this.renderFamily();
        } else {
            return this.renderSubfamily();
        }
    },
    showHeader() {
        if ( this.state.selectedVal === 'nothing yet') {
            return <h1>You selected {this.state.selectedVal}  above.. </h1>;
        } else {
            return(
            <div>
                <h1>Filtering on {this.state.selectedVal} </h1>
                <p>Contents...</p>
                <ul>
                    {this.showContent()}
                </ul>
            </div>
            )
        }
    },
    getClass(data) {
        return _.keys(_.groupBy(data,
            function (d) {
                return d.class
            }));
    },
    getFamily(data) {
        return _.keys(_.groupBy(data,
            function (d) {
                return d.family
            }));
    },
    getSubfamily(data) {
        return _.keys(_.groupBy(data,
            function (d) {
                return d.subfamily
            }));
    },
    renderClass() {
        var classes = [];
        classes = this.getClass(this.props.data);
        return classes.map((classname) => {
            return (
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={classname} id={classname} key={classname} onClick={this.handleClick}/>
                        {classname}
                    </label>
                </div>
                )
        });
    },
    renderFamily() {
        var classes = [];
        classes = this.getFamily(this.props.data);
        return classes.map((familyname) => {
            return (
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={familyname} id={familyname} key={familyname} onClick={this.handleClick}/>
                        {familyname}
                    </label>
                </div>
            )
        });
    },
    renderSubfamily() {
        var classes = [];
        classes = this.getSubfamily(this.props.data);
        return classes.map((subfamilyname) => {
            return (
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={subfamilyname} id={subfamilyname} key={subfamilyname} onClick={this.handleClick}/>
                        {subfamilyname}
                    </label>
                </div>
            )
        });
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
                </div>
            </div>
        </div>

    );
  }
    /*
    * TODO : Filter Family based on selected class
    * TODO : Filter Subfamilies based on selected family
    * TODO : When User Goes to some other component and comes backs, render this page with selected state*/
});
