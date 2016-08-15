var MenuList = React.createClass({
    render: function() {
        var createMenuItem = function(item) {
            return <li key={item.id}>{item.title}</li>;
        };
        return (
            <div id="MenuList">
                <ul>{this.props.items.map(createMenuItem)}</ul>
            </div>
        );
    }
});

var INovelistApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            text: '',
            chapters: [],
            scenes: []
        };
    },
    onChange: function(e) {
        var findAllChapters = function(text) {
            var chaptersWithoutId = text.match(/((\n\n\n\n|^).*?(?=\n|$))/g);
            if (chaptersWithoutId.length === 0) {
                return [];
            }
            var chaptersWithId = [];
            for (var index = 0; index < chaptersWithoutId.length; index++) {
                var element = chaptersWithoutId[index];
                chaptersWithId = chaptersWithId.concat([{id: index, title: element}]);
            }
            return chaptersWithId;
        };

        this.setState({text: e.target.value});
        //e.preventDefault();
        this.setState({chapters: findAllChapters(this.state.text)});
    },
    render: function() {
        return (
        <div>
            <MenuList items={this.state.chapters} />
            <textarea onChange={this.onChange} value={this.state.text} />
        </div>
        );
    }
});

ReactDOM.render(<INovelistApp />,
  document.getElementById('iNovelist')
);