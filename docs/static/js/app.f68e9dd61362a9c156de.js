webpackJsonp([1],{"4/hK":function(t,e){},"9xLI":function(t,e){},BoDG:function(t,e){},DhNU:function(t,e){},Mv4H:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("Mv4H")}function r(t){i("jFuy")}function o(t){i("ZH1h")}function s(t){i("BoDG")}function c(t){i("SNPt")}function d(t){i("DhNU")}function u(t,e){t.currentProjectId=e,Dt.update(t)}function h(t){var e=Date.now(),i={id:"p_"+e,name:"Untitled",html:"",style:"",js:"",created_at:e,modified_at:e};t.projects.push(i),u(t,i.id)}function a(t,e){var i=t.projects.find(function(t){return t.id===e.id});if(i){for(var n in e)i[n]=e[n];i.modified_at=Date.now()}Dt.update(t)}function l(t,e){var i=t.projects.find(function(t){return t.id===e}),n=t.projects.indexOf(i);t.projects.splice(n,1);var r=t.projects.sort(function(t,e){return t.modified_at<e.modified_at});r.length?u(t,r[0].id):u(t,null)}Object.defineProperty(e,"__esModule",{value:!0});var p,m=i("7+uW"),f=i("Dd8w"),j=i.n(f),v=i("bOdI"),w=i.n(v),P=i("8U58"),_=i.n(P),y=(i("4/hK"),i("epNC"),i("8Nur"),i("zA3a"),i("puAj"),i("5IAE"),i("9xLI"),i("hKnC"),i("M4fF")),g=i.n(y),E={upper:function(t){return t.toString().toUpperCase()}},C={name:"Editor",props:["type","height","code","currentProjectId"],data:function(){return{input:"",codeMirror:null}},filters:E,watch:{currentProjectId:function(){this.initCode()}},computed:{typeName:function(){return{html:"html",style:"css",js:"js"}[this.type]}},mounted:function(){this.initEditor(),this.initCode(),this.initChange()},methods:{initEditor:function(){var t={html:"htmlmixed",style:"css",js:"javascript"};this.codeMirror=_()(this.$el.querySelector(".inputarea"),{lineNumbers:!0,mode:t[this.type],lineWrapping:!0,theme:"material",scrollbarStyle:"overlay",tabSize:2}),this.$el.querySelector(".CodeMirror-scroll").style.height=this.$el.clientHeight},initCode:function(){this.setCodeMirrorValue(this.code)},initChange:function(){var t=this;this.codeMirror.on("change",g.a.debounce(function(){var e=t.codeMirror.getValue().trim();e!==t.code&&t.$emit("updateCode",t.type,e)},600))},setCodeMirrorValue:function(t){this.codeMirror.getDoc().setValue(t)}}},W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"editor editor-"+t.type,style:{height:t.height+"px"}},[i("div",{staticClass:"type"},[t._v(t._s(t.typeName))]),t._v(" "),i("div",{staticClass:"inputarea"}),t._v(" "),t._t("default")],2)},I=[],M={render:W,staticRenderFns:I},R=M,b=i("VU/8"),O=n,T=b(C,R,!1,O,null,null),H=T.exports,L=i("NYxO"),D={name:"EditorWrapper",props:{width:Number},data:function(){return{winHeight:0,minHeight:50,height:{html:0,style:0,js:0}}},components:{Editor:H},computed:j()({},Object(L.b)(["currentProjectId","currentProject"]),{editorWrapperWidth:function(){return{width:this.width+"px"}}}),watch:{currentProjectId:function(){this.$emit("initCode")}},created:function(){this.winHeight=window.innerHeight;for(var t in this.height)this.height[t]=this.winHeight/3;window.addEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.winHeight=window.innerHeight;var t=0;for(var e in this.height)t+=this.height[e];for(var i in this.height)this.height[i]=this.winHeight*this.height[i]/t},updateCode:function(t,e){this.$store.dispatch("updateProject",w()({id:this.currentProject.id},t,e))},resizeEditor:function(t,e,i){var n=this;this.cleanMouseEvent();var r=t.clientY,o=this.height[e],s=this.height[i];document.onmousemove=function(t){var c=t.clientY-r;o+c<n.minHeight?(n.height[e]=n.minHeight,n.height[i]=o+s-n.minHeight):s-c<n.minHeight?(n.height[e]=o+s-n.minHeight,n.height[i]=n.minHeight):(n.height[i]=s-c,n.height[e]=o+c)},document.onmouseup=this.cleanMouseEvent},cleanMouseEvent:function(){document.onmousemove=null,document.onmouseup=null}}},S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.editorWrapperWidth,attrs:{id:"editor-wrapper"}},[t.currentProject?i("div",[i("Editor",{attrs:{type:"html",height:t.height.html,code:t.currentProject.html,currentProjectId:t.currentProjectId},on:{updateCode:t.updateCode}},[i("div",{staticClass:"row-resizer",on:{mousedown:function(e){t.resizeEditor(e,"html","style")}}})]),t._v(" "),i("Editor",{attrs:{type:"style",height:t.height.style,code:t.currentProject.style,currentProjectId:t.currentProjectId},on:{updateCode:t.updateCode}},[i("div",{staticClass:"row-resizer",on:{mousedown:function(e){t.resizeEditor(e,"style","js")}}})]),t._v(" "),i("Editor",{attrs:{type:"js",height:t.height.js,code:t.currentProject.js,currentProjectId:t.currentProjectId},on:{updateCode:t.updateCode}})],1):t._e(),t._v(" "),t._t("default")],2)},N=[],x={render:S,staticRenderFns:N},k=x,$=i("VU/8"),z=r,J=$(D,k,!1,z,null,null),A=J.exports,U={name:"Preview",data:function(){return{currentProjectId:"",html:"",style:"",js:"",previewSrc:""}},computed:j()({},Object(L.b)(["currentProject"])),watch:{currentProject:{handler:function(t){if(!t)return!1;t.html===this.html&&t.js===this.js&&t.id===this.currentProjectId&&t.style!==this.style?this.updateStyle():this.update()},deep:!0}},mounted:function(){this.currentProject&&this.update()},methods:{update:function(){console.log("update"),this.currentProjectId=this.currentProject.id,this.html=this.currentProject.html,this.style=this.currentProject.style,this.js=this.currentProject.js;var t=this.$refs.previewRef;t.innerHTML="";var e=document.createElement("iframe");t.appendChild(e);var i=e.contentWindow.document,n=document.createElement("style");n.type="text/css",n.id=this.currentProject.id+"_style",n.textContent=this.style;var r=document.createElement("script");r.id=this.currentProject.id+"_script",r.textContent=this.js,i.open(),i.write(this.html||"<!DOCTYPE html><html><head><title></title></head><body></body></html>"),i.write(n.outerHTML),i.write(r.outerHTML),i.close()},updateStyle:function(){console.log("updateStyle"),this.style=this.currentProject.style,this.$refs.previewRef.querySelector("iframe").contentDocument.getElementById(this.currentProject.id+"_style").textContent=this.currentProject.style}}},K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"preview-wrapper"}},[i("div",{ref:"previewRef",attrs:{id:"preview"}}),t._v(" "),t._t("default")],2)},V=[],F={render:K,staticRenderFns:V},Y=F,B=i("VU/8"),q=o,G=B(U,Y,!1,q,null,null),X=G.exports,Z={name:"ProjectName",props:{active:Boolean,project:Object,projectListWidth:String},data:function(){return{name:"",editMode:!1}},methods:{switchProject:function(){this.$store.dispatch("switchProject",{id:this.project.id})},switchEditMode:function(){var t=this;this.editMode=!this.editMode,this.editMode?(this.name=this.project.name,setTimeout(function(){t.$refs.nameInputRef.select()},1)):this.name=""},blurInput:function(){this.$refs.nameInputRef.blur()},save:function(){var t=this,e=this.name.trim();e===this.project.name?this.switchEditMode():""===e?(this.name=this.project.name,this.switchEditMode()):this.$store.dispatch("updateProject",{id:this.project.id,name:e}).then(function(){t.switchEditMode()})},unsave:function(){this.name=this.project.name,this.switchEditMode()}}},Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",class:{active:t.active,"edit-mode":t.editMode}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"name",on:{click:t.switchProject,dblclick:t.switchEditMode}},[t._v(t._s(t.project.name))]),t._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"},{name:"model",rawName:"v-model",value:t.name,expression:"name"}],ref:"nameInputRef",staticClass:"name-input",attrs:{type:"text"},domProps:{value:t.name},on:{blur:t.save,keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.blurInput(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.unsave(e)}],input:function(e){e.target.composing||(t.name=e.target.value)}}})])},tt=[],et={render:Q,staticRenderFns:tt},it=et,nt=i("VU/8"),rt=s,ot=nt(Z,it,!1,rt,null,null),st=ot.exports,ct={name:"ProjectList",props:{width:Number},components:{ProjectName:st},computed:j()({},Object(L.b)(["projects","currentProjectId"]),{sortedProjects:function(){return this.projects.slice().sort(function(t,e){return e.modified_at-t.modified_at})}})},dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"project-list"}},[i("h1",{staticClass:"logo"},[t._v("<Sketch/>")]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"inner"},t._l(t.sortedProjects,function(e){return i("ProjectName",{key:e.name,attrs:{project:e,active:e.id===t.currentProjectId}})}))]),t._v(" "),t._t("default")],2)},ut=[],ht={render:dt,staticRenderFns:ut},at=ht,lt=i("VU/8"),pt=c,mt=lt(ct,at,!1,pt,null,null),ft=mt.exports,jt=(i("uMhA"),{name:"app",data:function(){return{winWidth:0,minWidth:50,width:{projectList:200,projectListHolder:0,editorWrapper:400},moving:!1,hideProjectList:!1}},components:{EditorWrapper:A,Preview:X,ProjectList:ft},computed:j()({},Object(L.b)(["currentProject","currentProjectId","projectCount"]),{projectListWidth:function(){return{width:this.width.projectList+"px"}},editorWrapperWidth:function(){return{width:this.width.editorWrapper+"px"}},dev:function(){return"http:"===window.location.protocol},hasProject:function(){return this.projectCount>0},tipsStyle:function(){return{left:this.width.projectList+"px"}}}),created:function(){this.winWidth=window.innerWidth,window.addEventListener("resize",this.handleResize)},mounted:function(){this.initShortcut()},methods:{handleResize:function(){this.winWidth=window.innerWidth},resize:function(t,e){var i=this;this.cleanMouseEvent();var n=t.clientX,r=this.width[e],o=this.width["editorWrapper"===e?"projectList":"editorWrapper"];window.onmousemove=function(t){i.moving=!0;var s=t.clientX-n;r+s<i.minWidth?i.width[e]=i.minWidth:i.winWidth-(r+s)-o<i.minWidth?i.width[e]=i.winWidth-i.minWidth-o:i.width[e]=r+s},window.onmouseup=this.cleanMouseEvent},cleanMouseEvent:function(){this.moving=!1,window.onmousemove=null,window.onmouseup=null},initShortcut:function(){document.addEventListener("keydown",this.shortcutKeydown,!1),document.addEventListener("keyup",this.shortcutKeyup,!1)},shortcutKeydown:function(t){17===t.keyCode?this.ctrlKey=!0:this.ctrlKey&&78===t.keyCode?this.newProject():this.ctrlKey&&8===t.keyCode?this.distroyProject():this.ctrlKey&&191===t.keyCode&&this.toggleProjectList()},shortcutKeyup:function(t){17===t.keyCode&&(this.ctrlKey=!1)},newProject:function(){this.$store.dispatch("addProject")},distroyProject:function(){this.currentProjectId&&window.confirm("Are you sure to delete this <"+this.currentProject.name+"/> ?")&&this.$store.dispatch("destroyProject",{id:this.currentProjectId})},toggleProjectList:function(){0===this.width.projectList?(this.width.projectList=this.width.projectListHolder,this.winWidth-this.width.projectList-this.width.editorWrapper<this.minWidth&&(this.width.editorWrapper=this.winWidth-this.width.projectList-this.minWidth)):(this.width.projectListHolder=this.width.projectList,this.width.projectList=0)}}}),vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ProjectList",{class:{transition:!t.moving},style:t.projectListWidth},[i("div",{staticClass:"resizer",on:{mousedown:function(e){t.resize(e,"projectList")}}})]),t._v(" "),i("EditorWrapper",{class:{transition:!t.moving},style:t.editorWrapperWidth},[i("div",{staticClass:"resizer",on:{mousedown:function(e){t.resize(e,"editorWrapper")}}})]),t._v(" "),i("Preview",{ref:"previewRef"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.moving,expression:"moving"}],staticClass:"mask"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasProject,expression:"!hasProject"}],class:{transition:!t.moving},style:t.tipsStyle,attrs:{id:"tips"}},[i("ul",[t._m(0,!1,!1),t._v(" "),i("li",[(t.dev,i("b",[t._v("⌃ + N")])),t._v(" to create a new project")]),t._v(" "),t._m(1,!1,!1),t._v(" "),t._m(2,!1,!1)])])],1)},wt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("b",[t._v("⌃ + /")]),t._v(" to toggle sidebar")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("b",[t._v("⌃ + Del")]),t._v(" to delete current project")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("b",[t._v("Double Click")]),t._v(" project title to rename")])}],Pt={render:vt,staticRenderFns:wt},_t=Pt,yt=i("VU/8"),gt=d,Et=yt(jt,_t,!1,gt,null,null),Ct=Et.exports,Wt={SWITCH_PROJECT:"SWITCH_PROJECT",ADD_PROJECT:"ADD_PROJECT",UPDATE_PROJECT:"UPDATE_PROJECT",DESTROY_PROJECT:"DESTROY_PROJECT"},It={switchProject:function(t,e){(0,t.commit)(Wt.SWITCH_PROJECT,e)},addProject:function(t,e){(0,t.commit)(Wt.ADD_PROJECT,e)},updateProject:function(t,e){(0,t.commit)(Wt.UPDATE_PROJECT,e)},destroyProject:function(t,e){(0,t.commit)(Wt.DESTROY_PROJECT,e)}},Mt={currentProjectId:function(t){return t.currentProjectId},currentProject:function(t){return t.currentProjectId?t.projects.find(function(e){return e.id===t.currentProjectId}):null},projects:function(t){return t.projects},projectCount:function(t){return t.projects.length}},Rt=i("woOf"),bt=i.n(Rt),Ot=i("mvHQ"),Tt=i.n(Ot),Ht={currentProjectId:null,projects:[]},Lt=window.localStorage,Dt={init:function(){var t=Lt.getItem("sketch_code");if(t){var e=JSON.parse(t);return bt()(e)}return Lt.setItem("sketch_code",Tt()(Ht)),bt()(Ht)},update:function(t){Lt.setItem("sketch_code",Tt()(t))}},St=(p={},w()(p,Wt.SWITCH_PROJECT,function(t,e){u(t,e.id)}),w()(p,Wt.ADD_PROJECT,function(t){h(t)}),w()(p,Wt.UPDATE_PROJECT,function(t,e){a(t,e)}),w()(p,Wt.DESTROY_PROJECT,function(t,e){l(t,e.id)}),p);m.a.use(L.a);var Nt=Dt.init(),xt=new L.a.Store({state:Nt,getters:Mt,actions:It,mutations:St});m.a.config.debug=Object({NODE_ENV:"production"}).DEBUG_MODE,new m.a({el:"#app",store:xt,template:"<App/>",components:{App:Ct}})},SNPt:function(t,e){},ZH1h:function(t,e){},epNC:function(t,e){},jFuy:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f68e9dd61362a9c156de.js.map