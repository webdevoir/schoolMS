webpackHotUpdate(0,{"./src/views/Orders/Orders.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a("./node_modules/react/react.js"),c=n(i),d=a("./node_modules/reactstrap/dist/reactstrap.es.js"),f=a("../node_modules/react-redux/es/index.js"),p=a("./src/utils/index.js"),h=a("./src/actions/feedback.js"),g=a("./src/components/OrderSearchResult.js"),m=n(g),v=a("./src/components/UpdateOrder.js"),y=n(v),O=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={searching:!0,count:1,query:"",options:"",searchResults:[],page:1,modalOpen:!1,order:{}},a}return l(t,e),s(t,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({query:t,page:1}),this.getOrders(this.state.page,t)}},{key:"updateOrder",value:function(){var e=this;(0,p.callApi)("/updateOrder/"+this.state.order._id,this.state.order,"POST").then(function(t){e.props.dispatch((0,h.showInfo)("Order Updated Successfully")),e.setState({modalOpen:!1}),e.getOrders(e.state.page)}).catch(function(t){return e.props.dispatch((0,h.showError)(t))})}},{key:"paginationClick",value:function(e){var t=Number(e.target.id);this.setState({page:t}),this.getOrders(this.state.page,this.state.query)}},{key:"getOrders",value:function(e,t){var a=this;t||(t="all"),e||(e=this.state.page),(0,p.callApi)("/order",{page:e,value:t},"POST").then(function(e){a.setState({count:e.count,searchResults:e.orders,searching:!1})}).catch(function(e){return a.props.dispatch((0,h.showError)(e))})}},{key:"changePay",value:function(){var e=!this.state.order.paid;this.setState({order:u({},this.state.order,{paid:e})})}},{key:"status",value:function(e){var t=e.target.value;this.setState({order:u({},this.state.order,{status:t})})}},{key:"delivered",value:function(){var e=!this.state.order.delivered;this.setState({order:u({},this.state.order,{delivered:e})})}},{key:"toggleModal",value:function(){this.setState({modalOpen:!this.state.modalOpen})}},{key:"componentWillMount",value:function(){this.getOrders(1)}},{key:"renderPageNumbers",value:function(){for(var e=this,t=Math.ceil(this.state.count/25),a=[],n=0;n<t;n++)this.state.page===n+1?a.push(c.default.createElement(d.PaginationItem,{active:!0},c.default.createElement(d.PaginationLink,{id:n+1,onClick:function(t){return e.paginationClick(t)}},n+1))):a.push(c.default.createElement(d.PaginationItem,null,c.default.createElement(d.PaginationLink,{id:n+1,onClick:function(t){return e.paginationClick(t)}},n+1)));return a}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchResults,n=t.searching,r=function(t){e.setState({order:t,modalOpen:!0})};return c.default.createElement("div",{className:"container"},c.default.createElement(d.Card,null,c.default.createElement(d.InputGroup,null,c.default.createElement(d.Input,{placeholder:"Search",onChange:function(t){return e.handleInputChange(t)},value:this.state.query}),c.default.createElement(d.InputGroupAddon,{onChange:function(t){return e.handleInputChange(t)}},c.default.createElement(d.Input,{type:"select"},c.default.createElement("option",{value:"all"},"All"),c.default.createElement("option",{value:"paid"},"Paid"),c.default.createElement("option",{value:"unpaid"},"Unpaid"),c.default.createElement("option",{value:"delivered"},"Delivered"),c.default.createElement("option",{value:"not delivered"},"Not Delivered"))),c.default.createElement(d.InputGroupAddon,null,c.default.createElement("i",{className:"fa fa-search fa-2x"}))),a.length?c.default.createElement(m.default,{select:r,orders:a}):c.default.createElement("div",null),!a.length&&n?c.default.createElement("div",{className:"text-center"},c.default.createElement("i",{className:"fa fa-spinner fa-spin fa-3x"})):a.length||n?c.default.createElement("i",null):c.default.createElement("h3",{style:{textAlign:"center",margin:20}},"No Results Found"),c.default.createElement(d.Pagination,{style:{cursor:"pointer"}},this.renderPageNumbers())),this.state.modalOpen?c.default.createElement(y.default,{data:this.state.order,confirm:function(){return e.updateOrder()},open:this.state.modalOpen,toggle:function(){return e.toggleModal()},paid:function(){return e.changePay()},delivered:function(){return e.delivered()},status:function(t){return e.status(t)}}):"")}}]),t}(i.Component);t.default=(0,f.connect)()(O)}});