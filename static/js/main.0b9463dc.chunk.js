(this.webpackJsonpbmicalc=this.webpackJsonpbmicalc||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),i=(a(12),a(1)),s=a(2),u=a(4),h=a(3),o=(a(13),a(14),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={height:"",weight:"",BMI:""},e.updateHeight=function(t){e.setState({height:t.target.value})},e.updateWeight=function(t){e.setState({weight:t.target.value})},e.calculateBMI=function(t){t.preventDefault();var a=e.state.height/100*(e.state.height/100),n=e.state.weight/a;e.setState({BMI:n})},e.addClass=function(){return e.state.BMI<18.5?"amber":e.state.BMI>18.5&&e.state.BMI<24.9?"green":void 0},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"variableInput"},l.a.createElement("div",{className:"bmiTitle"},l.a.createElement("h2",null,"BMI Calculator"),l.a.createElement("p",null,"Enter your height and weight in centimetres and kilograms respectively")),l.a.createElement("form",null,l.a.createElement("h3",null,"Enter Height:"),l.a.createElement("input",{type:"text",value:this.state.height,onChange:this.updateHeight}),l.a.createElement("h3",null,"Enter Weight:"),l.a.createElement("input",{type:"text",value:this.state.weight,onChange:this.updateWeight}),l.a.createElement("button",{type:"submit",onClick:this.calculateBMI},"Calculate")),l.a.createElement("div",{className:"bmiDisplay ".concat(this.addClass)},"Your BMI is: ",this.state.BMI))}}]),a}(l.a.Component)),m=(a(15),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={feet:"",inches:"",stone:"",pounds:"",height:"",weight:""},e.heightConverter=function(){var t=e.state.feet,a=e.state.inches,n=parseInt(12*t)+parseInt(a);console.log(n);var l=2.54*n;e.setState({height:l})},e.weightConverter=function(){var t=6.35*e.state.stone+.45*e.state.pounds;e.setState({weight:t})},e.updateFeet=function(t){e.setState({feet:t.target.value})},e.updateInches=function(t){e.setState({inches:t.target.value})},e.updateStone=function(t){e.setState({stone:t.target.value})},e.updatePounds=function(t){e.setState({pounds:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"variableConverter"},l.a.createElement("div",{className:"converterTitle"},l.a.createElement("h2",null,"Converter"),l.a.createElement("p",null,"Convert your height and weight into centimetres and kilograms respectively")),l.a.createElement("div",{className:"heightConverter"},l.a.createElement("h3",null,"Height Converter"),l.a.createElement("input",{type:"text",placeholder:"Feet",value:this.state.feet,onChange:this.updateFeet}),l.a.createElement("input",{type:"text",placeholder:"Inches",value:this.state.inches,onChange:this.updateInches}),l.a.createElement("button",{type:"submit",onClick:this.heightConverter},"Calculate"),l.a.createElement("div",{className:"conversionDisplay"},l.a.createElement("h4",null))),l.a.createElement("div",{className:"weightConverter"},l.a.createElement("h3",null,"Weight Converter"),l.a.createElement("input",{type:"text",placeholder:"Stone",value:this.state.stone,onChange:this.updateStone}),l.a.createElement("input",{type:"text",placeholder:"Pounds",value:this.state.pounds,onChange:this.updatePounds}),l.a.createElement("button",{type:"submit",onClick:this.weightConverter},"Calculate"),l.a.createElement("div",{className:"conversionDisplay"},l.a.createElement("p",null,"Your height is ",this.state.height),l.a.createElement("p",null,"Your weight is ",this.state.weight))))}}]),a}(l.a.Component)),p=(a(16),function(){return l.a.createElement("div",{className:"key"},l.a.createElement("p",null,"Key Chart"),l.a.createElement("span",{className:"underWeight"},l.a.createElement("div",{className:"amber"}),l.a.createElement("p",null,"Underweight")),l.a.createElement("span",{className:"healthyWeight"},l.a.createElement("div",{className:"green"}),l.a.createElement("p",null,"Healthy weight")),l.a.createElement("span",{className:"overWeight"},l.a.createElement("div",{className:"amber"}),l.a.createElement("p",null,"Over weight")),l.a.createElement("span",{className:"obeseWeight"},l.a.createElement("div",{className:"red"}),l.a.createElement("p",null,"Obese")))}),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={height:"",weight:"",bmi:""},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"BMI CALCULATOR"),l.a.createElement("div",{className:"mainBody"},l.a.createElement(m,null),l.a.createElement(o,null),l.a.createElement(p,null)))}}]),a}(l.a.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.0b9463dc.chunk.js.map