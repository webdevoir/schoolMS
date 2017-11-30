webpackHotUpdate(0,{"./src/views/Dashboard/Dashboard.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n("./node_modules/react/react.js"),u=a(l),d=(n("./node_modules/react-chartjs-2/es/index.js"),n("./node_modules/reactstrap/dist/reactstrap.es.js")),f=n("../node_modules/react-redux/es/index.js"),m=n("./src/components/Chart/Chart.js"),h=a(m),p=n("./src/components/NoticeBoard.js"),y=a(p),g=n("./src/components/Calendar.js"),b=a(g),v=n("./src/components/DashboardSummary.js"),j=a(v),E=n("./src/components/NoticeBoardModal.js"),S=a(E),w=n("./src/utils/index.js"),_=n("./src/actions/feedback.js"),O=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedDays:[],modal:!1,notice:{date:"",body:""},notices:{searching:!0,notices:[]},summary:{searching:!0,totalStudents:"",pendingReg:"",totalStaff:""}},n}return c(t,e),i(t,[{key:"handleDayClick",value:function(e){this.setState({modal:!this.state.modal,notice:s({},this.state.notice,{date:e})})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"editNotice",value:function(e){this.setState({notice:s({},this.state.notice,{body:e.target.value})})}},{key:"getSummary",value:function(){var e=this;(0,w.callApi)("/getSummary").then(function(t){e.setState({summary:s({},e.state.summary,{totalStudents:t.totalStudents,pendingReg:t.pendingReg,totalStaff:t.totalStaff,searching:!1}),notices:{searching:!1,notices:t.noticeBoard},selectedDays:t.noticeBoard.map(function(e){return e.date})})}).catch(function(e){return console.log(e)})}},{key:"createNotice",value:function(){var e=this,t=this.state.notice;[t.date,t.body].every(function(e){return""!==e})?((0,w.callApi)("/createNotice",this.state.notice,"POST").then(function(t){return e.props.dispatch((0,_.showInfo)("New Notice Added"))}).catch(function(t){return e.props.dispatch((0,_.showError)("Error Creating Notice"))}),this.toggle(),this.getSummary()):this.props.dispatch((0,_.showError)("The field must be filled"))}},{key:"componentWillMount",value:function(){this.getSummary()}},{key:"render",value:function(){var e=this,t=this.state,n=t.summary,a=t.notice,o=t.notices,r=t.selectedDays,c=t.modal;return u.default.createElement("div",{className:"animated fadeIn container"},u.default.createElement(j.default,{data:n}),u.default.createElement(d.Card,{style:{padding:15}},u.default.createElement(d.Row,null,u.default.createElement("div",null,u.default.createElement(d.Col,null,u.default.createElement(b.default,{select:function(t){return e.handleDayClick(t)},selectedDays:r}))),u.default.createElement(d.Col,null,u.default.createElement("div",{style:{alignSelf:"stretch",flex:1}},u.default.createElement(y.default,{data:o})))),u.default.createElement(S.default,{isOpen:c,toggle:function(){return e.toggle()},data:a,edit:function(t){return e.editNotice(t)},submit:function(){return e.createNotice()}}),u.default.createElement(h.default,null)))}}]),t}(l.Component);t.default=(0,f.connect)()(O)}});
//# sourceMappingURL=0.4662e1951ee21eb75b3e.hot-update.js.map