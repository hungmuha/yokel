/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './comment-location.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../src/app/comment-location/comment-location.component';
import * as i5 from '@angular/router';
import * as i6 from '../../../../../src/app/users-page/comments.service';
const styles_CommentLocationComponent:any[] = [i0.styles];
export const RenderType_CommentLocationComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_CommentLocationComponent,data:{}});
function View_CommentLocationComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),17,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n					        '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),14,'div',[['class','commentText']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n					          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          [' ',' '])),(_l()(),i1.ɵted((null as any),[' \n					          '])),(_l()(),
          i1.ɵted((null as any),['\n					          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),7,'form',[['novalidate','']],[[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],[(null as any),
              'submit'],[(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,10).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,10).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.deleteComment(_v.context.$implicit)) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i2.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,
          (null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i1.ɵdid(16384,
          (null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n			          			'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),0,'input',[['type','submit'],['value',
              'Delete']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n			        		  '])),(_l()(),i1.ɵted((null as any),
          ['\n					        '])),(_l()(),i1.ɵted((null as any),['\n			     		 ']))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = _v.context.$implicit.comment_field;
        _ck(_v,5,0,currVal_0);
        const currVal_1:any = i1.ɵnov(_v,12).ngClassUntouched;
        const currVal_2:any = i1.ɵnov(_v,12).ngClassTouched;
        const currVal_3:any = i1.ɵnov(_v,12).ngClassPristine;
        const currVal_4:any = i1.ɵnov(_v,12).ngClassDirty;
        const currVal_5:any = i1.ɵnov(_v,12).ngClassValid;
        const currVal_6:any = i1.ɵnov(_v,12).ngClassInvalid;
        const currVal_7:any = i1.ɵnov(_v,12).ngClassPending;
        _ck(_v,8,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
      });
}
function View_CommentLocationComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),76,'div',[['class',
      'mainBoard']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          14,'div',[['class','container']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),11,'div',[['class','row']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n			'])),(_l()(),i1.ɵted((null as any),['\n        	'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),7,'div',[['class','col-lg-12']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'h2',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['',',',''])),(_l()(),i1.ɵted((null as any),['\n				'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Today there\'s a high of 68° and sunny'])),(_l()(),i1.ɵted((null as any),
          ['\n			'])),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵted((null as any),
          ['\n	'])),(_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n\n	\n	\n	'])),
      (_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          21,'div',[['class','container']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['Comments'])),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),15,'div',[['class','detailBox']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n	\n			'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),12,'div',[['class',
          'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n				'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          9,'div',[['class','actionBox']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n					'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),6,'ul',[['class','commentList']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n						'])),(_l()(),i1.ɵted((null as any),['\n						'])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CommentLocationComponent_2)),
      i1.ɵdid(802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n			      '])),(_l()(),i1.ɵted((null as any),['   	\n			    	'])),(_l()(),
          i1.ɵted((null as any),['\n			    '])),(_l()(),i1.ɵted((null as any),['\n			'])),
      (_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵted((null as any),['\n	'])),
      (_l()(),i1.ɵted((null as any),['\n	\n\n	'])),(_l()(),i1.ɵted((null as any),['\n	'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),30,'div',[['class','container']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          27,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n			'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),24,'div',[['class','col-lg-12']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n	    		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),21,'div',[['class',
          'input-group']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n	    			'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),18,'form',[['novalidate','']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],
              [(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,55).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,55).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.saveComment(_co.newComment)) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i2.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,
          (null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i1.ɵdid(16384,
          (null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n			      		'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),5,'input',[['class','form-control'],
              ['name','comment_field'],['placeholder','Add a comment'],['type','text']],
              [[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,
                  'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
                  (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
              [[(null as any),'ngModelChange'],[(null as any),'input'],[(null as any),
                  'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
              (_v,en,$event) => {
                var ad:boolean = true;
                var _co:any = _v.component;
                if (('input' === en)) {
                  const pd_0:any = ((<any>i1.ɵnov(_v,60)._handleInput($event.target.value)) !== false);
                  ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                  const pd_1:any = ((<any>i1.ɵnov(_v,60).onTouched()) !== false);
                  ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                  const pd_2:any = ((<any>i1.ɵnov(_v,60)._compositionStart()) !== false);
                  ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                  const pd_3:any = ((<any>i1.ɵnov(_v,60)._compositionEnd($event.target.value)) !== false);
                  ad = (pd_3 && ad);
                }
                if (('ngModelChange' === en)) {
                  const pd_4:any = ((<any>(_co.newComment.comment_field = $event)) !== false);
                  ad = (pd_4 && ad);
                }
                return ad;
              },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i2.NgModel,[[2,i2.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i2.NgControl,(null as any),[i2.NgModel]),i1.ɵdid(16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n			      		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'span',
          [['class','input-group-btn']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n			        	'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-secondary'],
          ['type','submit']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Add'])),(_l()(),i1.ɵted((null as any),
          ['\n			      		'])),(_l()(),i1.ɵted((null as any),['\n			      	'])),(_l()(),
          i1.ɵted((null as any),['\n	    		'])),(_l()(),i1.ɵted((null as any),['\n	  		'])),
      (_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵted((null as any),['\n	'])),
      (_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_2:any = _co.oneLocation.comments;
    _ck(_v,36,0,currVal_2);
    const currVal_17:any = 'comment_field';
    const currVal_18:any = _co.newComment.comment_field;
    _ck(_v,62,0,currVal_17,currVal_18);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.oneLocation.city;
    const currVal_1:any = _co.oneLocation.state;
    _ck(_v,10,0,currVal_0,currVal_1);
    const currVal_3:any = i1.ɵnov(_v,57).ngClassUntouched;
    const currVal_4:any = i1.ɵnov(_v,57).ngClassTouched;
    const currVal_5:any = i1.ɵnov(_v,57).ngClassPristine;
    const currVal_6:any = i1.ɵnov(_v,57).ngClassDirty;
    const currVal_7:any = i1.ɵnov(_v,57).ngClassValid;
    const currVal_8:any = i1.ɵnov(_v,57).ngClassInvalid;
    const currVal_9:any = i1.ɵnov(_v,57).ngClassPending;
    _ck(_v,53,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
    const currVal_10:any = i1.ɵnov(_v,64).ngClassUntouched;
    const currVal_11:any = i1.ɵnov(_v,64).ngClassTouched;
    const currVal_12:any = i1.ɵnov(_v,64).ngClassPristine;
    const currVal_13:any = i1.ɵnov(_v,64).ngClassDirty;
    const currVal_14:any = i1.ɵnov(_v,64).ngClassValid;
    const currVal_15:any = i1.ɵnov(_v,64).ngClassInvalid;
    const currVal_16:any = i1.ɵnov(_v,64).ngClassPending;
    _ck(_v,59,0,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,
        currVal_16);
  });
}
export function View_CommentLocationComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_CommentLocationComponent_1)),i1.ɵdid(16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['	\n\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i4.CommentLocationComponent = _v.component;
    const currVal_0:any = _co.oneLocation;
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_CommentLocationComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'comment-location',
      ([] as any[]),(null as any),(null as any),(null as any),View_CommentLocationComponent_0,
      RenderType_CommentLocationComponent)),i1.ɵdid(114688,(null as any),0,i4.CommentLocationComponent,
      [i5.ActivatedRoute,i6.CommentsService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const CommentLocationComponentNgFactory:i1.ComponentFactory<i4.CommentLocationComponent> = i1.ɵccf('comment-location',
    i4.CommentLocationComponent,View_CommentLocationComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0My95b2tlbC9zcmMvYXBwL2NvbW1lbnQtbG9jYXRpb24vY29tbWVudC1sb2NhdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvaHVuZ211aGFtYXRoL0hvbWVXb3JrL3Byb2plY3QzL3lva2VsL3NyYy9hcHAvY29tbWVudC1sb2NhdGlvbi9jb21tZW50LWxvY2F0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0My95b2tlbC9zcmMvYXBwL2NvbW1lbnQtbG9jYXRpb24vY29tbWVudC1sb2NhdGlvbi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0My95b2tlbC9zcmMvYXBwL2NvbW1lbnQtbG9jYXRpb24vY29tbWVudC1sb2NhdGlvbi5jb21wb25lbnQudHMuQ29tbWVudExvY2F0aW9uQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiAqbmdJZj1cIm9uZUxvY2F0aW9uXCIgY2xhc3M9XCJtYWluQm9hcmRcIj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDwhLS0gMTIgY29sdW1uIHdpZHRoIC0tPlxuICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIiA+XG4gICAgICAgIFx0XHQ8aDI+e3tvbmVMb2NhdGlvbi5jaXR5fX0se3sgb25lTG9jYXRpb24uc3RhdGV9fTwvaDI+XG5cdFx0XHRcdDxwPlRvZGF5IHRoZXJlJ3MgYSBoaWdoIG9mIDY4JmRlZzsgYW5kIHN1bm55PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8YnI+XG5cblx0XG5cdFxuXHQ8IS0tIGNvbW1lbnRzIGhlYWRlciAtLT5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiID5cblx0XHQ8bGFiZWw+Q29tbWVudHM8L2xhYmVsPlxuXHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxCb3hcIj5cblx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhY3Rpb25Cb3hcIj5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJjb21tZW50TGlzdFwiPlxuXHRcdFx0XHRcdFx0PCEtLSBjb21tZW50IDEgLS0+XG5cdFx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwibGV0IGNvbW1lbnQgb2Ygb25lTG9jYXRpb24uY29tbWVudHNcIj5cblx0XHRcdFx0XHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50VGV4dFwiPlxuXHRcdFx0XHRcdCAgICAgICAgICA8cD4ge3tjb21tZW50LmNvbW1lbnRfZmllbGR9fSA8L3A+IFxuXHRcdFx0XHRcdCAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiZGF0ZSBzdWItdGV4dFwiPiA8c3Ryb25nPnt7Y29tbWVudC51c2VySWR9fTwvc3Ryb25nPjwvc3Bhbj4gLS0+XG5cdFx0XHRcdFx0ICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJkZWxldGVDb21tZW50KGNvbW1lbnQpXCI+XG5cdFx0XHQgICAgICAgICAgXHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cblx0XHRcdCAgICAgICAgXHRcdCAgPC9mb3JtPlxuXHRcdFx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQgICAgIFx0XHQgPC9saT5cblx0XHRcdCAgICAgIDwhLS0gY29tbWVudHMgMiAtLT4gICBcdFxuXHRcdFx0ICAgIFx0PC91bD5cblx0XHRcdCAgICA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0XG5cblx0PCEtLSBsZWF2ZSBjb21tZW50IGZvcm0gLS0+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiA+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuXHQgICAgXHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuXHQgICAgXHRcdFx0PGZvcm0gKG5nU3VibWl0KT1cInNhdmVDb21tZW50KG5ld0NvbW1lbnQpXCI+XG5cdFx0XHQgICAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnRcIiBcdFx0XHRcdCBbKG5nTW9kZWwpXT1cIm5ld0NvbW1lbnQuY29tbWVudF9maWVsZFwiIG5hbWU9XCJjb21tZW50X2ZpZWxkXCI+XG5cdFx0XHQgICAgICBcdFx0PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cblx0XHRcdCAgICAgICAgXHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgPkFkZDwvYnV0dG9uPlxuXHRcdFx0ICAgICAgXHRcdDwvc3Bhbj5cblx0XHRcdCAgICAgIFx0PC9mb3JtPlxuXHQgICAgXHRcdDwvZGl2PlxuXHQgIFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cdFxuXG5cdDxocj5cbiIsIjxjb21tZW50LWxvY2F0aW9uPjwvY29tbWVudC1sb2NhdGlvbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ3VCTTtNQUFBLHdFQUFpRDthQUFBLHFDQUMxQztNQUFBO01BQUEsNENBQXlCO01BQ3ZCO1VBQUEsMERBQUc7VUFBQSxZQUErQix1REFDOEM7aUJBQUEsdUNBQ2hGO1VBQUE7Y0FBQTtrQkFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFNO2NBQUE7Y0FBQTtZQUFBO1lBQU47VUFBQSx1Q0FBQTtVQUFBLG9DQUFBO1VBQUEsOEVBQUE7VUFBQSxv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
