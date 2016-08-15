var MenuList = React.createClass({
    render: function() {
        var createItem = function(item) {
        return <li key={item.id}>{item.title}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var INovelistApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            text: '',
            chapters: [
                {
                    id: 1,
                    title: "Chapter A"
                },
                {
                    id: 2,
                    title: "Chapter B"
                },
                {
                    id: 3,
                    title: "Chapter C"
                }
            ],
            scenes: []
        };
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
        <div>
            <h3>TODO</h3>
            <MenuList items={this.state.chapters} />
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} value={this.state.text} />
            <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
        </div>
        );
    }
});

ReactDOM.render(<INovelistApp />,
  document.getElementById('iNovelist')
);