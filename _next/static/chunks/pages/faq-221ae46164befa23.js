(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7746],{1671:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return i(1086)}])},3538:function(e,s,i){"use strict";var n=i(1438),r=i(2951),a=i(8029),t=i(460),l=i(5893),c=i(7294),o=i(1664),d=i.n(o),u=function(e){(0,a.Z)(i,e);var s=(0,t.Z)(i);function i(){return(0,n.Z)(this,i),s.apply(this,arguments)}return(0,r.Z)(i,[{key:"render",value:function(){var e=this.props,s=e.pageTitle,i=e.homePageUrl,n=e.homePageText,r=e.activePageText,a=e.bgImgClass;return(0,l.jsxs)("div",{className:"page-title-area ".concat(a),children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"page-title-content",children:[(0,l.jsx)("h2",{children:s}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(d(),{href:i,children:(0,l.jsx)("a",{children:n})})}),(0,l.jsx)("li",{children:r})]})]})}),(0,l.jsxs)("div",{className:"lines",children:[(0,l.jsx)("div",{className:"line"}),(0,l.jsx)("div",{className:"line"}),(0,l.jsx)("div",{className:"line"})]})]})}}]),i}(c.Component);s.Z=u},6969:function(e,s,i){"use strict";i.d(s,{Z:function(){return v}});var n=i(7568),r=i(4924),a=i(6042),t=i(9396),l=i(4051),c=i.n(l),o=i(5893),d=i(7294),u=i(9669),m=i.n(u),h=i(6455),x=i.n(h),p=i(7630),j=i.n(p)()(x()),g={name:"",email:"",number:"",subject:"",text:""},v=function(){var e=(0,d.useState)(g),s=e[0],i=e[1],l=function(e){var s=e.target,n=s.name,l=s.value;i((function(e){return(0,t.Z)((0,a.Z)({},e),(0,r.Z)({},n,l))}))},u=function(){var e=(0,n.Z)(c().mark((function e(n){var r,a,t,l,o,d,u,h;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r="".concat("https://bariton-react.envytheme.com","/api/contact"),a=s.name,t=s.email,l=s.number,o=s.subject,d=s.text,u={name:a,email:t,number:l,subject:o,text:d},e.next=7,m().post(r,u);case 7:h=e.sent,console.log(h),i(g),j.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(s){return e.apply(this,arguments)}}();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("form",{onSubmit:u,children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"text",name:"name",placeholder:"Name",className:"form-control",value:s.name,onChange:l,required:!0})})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"text",name:"email",placeholder:"Email",className:"form-control",value:s.email,onChange:l,required:!0})})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"text",name:"number",placeholder:"Phone number",className:"form-control",value:s.number,onChange:l,required:!0})})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"text",name:"subject",placeholder:"Subject",className:"form-control",value:s.subject,onChange:l,required:!0})})}),(0,o.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("textarea",{name:"text",cols:"30",rows:"6",placeholder:"Write your message...",className:"form-control",value:s.text,onChange:l,required:!0})})}),(0,o.jsx)("div",{className:"col-lg-12 col-sm-12",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})})]})})})}},1086:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return f}});var n=i(1438),r=i(2951),a=i(8029),t=i(460),l=i(5893),c=i(7294),o=i(2808),d=i(3538),u=i(1876),m=i(6969),h=function(e){(0,a.Z)(i,e);var s=(0,t.Z)(i);function i(){return(0,n.Z)(this,i),s.apply(this,arguments)}return(0,r.Z)(i,[{key:"render",value:function(){return(0,l.jsxs)("div",{className:"faq-contact",children:[(0,l.jsxs)("div",{className:"section-title",children:[(0,l.jsx)("h2",{children:"Do You Have Any Questions"}),(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,l.jsx)("div",{className:"faq-contact-form",children:(0,l.jsxs)("div",{className:"row align-items-center",children:[(0,l.jsx)("div",{className:"col-lg-5 col-md-12",children:(0,l.jsx)("div",{className:"faq-contact-image",children:(0,l.jsx)("img",{src:"/images/contact.png",alt:"image"})})}),(0,l.jsx)("div",{className:"col-lg-7 col-md-12",children:(0,l.jsx)(m.Z,{})})]})})]})}}]),i}(c.Component),x=h,p=function(e){(0,a.Z)(i,e);var s=(0,t.Z)(i);function i(){return(0,n.Z)(this,i),s.apply(this,arguments)}return(0,r.Z)(i,[{key:"render",value:function(){return(0,l.jsx)("section",{className:"faq-area ptb-110",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsx)("div",{className:"faq-accordion",children:(0,l.jsxs)(u.UQ,{preExpanded:["a"],children:[(0,l.jsxs)(u.Qd,{uuid:"a",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"Which material types can you work with?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]}),(0,l.jsxs)(u.Qd,{uuid:"b",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"Is smart lock required for instant apps?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]}),(0,l.jsxs)(u.Qd,{uuid:"c",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"Can I have multiple activities in a single feature?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]}),(0,l.jsxs)(u.Qd,{uuid:"d",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"Which material types can you work with?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]}),(0,l.jsxs)(u.Qd,{uuid:"e",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"Why choose our services in your business?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]}),(0,l.jsxs)(u.Qd,{uuid:"f",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"How to get start with us?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]}),(0,l.jsxs)(u.Qd,{uuid:"g",children:[(0,l.jsx)(u.Ol,{children:(0,l.jsx)(u.on,{children:(0,l.jsx)("span",{children:"Why choose our services in your business?"})})}),(0,l.jsx)(u.Mt,{children:(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."})})]})]})})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"faq-content",children:[(0,l.jsxs)("div",{className:"section-title",children:[(0,l.jsx)("span",{children:"Ask Question"}),(0,l.jsx)("h2",{children:"Frequently Asked Questions?"}),(0,l.jsx)("p",{children:"Veniam quis nostrud exercitation ullamco laboris nist aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip."})]}),(0,l.jsx)("div",{className:"faq-image",children:(0,l.jsx)("img",{src:"/images/faq.png",alt:"image"})})]})})]}),(0,l.jsx)(x,{})]})})}}]),i}(c.Component),j=p,g=i(8348),v=function(e){(0,a.Z)(i,e);var s=(0,t.Z)(i);function i(){return(0,n.Z)(this,i),s.apply(this,arguments)}return(0,r.Z)(i,[{key:"render",value:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)(d.Z,{pageTitle:"Frequently Asked Questions",homePageUrl:"/",homePageText:"Home",activePageText:"Faq",bgImgClass:"item-bg1"}),(0,l.jsx)(j,{}),(0,l.jsx)(g.Z,{})]})}}]),i}(c.Component),f=v}},function(e){e.O(0,[1664,2716,1876,9423,2808,9774,2888,179],(function(){return s=1671,e(e.s=s);var s}));var s=e.O();_N_E=s}]);