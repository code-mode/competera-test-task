$(function(){var e=React.createClass({displayName:"Header",render:function(){return React.createElement("div",null,React.createElement("a",{href:"#",className:"boards_wrapper"},React.createElement("span",{className:"boards-icon"},React.createElement("i",{className:"fa fa-trello"})),React.createElement("span",{className:"boards"},"Boards")),React.createElement("input",{className:"search",type:"text"}),React.createElement("span",{className:"search-icon"},React.createElement("i",{className:"fa fa-search"})),React.createElement("span",{className:"logo"}),React.createElement("a",{href:"#"},React.createElement("span",{className:"icon"},React.createElement("i",{className:"fa fa-bell"}))),React.createElement("a",{href:"#"},React.createElement("span",{className:"icon"},React.createElement("i",{className:"fa fa-info-circle"}))),React.createElement("a",{href:"#",className:"user_wrapper"},React.createElement("span",{className:"user-icon"}),React.createElement("span",{className:"user"},this.props.user)),React.createElement("a",{href:"#"},React.createElement("span",{className:"icon"},React.createElement("i",{className:"fa fa-plus"}))))}});ReactDOM.render(React.createElement(e,{user:"Master Yoda"}),document.getElementById("header"))});