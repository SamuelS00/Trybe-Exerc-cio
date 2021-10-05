import React, { Component } from "react";

class ComponentApp extends Component {
    render() {
        const nome = "Samuel"
        const Descricao = "Nasci em São Paulo em 2000"
        return <h1><p>{nome}, {Descricao}</p></h1>
    }
}

export default ComponentApp;