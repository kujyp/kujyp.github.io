webpackJsonp([2638498282051],{44:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),u=n(l),i=a(15),c=n(i),f=a(79),p=n(f);a(54);var d=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,o=e.description,r=this.props.data.node.fields,s=r.slug,l=r.categorySlug;return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,p.default)(a).format("MMMM D, YYYY")},(0,p.default)(a).format("MMMM YYYY")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:l},u.default.createElement(c.default,{to:l,className:"post__meta-category-link"},n))),u.default.createElement("h2",{className:"post__title"},u.default.createElement(c.default,{className:"post__title-link",to:s},t)),u.default.createElement("p",{className:"post__description"},o),u.default.createElement(c.default,{className:"post__readmore",to:s},"Read"))},t}(u.default.Component);t.default=d,e.exports=t.default},54:function(e,t){},232:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),u=n(l),i=a(44),c=n(i),f=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=[],t=this.props.tag,a=this.props.posts;return a.forEach(function(t){e.push(u.default.createElement(c.default,{data:t,key:t.node.fields.slug}))}),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},u.default.createElement("div",{className:"page"},u.default.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),u.default.createElement("div",{className:"page__body"},e))))},t}(u.default.Component);t.default=f,e.exports=t.default},241:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=a(1),u=n(l),i=a(22),c=n(i),f=a(23),p=n(f),d=a(232),m=n(d),_=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.tag;return u.default.createElement("div",null,u.default.createElement(c.default,{title:'All Posts tagged as "'+t+'" - '+e}),u.default.createElement(p.default,{siteMetadata:this.props.data.site.siteMetadata}),u.default.createElement(m.default,{posts:this.props.data.allMarkdownRemark.edges,tag:t}))},t}(u.default.Component);t.default=_;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-template-jsx-2b3726fa7cce65b202ed.js.map