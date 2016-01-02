FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        ReactLayout.render(App, {
            content: <Dashboard />,
            nav: <Nav />
        });
    }
});

FlowRouter.route('/repeats', {
    name: 'repeat',
    action() {
        ReactLayout.render(App, {
            content: <Repeats />,
            nav: <Nav />
        })
    }
});

FlowRouter.route('/datasets', {
    name: 'datasets',
    action() {
        ReactLayout.render(App, {
            content: <Datasets />,
            nav: <Nav />
        })
    }
});

FlowRouter.route('/matrix', {
    name: 'matrix',
    action() {
        ReactLayout.render(App, {
            content: <Matrix />,
            nav: <Nav />
        })
    }
});