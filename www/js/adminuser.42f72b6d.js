(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminuser"],{"2a7f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("71d9"),i=a("80d2"),s=Object(i["i"])("v-toolbar__title"),l=Object(i["i"])("v-toolbar__items");n["a"]},dbf6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("v-container",[a("v-col",{attrs:{cols:"12"}},[t.filteredAdmins.length>0?a("v-card",{attrs:{outlined:"",tile:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.adminHeaders,items:t.filteredAdmins,"sort-by":"title"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Admins")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{color:"#00a368",dark:""}},"v-btn",i,!1),n),[t._v(" Add Admin ")])]}}],null,!1,1768396059),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5 font-weight-thin ml-2"},[t._v("Add Admin")])]),a("v-card-text",{staticClass:"py-0"},[a("v-container",[a("v-row",[a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"first Name*",solo:"","prepend-inner-icon":"mdi-account"}})],1),a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Last Name*",solo:"","prepend-inner-icon":"mdi-account"}})],1),a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",solo:"","prepend-inner-icon":"mdi-email"}})],1),a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"phone Number*",solo:"","prepend-inner-icon":"mdi-phone"}})],1),a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12 "}},[a("v-text-field",{attrs:{label:"Address*",solo:"","prepend-inner-icon":"mdi-home"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-select",{attrs:{"hide-details":"auto",solo:"",label:"Institution Type*",items:t.institutionTypes,rules:[t.rules.required],color:"#00A368"},model:{value:t.selectedInstitutionType,callback:function(e){t.selectedInstitutionType=e},expression:"selectedInstitutionType"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[t.selectedInstitutionType?a("v-select",{attrs:{"hide-details":"auto",solo:"",label:"Institution*",items:t.filteredInstitutions,rules:[t.rules.required]},model:{value:t.selectedInstitution,callback:function(e){t.selectedInstitution=e},expression:"selectedInstitution"}}):t._e()],1),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-menu",{ref:"menu",attrs:{"hide-details":"auto","close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{rules:[t.rules.required],"hide-details":"auto",color:"#00a368",solo:"",label:"Date Of Birth*",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",i,!1),n))]}}],null,!1,2416709275),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{color:"#00a368",type:"date","no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"red"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"#00a368"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v(" OK ")])],1)],1)],1),a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Password*",type:"password",solo:"","prepend-inner-icon":"mdi-lock"}})],1),a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"confirm password*",type:"password","prepend-inner-icon":"mdi-lock",solo:""}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"}},[a("v-card",[a("v-card-title",{staticClass:"text-h6 font-weight-light"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",text:""}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"#00a368",text:""}},[t._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item",fn:function(e){var n=e.item;return[a("tr",{staticClass:"custom__table-row",on:{click:function(e){return t.viewUser(n)}}},[a("td",[t._v(t._s(n.fullName))]),a("td",[t._v(t._s(n.email))]),a("td",[t._v(t._s(n.phone))]),a("td",[t._v(t._s(n.institution.name))]),a("td",[t._v(t._s(n.userRole))]),a("td",[t._v(" "+t._s(new Date(n.createdAt).toLocaleString("en-GB",{hour12:!0}))+" ")])])]}}],null,!1,1569655853)})],1):t._e()],1)],1)],1)},i=[],s=(a("4de4"),a("ac1f"),a("466d"),a("a74a")),l={data:function(){return{selectedInstitutionType:"",selectedInstitution:"",date:null,menu:!1,modal:!1,rules:{required:function(t){return!!t||"Field is required"},counter:function(t){return t&&t.length>=3||"Minimum length is 3 characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},password:function(t){return t&&t.length>=6||"Minimum length is 6 characters"}},dialog:!1,adminHeaders:[{text:"Full Name",value:"fullName",sortable:!0},{text:"Email",value:"email",sortable:!1},{text:"Phone",value:"phone",sortable:!1},{text:"Institution",value:"institution.name"},{text:"User Role",value:"userRole "},{text:"Date Joined",value:"createdAt"}],admins:[],userTypes:["Student","Staff","Independent Researcher"],institutionTypes:["University","Polytechnic","College of Education","Monotechnic","Independent Researcher"],institutions:[{text:"Abubakar Tafawa Balewa University",type:"university"},{text:"Ahmadu Bello University",type:"university"},{text:"Bayero University Kano",type:"university"},{text:"Kaduna Polytechnique",type:"polytechnic"},{text:"Nuhu Bamalli",type:"polytechnic"},{text:"Federal College of Education Zaria",type:"college of education"},{text:"Federal College of Education Katsina",type:"college of education"},{text:"Dialogue Institute of Technology",type:"monotechnic"},{text:"Khemsafe Computers",type:"monotechnic"},{text:"Independent",type:"independent researcher"}]}},methods:{viewUser:function(t){this.$router.push("/user/".concat(t._id))}},computed:{filteredAdmins:function(){return this.admins.filter((function(t){return t.userRole.match("admin")}))}},created:function(){var t=this;s["a"].fetchUsers().then((function(e){t.admins=e.data.payload})).catch((function(t){return console.log("Error>>>",t)}))}},o=l,r=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),v=a("8336"),p=a("b0af"),m=a("99d9"),f=a("62ad"),x=a("a523"),h=a("8fea"),y=a("2e4b"),b=a("169a"),_=a("ce7e"),g=a("e449"),C=a("0fd9"),k=a("b974"),w=a("2fa4"),V=a("8654"),A=a("71d9"),I=a("2a7f"),T=Object(r["a"])(o,n,i,!1,null,null,null);e["default"]=T.exports;d()(T,{VApp:u["a"],VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:f["a"],VContainer:x["a"],VDataTable:h["a"],VDatePicker:y["a"],VDialog:b["a"],VDivider:_["a"],VMenu:g["a"],VRow:C["a"],VSelect:k["a"],VSpacer:w["a"],VTextField:V["a"],VToolbar:A["a"],VToolbarTitle:I["a"]})}}]);
//# sourceMappingURL=adminuser.42f72b6d.js.map