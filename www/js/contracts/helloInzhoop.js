var helloABI = [{
    constant: false,
    inputs: [],
    name: "mgreortal",
    outputs: [],
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "kill",
    outputs: [],
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "greet",
    outputs: [{
        name: "",
        type: "string"
    }],
    type: "function"
}, {
    inputs: [{
        name: "_greeting",
        type: "string"
    }],
    type: "constructor"
}]

var helloAdr = "0x211d6b541bb55b03f9bd79a5964b1469d7928343";
var hello = web3.eth.contract(helloABI).at(helloAdr);