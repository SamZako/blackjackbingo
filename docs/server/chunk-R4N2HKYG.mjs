import './polyfills.server.mjs';
import{Aa as oe,Ba as U,Ea as ae,Fa as le,H as P,Ja as ue,K as c,M as y,P as Y,Q as h,R as v,S as J,T as Q,V as k,W as T,X as _,Y as l,Z as ee,_ as E,aa as D,ba as C,ca as te,ea as j,fa as p,ga as f,h as Z,ia as ie,ja as g,ka as G,la as ne,m as K,ma as F,na as re,oa as B,r as X,sa as se}from"./chunk-PO7RLVE6.mjs";import{a as d,b as m}from"./chunk-KRLCULJA.mjs";var ye=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(l(T),l(k))},e.\u0275dir=v({type:e});let t=e;return t})(),Oe=(()=>{let e=class e extends ye{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=Q(e)))(s||e)}})(),e.\u0275dir=v({type:e,features:[D]});let t=e;return t})(),ve=new y("NgValueAccessor");var xe={provide:ve,useExisting:P(()=>O),multi:!0};function Ne(){let t=U()?U().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Pe=new y("CompositionEventMode"),O=(()=>{let e=class e extends ye{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ne())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(l(T),l(k),l(Pe,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&g("input",function(o){return s._handleInput(o.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(o){return s._compositionEnd(o.target.value)})},features:[B([xe]),D]});let t=e;return t})();var ke=new y("NgValidators"),Te=new y("NgAsyncValidators");function _e(t){return t!=null}function Ce(t){return ie(t)?Z(t):t}function Ve(t){let e={};return t.forEach(i=>{e=i!=null?d(d({},e),i):e}),Object.keys(e).length===0?null:e}function De(t,e){return e.map(i=>i(t))}function je(t){return!t.validate}function be(t){return t.map(e=>je(e)?e:i=>e.validate(i))}function Ge(t){if(!t)return null;let e=t.filter(_e);return e.length==0?null:function(i){return Ve(De(i,e))}}function Me(t){return t!=null?Ge(be(t)):null}function Be(t){if(!t)return null;let e=t.filter(_e);return e.length==0?null:function(i){let n=De(i,e).map(Ce);return X(n).pipe(K(Ve))}}function Ae(t){return t!=null?Be(be(t)):null}function de(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ue(t){return t._rawValidators}function Re(t){return t._rawAsyncValidators}function R(t){return t?Array.isArray(t)?t:[t]:[]}function I(t,e){return Array.isArray(t)?t.includes(e):t===e}function ce(t,e){let i=R(e);return R(t).forEach(r=>{I(i,r)||i.push(r)}),i}function he(t,e){return R(e).filter(i=>!I(t,i))}var S=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Me(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ae(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},H=class extends S{get formDirective(){return null}get path(){return null}},A=class extends S{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},He={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Nt=m(d({},He),{"[class.ng-submitted]":"isSubmitted"}),Ee=(()=>{let e=class e extends L{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(A,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&te("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[D]});let t=e;return t})();var b="VALID",w="INVALID",V="PENDING",M="DISABLED";function Le(t){return(x(t)?t.validators:t)||null}function $e(t){return Array.isArray(t)?Me(t):t||null}function We(t,e){return(x(e)?e.asyncValidators:t)||null}function qe(t){return Array.isArray(t)?Ae(t):t||null}function x(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var $=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===w}get pending(){return this.status==V}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ce(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(he(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(he(e,this._rawAsyncValidators))}hasValidator(e){return I(this._rawValidators,e)}hasAsyncValidator(e){return I(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(n=>{n.disable(m(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(n=>{n.enable(m(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let i=Ce(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?w:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(w)?w:b}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){x(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=$e(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}};var Fe=new y("CallSetDisabledState",{providedIn:"root",factory:()=>q}),q="always";function ze(t,e){return[...e.path,t]}function Ze(t,e,i=q){Xe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ye(t,e),Qe(t,e),Je(t,e),Ke(t,e)}function fe(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Ke(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Xe(t,e){let i=Ue(t);e.validator!==null?t.setValidators(de(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Re(t);e.asyncValidator!==null?t.setAsyncValidators(de(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();fe(e._rawValidators,r),fe(e._rawAsyncValidators,r)}function Ye(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&we(t,e)})}function Je(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&we(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function we(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Qe(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function et(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function tt(t){return Object.getPrototypeOf(t.constructor)===Oe}function it(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===O?i=s:tt(s)?n=s:r=s}),r||n||i||null}function pe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ge(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var nt=class extends ${constructor(e=null,i,n){super(Le(i),We(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(i)&&(i.nonNullable||i.initialValueIsDefault)&&(ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var rt={provide:A,useExisting:P(()=>z)},me=(()=>Promise.resolve())(),z=(()=>{let e=class e extends A{constructor(n,r,s,a,o,u){super(),this._changeDetectorRef=o,this.callSetDisabledState=u,this.control=new nt,this._registered=!1,this.name="",this.update=new E,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=it(this,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),et(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ze(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){me.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&oe(r);me.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?ze(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(l(H,9),l(ke,10),l(Te,10),l(ve,10),l(ee,8),l(Fe,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[B([rt]),D,J]});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({});let t=e;return t})();var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[st]});let t=e;return t})();var Ie=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Fe,useValue:n.callSetDisabledState??q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[ot]});let t=e;return t})();function lt(t,e){t&1&&(p(0,"div",8),F(1," Enter 3 cards "),f())}function ut(t,e){if(t&1&&(p(0,"div",10)(1,"p"),F(2),f()()),t&2){let i=G(2);_(2),re(i.action)}}function dt(t,e){if(t&1&&j(0,ut,3,1,"div",9),t&2){let i=G();C("ngIf",i.action!=="")}}var N=(()=>{let e=class e{constructor(){this.card1="",this.card2="",this.dealerCard="",this.action="",this.hands=[["1","1","1","Hit"],["1","1","2","Stay"],["1","1","3","Stay"],["1","1","4","Stay"],["1","1","5","Stay"],["1","1","6","Stay"],["1","1","7","Stay"],["1","1","8","Stay"],["1","1","9","Stay"],["1","1","10","Stay"],["1","2","1","Stay"],["1","2","2","Stay"],["1","2","3","Stay"],["1","2","4","Stay"],["1","2","5","Stay"],["1","2","6","Stay"],["1","2","7","Stay"],["1","2","8","Stay"],["1","2","9","Stay"],["1","2","10","Stay"]]}updateAction(){let n=u=>["K","Q","J"].includes(u)?"10":u,r=n(this.card1).toString(),s=n(this.card2).toString(),a=n(this.dealerCard).toString(),o=this.hands.find(u=>u[0]===r&&u[1]===s&&u[2]===a);this.action=o?o[3]:""}areAnyEmpty(){return!this.card1||!this.card2||!this.dealerCard}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Y({type:e,selectors:[["app-root"]],decls:10,vars:5,consts:[[1,"container"],[1,"card-inputs"],["placeholder","Card 1",1,"card-input",3,"ngModel","ngModelChange"],["placeholder","Card 2",1,"card-input",3,"ngModel","ngModelChange"],["placeholder","Dealer",1,"card-input",3,"ngModel","ngModelChange"],[1,"action-button",3,"click"],["class","error-message",4,"ngIf","ngIfElse"],["showAction",""],[1,"error-message"],["class","result-message",4,"ngIf"],[1,"result-message"]],template:function(r,s){if(r&1&&(p(0,"div",0)(1,"div",1)(2,"input",2),g("ngModelChange",function(o){return s.card1=o}),f(),p(3,"input",3),g("ngModelChange",function(o){return s.card2=o}),f()(),p(4,"input",4),g("ngModelChange",function(o){return s.dealerCard=o}),f(),p(5,"button",5),g("click",function(){return s.updateAction()}),F(6,"Go!"),f(),j(7,lt,2,0,"div",6)(8,dt,1,1,"ng-template",null,7,se),f()),r&2){let a=ne(9);_(2),C("ngModel",s.card1),_(1),C("ngModel",s.card2),_(1),C("ngModel",s.dealerCard),_(3),C("ngIf",s.areAnyEmpty())("ngIfElse",a)}},dependencies:[ae,O,Ee,z],styles:["body[_ngcontent-%COMP%]{background-color:#000;margin:0;display:flex;align-items:center;justify-content:center;height:100vh}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#1a1a1a;padding:20px;border-radius:10px}.card-inputs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}.card-input[_ngcontent-%COMP%]{padding:10px;width:40px;border:1px solid #ddd;border-radius:5px;font-size:16px;color:#333}.card-input[_ngcontent-%COMP%]::placeholder{font-size:12px}.dealer-input[_ngcontent-%COMP%]{margin-top:20px}.action-button[_ngcontent-%COMP%]{margin-top:20px;padding:10px 20px;font-size:16px;background-color:#4caf50;color:#fff;border:none;border-radius:5px;cursor:pointer}.action-button[_ngcontent-%COMP%]:hover{background-color:#45a049}.error-message[_ngcontent-%COMP%], .result-message[_ngcontent-%COMP%]{margin-top:10px;font-size:16px;color:red}"]});let t=e;return t})();var Se=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e,bootstrap:[N]}),e.\u0275inj=c({imports:[le,Ie]});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e,bootstrap:[N]}),e.\u0275inj=c({imports:[Se,ue]});let t=e;return t})();export{ct as a};