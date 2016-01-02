Matrix = React.createClass({
  render() {
    return (
        <div>
        <div className="jumbotron">
          <div className="container">
            <h4>Matrix View</h4>
            <ul>
              <li>1.CFSMeta</li>
              <li>2.Subfamily-xAxis</li>
              <li>3.Heatmap</li>
              <li>4.Pop over - Link to generate Detailed View</li>
              <li>5.Experiment - yAxis</li>
              <li>6.ExperimentMeta</li>
            </ul>

          </div>
        </div>

          <div className="container">
            <div className="row CFSMeta col-md-8 col-md-offset-4">
              <svg height="45">
                <g>
                  <h3>CFSMeta</h3>
                </g>
              </svg>
            </div>
              <div className="row Subfamily-xAxis col-md-8 col-md-offset-4">
                <svg height="50">
                  <g>
                    <h3>Subfamily-xAxis</h3>
                  </g>
                </svg>
              </div>

            <div className="row">
              <div className="col-md-1 experimentMeta">
                <svg height="700">
                  <g>
                    <p>ExperimentMeta</p>
                  </g>
                </svg>
              </div>
              <div className="col-md-3 experiment-yAxis">
                <svg height="700">
                  <g>
                    <p>Experiment - yAxis</p>
                  </g>
                </svg>
              </div>
              <div className="col-md-8 heatmap">
                <svg height="700">
                  <g>
                    <h4>Heatmap</h4>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
    );
  }
});
