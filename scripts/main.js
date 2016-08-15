var MenuList = React.createClass({
    render: function() {
        var createMenuItem = function(item) {
            return <li key={item.id}>{item.title}</li>;
        };
        return (
            <div id="menuList">
                <ul>{this.props.items.map(createMenuItem)}</ul>
            </div>
        );
    }
});

var INovelistApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            text: localStorage.getItem("text") || "",
            chapters: JSON.parse(localStorage.getItem("chapters")) || [],
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
                var element = chaptersWithoutId[index].replace(/\n\n\n\n/,"");
                chaptersWithId = chaptersWithId.concat([{id: index, title: element}]);
            }
            return chaptersWithId;
        };

        this.setState({text: e.target.value});
        localStorage.setItem("text", this.state.text);
        //e.preventDefault();
        this.setState({chapters: findAllChapters(this.state.text)});
        localStorage.setItem("chapters", JSON.stringify(this.state.chapters));
    },
    render: function() {
        return (
        <div>
            <MenuList items={this.state.chapters} />
            <div id="editor">
                <textarea onChange={this.onChange} value={this.state.text} />
            </div>
        </div>
        );
    }
});

ReactDOM.render(<INovelistApp />,
  document.getElementById('iNovelist')
);