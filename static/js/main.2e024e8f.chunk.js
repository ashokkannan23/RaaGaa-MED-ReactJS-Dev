(this.webpackJsonpraagaamed=this.webpackJsonpraagaamed||[]).push([[0],{135:function(e,t,a){e.exports=a.p+"static/media/logo.7ab58fe0.png"},140:function(e,t,a){e.exports=a(270)},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},163:function(e,t){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),c=a(19),r=a.n(c),m=(a(145),a(146),a(68),a(147),a(20));var o=function(){return n.a.createElement("div",{id:"mySidebar",className:"sidebar"},n.a.createElement("p",{className:"openbtn",onClick:function(){return function(){var e=document.getElementById("mySidebar").offsetWidth;document.getElementById("mySidebar").style.width=50===e?"250px":"50px"}()}},n.a.createElement(m.d,null)))},i=(a(148),a(135)),s=a.n(i),d=a(136),u=a(44);var E=function(){function e(){window.open("http://www.raagaamed.com/","_blank")}return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"icon-col"},n.a.createElement("a",{href:"#contact"},n.a.createElement(d.a,null)),n.a.createElement("a",{href:"#home"},n.a.createElement(m.e,null)),n.a.createElement("a",{href:"#news"},n.a.createElement(u.b,null)))," ",n.a.createElement("div",{className:"logo"}," ",n.a.createElement("img",{style:{cursor:"pointer",width:"200px"},onClick:function(){return e()},src:s.a,alt:"RaaGaa+Med logo"})," ",n.a.createElement("p",{onClick:function(){return e()}}," www.raagaamed.com "))," ")},p=(a(149),a(34)),v=a(35),f=a(37),g=a(36),b=(a(150),a(151),a(137)),h=(a(264),function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var l;return Object(p.a)(this,a),(l=t.call(this,e)).state={StartDate:null,EndDate:null},l}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.DateRangePicker,{startDate:this.state.startDate,startDateId:"your_unique_start_date_id",endDate:this.state.endDate,endDateId:"your_unique_end_date_id",onDatesChange:function(t){var a=t.startDate,l=t.endDate;return e.setState({startDate:a,endDate:l})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},isOutsideRange:function(){return!1}}))}}]),a}(l.Component)),N=a(51),y=a.n(N);var w=function(){var e=new Date,t=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),a=new Date,l=new Date(a);l.setDate(l.getDate()-1);var c=l.getDate()+"-"+(l.getMonth()+1)+"-"+l.getFullYear(),r=new Date,m=new Date(r);m.setDate(m.getDate()+1);var o=m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear();function i(){y()("#Inpatientrotating").toggleClass("rotated"),y()("#Doctorrotating").toggleClass("rotated"),y()("#patientrotating").toggleClass("rotated")}return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"patientfilter"},n.a.createElement("div",{className:"float-left"},n.a.createElement("div",{className:"weekcenter"},n.a.createElement("span",{onClick:function(){return i()}},"This Week")),n.a.createElement("div",{id:"Inpatientrotating",className:"InPatientcenter"},n.a.createElement("p",null,"InPatient List"),n.a.createElement("span",null,"32")),n.a.createElement("div",{className:"prev"},n.a.createElement("span",{onClick:function(){return i()}},"Prev : ",c))),n.a.createElement("div",{className:"float-left"},n.a.createElement("div",{className:"monthcenter"},n.a.createElement("span",{onClick:function(){return i()}},"This Month")),n.a.createElement("div",{id:"Doctorrotating",className:"Doctorcenter"},n.a.createElement("p",null,"Doctor List"),n.a.createElement("span",null,"20")),n.a.createElement("div",{className:"today"},n.a.createElement("span",{onClick:function(){return i()}},"Today : ",t))),n.a.createElement("div",{className:"float-left"},n.a.createElement("div",{className:"fromtocenter"},n.a.createElement("span",null,n.a.createElement(h,null))),n.a.createElement("div",{id:"patientrotating",className:"Patientcenter"},n.a.createElement("p",null,"Patient List"),n.a.createElement("span",null,"12")),n.a.createElement("div",{className:"next"},n.a.createElement("span",{onClick:function(){return i()}},"Next : ",o))))," ")},k=(a(265),a(52));var C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"float-left usericons"},n.a.createElement("p",null,n.a.createElement(m.c,null)),n.a.createElement("p",null,n.a.createElement(u.c,null)),n.a.createElement("p",null,n.a.createElement(k.c,null))),n.a.createElement("div",{className:"float-left usericons"},n.a.createElement("p",null,n.a.createElement(k.a,null)),n.a.createElement("p",null,n.a.createElement(m.b,null)),n.a.createElement("p",null,n.a.createElement(k.b,null))),n.a.createElement("div",{className:"float-left usericons"},n.a.createElement("p",null,n.a.createElement(m.a,null)),n.a.createElement("p",null,n.a.createElement(m.d,null)),n.a.createElement("p",null,n.a.createElement(u.a,null))))},D=(a(266),a(267),a(268),function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var l;return Object(p.a)(this,a),(l=t.call(this,e)).state={file:"",imagePreviewUrl:""},l}return Object(v.a)(a,[{key:"_handleSubmit",value:function(e){e.preventDefault(),console.log("handle uploading-",this.state.file)}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,l=e.target.files[0];a.onloadend=function(){t.setState({file:l,imagePreviewUrl:a.result})},l&&a.readAsDataURL(l)}},{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl,a=null;return a=t?n.a.createElement("img",{alt:"Preview",src:t}):n.a.createElement("div",{className:"previewText"},"Image Preview"),n.a.createElement("div",{className:"previewComponent"},n.a.createElement("div",{className:"imgPreview"},a),n.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},n.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e._handleImageChange(t)}}),n.a.createElement("div",null)))}}]),a}(l.Component)),S=a(139),x=a(138),I=a.n(x);a(269);var F=function(){var e=n.a.useRef(null),t=n.a.useState(null),a=Object(S.a)(t,2),l=a[0],c=a[1],r=n.a.useCallback((function(t){t.preventDefault();var a=e.current.getScreenshot();c(a)}),[e,c]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(I.a,{audio:!1,ref:e,screenshotFormat:"image/jpeg",width:300})),n.a.createElement("div",{className:"col-sm-4 offset-sm-2 screenshotpreviw"},n.a.createElement("div",{style:{border:"0.5px solid #808080",width:"150px",height:"150px",textAlign:"center"}},l&&n.a.createElement("img",{src:l,style:{width:"150px",height:"150px",border:"1px solid white"},alt:"preview"})),n.a.createElement("button",{onClick:r},"Take Snapshot"))))},P=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"uploadImage",value:function(e){e.preventDefault();var t=document.getElementById("UploadImagefromcomputer"),a=document.getElementById("Captureimagefromwebcam");console.log(t,a),"none"===window.getComputedStyle(t).display?(t.style.display="block",a.style.display="none"):t.style.display="none"}},{key:"capturePhoto",value:function(e){e.preventDefault();var t=document.getElementById("UploadImagefromcomputer"),a=document.getElementById("Captureimagefromwebcam");console.log(t,a),"none"===window.getComputedStyle(a).display?(a.style.display="block",t.style.display="none"):a.style.display="none"}},{key:"render",value:function(){return n.a.createElement("form",{className:"formSize"},n.a.createElement("div",{className:"row Formsetstye"},n.a.createElement("div",{className:"col-sm-12 Requiredfieldspace"},n.a.createElement("span",{className:"Requiredfield"},"*"),"Required Field"),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("label",null,"Official Info:"),n.a.createElement("select",{className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select Branch Hospital"),n.a.createElement("option",{value:"1"},"One"),n.a.createElement("option",{value:"2"},"Two"),n.a.createElement("option",{value:"3"},"Three"))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("label",null,"Contact Details:"),n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Mobile Number",id:"number"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"UHID *",id:"number"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Alternative Mobile Number",id:"number"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Aadhar Number",id:"number"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Email ID",id:"number"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("label",null,"Personal Info:"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("select",{className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select"),n.a.createElement("option",{value:"1"},"Mr."),n.a.createElement("option",{value:"2"},"Mrs."),n.a.createElement("option",{value:"3"},"Ms."),n.a.createElement("option",{value:"4"},"Miss"))),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Patient Name *",id:"number"})))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("label",null,"Address Info:"),n.a.createElement("select",{className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select Occuption"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2."),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("select",{className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select"),n.a.createElement("option",{value:"1"},"Mr."),n.a.createElement("option",{value:"2"},"Mrs."),n.a.createElement("option",{value:"3"},"Ms."),n.a.createElement("option",{value:"4"},"Miss"))),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Parents/Spouse Name *",id:"number"})))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("textarea",{className:"form-control bg-dark",id:"exampleFormControlTextarea1",placeholder:"Address",rows:"1"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-7 textalign"},n.a.createElement("div",{class:"form-check form-check-inline"},n.a.createElement("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"option1"}),n.a.createElement("label",{class:"form-check-label",for:"inlineRadio1"},"Male")),n.a.createElement("div",{class:"form-check form-check-inline"},n.a.createElement("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"option2"}),n.a.createElement("label",{class:"form-check-label",for:"inlineRadio2"},"Female"))),n.a.createElement("div",{className:"col-sm-5"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"DOB *",id:"number"})))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select Department"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2."),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("input",{type:"text",className:"form-control bg-dark",placeholder:"Passport Number",id:"number"})),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select Consultant"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2."),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"))),n.a.createElement("div",{className:"col-sm-12",style:{border:"1px solid white",borderRadius:"3px"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 padddingbottom",style:{textAlign:"center"}},n.a.createElement("button",{className:"submitButton",onClick:this.uploadImage},"Upload Photo")),n.a.createElement("div",{className:"col-sm-6 padddingbottom",style:{textAlign:"center"}},n.a.createElement("button",{className:"submitButton",onClick:this.capturePhoto},"Capture Photo")),n.a.createElement("div",{className:"col-sm-12 padddingbottom",id:"UploadImagefromcomputer"},n.a.createElement(D,null)),n.a.createElement("div",{className:"col-sm-12 padddingbottom",id:"Captureimagefromwebcam"},n.a.createElement(F,null)))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("label",null,"Mode of Payment:"),n.a.createElement("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2."),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"))),n.a.createElement("div",{className:"col-sm-6 padddingbottom"},n.a.createElement("label",null,"Refered by:"),n.a.createElement("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Select"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2."),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"))),n.a.createElement("div",{class:"col-sm-4 offset-sm-8"},n.a.createElement("div",{style:{float:"right"}},n.a.createElement("button",{type:"submit",class:"btn btn-danger"},"Clear"),n.a.createElement("button",{type:"submit",class:"btn btn-info"},"Save & Next")))))}}]),a}(l.Component);var M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gallery-wrap"},n.a.createElement("div",{className:"item item-1"},n.a.createElement("div",{className:"hide"},n.a.createElement(P,null)),n.a.createElement("h2",{className:"registrationTitle"},"Registration")),n.a.createElement("div",{className:"item item-2"},n.a.createElement("h2",null,"Patient Appointment")),n.a.createElement("div",{className:"item item-3"},n.a.createElement("h2",null,"Medical Report")),n.a.createElement("div",{className:"item item-4"},n.a.createElement("h2",null,"Appoinment History")),n.a.createElement("div",{className:"item item-5"},n.a.createElement("h2",null,"Straffs List")),n.a.createElement("div",{className:"item item-6"},n.a.createElement("h2",null,"List")),n.a.createElement("div",{className:"item item-7"},n.a.createElement("h2",null,"Empty")),n.a.createElement("div",{className:"item item-8"},n.a.createElement("h2",null,"Empty List"))))};var R=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row header-bg"},n.a.createElement("div",{className:"nopadding"},n.a.createElement(C,null)),n.a.createElement("div",{className:"nopadding"},n.a.createElement(w,null)),n.a.createElement("div",{className:"nopadding"},n.a.createElement("div",{className:"titlename"},n.a.createElement("h5",null,"Sri Narayana Eductional And Medical Research Center"),n.a.createElement("p",null,"334,Chenglepet Main Road,Chenglepet"))),n.a.createElement("div",{className:"nopadding"},n.a.createElement(E,null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"content-width float-left"},n.a.createElement(M,null)),n.a.createElement("div",{className:"togglenav float-right"},n.a.createElement(o,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.2e024e8f.chunk.js.map