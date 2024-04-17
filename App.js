const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "i'm an h1 tag"),
        React.createElement("h2", {}, "you are welcome")

    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "i'm an h1 tag"),
        React.createElement("h2", {}, "you are welcome")
    ]),
);



console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);