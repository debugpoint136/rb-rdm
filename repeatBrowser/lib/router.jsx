FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        ReactLayout.render(App, {
            content: <Dashboard name="Dashboard"/>,
            nav: <Nav />
        });
    }
});

FlowRouter.route('/repeats', {
    name: 'repeat',
    action() {
        ReactLayout.render(App, {
            content: <Repeats name="Repeats"/>,
            nav: <Nav />
        })
    }
});

FlowRouter.route('/experiments', {
    name: 'experiments',
    action() {
        ReactLayout.render(App, {
            content: <Experiments name="Experiments"/>,
            nav: <Nav />
        })
    }
});

FlowRouter.route('/matrix', {
    name: 'matrix',
    action() {
        ReactLayout.render(App, {
            content: <Matrix name="Matrix"/>,
            nav: <Nav />
        })
    }
});