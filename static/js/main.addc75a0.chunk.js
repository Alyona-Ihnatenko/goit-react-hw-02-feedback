(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,s){t.exports={statistics:"Statistics_statistics__U2a88",statList:"Statistics_statList__3zgMq",statItem:"Statistics_statItem__1hMTR",text:"Statistics_text__3GYb9",description:"Statistics_description__3g_7T"}},,function(t,e,s){t.exports={btnList:"FeedbackOptions_btnList__1wQYP",btnItem:"FeedbackOptions_btnItem__3W4W_",button:"FeedbackOptions_button__3Xvcj"}},,function(t,e,s){t.exports={sectionTitle:"Section_sectionTitle__3ieRW"}},,,,,function(t,e,s){t.exports={title:"Notification_title__3c6Zc"}},function(t,e,s){t.exports={wrapper:"Feedback_wrapper__2bCDr"}},,,,,,,function(t,e,s){},function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var a=s(2),c=s.n(a),n=s(6),i=s.n(n),r=(s(18),s(19),s(7)),o=s(8),l=s(9),b=s(13),d=s(12),j=s(3),u=s.n(j),h=s(0);function p(t){var e=t.options,s=t.onLeaveFeedback;return Object(h.jsx)("ul",{className:u.a.btnList,children:e.map((function(t){return Object(h.jsx)("li",{className:u.a.btnItem,children:Object(h.jsx)("button",{className:u.a.button,type:"button",onClick:function(){s(t)},children:t})},t)}))})}var x=s(5),O=s.n(x);function m(t){var e=t.title,s=t.children;return Object(h.jsxs)("section",{className:O.a.section,children:[Object(h.jsx)("h2",{className:O.a.sectionTitle,children:e}),s]})}var _=s(1),f=s.n(_);function v(t){var e=t.good,s=t.neutral,a=t.bad,c=t.total,n=t.positivePercentage;return Object(h.jsx)("div",{className:f.a.statistics,children:Object(h.jsxs)("ul",{className:f.a.statList,children:[Object(h.jsxs)("li",{className:f.a.statItem,children:[Object(h.jsx)("p",{className:f.a.text,children:"Good:"}),Object(h.jsx)("span",{className:f.a.description,children:e})]}),Object(h.jsxs)("li",{className:f.a.statItem,children:[Object(h.jsx)("p",{className:f.a.text,children:"Neutral:"}),Object(h.jsx)("span",{className:f.a.description,children:s})]}),Object(h.jsxs)("li",{className:f.a.statItem,children:[Object(h.jsx)("p",{className:f.a.text,children:"Bad:"}),Object(h.jsx)("span",{className:f.a.description,children:a})]}),Object(h.jsxs)("li",{className:f.a.statItem,children:[Object(h.jsx)("p",{className:f.a.text,children:"Total:"}),Object(h.jsx)("span",{className:f.a.description,children:c})]}),Object(h.jsxs)("li",{className:f.a.statItem,children:[Object(h.jsx)("p",{className:f.a.text,children:"Positiv feedback:"}),Object(h.jsxs)("span",{className:f.a.description,children:[n," %"]})]})]})})}var N=s(10),k=s.n(N);function g(t){var e=t.message;return Object(h.jsx)("p",{className:k.a.title,children:e})}var F=s(11),I=s.n(F),w=function(t){Object(b.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleButtonClick=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.keys(t.state).reduce((function(e,s){return e+t.state[s]}),0)},t}return Object(l.a)(s,[{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(100*this.state.good/this.countTotalFeedback())||0}},{key:"render",value:function(){var t=this.state,e=t.good,s=t.neutral,a=t.bad,c=this.countTotalFeedback(),n=Object.keys(this.state),i=this.countPositiveFeedbackPercentage();return Object(h.jsxs)("div",{className:I.a.wrapper,children:[Object(h.jsx)(m,{title:"Please leave feedback",children:Object(h.jsx)(p,{options:n,onLeaveFeedback:this.handleButtonClick})}),Object(h.jsx)(m,{title:"Statistics",children:0===c?Object(h.jsx)(g,{message:"No feedback given"}):Object(h.jsx)(v,{good:e,neutral:s,bad:a,total:c,positivePercentage:i})})]})}}]),s}(a.Component);var P=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(w,{})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.addc75a0.chunk.js.map