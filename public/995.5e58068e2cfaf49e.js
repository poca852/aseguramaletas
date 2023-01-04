"use strict";(self.webpackChunkapp_front=self.webpackChunkapp_front||[]).push([[995],{3995:(Ct,T,i)=>{i.r(T),i.d(T,{AdminModule:()=>Zt});var u=i(6895),m=i(3060),t=i(4650),p=i(529),Z=i(8505),v=i(4004),x=i(262),y=i(9646),b=i(2340);let f=(()=>{class n{constructor(e){this.http=e,this.baseUrl=b.N.baseUrl}get user(){return{...this._user}}login(e){return this.http.post(`${this.baseUrl}/auth/login`,e).pipe((0,Z.b)(({token:o})=>{o&&localStorage.setItem("token",o)}),(0,v.U)(o=>o.ok),(0,x.K)(o=>(0,y.of)(o.error.msg)))}revalidar(){const e=(new p.WM).set("x-token",localStorage.getItem("token"));return this.http.get(`${this.baseUrl}/auth/renew`,{headers:e}).pipe((0,Z.b)(({token:o,user:s})=>{this._user=s,localStorage.setItem("token",o)}),(0,v.U)(o=>o.ok),(0,x.K)(o=>(0,y.of)(!1)))}logout(){this._user=null,localStorage.clear()}getAllOrders(e){const o=(new p.WM).set("x-token",localStorage.getItem("token")),s=(new p.LE).append("isPending",e);return this.http.get(`${this.baseUrl}/orders/all`,{headers:o,params:s})}getOrder(e){const o=(new p.WM).set("x-token",localStorage.getItem("token"));return this.http.get(`${this.baseUrl}/orders/search/${e}`,{headers:o})}activeOrder(e){const o=(new p.WM).set("x-token",localStorage.getItem("token"));return this.http.get(`${this.baseUrl}/orders/active/${e}`,{headers:o})}getAllUsers(){const e=(new p.WM).set("x-token",localStorage.getItem("token"));return this.http.get(`${this.baseUrl}/users/all`,{headers:e})}addUser(e){const o=(new p.WM).set("x-token",localStorage.getItem("token"));return this.http.post(`${this.baseUrl}/users`,e,{headers:o})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=i(3267),M=i(3683),U=i(7392),w=i(6338),h=i(4859);const S=function(){return{backgroundColor:"#ff6803"}},Y=function(){return{backgroundColor:"#f5f5f5",position:"fixed",zIndex:"99999",boxShadow:"1px 1px 3px rgba(0,0,0,.3)"}};let I=(()=>{class n{constructor(e,o){this.adminService=e,this.router=o}ngOnInit(){}logout(){this.adminService.logout(),this.router.navigateByUrl("/admin/auth")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:35,vars:4,consts:[["fullscreen",""],["sidenav",""],[3,"ngStyle"],[1,"spacer"],["mat-icon-button","",3,"click"],["mat-list-item","","routerLink","users",3,"click"],["mat-list-item","","routerLink","orders",3,"click"],["mat-button","","routerLink","/admin"],["src","../../../../assets/images/logo.svg","alt","logo"],[1,"container"]],template:function(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",null,1)(3,"mat-toolbar",2)(4,"span"),t._uU(5,"Men\xfa"),t.qZA(),t._UZ(6,"span",3),t.TgZ(7,"button",4),t.NdJ("click",function(){t.CHM(s);const _=t.MAs(2);return t.KtG(_.toggle())}),t.TgZ(8,"mat-icon"),t._uU(9,"menu"),t.qZA()()(),t.TgZ(10,"mat-nav-list")(11,"a",5),t.NdJ("click",function(){t.CHM(s);const _=t.MAs(2);return t.KtG(_.toggle())}),t.TgZ(12,"mat-icon"),t._uU(13,"perm_identity"),t.qZA(),t.TgZ(14,"span"),t._uU(15," Usuarios"),t.qZA()(),t.TgZ(16,"a",6),t.NdJ("click",function(){t.CHM(s);const _=t.MAs(2);return t.KtG(_.toggle())}),t.TgZ(17,"mat-icon"),t._uU(18,"chrome_reader_mode"),t.qZA(),t.TgZ(19,"span"),t._uU(20," Ordenes"),t.qZA()(),t.TgZ(21,"a",6),t.NdJ("click",function(){return o.logout()}),t.TgZ(22,"mat-icon"),t._uU(23,"exit_to_app"),t.qZA(),t.TgZ(24,"span"),t._uU(25," Salir"),t.qZA()()()(),t.TgZ(26,"mat-toolbar",2)(27,"button",7),t._UZ(28,"img",8),t.qZA(),t._UZ(29,"span",3),t.TgZ(30,"button",4),t.NdJ("click",function(){t.CHM(s);const _=t.MAs(2);return t.KtG(_.toggle())}),t.TgZ(31,"mat-icon"),t._uU(32,"menu"),t.qZA()()(),t.TgZ(33,"div",9),t._UZ(34,"router-outlet"),t.qZA()()}2&e&&(t.xp6(3),t.Q6J("ngStyle",t.DdM(2,S)),t.xp6(23),t.Q6J("ngStyle",t.DdM(3,Y)))},dependencies:[u.PC,m.lC,m.rH,m.yS,O.JX,O.TM,M.Ye,U.Hw,w.Hk,w.Tg,h.lW],styles:["button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}"]}),n})();var a=i(4006),J=i(5226),A=i.n(J),g=i(9549),C=i(4144);let P=(()=>{class n{constructor(e,o,s){this.fb=e,this.adminService=o,this.router=s,this.user=this.fb.group({email:["",[a.kI.required,a.kI.email]],password:["",a.kI.required]})}ngOnInit(){}login(){this.user.valid?this.adminService.login(this.user.value).subscribe(e=>{!0===e?this.router.navigateByUrl("/admin/main"):A().fire("Error",e,"error")}):A().fire("Error","Por favor ingrese sus datos correctamente","error")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(f),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:12,vars:1,consts:[[1,"login"],[3,"formGroup","ngSubmit"],["matInput","","placeholder","youremail@example.com","formControlName","email","required",""],["type","password","matInput","","required","","formControlName","password"],["mat-flat-button","","color","primary"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.login()}),t.TgZ(2,"mat-form-field")(3,"mat-label"),t._uU(4,"Email"),t.qZA(),t._UZ(5,"input",2),t.qZA(),t.TgZ(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Password"),t.qZA(),t._UZ(9,"input",3),t.qZA(),t.TgZ(10,"button",4),t._uU(11," Login "),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.user))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,h.lW,g.KE,g.hX,C.Nt],styles:[".login[_ngcontent-%COMP%]{display:flex;justify-content:center}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-shadow:1px 2px 10px #0003;margin:200px auto;width:300px;padding:20px}@media screen and (max-width: 600){.login[_ngcontent-%COMP%]{width:250px}}"]}),n})(),F=(()=>{class n{constructor(e,o){this.router=e,this.adminService=o}canActivate(){return this.adminService.revalidar().pipe((0,Z.b)(e=>{e||this.router.navigateByUrl("/admin/auth")}))}canLoad(){return this.adminService.revalidar().pipe((0,Z.b)(e=>{e||this.router.navigateByUrl("/admin/auth")}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.F0),t.LFG(f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),D=(()=>{class n{constructor(e,o){this.router=e,this.adminService=o}canActivate(){return this.adminService.revalidar().pipe((0,Z.b)(e=>{e&&this.router.navigateByUrl("/admin/main")}),(0,v.U)(e=>!e))}canLoad(){return this.adminService.revalidar().pipe((0,Z.b)(e=>{e||this.router.navigateByUrl("/admin/main")}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.F0),t.LFG(f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=i(671),c=i(5938),N=i(4385),k=i(3238);let q=(()=>{class n{constructor(e,o){this.dialogRef=e,this.data=o}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.so),t.Y36(c.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-user"]],decls:29,vars:2,consts:[["mat-dialog-content",""],[3,"formGroup"],["matInput","","type","email","formControlName","email"],["type","text","matInput","","formControlName","fullName"],["type","password","matInput","","formControlName","password"],["formControlName","rol"],["value","admin"],["value","super_admin"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,o){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Agregando usuario"),t.qZA(),t.TgZ(2,"div",0)(3,"form",1)(4,"mat-form-field")(5,"mat-label"),t._uU(6," Email "),t.qZA(),t._UZ(7,"input",2),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10," FullName "),t.qZA(),t._UZ(11,"input",3),t.qZA(),t.TgZ(12,"mat-form-field")(13,"mat-label"),t._uU(14," Password "),t.qZA(),t._UZ(15,"input",4),t.qZA(),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18," Rol "),t.qZA(),t.TgZ(19,"mat-select",5)(20,"mat-option",6),t._uU(21,"Editor"),t.qZA(),t.TgZ(22,"mat-option",7),t._uU(23,"Administrador"),t.qZA()()()()(),t.TgZ(24,"div",8)(25,"button",9),t.NdJ("click",function(){return o.onNoClick()}),t._uU(26,"Cancelar"),t.qZA(),t.TgZ(27,"button",10),t._uU(28,"Guardar"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.data),t.xp6(24),t.Q6J("mat-dialog-close",o.data))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,h.lW,g.KE,g.hX,C.Nt,N.gD,k.ey,c.ZT,c.xY,c.H8],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"]}),n})();function H(n,r){1&n&&(t.TgZ(0,"th",16),t._uU(1," Nombre "),t.qZA())}function L(n,r){if(1&n&&(t.TgZ(0,"td",17),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.fullName)," ")}}function Q(n,r){1&n&&(t.TgZ(0,"th",16),t._uU(1," Email "),t.qZA())}function E(n,r){if(1&n&&(t.TgZ(0,"td",17),t._uU(1),t.ALo(2,"lowercase"),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.email)," ")}}function G(n,r){1&n&&(t.TgZ(0,"th",16),t._uU(1," Acciones "),t.qZA())}const R=function(n){return["/admin/main/users/",n]};function B(n,r){if(1&n&&(t.TgZ(0,"td",17)(1,"button",18),t._uU(2," Ver M\xe1s "),t.qZA()()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,R,e.id))}}function j(n,r){1&n&&t._UZ(0,"tr",19)}function $(n,r){1&n&&t._UZ(0,"tr",20)}function V(n,r){if(1&n&&(t.TgZ(0,"tr",21)(1,"td",22),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(7);t.xp6(2),t.hij('No data matching the filter "',e.value,'"')}}let X=(()=>{class n{constructor(e,o,s){this.adminService=e,this.fb=o,this.dialog=s,this.columName=["fullName","email","id"],this.newUser=this.fb.group({email:["",[a.kI.required,a.kI.email]],fullName:["",a.kI.required],password:["",a.kI.required],rol:["",a.kI.required]})}ngOnInit(){this.getUsers()}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}openDialog(){this.dialog.open(q,{data:this.newUser}).afterClosed().subscribe(o=>{this.adminService.addUser(o.value).subscribe(s=>this.getUsers())})}getUsers(){this.adminService.getAllUsers().subscribe(e=>this.dataSource=new l.by(e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(a.qu),t.Y36(c.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-users"]],decls:26,vars:3,consts:[[1,"main"],[1,"search"],["appearance","fill"],["type","search","matInput","",3,"keyup"],["input",""],["mat-mini-fab","","color","primary",1,"add-user",3,"click"],[1,"results"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","fullName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","id"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","color","warn",3,"routerLink"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form")(3,"mat-form-field",2)(4,"mat-label"),t._uU(5,"Buscar Usuario"),t.qZA(),t.TgZ(6,"input",3,4),t.NdJ("keyup",function(d){return o.applyFilter(d)}),t.qZA()()()(),t._UZ(8,"hr"),t.TgZ(9,"button",5),t.NdJ("click",function(){return o.openDialog()}),t.TgZ(10,"mat-icon"),t._uU(11,"add"),t.qZA()(),t.TgZ(12,"div",6)(13,"table",7),t.ynx(14,8),t.YNc(15,H,2,0,"th",9),t.YNc(16,L,3,3,"td",10),t.BQk(),t.ynx(17,11),t.YNc(18,Q,2,0,"th",9),t.YNc(19,E,3,3,"td",10),t.BQk(),t.ynx(20,12),t.YNc(21,G,2,0,"th",9),t.YNc(22,B,3,3,"td",10),t.BQk(),t.YNc(23,j,1,0,"tr",13),t.YNc(24,$,1,0,"tr",14),t.YNc(25,V,3,1,"tr",15),t.qZA()()()),2&e&&(t.xp6(13),t.Q6J("dataSource",o.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",o.columName),t.xp6(1),t.Q6J("matRowDefColumns",o.columName))},dependencies:[m.rH,a._Y,a.JL,U.Hw,h.lW,g.KE,g.hX,C.Nt,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,u.i8,u.rS],styles:[".main[_ngcontent-%COMP%]{margin-top:64px}form[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px}table[_ngcontent-%COMP%]{width:100%}.add-user[_ngcontent-%COMP%]{position:absolute;top:550px;right:10px;z-index:999}@media screen and (max-width: 600px){.main[_ngcontent-%COMP%]{margin-top:100px}.add-user[_ngcontent-%COMP%]{top:500px}}"]}),n})();function W(n,r){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.viewValue," ")}}function K(n,r){1&n&&(t.TgZ(0,"th",20),t._uU(1," Nombre "),t.qZA())}function z(n,r){if(1&n&&(t.TgZ(0,"td",21),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.name)," ")}}function tt(n,r){1&n&&(t.TgZ(0,"th",20),t._uU(1," Pasaporte "),t.qZA())}function et(n,r){if(1&n&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.passport," ")}}function nt(n,r){1&n&&(t.TgZ(0,"th",20),t._uU(1," Estado "),t.qZA())}function ot(n,r){if(1&n&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.isPending?"Pendiente":"Confirmada"," ")}}function rt(n,r){1&n&&(t.TgZ(0,"th",20),t._uU(1," Acciones "),t.qZA())}const at=function(n){return["/admin/main/order",n]};function it(n,r){if(1&n&&(t.TgZ(0,"td",21)(1,"button",22),t._uU(2," Ver M\xe1s "),t.qZA()()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,at,e._id))}}function st(n,r){1&n&&t._UZ(0,"tr",23)}function lt(n,r){1&n&&t._UZ(0,"tr",24)}function mt(n,r){if(1&n&&(t.TgZ(0,"tr",25)(1,"td",26),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(7);t.xp6(2),t.hij('No data matching the filter "',e.value,'"')}}let ct=(()=>{class n{constructor(e){this.adminService=e,this.orders=[],this.options=[{value:!1,viewValue:"Confirmados"},{value:!0,viewValue:"Pendientes"}],this.columnName=["name","passport","isPending","_id"]}ngOnInit(){this.getOrders()}onChange({value:e}){this.getOrders(e)}getOrders(e=!0){this.adminService.getAllOrders(e).subscribe(o=>{this.dataSource=new l.by(o)})}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-orders"]],decls:32,vars:4,consts:[[1,"main"],[1,"search"],["appearance","fill"],["type","search","matInput","",3,"keyup"],["input",""],[1,"filter"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"results"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","passport"],["matColumnDef","isPending"],["matColumnDef","_id"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","color","warn",3,"routerLink"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form")(3,"mat-form-field",2)(4,"mat-label"),t._uU(5,"Buscar orden"),t.qZA(),t.TgZ(6,"input",3,4),t.NdJ("keyup",function(d){return o.applyFilter(d)}),t.qZA()()()(),t._UZ(8,"hr"),t.TgZ(9,"div",5)(10,"mat-form-field")(11,"mat-label"),t._uU(12,"Estatus"),t.qZA(),t.TgZ(13,"mat-select",6),t.NdJ("selectionChange",function(d){return o.onChange(d)}),t.YNc(14,W,2,2,"mat-option",7),t.qZA()()(),t.TgZ(15,"div",8)(16,"table",9),t.ynx(17,10),t.YNc(18,K,2,0,"th",11),t.YNc(19,z,3,3,"td",12),t.BQk(),t.ynx(20,13),t.YNc(21,tt,2,0,"th",11),t.YNc(22,et,2,1,"td",12),t.BQk(),t.ynx(23,14),t.YNc(24,nt,2,0,"th",11),t.YNc(25,ot,2,1,"td",12),t.BQk(),t.ynx(26,15),t.YNc(27,rt,2,0,"th",11),t.YNc(28,it,3,3,"td",12),t.BQk(),t.YNc(29,st,1,0,"tr",16),t.YNc(30,lt,1,0,"tr",17),t.YNc(31,mt,3,1,"tr",18),t.qZA()()()),2&e&&(t.xp6(14),t.Q6J("ngForOf",o.options),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",o.columnName),t.xp6(1),t.Q6J("matRowDefColumns",o.columnName))},dependencies:[u.sg,m.rH,a._Y,a.JL,h.lW,g.KE,g.hX,C.Nt,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,N.gD,k.ey,u.rS],styles:[".main[_ngcontent-%COMP%]{margin-top:64px;display:flex;flex-direction:column;align-items:center}.table[_ngcontent-%COMP%]{border:thin solid rgba(0,0,0,.3);padding:15px;width:90%}.search[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.results[_ngcontent-%COMP%]{margin-top:30px;width:100%;display:flex;justify-content:center}.results[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border:thin solid rgba(0,0,0,.3);display:flex;flex-direction:row;gap:20px;height:50px;width:100%;justify-content:center;align-items:end;cursor:pointer}table[_ngcontent-%COMP%]{width:90%}@media screen and(max-width: 600px){.main[_ngcontent-%COMP%]{margin-top:56px}}"]}),n})();var dt=i(3900);let ut=(()=>{class n{constructor(e){this.data=e}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ver-imagen"]],decls:7,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],["alt","",3,"src"],["align","end"],["mat-button","","mat-dialog-close",""]],template:function(e,o){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Comprobante de pago"),t.qZA(),t.TgZ(2,"mat-dialog-content",1),t._UZ(3,"img",2),t.qZA(),t.TgZ(4,"mat-dialog-actions",3)(5,"button",4),t._uU(6,"Cerrar"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("src",o.data.img,t.LSH))},dependencies:[h.lW,c.ZT,c.uh,c.xY,c.H8]}),n})();function pt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.activar())}),t._uU(1," Validar "),t.qZA()}}function gt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"h3"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.TgZ(4,"h3"),t._uU(5),t.ALo(6,"lowercase"),t.qZA(),t.TgZ(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"h3"),t._uU(10),t.qZA(),t.TgZ(11,"div")(12,"button",3),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openDialog())}),t._uU(13," Ver imagen "),t.qZA(),t.YNc(14,pt,2,0,"button",4),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,5,e.order.name)),t.xp6(3),t.Oqu(t.lcZ(6,7,e.order.email)),t.xp6(3),t.Oqu(e.order.passport),t.xp6(2),t.Oqu(e.order.isPending?"Pendiente":"Confirmado"),t.xp6(4),t.Q6J("ngIf",e.order.isPending)}}const ft=[{path:"main",component:I,canActivate:[F],children:[{path:"users",component:X},{path:"users/add",component:q},{path:"users/:id",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-user"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"edit-user works!"),t.qZA())}}),n})()},{path:"orders",component:ct},{path:"order/:id",component:(()=>{class n{constructor(e,o,s,d){this.adminService=e,this.activateRouter=o,this.dialog=s,this.router=d,this.baseUrl=b.N.baseUrl}ngOnInit(){this.activateRouter.params.pipe((0,dt.w)(({id:e})=>this.adminService.getOrder(e))).subscribe(e=>{this.order=e.results[0],this.imgSrc=`${this.baseUrl}/orders/${this.order._id}`})}openDialog(){this.dialog.open(ut,{data:{img:this.imgSrc}}).afterClosed().subscribe(o=>{console.log(`Dialog result: ${o}`)})}activar(){this.adminService.activeOrder(this.order._id).subscribe(e=>{e&&(A().fire("Success","Orden Confirmada","success"),this.router.navigateByUrl("/admin/main/orders"))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(m.gz),t.Y36(c.uw),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-order"]],decls:6,vars:1,consts:[[1,"main"],[4,"ngIf"],["mat-icon-button","","color","primary","routerLink","/admin/main/orders",1,"btn-volver"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,gt,15,9,"div",1),t.TgZ(2,"button",2)(3,"mat-icon"),t._uU(4,"keyboard_arrow_left"),t.qZA(),t._uU(5," Volver "),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.order))},dependencies:[u.O5,m.rH,U.Hw,h.lW,u.i8,u.rS],styles:[".main[_ngcontent-%COMP%]{margin-top:100px;display:flex;justify-content:center}.main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:thin solid rgba(0,0,0,.3);align-items:center;padding:20px;width:300px}.btn-volver[_ngcontent-%COMP%]{position:absolute;top:65px;left:30px}@media screen and (max-width: 600px){.main[_ngcontent-%COMP%]{margin-top:110px}}"]}),n})()},{path:"**",redirectTo:"orders"}]},{path:"auth",component:P,canActivate:[D]},{path:"**",redirectTo:"auth"}];let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(ft),m.Bz]}),n})();var _t=i(7629);let Zt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,ht,a.UX,p.JF,_t.q]}),n})()}}]);