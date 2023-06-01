//注意:程式碼 不要有 tab 符號？ 會造成js錯誤!!
//202304 Master Css增強語法的 Bootstrap v5.1框架  
//Master Css版本:v2.0.0-beta.142
//參考:Bootstrap v5.1 & daisyUI 語法
//未來:基本語法 盡量 相容於 Bootstrap v5,UI美化動畫 會參考好看的其他UI框架(daisyUI等等)
//Free,學習/分享.因使用而產生的相關問題.可自行處理
//大量使用了Bootstrap v5.1 語法,只強調學習&分享.thx
//-----------------------------------------------------------------------------------------
//友情提示!!使用Master CSS建立元件,不使用Bootstrap,這個是可以的喔!!! 
//比如 btn類別 就是我花時間建立的!!並未有Bootstrap影子
const config = {
    colors: {
        primary: {
          '':'#570DF8',
          'focus':'#4406CB',
        },            
        secondary: {
          '':'#F000B8',
          'focus':'#C00093',
        },
        success: {
          '':'#28A745',
          'focus':'#218838',  
        },
        danger: {
          '':'#DC3545',
          'focus':'#C82333',
        },
        warning: {
          '':'#FFC107',
          'focus':'#E0A800',
        },
        info: {
          '':'#17A2B8',   
          'focus':'#138496',  
        },
        light: {
          '':'#F8F9FA',
          'focus':'#E2E6EA',
        
        },
        dark: {
          '':'#343A40',
          focus: '#23272B',
        },
        error: {
          '':'#F87272',
          focus:'#DF1A2F',
        },
        accent: {
          '':'#D59B6A',
          'focus':'#C77A38',
        },
        neutral:{
          '':'#826A5C',
          'focus':'#68554A',
        }, 
        white: '#ffffff',
        
        
    },
   
    classes: {//2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
        bg:{
          primary:'{$bs-bg-opacity:1;bg:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!;} ',  
          secondary:'{$bs-bg-opacity:1;bg:rgba($(bs-secondary-rgb),$(bs-bg-opacity))!;} ',    
          success:'{$bs-bg-opacity:1;bg:rgba($(bs-success-rgb),$(bs-bg-opacity))!;}',  
          danger:'{$bs-bg-opacity:1;bg:rgba($(bs-danger-rgb),$(bs-bg-opacity))!;}',  
          warning:'{$bs-bg-opacity:1;bg:rgba($(bs-warning-rgb),$(bs-bg-opacity))!;}',  
          info:'{$bs-bg-opacity:1;bg:rgba($(bs-info-rgb),$(bs-bg-opacity))!;}',  
          light:'{$bs-bg-opacity:1;bg:rgba($(bs-light-rgb),$(bs-bg-opacity))!;}',  
          dark:'{$bs-bg-opacity:1;bg:rgba($(bs-dark-rgb),$(bs-bg-opacity))!;}',  
          body:'{$bs-bg-opacity:1;bg:rgba($(bs-body-rgb),$(bs-bg-opacity))!;}', 
          white:'{$bs-bg-opacity:1;bg:rgba($(bs-white-rgb),$(bs-bg-opacity))!;}', 
          transparent:'{$bs-bg-opacity:1;bg:transparent!;}', 
          gradient:'background-image:$(bs-gradient)!',
          opacity:{
                '':'',
                '75':'{$bs-bg-opacity:0.75!;}',
                '50':'{$bs-bg-opacity:0.5!;}',
                '25':'{$bs-bg-opacity:0.25!;}',
                '10':'{$bs-bg-opacity:0.1!;}',
          },  

        },//class:bg 結束
        text:{
          primary:'{$bs-text-opacity:1;color:rgba($(bs-primary-rgb),$(bs-text-opacity))!;}',  
          secondary:'{$bs-text-opacity:1;color:rgba($(bs-secondary-rgb),$(bs-text-opacity))!;}',    
          success:'{$bs-text-opacity:1;color:rgba($(bs-success-rgb),$(bs-text-opacity))!;}',  
          danger:'{$bs-text-opacity:1;color:rgba($(bs-danger-rgb),$(bs-text-opacity))!;}',  
          warning:'{$bs-text-opacity:1;color:rgba($(bs-warning-rgb),$(bs-text-opacity))!;}',  
          info:'{$bs-text-opacity:1;color:rgba($(bs-info-rgb),$(bs-text-opacity))!;}',  
          light:'{$bs-text-opacity:1;color:rgba($(bs-light-rgb),$(bs-text-opacity))!;}',  
          dark:'{$bs-text-opacity:1;color:rgba($(bs-dark-rgb),$(bs-text-opacity))!;}',  
          body:'{$bs-text-opacity:1;color:rgba($(bs-body-rgb),$(bs-text-opacity))!;}', 
          muted:'{$bs-text-opacity:1;color:#6c757d!;}',
          white:'{$bs-text-opacity:1;color:rgba($(bs-white-rgb),$(bs-text-opacity))!;}', 
          'black-50':'color:rgba(0,0,0,.5)!',
          'white-50':'color:rgba(255,255,255,.5)!',
          transparent:'color:transparent!',   
          reset:'{$bs-text-opacity:1;color:inherit!;}', 
 
          decoration:{
              underline:'text-decoration:underline!',
              none:'text-decoration:none!',
              'line-through':'text-decoration:line-through!',
          },  

          wrap:'white-space:normal!', 
          nowrap:'white-space:nowrap!',  
          break:'{word-wrap:break-word!;word-break:break-word!;}',
            
          lowercase:'text-transform:lowercase!',  
          uppercase:'text-transform:uppercase!',  
          capitalize:'text-transform:capitalize!',

          start:'text-align:left!',  
          center:'text-align:center!',  
          end:'text-align:right!',
          sm:{
            start:'text-align:left!@bs-sm',  
            center:'text-align:center!@bs-sm',  
            end:'text-align:right!@bs-sm',             
          },
          md:{
            start:'text-align:left!@bs-md',  
            center:'text-align:center!@bs-md',  
            end:'text-align:right!@bs-md',             
          },
          lg:{
            start:'text-align:left!@bs-lg',  
            center:'text-align:center!@bs-lg',  
            end:'text-align:right!@bs-lg',              
          },
          xl:{
            start:'text-align:left!@bs-xl',  
            center:'text-align:center!@bs-xl',  
            end:'text-align:right!@bs-xl',              
          },
          xxl:{
            start:'text-align:left!@bs-xxl',  
            center:'text-align:center!@bs-xxl',  
            end:'text-align:right!@bs-xxl',              
          }
          
        },  //class:text類別 結束
        g: { //Gutters 是在欄 (columns) 之間的 padding, 用來響應式的間隔和對齊 Bootstrap 網格系統中的內容。
            '0':'{$g-x:0!;$g-y:0!}',
            '1':'{$g-x:4!;$g-y:4!}',
            '2':'{$g-x:8!;$g-y:8!}',
            '3':'{$g-x:16!;$g-y:16!}',
            '4':'{$g-x:24!;$g-y:24!}',
            '5':'{$g-x:48!;$g-y:48!}',
            xs:{
                '0':'{$g-x:0!;$g-y:0!}@bs-xs',
                '1':'{$g-x:4!;$g-y:4!}@bs-xs',
                '2':'{$g-x:8!;$g-y:8!}@bs-xs',
                '3':'{$g-x:16!;$g-y:16!}@bs-xs',
                '4':'{$g-x:24!;$g-y:24!}@bs-xs',
                '5':'{$g-x:48!;$g-y:48!}@bs-xs',               
            },            
            sm:{
                '0':'{$g-x:0!;$g-y:0!}@bs-sm',
                '1':'{$g-x:4!;$g-y:4!}@bs-sm',
                '2':'{$g-x:8!;$g-y:8!}@bs-sm',
                '3':'{$g-x:16!;$g-y:16!}@bs-sm',
                '4':'{$g-x:24!;$g-y:24!}@bs-sm',
                '5':'{$g-x:48!;$g-y:48!}@bs-sm',               
            },            
            md:{
                '0':'{$g-x:0!;$g-y:0!}@bs-md',
                '1':'{$g-x:4!;$g-y:4!}@bs-md',
                '2':'{$g-x:8!;$g-y:8!}@bs-md',
                '3':'{$g-x:16!;$g-y:16!}@bs-md',
                '4':'{$g-x:24!;$g-y:24!}@bs-md',
                '5':'{$g-x:48!;$g-y:48!}@bs-md',               
            },            
            lg:{
                '0':'{$g-x:0!;$g-y:0!}@bs-lg',
                '1':'{$g-x:4!;$g-y:4!}@bs-lg',
                '2':'{$g-x:8!;$g-y:8!}@bs-lg',
                '3':'{$g-x:16!;$g-y:16!}@bs-lg',
                '4':'{$g-x:24!;$g-y:24!}@bs-lg',
                '5':'{$g-x:48!;$g-y:48!}@bs-lg',               
            },            
            xl:{
                '0':'{$g-x:0!;$g-y:0!}@bs-xl',
                '1':'{$g-x:4!;$g-y:4!}@bs-xl',
                '2':'{$g-x:8!;$g-y:8!}@bs-xl',
                '3':'{$g-x:16!;$g-y:16!}@bs-xl',
                '4':'{$g-x:24!;$g-y:24!}@bs-xl',
                '5':'{$g-x:48!;$g-y:48!}@bs-xl',               
            },
 
        
       //下方為CSS Grid
            grid:{  //class:g-grid
                '':'{display:grid;grid-template-rows:repeat($(rows,1),1fr);grid-template-columns:repeat($(columns,12),1fr);gap:$(gap,1.5rem);}'
            },
            col:{   //class:g-col-*
                '1':'{grid-column-start:auto;grid-column-end:span|1;}',
                '2':'{grid-column-start:auto;grid-column-end:span|2;}',
                '3':'{grid-column-start:auto;grid-column-end:span|3;}',
                '4':'{grid-column-start:auto;grid-column-end:span|4;}',
                '5':'{grid-column-start:auto;grid-column-end:span|5;}',
                '6':'{grid-column-start:auto;grid-column-end:span|6;}',
                '7':'{grid-column-start:auto;grid-column-end:span|1;}',
                '8':'{grid-column-start:auto;grid-column-end:span|2;}',
                '9':'{grid-column-start:auto;grid-column-end:span|3;}',
                '10':'{grid-column-start:auto;grid-column-end:span|4;}',
                '11':'{grid-column-start:auto;grid-column-end:span|5;}',
                '12':'{grid-column-start:auto;grid-column-end:span|6;}',
                md:{
                    '1':'{grid-column-start:auto;grid-column-end:span|1;}@bs-md',
                    '2':'{grid-column-start:auto;grid-column-end:span|2;}@bs-md',
                    '3':'{grid-column-start:auto;grid-column-end:span|3;}@bs-md',
                    '4':'{grid-column-start:auto;grid-column-end:span|4;}@bs-md',                   
                },
                
            },
            start:{     //class:g-start-*
                    '1':'grid-column-start:1!',      //BS不需要!important,這部分以後再去查
                    '2':'grid-column-start:2!',
                    '3':'grid-column-start:3!',
                    '4':'grid-column-start:4!',
                    '5':'grid-column-start:5!',
                    '6':'grid-column-start:6!',
                    '7':'grid-column-start:7!',
                    '8':'grid-column-start:8!',
                    '9':'grid-column-start:9!',
                    '10':'grid-column-start:10!',
                    '11':'grid-column-start:11!',
                    '12':'grid-column-start:12!',
                
            },

        }, //class:g-* 結束
        gx: { //水平 gutters
            '0':'$g-x:0!',
            '1':'$g-x:4!',
            '2':'$g-x:8!',
            '3':'$g-x:16!',
            '4':'$g-x:24!',
            '5':'$g-x:48!'
        },
        gy: { //垂直 gutters
            '0':'$g-y:0!',
            '1':'$g-y:4!',
            '2':'$g-y:8!',
            '3':'$g-y:16!',
            '4':'$g-y:24!',
            '5':'$g-y:48!'
        },
        p: {
            '0':'p:0!',
            '1':'p:calc($(spacer)*0.25px)!',
            '2':'p:calc($(spacer)*0.5px)!',
            '3':'p:16!',
            '4':'p:calc($(spacer)*1.5px)!',
            '5':'p:calc($(spacer)*3px)!'           
        },
        px: {
            '0':'{pl:0!;pr:0!;}',
            '1':'{pl:calc($(spacer)*0.25px)!;pr:calc($(spacer)*0.25px)!;}',
            '2':'{pl:calc($(spacer)*0.5px)!;pr:calc($(spacer)*0.5px)!;}',
            '3':'{pl:16!;pr:16!;}',
            '4':'{pl:calc($(spacer)*1.5px)!;pr:calc($(spacer)*1.5px)!;}',
            '5':'{pl:calc($(spacer)*3px)!;pr:calc($(spacer)*3px)!}'
        }, 
        py: { 
            '0':'{pt:0!;pb:0!;}',
            '1':'{pt:calc($(spacer)*0.25px)!;pb:calc($(spacer)*0.25px)!;}',
            '2':'{pt:calc($(spacer)*0.5px)!;pb:calc($(spacer)*0.5px)!;}',
            '3':'{pt:16!;pb:16!;}',
            '4':'{pt:calc($(spacer)*1.5px)!;pb:calc($(spacer)*1.5px)!;}',
            '5':'{pt:calc($(spacer)*3px)!;pb:calc($(spacer)*3px)!}' 

        }, 
        pb:{
            '0':'{pb:0!;}',
            '1':'{pb:calc($(spacer)*0.25px)!;}',
            '2':'{pb:calc($(spacer)*0.5px)!;}',
            '3':'{pb:16!;}',
            '4':'{pb:calc($(spacer)*1.5px)!;}',
            '5':'{pb:calc($(spacer)*3px)!;}'           
            
        },    
        pt:{
            '0':'{pt:0!;}',
            '1':'{pt:calc($(spacer)*0.25px)!;}',
            '2':'{pt:calc($(spacer)*0.5px)!;}',
            '3':'{pt:16!;}',
            '4':'{pt:calc($(spacer)*1.5px)!;}',
            '5':'{pt:calc($(spacer)*3px)!;}'              
        },
        m:{    //margin
            auto:'m:auto!',
            '0':'m:0!',
            '1':'m:calc($(spacer)*0.25px)!',
            '2':'m:calc($(spacer)*0.5px)!',
            '3':'m:16px!',
            '4':'m:calc($(spacer)*1.5px)!',
            '5':'m:calc($(spacer)*3px)!'            
        },        
        mx:{    //margin-right/lieft
            auto:'{mr:auto!;ml:auto!;}',
            '0':'{ml:0!;mr:0!;}',
            '1':'{ml:calc($(spacer)*0.25px)!;mr:calc($(spacer)*0.25px)!;}',
            '2':'{ml:calc($(spacer)*0.5px)!;mr:calc($(spacer)*0.5px)!;}',
            '3':'{ml:16px!;mr:16px!;}',
            '4':'{ml:calc($(spacer)*1.5px)!;mr:calc($(spacer)*1.5px)!;}',
            '5':'{ml:calc($(spacer)*3px)!;mr:calc($(spacer)*3px)!}'            
        }, 
        mt:{    //margin-bottom
            auto:'{mt:auto!;}',
            '0':'{mt:0!;}',
            '1':'{mt:calc($(spacer)*0.25px)!;}',
            '2':'{mt:calc($(spacer)*0.5px)!;}',
            '3':'{mt:16px!;}',
            '4':'{mt:calc($(spacer)*1.5px)!;}',
            '5':'{mt:calc($(spacer)*3px)!;}'            
        },        
        mb:{    //margin-bottom
            auto:'{mb:auto!;}',
            '0':'{mb:0!;}',
            '1':'{mb:calc($(spacer)*0.25px)!;}',
            '2':'{mb:calc($(spacer)*0.5px)!;}',
            '3':'{mb:16px!;}',
            '4':'{mb:calc($(spacer)*1.5px)!;}',
            '5':'{mb:calc($(spacer)*3px)!;}'            
        }, 
        my:{
            auto:'{mt:auto!;mb:auto!;}',
            '0':'{mt:0!;mb:0!;}',
            '1':'{mt:calc($(spacer)*0.25px)!;mb:calc($(spacer)*0.25px)!;}',
            '2':'{mt:calc($(spacer)*0.5px)!;mb:calc($(spacer)*0.5px)!;}',
            '3':'{mt:16px!;mb:16px!;}',
            '4':'{mt:calc($(spacer)*1.5px)!;mb:calc($(spacer)*1.5px)!;}',
            '5':'{mt:calc($(spacer)*3px)!;mb:calc($(spacer)*3px)!}', 
            lg:{
                '0':'{mt:0!;mb:0!;}@bs-lg',
                '1':'{mt:calc($(spacer)*0.25px)!;mb:calc($(spacer)*0.25px)!;}@bs-lg',
                '2':'{mt:calc($(spacer)*0.5px)!;mb:calc($(spacer)*0.5px)!;}@bs-lg',
                '3':'{mt:16px!;mb:16px!;}@bs-lg',
                '4':'{mt:calc($(spacer)*1.5px)!;mb:calc($(spacer)*1.5px)!;}@bs-lg',
                '5':'{mt:calc($(spacer)*3px)!;mb:calc($(spacer)*3px)!}@bs-lg'                
            },    
        },
        
      
        mw:{
           '100':'max-w:100%!', 
        }, 
        mh:{
           '100':'max-h:100%!', 
        }, 
        min:{
           vw:{
             '100':'min-w:100vw!',  //class:min-vw-100 
           },
           
           vh:{
             '100':'min-h:100vh!',  //class:min-vh-100
           },
        },
        vw:{
          '100':'w:100100vw!',   
        },
        vh:{
          '100':'h:100100vh!',   
        },    
        gap:{   //Gap
            '0':'gap:0!',
            '1':'gap:calc($(spacer)*0.25px)!',
            '2':'gap:calc($(spacer)*0.5px)!',
            '3':'gap:16px!',
            '4':'gap:calc($(spacer)*1.5px)',
            '5':'gap:calc($(spacer)*3px)!!',
        },
        fs:{
          '1':'font-size:calc(1.375rem+1.5vw)!',  
          '2':'font-size:calc(1.325rem+0.9vw)!',  
          '3':'font-size:calc(1.3rem+0.6vw)!',  
          '4':'font-size:calc(1.275rem+0.3vw)!',  
          '5':'font-size:1.25rem!',  
          '6':'font-size:1rem!',  
        },
        fst:{
            italic:'font-style:italic!', 
            normal:'font-style:normal!',
                
        },
        fw:{
            bold:'font-weight:700!',
            bolder:'font-weight:bolder!',
            normal:'font-weight:400!',    
            light:'font-weight:300!',  
            lighter:'font-weight:lighter!',  

        },  
        font:{
           monospace:'font-family:var(--bs-font-monospace)!important',
            
        },
        lh:{
          '1':'line-height:1!',
          sm:'line-height:1.25!',
          base:'line-height:1.5!',
          lg:'line-height:2!',
        },
 
        
        bs:{
           border:{        //class:bs-border邊框
                '':'b:1px|solid|#dee2e6!',
                top:'bt:1px|solid|#dee2e6!',
                end:'br:1px|solid|#dee2e6!',
                bottom:'bb:1px|solid|#dee2e6!',
                start:'bl:1px|solid|#dee2e6!',
                '0':'border:0!',
                '1':'border:1!',
                '2':'border:2!',
                '3':'border:3!',
                '4':'border:4!',
                '5':'border:5!',
                'top-0':'bt:0!',
                'end-0':'br:0!',
                'bottom-0':'bb:0!',
                'start-0':'bl:0!',
                
                primary:'border-color:primary!',  
                secondary:'border-color:secondary!',    
                success:'border-color:success!',  
                danger:'border-color:danger!',  
                warning:'border-color:warning!',  
                info:'border-color:info!',  
                light:'border-color:light!',  
                dark:'border-color:dark!',  
                body:'border-color:body!', 
                white:'border-color:white!', 
                            
          },  
          rounded:{     //class:bs-rounded
              '':'border-radius:0.25rem!',
              'pill':'border-radius:50rem!',
              'circle':'border-radius:50%!',
              '0':'border-radius:0!',
              '1':'border-radius:0.2rem!',      
              '2':'border-radius:0.25rem!',      
              '3':'border-radius:0.3rem!',  
              start:'{border-bottom-left-radius:0.25rem!;border-top-left-radius:0.25rem!;}',  
              

              
          }, 
          popover:{ //彈出提示框
                '':'',
                auto:'{left:calc(-0.5rem-1px);w:0.5rem;h:1rem;}[data-popper-placement^=right]>.popover-arrow {left:1px;border-width:0.5rem|0.5rem|0.5rem|0;border-right-color:#fff;}[data-popper-placement^=right]>.popover-arrow::after {bottom:calc(-0.5rem-1px);}[data-popper-placement^=top]>.popover-arrow {right:calc(-0.5rem-1px);w:0.5rem;h:1rem;}[data-popper-placement^=left]>.popover-arrow',
                start:'{right:calc(-0.5rem-1px);w:0.5rem;h:1rem;}>.popover-arrow {right:0;border-width:0.5rem|0|0.5rem|0.5rem;border-left-color:rgba(0,0,0,.25);}[data-popper-placement^=left]>.popover-arrow::before {right:0;border-width:0.5rem|0|0.5rem|0.5rem;border-left-color:rgba(0,0,0,.25);}>.popover-arrow::before {right:1px;border-width:0.5rem|0|0.5rem|0.5rem;border-left-color:#fff;}[data-popper-placement^=left]>.popover-arrow::after {right:1px;border-width:0.5rem|0|0.5rem|0.5rem;border-left-color:#fff;}>.popover-arrow::after',
                end:'{left:calc(-0.5rem-1px);w:0.5rem;h:1rem;}>.popover-arrow  {left:0;border-width:0.5rem|0.5rem|0.5rem|0;border-right-color:rgba(0,0,0,.25);}[data-popper-placement^=right]>.popover-arrow::before {left:0;border-width:0.5rem|0.5rem|0.5rem|0;border-right-color:rgba(0,0,0,.25);}>.popover-arrow::before {left:1px;border-width:0.5rem|0.5rem|0.5rem|0;border-right-color:#fff;}>.popover-arrow::after',
                top:'{bottom:calc(-0.5rem-1px);}>.popover-arrow {bottom:0;border-width:0.5rem|0.5rem|0;border-top-color:rgba(0,0,0,.25);}[data-popper-placement^=top]>.popover-arrow::before {bottom:0;border-width:0.5rem|0.5rem|0;border-top-color:rgba(0,0,0,.25);}>.popover-arrow::before {bottom:1px;border-width:0.5rem|0.5rem|0;border-top-color:#fff;}[data-popper-placement^=top]>.popover-arrow::after {bottom:1px;border-width:0.5rem|0.5rem|0;border-top-color:#fff;}>.popover-arrow::after',
                bottom:'{top:calc(-0.5rem-1px);}>.popover-arrow {top:0;border-width:0|0.5rem|0.5rem|0.5rem;border-bottom-color:rgba(0,0,0,.25);}[data-popper-placement^=bottom]>.popover-arrow::before {top:0;border-width:0|0.5rem|0.5rem|0.5rem;border-bottom-color:rgba(0,0,0,.25);}>.popover-arrow::before {top:1px;border-width:0|0.5rem|0.5rem|0.5rem;border-bottom-color:#fff;}[data-popper-placement^=bottom]>.popover-arrow::after {top:1px;border-width:0|0.5rem|0.5rem|0.5rem;border-bottom-color:#fff;}>.popover-arrow::after',
                
                
          },
 

        },  //class:bs類別 結束

        d:{ //display 通用類別
            grid:'display:grid!',
            flex:'display:flex!',
            inline:{
                '':'display:inline!',
                flex:'display:inline-flex!',        //class:d-inline-flex
                block:'display:inline-block!'       //class:d-inline-block
            },
   
            
            block:'display:block!',
            none:'display:none!',  //隱藏元素  //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.

            '2xs':{
                none:'display:none!@bs-2xs',
                block:'display:block!@bs-2xs',
                flex:'display:flex!@bs-2xs',
                'inline-flex':' display:inline-flex!@bs-2xs'        //class:d-2xs-inline-flex                
            },
            xs:{
                none:'display:none!@bs-xs',
                block:'display:block!@bs-xs',
                flex:'display:flex!@bs-xs',
                'inline-flex':' display:inline-flex!@bs-xs'
            },
            sm:{
                none:'display:none!@bs-sm',
                block:'display:block!@bs-sm',
                flex:'display:flex!@bs-sm',
                'inline-flex':' display:inline-flex!@bs-sm'

            },
            md:{
                none:'display:none!@bs-md',
                block:'display:block!@bs-md',
                flex:'display:flex!@bs-md',
                'inline-flex':' display:inline-flex!@bs-md'
                
            }, 
            lg:{
                none:'display:none!@bs-lg',
                block:'display:block!@bs-lg',
                flex:'display:flex!@bs-lg',
                'inline-flex':' display:inline-flex!@bs-lg'
                
            },
            xl:{
                none:'display:none!@bs-xl',
                block:'display:block!@bs-xl',
                flex:'display:flex!@bs-xl',
                'inline-flex':' display:inline-flex!@bs-xl'
                
            },
            print:{
                none:'display:none!@print',  
                block:'display:block!@print',
            },
            
        },      //display 通用類別 結束 
        flex:{//class:flex類別
            row:{
               '':'flex-direction:row!',
               reverse:'flex-direction:row-reverse!'
            },
            
            column:{
                '':'flex-direction:column!', 
                reverse:'flex-direction:column-reverse!',
            },

            wrap:{
                '':'flex-wrap:wrap!', 
                reverse:'flex-wrap:wrap-reverse!',  //class:flex-wrap-reverse
            },   
            nowrap:'flex-wrap:nowrap!',

            fill:'flex:1|1|auto!',      //class:flex-fill
 
            grow:{
                '0':'flex-grow:0!',
                '1':'flex-grow:1!',     //class:flex-grow-1
                
            },
            shrink:{
                '0':'flex-shrink:0!',
                '1':'flex-shrink:1!',   //class:flex-shrink-1
            }, 
 
            //.flex-sm-{grow|shrink}-0
 
            xs:{
              row:'flex-direction:row!@bs-xs',          
              'row-reverse':'flex-direction:row-reverse!@bs-xs',
              column:'flex-direction:column!@bs-xs',
              'column-reverse':'flex-direction:column-reverse!@bs-xs',  

              wrap:{
                '':'flex-wrap:wrap!@bs-xs', 
                reverse:'flex-wrap:wrap-reverse!@bs-xs',   
              },   
              nowrap:'flex-wrap:nowrap!@bs-xs',  
              
              fill:'flex:1|1|auto!@bs-xs',    
              grow:{
                    '0':'flex-grow:0!@bs-xs',
                    '1':'flex-grow:1!@bs-xs',      
                    
              },
              shrink:{
                    '0':'flex-shrink:0!@bs-xs',
                    '1':'flex-shrink:1!@bs-xs',    
              }
               
            },
            sm:{
              row:'flex-direction:row!@bs-sm',          
              'row-reverse':'flex-direction:row-reverse!@bs-sm',
              column:'flex-direction:column!@bs-sm',
              'column-reverse':'flex-direction:column-reverse!@bs-sm',   

              wrap:{
                '':'flex-wrap:wrap!@bs-sm', 
                reverse:'flex-wrap:wrap-reverse!@bs-sm',   
              },   
              nowrap:'flex-wrap:nowrap!@bs-sm',
              
              fill:'flex:1|1|auto!@bs-sm',    
              grow:{
                    '0':'flex-grow:0!@bs-sm',
                    '1':'flex-grow:1!@bs-sm',      
                    
              },
              shrink:{
                    '0':'flex-shrink:0!@bs-sm',
                    '1':'flex-shrink:1!@bs-sm',    
              }             
            },
            md:{
              row:'flex-direction:row!@bs-md',          
              'row-reverse':'flex-direction:row-reverse!@bs-md',
              column:'flex-direction:column!@bs-md',
              'column-reverse':'flex-direction:column-reverse!@bs-md',     

              wrap:{
                '':'flex-wrap:wrap!@bs-md', 
                reverse:'flex-wrap:wrap-reverse!@bs-md',   
              },   
              nowrap:'flex-wrap:nowrap!@bs-md',              
              fill:'flex:1|1|auto!@bs-md',   
              grow:{
                    '0':'flex-grow:0!@bs-md',
                    '1':'flex-grow:1!@bs-md',      
                    
              },
              shrink:{
                    '0':'flex-shrink:0!@bs-md',
                    '1':'flex-shrink:1!@bs-md',    
              }              
            },
            lg:{
              row:'flex-direction:row!@bs-lg',          
              'row-reverse':'flex-direction:row-reverse!@bs-lg',
              column:'flex-direction:column!@bs-lg',
              'column-reverse':'flex-direction:column-reverse!@bs-lg',   
              
              wrap:{
                '':'flex-wrap:wrap!@bs-lg', 
                reverse:'flex-wrap:wrap-reverse!@bs-lg',   
              },   
              nowrap:'flex-wrap:nowrap!@bs-lg',              
              fill:'flex:1|1|auto!@bs-lg',   
              grow:{
                    '0':'flex-grow:0!@bs-lg',
                    '1':'flex-grow:1!@bs-lg',      
                    
              },
              shrink:{
                    '0':'flex-shrink:0!@bs-lg',
                    '1':'flex-shrink:1!@bs-lg',    
              }              
            },
            xl:{
              row:'flex-direction:row!@bs-xl',          //.flex-xl-row
              'row-reverse':'flex-direction:row-reverse!@bs-xl',
              column:'flex-direction:column!@bs-xl',
              'column-reverse':'flex-direction:column-reverse!@bs-xl',
              
              wrap:{
                '':'flex-wrap:wrap!@bs-xl', 
                reverse:'flex-wrap:wrap-reverse!@bs-xl',   
              },   
              nowrap:'flex-wrap:nowrap!@bs-xl',              
              fill:'flex:1|1|auto!@bs-xl',  
              grow:{
                    '0':'flex-grow:0!@bs-xl',
                    '1':'flex-grow:1!@bs-xl',      
                    
              },
              shrink:{
                    '0':'flex-shrink:0!@bs-xl',
                    '1':'flex-shrink:1!@bs-xl',    
              }              
            },
            xxl:{
              row:'flex-direction:row!@bs-xxl',          //.flex-xl-row
              'row-reverse':'flex-direction:row-reverse!@bs-xxl',
              column:'flex-direction:column!@bs-xxl',
              'column-reverse':'flex-direction:column-reverse!@bs-xxl',
              
              wrap:{
                '':'flex-wrap:wrap!@bs-xxl', 
                reverse:'flex-wrap:wrap-reverse!@bs-xxl',   
              },   
              nowrap:'flex-wrap:nowrap!@bs-xxl',              
              fill:'flex:1|1|auto!@bs-xxl', 
              grow:{
                    '0':'flex-grow:0!@bs-xxl',
                    '1':'flex-grow:1!@bs-xxl',      
                    
              },
              shrink:{
                    '0':'flex-shrink:0!@bs-xxl',
                    '1':'flex-shrink:1!@bs-xxl',    
              }              
            },
 
             //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
            
        },     //class:flex類別 結束 
        float:{
            start:'float:left!',
            end:'float:right!',
            none:'float:none!',
            sm:{
                start:'float:left!@bs-sm',
                end:'float:right!@bs-sm',
                none:'float:none!@bs-sm',
            },
            md:{
                start:'float:left!@bs-md',
                end:'float:right!@bs-md',
                none:'float:none!@bs-md',
                
            },
            lg:{
                start:'float:left!@bs-lg',
                end:'float:right!@bs-lg',
                none:'float:none!@bs-lg',
                
            },
            xl:{
                start:'float:left!@bs-xl',
                end:'float:right!@bs-xl',
                none:'float:none!@bs-xl',
                
            },
            xxl:{
                start:'float:left!@bs-xxl',
                end:'float:right!@bs-xxl',
                none:'float:none!@bs-xxl',
                
            }
        },  //class:float類別 結束
        row: {
            '':'{flex;flex-wrap:wrap;$g-x:24;$g-y:0;mt:calc($(g-y)*(-1px));mr:calc($(g-x)*(-0.5px));ml:calc($(g-x)*(-0.5px));} {flex-shrink:0;w:100%;max-w:100%;pr:calc($(g-x)*0.5px);pl:calc($(g-x)*0.5px);mt:calc($(g-y)*1px);}>* ',
            //關於flex:?|?|?解釋 https://wonderland.coderbridge.io/2021/11/18/css-flex/
            cols:{
                'auto':'{flex:0|0|auto;w:auto!;}>*',
                '1':'{flex:0|0|auto;w:100%!;}>*',
                '2':'{flex:0|0|auto;w:50%!;}>*',
                '3':'{flex:0|0|auto;w:33.3333333333%!;}>*',
                '4':'{flex:0|0|auto;w:25%!;}>*',
                '5':'{flex:0|0|auto;w:20%!;}>*',
                '2xs':{
                    'auto':'{flex:0|0|auto;w:auto;}>*@bs-2xs',
                    '1':'{flex:0|0|auto;w:100%!;}>*@bs-2xs',
                    '2':'{flex:0|0|auto;w:50%!;}>*@bs-2xs',
                    '3':'{flex:0|0|auto;w:33.3333333333%!;}>*@bs-2xs',
                    '4':'{flex:0|0|auto;w:25%!;}>*@bs-2xs',                    
                    '5':'{flex:0|0|auto;w:20%!;}>*@bs-2xs',
                },                                 
                xs:{
                    'auto':'{flex:0|0|auto;w:auto;}>*@bs-xs',
                    '1':'{flex:0|0|auto;w:100%!;}>*@bs-xs',
                    '2':'{flex:0|0|auto;w:50%!;}>*@bs-xs',
                    '3':'{flex:0|0|auto;w:33.3333333333%!;}>*@bs-xs',
                    '4':'{flex:0|0|auto;w:25%!;}>*@bs-xs',                    
                    '5':'{flex:0|0|auto;w:20%!;}>*@bs-xs',
                },                 
                sm:{
                    'auto':'{flex:0|0|auto;w:auto;}>*@bs-sm',
                    '1':'{flex:0|0|auto;w:100%!;}>*@bs-sm',
                    '2':'{flex:0|0|auto;w:50%!;}>*@bs-sm',
                    '3':'{flex:0|0|auto;w:33.3333333333%!;}>*@bs-sm',
                    '4':'{flex:0|0|auto;w:25%!;}>*@bs-sm',                    
                    '5':'{flex:0|0|auto;w:20%!;}>*@bs-sm',
                }, 
                md:{
                    'auto':'{flex:0|0|auto;w:auto;}>*@bs-md',
                    '1':'{flex:0|0|auto;w:100%!;}>*@bs-md',
                    '2':'{flex:0|0|auto;w:50%!;}>*@bs-md',
                    '3':'{flex:0|0|auto;w:33.3333333333%!;}>*@bs-md',
                    '4':'{flex:0|0|auto;w:25%!;}>*@bs-md',                    
                    '5':'{flex:0|0|auto;w:20%!;}>*@bs-md',
                },                
                lg:{
                    'auto':'{flex:0|0|auto;w:auto;}>*@bs-lg',
                    '1':'{flex:0|0|auto;w:100%!;}>*@bs-lg',
                    '2':'{flex:0|0|auto;w:50%!;}>*@bs-lg',
                    '3':'{flex:0|0|auto;w:33.3333333333%!;}>*@bs-lg',
                    '4':'{flex:0|0|auto;w:25%!;}>*@bs-lg',                    
                    '5':'{flex:0|0|auto;w:20%!;}>*@bs-lg',
                },
                xl:{
                    'auto':'{flex:0|0|auto;w:auto;}>*@bs-xl',
                    '1':'{flex:0|0|auto;w:100%!;}>*@bs-xl',
                    '2':'{flex:0|0|auto;w:50%!;}>*@bs-xl',
                    '3':'{flex:0|0|auto;w:33.3333333333%!;}>*@bs-xl',
                    '4':'{flex:0|0|auto;w:25%!;}>*@bs-xl',                    
                    '5':'{flex:0|0|auto;w:20%!;}>*@bs-xl',
                },                
            },
             
        },  //class:row類別 結束
        
        col: {  //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
                '' :'flex:1|0|0% ', 
                auto:'{flex:0|0|auto!;w:auto!;} ',
                 '1':'{flex:0|0|auto;w:8.33333333%!;}',
                 '2':'{flex:0|0|auto;w:16.6667%!;}',
                 '3':'{flex:0|0|auto;w:25%!;}',  
                 '4':'{flex:0|0|auto;w:33.333333%!;}', 
                 '5':'{flex:0|0|auto;w:41.666667%!;}', 
                 '6':'{flex:0|0|auto;w:50%!;}',
                 '7':'{flex:0|0|auto;w:58.3333%!;}',
                 '8':'{flex:0|0|auto;w:66.66666667%!;}',
                 '9':'{flex:0|0|auto;w:75%!;}',
                '10':'{flex:0|0|auto;w:83.3333%!;}',
                '11':'{flex:0|0|auto;w:91.6667%!;}',
                '12':'{flex:0|0|auto;w:100%!;}',
                xs:{    //col-xs-*
                    '':'flex:1|0|0%@bs-xs',
                    auto:'{flex:0|0|auto;w:auto!;}@bs-xs',
                    "1":'{flex:0|0|auto;w:8.33333333%!;}@bs-xs',
                    "2":'{flex:0|0|auto;w:16.6667%!;}@bs-xs',
                    "3":'{flex:0|0|auto;w:25%!;}@bs-xs',
                    "4":'{flex:0|0|auto;w:33.333333%!;}@bs-xs',
                    "5":'{flex:0|0|auto;w:41.666667%!;}@bs-xs',
                    "6":'{flex:0|0|auto;w:50%!;}@bs-xs',
                    "7":'{flex:0|0|auto;w:58.3333%!;}@bs-xs',
                    "8":'{flex:0|0|auto;w:66.66666667%!;}@bs-xs',
                    "9":'{flex:0|0|auto;w:75%!;}@bs-xs',
                    "10":'{flex:0|0|auto;w:83.3333%!;}@bs-xs',
                    "11":'{flex:0|0|auto;w:91.6667%!;}@bs-xs',
                    "12":'{flex:0|0|auto;w:100%!;}@bs-xs'
                },                
                sm:{
                    '':'{flex:1|0|0%;}@bs-sm',
                    auto:'{flex:0|0|auto;w:auto!;}@bs-sm',
                    "1":'{flex:0|0|auto;w:8.33333333%!;}@bs-sm',
                    "2":'{flex:0|0|auto;w:16.6667%!;}@bs-sm',
                    "3":'{flex:0|0|auto;w:25%!;}@bs-sm',
                    "4":'{flex:0|0|auto;w:33.333333%!;}@bs-sm',
                    "5":'{flex:0|0|auto;w:41.666667%!;}@bs-sm',
                    "6":'{flex:0|0|auto;w:50%!;}@bs-sm',
                    "7":'{flex:0|0|auto;w:58.3333%!;}@bs-sm',
                    "8":'{flex:0|0|auto;w:66.66666667%!;}@bs-sm',
                    "9":'{flex:0|0|auto;w:75%!;}@bs-sm',
                    "10":'{flex:0|0|auto;w:83.3333%!;}@bs-sm',
                    "11":'{flex:0|0|auto;w:91.6667%!;}@bs-sm',
                    "12":'{flex:0|0|auto;w:100%!;}@bs-sm'
                },
                md:{
                    '':'flex:1|0|0%@bs-md',
                    auto:'{flex:0|0|auto;w:auto!;}@bs-md',
                    "1":'{flex:0|0|auto;w:8.33333333%!;}@bs-md',
                    "2":'{flex:0|0|auto;w:16.6667%!;}@bs-md',
                    "3":'{flex:0|0|auto;w:25%!;}@bs-md',
                    "4":'{flex:0|0|auto;w:33.333333%!;}@bs-md',
                    "5":'{flex:0|0|auto;w:41.666667%!;}@bs-md',
                    "6":'{flex:0|0|auto;w:50%!;}@bs-md',
                    "7":'{flex:0|0|auto;w:58.3333%!;}@bs-md',
                    "8":'{flex:0|0|auto;w:66.66666667%!;}@bs-md',
                    "9":'{flex:0|0|auto;w:75%!;}@bs-md',
                    "10":'{flex:0|0|auto;w:83.3333%!;}@bs-md',
                    "11":'{flex:0|0|auto;w:91.6667%!;}@bs-md',
                    "12":'{flex:0|0|auto;w:100%!;}@bs-md'        //注意 max-w 改為 w
                }, 
                lg:{
                    '':'flex:1|0|0%@bs-lg',
                    auto:'{flex:0|0|auto;w:auto!;}@bs-lg',
                    "1":'{flex:0|0|auto;w:8.33333333%!;}@bs-lg',
                    "2":'{flex:0|0|auto;w:16.6667%!;}@bs-lg',
                    "3":'{flex:0|0|auto;w:25%!;}@bs-lg',
                    "4":'{flex:0|0|auto;w:33.333333%!;}@bs-lg',
                    "5":'{flex:0|0|auto;w:41.666667%!;}@bs-lg',
                    "6":'{flex:0|0|auto;w:50%!;}@bs-lg',
                    "7":'{flex:0|0|auto;w:58.3333%!;}@bs-lg',
                    "8":'{flex:0|0|auto;w:66.66666667%!;}@bs-lg',
                    "9":'{flex:0|0|auto;w:75%!;}@bs-lg',
                    "10":'{flex:0|0|auto;w:83.3333%!;}@bs-lg',
                    "11":'{flex:0|0|auto;w:91.6667%!;}@bs-lg',
                    "12":'{flex:0|0|auto;w:100%!;}@bs-lg'
                },     
                xl:{    //col-xl-*
                    '':'flex:1|0|0%@bs-xl',
                    auto:'{flex:0|0|auto;w:auto!;}@bs-xl',
                    "1":'{flex:0|0|auto;w:8.33333333%!;}@bs-xl',
                    "2":'{flex:0|0|auto;w:16.6667%!;}@bs-xl',
                    "3":'{flex:0|0|auto;w:25%!;}@bs-xl',
                    "4":'{flex:0|0|auto;w:33.333333%!;}@bs-xl',
                    "5":'{flex:0|0|auto;w:41.666667%!;}@bs-xl',
                    "6":'{flex:0|0|auto;w:50%!;}@bs-xl',
                    "7":'{flex:0|0|auto;w:58.3333%!;}@bs-xl',
                    "8":'{flex:0|0|auto;w:66.66666667%!;}@bs-xl',
                    "9":'{flex:0|0|auto;w:75%!;}@bs-xl',
                    "10":'{flex:0|0|auto;w:83.3333%!;}@bs-xl',
                    "11":'{flex:0|0|auto;w:91.6667%!;}@bs-xl',
                    "12":'{flex:0|0|auto;w:100%!;}@bs-xl'
                }, 
                xxl:{    //col-xl-*
                    '':'flex:1|0|0%@bs-xxl',
                    auto:'{flex:0|0|auto;w:auto!;}@bs-xxl',
                    "1":'{flex:0|0|auto;w:8.33333333%!;}@bs-xxl',
                    "2":'{flex:0|0|auto;w:16.6667%!;}@bs-xxl',
                    "3":'{flex:0|0|auto;w:25%!;}@bs-xxl',
                    "4":'{flex:0|0|auto;w:33.333333%!;}@bs-xxl',
                    "5":'{flex:0|0|auto;w:41.666667%!;}@bs-xxl',
                    "6":'{flex:0|0|auto;w:50%!;}@bs-xxl',
                    "7":'{flex:0|0|auto;w:58.3333%!;}@bs-xxl',
                    "8":'{flex:0|0|auto;w:66.66666667%!;}@bs-xxl',
                    "9":'{flex:0|0|auto;w:75%!;}@bs-xxl',
                    "10":'{flex:0|0|auto;w:83.3333%!;}@bs-xxl',
                    "11":'{flex:0|0|auto;w:91.6667%!;}@bs-xxl',
                    "12":'{flex:0|0|auto;w:100%!;}@bs-xxl'
                },                
                form:{      //col-form-*
                      label:'d:inline-block mb:8 ',
                      text:'mt:0.25rem f:0.875rem color:#6c757d ',
                      control:'d:block f:16 font-weight:400 r:4 p:0.375rem|0.75rem line-height:1.5 flex:1|1|auto w:100% border:1|solid|primary  appearance:none {outline-offset:2px;outline:solid|primary}:focus',
                },                
        },  //class:col類別 結束
        align:{     //class:align類別
            '':'',
            items:{
                 start:'ai:flex-start!',   //class:align-items-start
                 end:'ai:flex-end!',
                 center:'ai:center!',
                 baseline:'align-items:baseline!',
                 stretch:'align-items:stretch!',
                 
                 //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
                 sm:{
                     start:'ai:flex-start!@bs-sm',   
                     end:'ai:flex-end!@bs-sm',
                     center:'ai:center!@bs-sm',
                     baseline:'ai:baseline!@bs-sm',
                     stretch:'ai:stretch!@bs-sm'
                 },
                 md:{
                     start:'ai:flex-start!@bs-md',   
                     end:'ai:flex-end!@bs-md',
                     center:'ai:center!@bs-md',
                     baseline:'ai:baseline!@bs-md',
                     stretch:'ai:stretch!@bs-md'                    
                 },
                 lg:{
                     start:'ai:flex-start!@bs-lg',   
                     end:'ai:flex-end!@bs-lg',
                     center:'ai:center!@bs-lg',
                     baseline:'ai:baseline!@bs-lg',
                     stretch:'ai:stretch!@bs-lg'
                 },
                 xl:{
                     start:'ai:flex-start!@bs-xl',   
                     end:'ai:flex-end!@bs-xl',
                     center:'ai:center!@bs-xl',
                     baseline:'ai:baseline!@bs-xl',
                     stretch:'ai:stretch!@bs-xl'
                 },
                 xxl:{
                     start:'ai:flex-start!@bs-xxl',   
                     end:'ai:flex-end!@bs-xxl',
                     center:'ai:center!@bs-xxl',
                     baseline:'ai:baseline!@bs-xxl',
                     stretch:'ai:stretch!@bs-xxl'
                 },
                 
            },
            //align-content-start
            content:{
                 start:'ac:flex-start!',   //class:align-content-start
                 end:'ac:flex-end!',
                 center:'ac:center!',
                 between:'ac:space-between!',
                 stretch:'ac:stretch!',
                 
                 //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.

                 sm:{
                     start:'ai:flex-start!@bs-sm',   
                     end:'ai:flex-end!@bs-sm',
                     center:'ai:center!@bs-sm',
                     between:'ac:space-between!@bs-sm',
                     stretch:'ac:stretch!@bs-sm',
                 },
                 md:{
                     start:'ai:flex-start!@bs-md',   
                     end:'ai:flex-end!@bs-md',
                     center:'ai:center!@bs-md',
                     between:'ac:space-between!@bs-md',
                     stretch:'ac:stretch!@bs-md',                 
                 },
                 lg:{
                     start:'ai:flex-start!@bs-lg',   
                     end:'ai:flex-end!@bs-lg',
                     center:'ai:center!@bs-lg',
                     between:'ac:space-between!@bs-lg',
                     stretch:'ac:stretch!@bs-lg',
                 },
                 xl:{
                     start:'ai:flex-start!@bs-xl',   
                     end:'ai:flex-end!@bs-xl',
                     center:'ai:center!@bs-xl',
                     between:'ac:space-between!@bs-xl',
                     stretch:'ac:stretch!@bs-xl',
                 },
                 xxl:{
                     start:'ai:flex-start!@bs-xxl',   
                     end:'ai:flex-end!@bs-xxl',
                     center:'ai:center!@bs-xxl',
                     between:'ac:space-between!@bs-xxl',
                     stretch:'ac:stretch!@bs-xxl',
                 },                
            },
            self:{
                 start:'as:flex-start!',    //class:align-self-start
                 end:'as:flex-end!',
                 center:'as:center!',
                 baseline:'as:baseline!',
                 stretch:'as:stretch!',  
                 
                 sm:{
                     start:'as:flex-start!@bs-sm',   
                     end:'as:flex-end!@bs-sm',
                     center:'as:center!@bs-sm',
                     baseline:'as:baseline!@bs-sm',
                     stretch:'as:stretch!@bs-sm'
                 },
                 md:{
                     start:'as:flex-start!@bs-md',   
                     end:'as:flex-end!@bs-md',
                     center:'as:center!@bs-md',
                     baseline:'as:baseline!@bs-md',
                     stretch:'as:stretch!@bs-md'                    
                 },
                 lg:{
                     start:'as:flex-start!@bs-lg',   
                     end:'as:flex-end!@bs-lg',
                     center:'as:center!@bs-lg',
                     baseline:'as:baseline!@bs-lg',
                     stretch:'as:stretch!@bs-lg'
                 },
                 xl:{
                     start:'as:flex-start!@bs-xl',   
                     end:'as:flex-end!@bs-xl',
                     center:'as:center!@bs-xl',
                     baseline:'as:baseline!@bs-xl',
                     stretch:'as:stretch!@bs-xl'
                 },
                 xxl:{
                     start:'as:flex-start!@bs-xxl',   
                     end:'as:flex-end!@bs-xxl',
                     center:'as:center!@bs-xxl',
                     baseline:'as:baseline!@bs-xxl',
                     stretch:'as:stretch!@bs-xxl'
                 },                 
            },
            
            
            baseline:'vertical-align:baseline!',
            top:'vertical-align:top!',
            middle:'vertical-align:middle!',
            bottom:'vertical-align:bottom!',
            text:{
                top:'vertical-align:text-top!',
                bottom:'vertical-align:text-bottom!'
            },
            
        },  //class:align類別 結束
        justify:{
              content:{
                 start:'jc:flex-start!',    //class:justify-content-start
                 end:'jc:flex-end!',
                 center:'jc:center!',                  
                 around:'justify-content:space-around!',
                 between:'justify-content:space-between!',
                 evenly:'justify-content:space-evenly!',
                 //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
                 //.justify-content-sm-start
                 '2xs':{
                     start:'jc:flex-start!@bs-2xs',    //class:justify-content-2xs-start
                     end:'jc:flex-end!@bs-2xs',
                     center:'jc:center!@bs-2xs',                  
                     around:'justify-content:space-around!@bs-2xs',
                     between:'justify-content:space-between!@bs-2xs',
                     evenly:'justify-content:space-evenly!@bs-2xs'                     
                 },
                 xs:{
                     start:'jc:flex-start!@bs-xs',   
                     end:'jc:flex-end!@bs-xs',
                     center:'jc:center!@bs-xs',                  
                     around:'justify-content:space-around!@bs-xs',
                     between:'justify-content:space-between!@bs-xs',
                     evenly:'justify-content:space-evenly!@bs-xs' 
                 },
                 sm:{
                     start:'jc:flex-start!@bs-xs',   
                     end:'jc:flex-end!@bs-xs',
                     center:'jc:center!@bs-xs',                  
                     around:'justify-content:space-around!@bs-xs',
                     between:'justify-content:space-between!@bs-xs',
                     evenly:'justify-content:space-evenly!@bs-xs' 
                     
                 },
                 md:{
                     start:'jc:flex-start!@bs-md',   
                     end:'jc:flex-end!@bs-md',
                     center:'jc:center!@bs-md',                  
                     around:'justify-content:space-around!@bs-md',
                     between:'justify-content:space-between!@bs-md',
                     evenly:'justify-content:space-evenly!@bs-md' 
                     
                 },
                 lg:{
                     start:'jc:flex-start!@bs-lg',   
                     end:'jc:flex-end!@bs-lg',
                     center:'jc:center!@bs-lg',                  
                     around:'justify-content:space-around!@bs-lg',
                     between:'justify-content:space-between!@bs-lg',
                     evenly:'justify-content:space-evenly!@bs-lg' 
                     
                 },
                 xl:{
                     start:'jc:flex-start!@bs-xl',   
                     end:'jc:flex-end!@bs-xl',
                     center:'jc:center!@bs-xl',                  
                     around:'justify-content:space-around!@bs-xl',
                     between:'justify-content:space-between!@bs-xl',
                     evenly:'justify-content:space-evenly!@bs-xl' 
                     
                 },
                 xxl:{
                     start:'jc:flex-start!@bs-xxl',   
                     end:'jc:flex-end!@bs-xxl',
                     center:'jc:center!@bs-xxl',                  
                     around:'justify-content:space-around!@bs-xxl',
                     between:'justify-content:space-between!@bs-xxl',
                     evenly:'justify-content:space-evenly!@bs-xxl' 
                     
                 },                 
              },
        },  //class:justify類別 結束
        w:{
            '25':'w:25%!',
            '50':'w:50%!',
            '75':'w:75%!',
            '100':'w:100%!',
            'auto':'w:auto!',

        },
        h:{
            '25':'h:25%!',
            '50':'h:50%!',
            '75':'h:75%!',
            '100':'h:100%!',
            'auto':'h:auto!',

        },        
        order:{
            '1':'order:1!',
            '2':'order:2!',
            '3':'order:3!',
            '4':'order:4!',
            '5':'order:5!',
            last:'order:6!',
            first:'order:-1!',
            //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
            //.order-sm-3
            sm:{
                '1':'order:1!@bs-sm',
                '2':'order:2!@bs-sm',
                '3':'order:3!@bs-sm',
                '4':'order:4!@bs-sm',
                '5':'order:5!@bs-sm',
                last:'order:6!@bs-sm',
                first:'order:-1!@bs-sm',                
            },
            md:{
                '1':'order:1!@bs-md',
                '2':'order:2!@bs-md',
                '3':'order:3!@bs-md',
                '4':'order:4!@bs-md',
                '5':'order:5!@bs-md',
                last:'order:6!@bs-md',
                first:'order:-1!@bs-md',                
            },
            lg:{
                '1':'order:1!@bs-lg',
                '2':'order:2!@bs-lg',
                '3':'order:3!@bs-lg',
                '4':'order:4!@bs-lg',
                '5':'order:5!@bs-lg',
                last:'order:6!@bs-lg',
                first:'order:-1!@bs-lg',                
            },
            xl:{
                '1':'order:1!@bs-xl',
                '2':'order:2!@bs-xl',
                '3':'order:3!@bs-xl',
                '4':'order:4!@bs-xl',
                '5':'order:5!@bs-xl',
                last:'order:6!@bs-xl',
                first:'order:-1!@bs-xl',                
            },
            xxl:{
                '1':'order:1!@bs-xxl',
                '2':'order:2!@bs-xxl',
                '3':'order:3!@bs-xxl',
                '4':'order:4!@bs-xxl',
                '5':'order:5!@bs-xxl',
                last:'order:6!@bs-xxl',
                first:'order:-1!@bs-xxl',                
            }
        },
        offset:{
            sm:{
                auto:'{ml:auto;}@bs-sm',
                "0":'{ml:0;}@bs-sm',
                "1":'{ml:8.33333333%;}@bs-sm',
                "2":'{ml:16.6667%;}@bs-sm',
                "3":'{ml:25%;}@bs-sm',
                "4":'{ml:33.33333333%}@bs-sm',
                "5":'{ml:41.666667%;}@bs-sm',
                "6":'{ml:50%;}@bs-sm',
                "7":'{ml:58.3333%;}@bs-sm',
                "8":'{ml:66.66666667%;}@bs-sm',
                "9":'{ml:75%;}@bs-sm',
                "10":'{ml:83.3333%;}@bs-sm',
                "11":'{ml:91.6667;}@bs-sm',
                "12":'{ml:100%;}@bs-sm'                
            },            
            md:{
                auto:'{ml:auto;}@bs-md',
                "0":'{ml:0;}@bs-md',
                "1":'{ml:8.33333333%;}@bs-md',
                "2":'{ml:16.6667%;}@bs-md',
                "3":'{ml:25%;}@bs-md',
                "4":'{ml:33.33333333%}@bs-md',
                "5":'{ml:41.666667%;}@bs-md',
                "6":'{ml:50%;}@bs-md',
                "7":'{ml:58.3333%;}@bs-md',
                "8":'{ml:66.66666667%;}@bs-md',
                "9":'{ml:75%;}@bs-md',
                "10":'{ml:83.3333%;}@bs-md',
                "11":'{ml:91.6667;}@bs-md',
                "12":'{ml:100%;}@bs-md'                
            },
            lg:{
                auto:'{ml:auto;}@bs-lg',
                "0":'{ml:0;}@bs-lg',
                "1":'{ml:8.33333333%;}@bs-lg',
                "2":'{ml:16.6667%;}@bs-lg',
                "3":'{ml:25%;}@bs-lg',
                "4":'{ml:33.33333333%}@bs-lg',
                "5":'{ml:41.666667%;}@bs-lg',
                "6":'{ml:50%;}@bs-lg',
                "7":'{ml:58.3333%;}@bs-lg',
                "8":'{ml:66.66666667%;}@bs-lg',
                "9":'{ml:75%;}@bs-lg',
                "10":'{ml:83.3333%;}@bs-lg',
                "11":'{ml:91.6667;}@bs-lg',
                "12":'{ml:100%;}@bs-lg'                
            },            
            
        },  //class:offset類別 結束
        //2xs 480. xs 600 . sm 768. md 1024. lg 1280. xl 1440.
        ms:{
          auto:'ml:auto!',  

          '0':'ml:0!',
          '1':'ml:calc($(spacer)*0.25px)!',
          '2':'ml:calc($(spacer)*0.5px)!',
          '3':'ml:16!',
          '4':'ml:calc($(spacer)*1.5px)!',
          '5':'ml:calc($(spacer)*3px)!',
          
          '2xs-auto':'ml:auto!@bs-2xs',
          'xs-auto':'ml:auto!@bs-xs',
          'sm-auto':'ml:auto!@bs-sm',
          'md-auto':'ml:auto!@bs-md',          //ms-md-auto
          'lg-auto':'ml:auto!@bs-lg',
          'xl-auto':'ml:auto!@bs-xl',              
          
        },
        me:{
          auto:'mr:auto!',
          '0':'mr:0!',
          '1':'mr:calc($(spacer)*0.25px)!',
          '2':'mr:calc($(spacer)*0.5px)!',
          '20':'mr:0.5rem!',
          '3':'mr:16!',
          '4':'mr:calc($(spacer)*1.5px)!',
          '5':'mr:calc($(spacer)*3px)!',          
         '2xs-auto':'mr:auto!@bs-2xs',
         'xs-auto':'mr:auto!@bs-xs',
         'sm-auto':'mr:auto!@bs-sm',
         'md-auto':'mr:auto!@bs-md',        //me-md-auto  
         'lg-auto':'mr:auto!@bs-lg',
         'xl-auto':'mr:auto!@bs-xl',           
        },
        container:{ //容器是 Bootstrap 的基本建構區塊，在給定的設備或是視區中包含、填充和對齊你的內容
                '':'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} max-w:540px@bs-sm max-w:720px@bs-md max-w:960px@bs-lg max-w:1140px@bs-xl max-w:1320px@bs-xxl',
                fluid1:'{$g-x:1.5rem;$g-y:0;w:100%;pr:calc($(g-x)*0.5);pl:calc($(g-x)*0.5);mr:auto;ml:auto;}',
                fluid:'{w:100%;pr:calc($(g-x)*0.75);pl:calc($(g-x)*0.75);mr:auto;ml:auto;}',
                xs:'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} ',      //不需要設定max-w
                sm:'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} max-w:540px@bs-sm max-w:720px@bs-md max-w:960px@bs-lg max-w:1140px@bs-xl max-w:1320px@bs-xxl',
                md:'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} max-w:720px@bs-md max-w:960px@bs-lg max-w:1140px@bs-xl max-w:1320px@bs-xxl',
                lg:'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} max-w:960px@bs-lg max-w:1140px@bs-xl max-w:1320px@bs-xxl',
                xl:'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} max-w:1140px@bs-xl max-w:1320px@bs-xxl',
                xxl:'{w:100%;pr:$(g-x,0.75rem);pl:$(g-x,0.75rem);mr:auto;ml:auto;} max-w:1320px@bs-xxl'
            //xs: 0,              //最小寬度為0    //用法 class="hide@bs-xs"
            //sm: 576,            //min-width:576 
            //md: 768,            //最小寬度為768
            //lg: 992,
            //xl: 1200,
            //xxl: 1400  
        },        
        btn: {
              '': '{display:inline-block;font:16;font-weight:400;text:center;text-decoration:none;p:6|12;b:none;r:4;line-height:1.5;cursor:pointer;user-select:none;} {transform:scale(0.9);}:active {opacity:0.65!;pointer-events:none!;}:disabled {opacity:0.65!;pointer-events:none!;}.disabled {rel;top:-1px;}>.badge',
              primary: '{color:white;bg:primary;} {color:white;bg:primary-focus;b:none;}:hover ',
              secondary: '{color:white;bg:secondary;} {color:white;bg:secondary-focus;b:none;}:hover ',
              success: '{color:white;bg:success;} {color:white;bg:success-focus;b:none;}:hover ',
              danger: '{color:white;bg:danger;} {color:white;bg:danger-focus;b:none;}:hover ',
              warning: '{color:black;bg:warning;} {color:black;bg:warning-focus;b:none;}:hover ',
              info: '{color:white;bg:info;} {color:white;bg:info-focus;b:none;}:hover ',
              light: '{color:black;bg:light;} {color:black;bg:light-focus;b:none;}:hover  ',
              dark: '{color:white;bg:dark;} {color:white;bg:dark-focus;b:none;}:hover ',
              link: '{color:#0d6efd;text-decoration:underline;} {color:#0d6efd;bg:light-focus;b:none;}:hover  ',
              accent: '{color:black;bg:accent;} {color:black;bg:accent-focus;b:none;}:hover ',
              error: '{color:white;bg:error;} {color:white;bg:error-focus;b:none;}:hover ',
              outline: {
                    '': 'bg:white ',
                    primary: '{color:primary;b:1|solid|primary!;} {color:white;bg:primary-focus;b:1|solid|primary;}:hover   ',
                    secondary: '{color:secondary;b:1|solid|secondary!;} {color:white;bg:secondary-focus;b:1|solid|secondary;}:hover   ',
                    success: '{color:success;b:1|solid|success!;} {color:white;bg:success-focus;b:1|solid|success;}:hover   ',
                    danger: '{color:danger;b:1|solid|danger!;} {color:white;bg:danger-focus;b:1|solid|danger;}:hover   ',
                    warning: '{color:warning;b:1|solid|warning!;} {color:black;bg:warning-focus;b:1|solid|warning;}:hover   ',
                    info: '{;color:info;b:1|solid|info!;} {color:white;bg:info-focus;b:1|solid|info;}:hover   ',
                    light: '{color:#f8f9fa;b:1|solid|light!;} {color:black;bg:light-focus;b:1|solid|light;}:hover   ',
                    dark: '{color:dark;b:1|solid|dark!;} {color:white;bg:dark-focus;b:1|solid|dark;}:hover   ',
                    link: '{color:#0d6efd;b:1|solid|primary!;} {color:#0d6efd;bg:primary-focus;b:1|solid|primary;}:hover   ',
                    accent: '{color:accent;b:1|solid|accent!;} {color:white;bg:accent-focus;b:1|solid|accent;}:hover   ',
                    error: '{color:error;b:1|solid|error!;} {color:white;bg:error-focus;b:1|solid|error;}:hover   ',
                        
              },
              sm:'{p:0.25rem|0.5rem!;f:0.87rem!;r:0.2rem;}',   //!important 的權重非常高，可以蓋過所有的權重
              lg:'{p:0.5rem|1rem!;f:1.25rem!;r:0.3rem;}',
              disabled:'{bg:#e9ecef!;color:gray!;b:1|solid|#ced4da!;}',
              test:{
                  '':' color:white bg:primary',
                  color1:'{color:white;bg:primary}@<md {color:white;bg:secondary;}@>=md',
                  color2:''
              },
              close:{
                  '':'{box-sizing:content-box;w:1em;h:1em;p:0.25em|0.25em;color:#000;background:transparent|url("hitx.svg")|center/1em|auto|no-repeat;;border:0;r:0.25rem;opacity:0.5;} {pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25;}.disabled {pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25;}:disabled',
                  white:'filter:invert(1)|grayscale(100%)|brightness(200%);',
              },
              group:{
                  '':'{rel;display:inline-flex;vertical-align:middle;} {rel;flex:1|1|auto;}>.btn {border-top-right-radius:0;border-botto-right-radius:0;}>.btn-group:not(:last-child)>.btn {border-top-right-radius:0;border-bottom-right-radius:0;}>.btn:not(:last-child):not(.dropdown-toggle) {border-top-left-radius:0;border-bottom-left-radius:0;}>.btn-group:not(:first-child)>.btn {border-top-left-radius:0;border-bottom-left-radius:0;}>.btn:nth-child(n+3) {border-top-left-radius:0;border-bottom-left-radius:0;}>:not(.btn-check)+.btn {ml:-1px;}>.btn-group:not(:first-child) {ml:-1px;}>.btn:not(:first-child) {z-index:1;}>.btn-check:checked+.btn',
                  vertical:'{rel;display:inline-flex;vertical-align:middle;} {flex-direction:column;ai:flex-start;jc:center;} {rel;flex:1|1|auto;}>.btn {w:100%}>.btn {w:100%}>.btn-group {border-bottom-right-radius:0;border-bottom-left-radius:0;}>.btn-group:not(:last-child)>.btn {border-bottom-right-radius:0;border-bottom-left-radius:0;}>.btn:not(:last-child):not(.dropdown-toggle) {border-top-left-radius:0;border-top-right-radius:0;}>.btn-group:not(:first-child)>.btn {border-top-left-radius:0;border-top-right-radius:0;}>.btn~.btn',
                  lg:'{p:.5rem|1rem;font-size:1.25rem;r:.3rem;}>.btn  {p:.5rem|1rem;font-size:1.25rem;r:.3rem;}>.btn-lg',
                  sm:'{p:.25rem|.5rem;f:.875rem;r:.2rem;}>.btn {p:.25rem|.5rem;f:.875rem;r:.2rem;}>.btn-sm',
              },
              check:'{abs;clip:rect(0,0,0,0);pointer-events:none;}',
              toolbar:{
                    '':'{flex;flex-wrap:wrap;jc:flex-start;} {w:auto;}>.input-group',
                  
              },
              
        },  // class:btn類別 結束

     
        
        form:{
              label:'d:inline-block mb:8 ',
              text:'mt:0.25rem f:0.875rem color:#6c757d ',
              control:{
                    '':'{d:block;f:16;font-weight:400;r:4;p:0.375rem|0.75rem;line-height:1.5;color:#212529;bg:#fff;border:1|solid|primary;appearance:none;w:100%;} {outline-offset:2px;outline:solid|primary}:focus {bg:#e9ecef;opacity:1;border:1px|solid|#ced4da;}:disabled {bg:#e9ecef;opacity:1;border:1px|solid|#ced4da;}:read-only ',
                    'plaintext':'d:block w:100% p:0.375rem|0 mb:0 line-height:1.5 color:#212529 bg:transparent b:solid|transparent     border-width:1px|0',
                    'lg':'f:1.25rem! r:0.3rem! p:0.5rem|1rem! min-h:calc(1.5em+1rem+2px)! ',
                    'sm':'f:0.875rem! r:0.2rem! p:0.25rem|0.5rem! min-h:calc(1.5em+0.5rem+2px)!',  
              },
              select:{
                    '':'{display:block;w:100%;h:38;f:16px;font-weight:400;line-height:1.5;r:4px;p:0.375rem|2.25rem|0.375rem|0.75rem;border:1|solid|primary;user-select:none;} {outline-offset:2px;outline:solid|primary}:focus  {bg:#e9ecef!;color:gray!;b:1|solid|#ced4da!;opacity:0.65!;pointer-events:none!;}:disabled',
                    'primary':'border:1|solid|primary! {outline-offset:2px;outline:solid|primary!}:focus',
                    'secondary':'border:1|solid|secondary! {outline-offset:2px;outline:solid|secondary!}:focus',
                    lg:'pt:0.5rem! pb:0.5rem! pl:1rem! f:1.25rem!',
                    sm:'pt:0.25rem! pb:0.25rem! pl:0.5rem! f:0.875rem!'
              },
              checkbox:{
                     '':"{w:24;h:0;rel;display:inline-block;cursor:pointer;user-select:none;appearance:none;} {content:'';abs;top:-20;left:0;display:inline-block;w:24;h:24;b:1px|solid|primary;r:4;user-select:none;}:before {bg:primary;}:checked:before {content:'';abs;top:-16;left:9;w:6;h:12;br:3|solid|white;bb:3|solid|white;transform:rotate(40deg);@name:checkbox1;@duration:0.2s;@iteration-count:1;}:checked:after   {opacity:0.65!;pointer-events:none!;}:disabled {color:gray-60;}:disabled+label",
                     'primary':'{b:1px|solid|primary!;}:before {bg:primary!;}:checked:before ', 
                     'secondary':'{b:1px|solid|secondary!;}:before {bg:secondary!;}:checked:before ',
                     disabled:'  {bg:#e9ecef!;color:gray!;b:1|solid|#ced4da!;}:before {bg:#e9ecef!;}:checked:before'
              },
              check:{
                      '':'{display:block;min-h:1.5rem;pl:1.5em;mb:0.125rem;}',
                      label:'',
                      inline:'display:inline-block! mr:1rem!', 
                  
              },
              radio:{
                      '':"w:22 h:22 {rel;display:inline-block;cursor:pointer;user-select:none;appearance:none;} {content:'';abs;top:3;left:0;b:2|solid|primary;r:100%;w:22;h:22;}:before {content:'';abs;top:7;left:4;r:100%;w:14;h:14;}:after {b:2|solid|primary;}:checked:before {bg:primary;@name:zoom;@duration:0.2s;@iteration-count:1;}:checked:after    {opacity:0.65!;pointer-events:none!;}:disabled {color:gray-60;}:disabled+label",
                      'primary':'{b:2|solid|primary!;}:before {b:2|solid|primary!;}:checked:before {bg:primary!;}:checked:after ', 
                      'secondary':'{b:2|solid|secondary!;}:before {b:2|solid|secondary!;}:checked:before {bg:secondary!;}:checked:after ', 
              },
              range:{
                      '':"rel r:15 h:25 w:100% p:0 bg:transparent overflow:hidden outline:none appearance:none {content:'';abs;top:10;left:0;h:6;w:full;r:15;bg:gray-80;z-index:-1;}:before {w:20;h:20;bg:primary;b:3|solid|primary;r:50%;z-index:2;cursor:pointer;appearance:none;}::-webkit-slider-thumb {bg:white;}:focus::-webkit-slider-thumb {bg:white;}:active::-webkit-slider-thumb   {opacity:0.65!;pointer-events:none!;}:disabled {color:gray-80;}:disabled+label  ",
                      'primary':'{b:2|solid|primary!;}:before {b:2|solid|primary!;}:checked:before {bg:primary!;}:checked:after ', 
                      'secondary':'{b:2|solid|secondary!;}:before {b:2|solid|secondary!;}:checked:before {bg:secondary!;}:checked:after ', 
              }, 
              
              floating:"rel {abs;top:0;left:0;h:100%;p:1rem|0.75rem;b:1px|solid|transparent;pointer-events:none;}>label {p:1rem|0.75rem;h:calc(3.5rem+2px);line-height:1.25!;}>.form-control {pt:26!;pb:10!;}>.form-control:not(:placeholder-shown) {color:transparent;}>.form-control:placeholder-shown::placeholder {color:gray-60;transform:translate(0.15rem,-0.5rem);transition:all|0.1s;}>.form-control:not(:placeholder-shown)+label  {color:gray-60;transform:translate(0.15rem,-0.5rem);transition:all|0.1s;}>.form-control:focus+label {p:1rem|0.75rem;h:calc(3.5rem+2px);line-height:1.25!;}>.form-select {pt:1.625rem;pb:0.625rem;}>.form-select:not(:placeholder-shown) {color:gray-60;transform:translate(0.15rem,-0.5rem);transition:all|0.1s;}>.form-select:not(:placeholder-shown)+label  {color:gray-60;transform:translate(0.15rem,-0.5rem);transition:all|0.1s;}>.form-select:focus+label"
        },
        switch:{
             '':"rel appearance:none user-select:none cursor:pointer {content:'';display:block;rel;w:48;h:24;r:24;b:1|solid|gray;cursor:pointer;}:before {content:'';abs;top:2;left:1;w:20;h:20;r:100%;bg:gray;}:after {bg:primary;left:calc(100%-21px);transition:left|0.2s|ease-in-out;}:checked:after   {opacity:0.65!;pointer-events:none!;}:disabled {color:gray-60;}:disabled+label  ",
                  
                  
              },
        input:{
             '':'',
             group:{
                 '':'{flex;flex-wrap:wrap;ai:stretch;w:100%;} {rel;flex:1|1|auto;w:1%;min-w:0;}>.form-control {rel;flex:1|1|auto;w:1%;min-w:0;}>.form-select',   
                 sm:'{p:0.25rem|0.5rem!;f:0.875rem!;rl:0.2rem;}>*',
                 lg:'{p:0.5rem|1rem!;f:1.25rem!;rl:0.3rem;}>* ',  
                 text:'{display:flex;ai:center;p:0.375rem|0.75rem;f:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;bg:#e9ecef;b:1px|solid|#ced4da;r:0.25rem;}',
             },
             
            
        },
        file:{
              input:{
                  '':"rel h:38 w:100% b:1|solid|primary bg:#ffffff r:4 p:4|8 cursor:pointer appearance:none  {content:'';abs;top:0;left:0;w:88;h:38;text:center;b:1|solid|primary;bg:primary;cursor:pointe;}:before   {content:'選擇檔案';abs;top:6;left:10;color:white;}:after {bg:#e9ecef;color:gray-80;b:1|solid|#ced4da;cursor:not-allowed;}:disabled",
                  'primary':"border:1|solid|primary!  {b:1|solid|primary!;bg:primary!;}:before {color:white!;}:after ",
                  'secondary':"border:1|solid|secondary!  {b:1|solid|secondary!;bg:secondary!;}:before {color:white!;}:after ",
                  'error':"border:1|solid|error! {b:1|solid|error!;bg:error!;}:before {color:white!;}:after ",
                  'sm':'h:31! p:2|8!  r:0.2rem! {w:88!;h:31!;}:before {top:4!;left:10!;}:after',
                  'lg':'h:48! p:8|16! r:0.3rem! {w:96!;h:48!;}:before {top:11!;left:10!;}:after',
                  disabled:' {bg:gray-80!;b:1|solid|#ced4da!;pointer-events:none!;}:before {color:gray!;}:after ',
                  
              },    //file-input file-input-primary
              
              
        },
        accordion:{
                item:'{bg:#fff;b:1px|solid|rgba(0,0,0,.125);} {border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;}:first-of-type {border-bottom-right-radius:calc(0.25rem-1px);border-bottom-left-radius:calc(0.25rem-1px);}:last-of-type border-top:0:not(:first-of-type)',
                header:'mb:0',
                button:'{rel;flex;ai:center;w:100%;p:1rem|1.25rem;f:1rem;color:#212529;text-align:left;bg:#fff;border:0;r:0;overflow-anchor:none;} {z-index:3;border-color:#86b7fe;outline:0;box-shadow:0|0|0|0.25rem|rgba(13,110,253,.25);}:focus z-index:2:hover  {color:#0c63e4;bg:#e7f1ff;box-shadow:inset|0|-1px|0|rgba(0,0,0,.125);}:not(.collapsed) {content:"";flex-shrink:0;w:1.25rem;h:1.25rem;ml:auto;background-image:url("arrow1.svg");background-repeat:no-repeat;background-size:1.25rem;transition:transform|.2s|ease-in-out;}::after {background-image:url("arrow1.svg")!;transform:rotate(-180deg)!;}:not(.collapsed)::after {border-bottom-right-radius:calc(0.25rem-1px);border-bottom-left-radius:calc(0.25rem-1px);}.collapsed',
                body:'p:1rem|1.25rem',
                flush:'{border-top:0;}_.accordion-item:first-child {border-right:0;border-left:0;border-radius:0!;}_.accordion-item {border-width:0;}.accordion-collapse',
        },
       collapse:'{transform:none;}.show {display:none;}:not(.show)',
       collapse2:'{transform:none;}.show {display:none;transform:translateY(-100%);transition:transform|0.3s|ease-in-out|0s;}:not(.show)', 
    
        //    transition:transform|0.3s|ease-in-out|0s;
        
        alert:{
            '':'{rel;p:1rem|1rem;mb:1rem;b:1px|solid|transparent;r:0.25rem;}',
            primary:'{color:#084298;bg:#cfe2ff;border-color:#b6d4fe!;} {color:#06357a;}>.alert-link',
            secondary:'{color:#41464b;bg:#e2e3e5;border-color:#d3d6d8!;} {color:#34383c;}>.alert-link',
            success:'{color:#0f5132;bg:#d1e7dd;border-color:#badbcc!;} {color:#0c4128;}>.alert-link',    
            danger:'{color:#842029;bg:#f8d7da;border-color:#f5c2c7!;} {color:#6a1a21;}>.alert-link',
            warning:'{color:#664d03;bg:#fff3cd;border-color:#ffecb5!;} {color:#523e02;}>.alert-link',
            info:'{color:#055160;bg:#cff4fc;border-color:#b6effb!;} {color:#04414d;}>.alert-link',
            light:'{color:#636464;bg:#fefefe;border-color:#fdfdfe!;} {color:#4f5050;}>.alert-link',    
            dark:'{color:#141619;bg:#d3d3d4;border-color:#bcbebf!;} {color:#101214;}>.alert-link',
            dismissible:'pr:3rem {abs;top:0;right:0;z-index:2;p:1.25rem|1rem;}>.btn-close',
            link:'font-weight:700',
            heading:'color:inherit',
        },
        badge:'{display:inline-block;p:0.35em|0.65em;f:0.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;} ',
        breadcrumb:{
                '':'{flex;flex-wrap:wrap;p:0|0;mb:1rem;list-style:none;}',
        item:'{pl:0.5rem}+.breadcrumb-item  color:#6c757d:active {float:left;pr:0.5rem;color:#6c757d;content:$(bs-breadcrumb-divider,"/");}+.breadcrumb-item::before', 
        },
        
 
 
        img:{
           fluid:'{max-w:100%;h:auto;}', 
           thumbnail:'{p:0.25rem;bg:#fff;b:1px|solid|#dee2e6;r:0.25rem;max-w:100%;h:auto;}',
        },
        figure:{
             '':'{display:inline-block;m:0|0|1rem;}',
             img:'{mb:0.5rem;line-height:1;}',
             caption:'{f:.875em;color:#6c757d;}',
        },
        carousel:{  //輪播
               '':'rel',
               inner:'{rel;w:100%;overflow:hidden;} {display:block;clear:both;content:"";}::after',
               item:{
                   '':'{rel;display:none;float:left;w:100%;mr:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform|.6s|ease-in-out;} {display:block;}.active',
                   prev:'transform:translateX(-100%);',
                   next:'transform:translateX(100%);',
                   start:'{z-index:1;opacity:1;}',      //0.0 （完全透明）到 1.0（完全不透明）。z-index 數字越大其物件將越上層
                   end:'{z-index:0;opacity:0;}',
                   
               },
               control:{
                   '':'',
                   next:{
                       '':'right:0 {abs;top:0;bottom:0;z-index:1;display:flex;ai:center;jc:center;w:15%;p:0;color:#fff;text-align:center;background:0|0;border:0;opacity:.5;transition:opacity|.15s|ease;}',
                       icon:'{display:inline-block;w:2rem;h:2rem;background-image:url("carousel1.svg");background-repeat:no-repeat;background-position:50%;background-size:100%|100%;}',
                   },
                   prev:{
                       '':'left:0 {abs;top:0;bottom:0;z-index:1;display:flex;ai:center;jc:center;w:15%;p:0;color:#fff;text-align:center;background:0|0;border:0;opacity:.5;transition:opacity|.15s|ease;}',
                       icon:'{display:inline-block;w:2rem;h:2rem;background-image:url("carousel2.svg");background-repeat:no-repeat;background-position:50%;background-size:100%|100%;}',
                   },
                   
                   
               },
               indicators:'{opacity:1}_.active {abs;right:0;bottom:0;left:0;z-index:2;display:flex;jc:center;p:0;mr:15%;mb:1rem;ml:15%;list-style:none;} {box-sizing:content-box;flex:0|1|auto;w:30px;h:3px;p:0;mr:3px;ml:3px;text-indent:-999px;cursor:pointer;bg:#fff;background-clip:padding-box;border:0;border-top:10px|solid|transparent;border-bottom:10px|solid|transparent;opacity:.5;transition:opacity|.6s|ease;}_[data-bs-target] ',
               caption:'{abs;right:15%;bottom:1.25rem;left:15%;pt:1.25rem;pb:1.25rem;color:#fff;text-align:center;}',
               
        },   
        spinner:{//讀取圖示
              '':'',
              border:{
                  '':'{display:inline-block;w:2rem;h:2rem;vertical-align:-0.125em;border:0.25em|solid|currentColor;border-right-color:transparent;r:50%;-webkit-animation:.75s|linear|infinite|spinner-border;animation:.75s|linear|infinite|spinner-border;} ',  
                  sm:'{w:1rem!;h:1rem!;border-width:0.2em!;}',
              },
              grow:{
                  '': '{display:inline-block;w:2rem;h:2rem;vertical-align:-0.125em;bg:currentColor;r:50%;opacity:0;-webkit-animation:.75s|linear|infinite|spinner-grow;animation:.75s|linear|infinite|spinner-grow;}',
                  sm:'{w:1rem!;h:1rem!;}',
              },
            
        },
        progress:{//進度條
              '':'{display:flex;h:1rem;overflow:hidden;f:.75rem;bg:#e9ecef;r:0.25rem;}',
              bar:{
                  '':'{display:flex;flex-direction:column;jc:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;bg:#0d6efd;transition:width|.6s|ease;}',
                  striped:'background-image:linear-gradient(45deg,rgba(255,255,255,.15)|25%,transparent|25%,transparent|50%,rgba(255,255,255,.15)|50%,rgba(255,255,255,.15)|75%,transparent|75%,transparent) background-size:1rem|1rem', 
                  //progress-bar-striped 不要合併 CSS語法,會造成無法轉譯!!
                  animated:'{-webkit-animation:1s|linear|infinite|progress-bar-stripes;animation:1s|linear|infinite|progress-bar-stripes;}',
                  
              },
              
        },
        card:{
            '':'{rel;display:flex;flex-direction:column;min-w:0;word-wrap:break-word;bg:#fff;background-clip:border-box;b:1px|solid|rgba(0,0,0,.125);r:0.25rem;} {border-top:0;}>.card-header+.list-group {border-top:0;}>.list-group+.card-footer',
            header:{
                 '':'{p:0.5rem|1rem;mb:0;bg:rgba(0,0,0,.03);bb:1px|solid|rgba(0,0,0,.125);} {border-radius:calc(0.25rem-1px)|calc(0.25rem-1px)|0|0}:first-child',
                 tabs:'{mr:-0.5rem;mb:-0.5rem!;ml:-0.5rem;bb:0!;}',
                 pills:'{mr:-0.5rem;ml:-0.5rem;}',
            },
            body:'{flex:1|1|auto;p:1rem|1rem;}',
            title:'mb:0.5rem',
            subtitle:'{mt:-0.25rem;mb:0;}',
            text:'{mb:0;}:last-child',
            img:{
               '':'w:100% {border-top-left-radius:calc(0.25rem-1px);border-top-right-radius:calc(0.25rem-1px);}', 
               top:'w:100% {border-top-left-radius:calc(0.25rem-1px);border-top-right-radius:calc(0.25rem-1px);}', 
               bottom:'w:100%',
               footer:'{p:0.5rem|1rem;bg:rgba(0,0,0,.03);bt:1px|solid|rgba(0,0,0,.125);} {r:0|0|calc(0.25rem-1px)|calc(0.25rem-1px);}:last-child',
               
            },
            link:'{ml:1rem;}+.card-link',
            footer:'{p:0.5rem|1rem;bg:rgba(0,0,0,.03);bt:1px|solid|rgba(0,0,0,.125);} {r:0|0|calc(0.25rem-1px)|calc(0.25rem-1px);}:last-child',
            group:'{display:flex;flex-flow:row|wrap;}@bs-sm {mb:0.75rem;}>.card {flex:1|0|0%;mb:0;}>.card@bs-sm {rtl:0;rbl:0;}>.card:not(:first-child)@bs-sm {rtr:0;rbr:0;}>.card:not(:last-child)@bs-sm ',
 

     
        },
        modal:{//互動視窗
            '':'{position:fixed;top:0;left:0;z-index:1055;display:none;w:100%;h:100%;overflow-x:hidden;overflow-y:auto;outline:0;} {bg:rgb(0,0,0);bg:rgba(0,0,0,0.4);}.show {transition:transform|.3s|ease-out;}.fade>.modal-dialog {transform:none;}.show>.modal-dialog',  //刪除transform:translate(0,-50px);
            '??':'{position:fixed;top:0;left:0;z-index:1055;display:none;w:100%;h:100%;overflow-x:hidden;overflow-y:auto;outline:0;} {bg:rgb(0,0,0);bg:rgba(0,0,0,0.4);}.show {transition:transform|.3s|ease-out;transform:translate(0,-50px);}.fade>.modal-dialog {transform:none;}.show>.modal-dialog',
            dialog:{
                '':'{max-w:500px;m:1.75rem|auto;}@bs-sm {rel;w:auto;m:0.5rem;pointer-events:none;}',
                scrollable:'h:calc(100%-1rem) {max-h:100%;overflow:hidden;}_.modal-content {overflow-y:auto;}_.modal-body',
                centered:' {display:flex;ai:center;min-h:calc(100%-1rem);}',
            },
            
            content:'{rel;display:flex;flex-direction:column;w:100%;pointer-events:auto;bg:#fff;background-clip:padding-box;b:1px|solid|rgba(0,0,0,.2);r:0.3rem;outline:0;}',
            header:'{display:flex;flex-shrink:0;ai:center;jc:space-between;p:1rem|1rem;bb:1px|solid|#dee2e6;border-top-left-radius:calc(0.3rem-1px);border-top-right-radius:calc(0.3rem-1px);}',
            body:'{rel;flex:1|1|auto;p:1rem;}',
            footer:'{display:flex;flex-wrap:wrap;flex-shrink:0;ai:center;jc:flex-end;p:0.75rem;bt:1px|solid|#dee2e6;border-bottom-right-radius:calc(0.3rem-1px);border-bottom-left-radius:calc(0.3rem-1px);} {m:0.25rem;}>*',
            title:'{mb:0;line-height:1.5;}',
            static:'{transform:scale(1.02)!;}>.modal-dialog',
            sm:'{max-w:300px!;}@bs-sm',
            lg:'{max-w:800px!;}@bs-lg',
            xl:'{max-w:800px!;}@ms-lg  {max-w:1140px!;}@bs-xl',
            fullscreen:{
                    '':'{w:100vw!;max-w:none!;h:100%!;m:0!;} {h:100%;border:0;r:0;}_.modal-content {border-radius:0;}_.modal-header {overflow-y:auto;}_.modal-body {border-radius:0;}_.modal-footer',
                    
                    
                    
            },
            
        },
        popover:{//彈出提示框
             '':'{abs;top:0;left:0;z-index:1070;display:block;max-w:276px;font-family:$(bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;bg:#fff;background-clip:padding-box;b:1px|solid|rgba(0,0,0,.2);r:0.3rem;} {abs;display:block;w:1rem;h:0.5rem;}>.popover-arrow',

             arrow:'{abs;display:block;content:"";border-color:transparent;border-style:solid;}::before {abs;display:block;content:"";border-color:transparent;border-style:solid;}::after ', 
             header:' {p:0.5rem|1rem;mb:0;f:1rem;bg:#f0f0f0;bb:1px|solid|rgba(0,0,0,.2);border-top-left-radius:calc(0.3rem-1px);border-top-right-radius:calc(0.3rem-1px);}     ',
             body:'{p:1rem|1rem;color:#212529;}',
             
             
        },
        tooltip:{//工具提示框 (Tooltips)
             '':'{abs;top:0;left:0;z-index:1070;display:block;max-w:276px;font-family:$(bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;bg:#fff;background-clip:padding-box;b:1px|solid|rgba(0,0,0,.2);r:0.3rem;} {abs;display:block;w:1rem;h:0.5rem;}>.popover-arrow',

             arrow:'{abs;display:block;content:"";border-color:transparent;border-style:solid;}::before {abs;display:block;content:"";border-color:transparent;border-style:solid;}::after ', 
             header:' {p:0.5rem|1rem;mb:0;f:1rem;bg:#f0f0f0;bb:1px|solid|rgba(0,0,0,.2);border-top-left-radius:calc(0.3rem-1px);border-top-right-radius:calc(0.3rem-1px);}     ',
             body:'{p:1rem|1rem;color:#212529;}',
             
             
        },
        
        dropdown2:{
            '':'',
            toggle:'white-space:nowrap {display:inline-block;ml:0.255em;vertical-align:0.255em;content:"";bt:0.3em|solid;br:0.3em|solid|transparent;bb:0;bl:0.3em|solid|transparent;}::after',
            menu2:'bg:red',
            menu:'{abs;z-index:1000;display:none;min-w:10rem;p:0.5rem|0;m:0;f:1rem;color:#212529;inset:0px|auto|auto|0px;transform:translate(0px,40px);text-align:left;list-style:none;bg:#fff;background-clip:padding-box;b:1px|solid|rgba(0,0,0,.15);r:0.25rem;}',
            item:'{display:block;w:100%;p:0.25rem|1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;bg:transparent;border:0;}',
        },
        dropdown:{
               '':'{rel} ', 
               toggle:{
                    '':'white-space:nowrap {display:inline-block;ml:0.255em;vertical-align:0.255em;content:"";bt:0.3em|solid;br:0.3em|solid|transparent;bb:0;bl:0.3em|solid|transparent;}::after ',
                    split:'{pr:0.5625rem;pl: 0.5625rem;}',
               },
               menu:{
                   '':'{abs;z-index:1000;display:none;min-w:10rem;p:0.5rem|0;m:0;f:1rem;color:#212529;text-align:left;list-style:none;bg:#fff;background-clip:padding-box;border:1px|solid|rgba(0,0,0,.15);r:0.25rem;} {display:block;}.show',
                   dark:'{color:#dee2e6;bg:#343a40!;border-color:rgba(0,0,0,.15)!;} {color:#dee2e6;}_.dropdown-item {color:#fff;bg:rgba(255,255,255,.15);}_.dropdown-item:hover {color:#fff;bg:#0d6efd;}_.dropdown-item.active {color:#fff;bg:#0d6efd;}_.dropdown-item:active {border-color:rgba(0,0,0,.15);}_.dropdown-divider ',
               },
               item:{
                    '':'{display:block;w:100%;p:0.25rem|1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;bg:transparent;border:0;} {color:#fff;text-decoration:none;bg:#0d6efd;}.active {color:#fff;text-decoration:none;bg:#0d6efd;}:active {color:#1e2125;bg:#e9ecef;}:hover',
                    text:'{display:block;p:0.25rem|1rem;color:#212529;}',
               },
               divider:'{h:1px;m:0.5rem|0;overflow:hidden;bt:1px|solid|rgba(0,0,0,.15);}',
               header:' {display:block;p:0.5rem|1rem;mb:0;f:.875rem;color:#6c757d;white-space:nowrap;}',
        },


        navbar:{
             '':'{rel;display:flex;flex-wrap:wrap;ai:center;jc:space-between;pt:0.5rem;pb:0.5rem;} {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container-fluid {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container-lg {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container-md {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container-sm {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container-xl {display:flex;flex-wrap:inherit;ai:center;jc:space-between;}>.container-xxl',
             brand:'{pt:0.3125rem;pb:0.3125rem;mr:1rem;f:1.25rem;text-decoration:none;white-space:nowrap;}',
             dark:'{color:#fff;}_.navbar-brand {color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1);}_.navbar-toggler {background-image:url("hamburg2.svg")}_.navbar-toggler-icon {color:rgba(255,255,255,.55);}_.navbar-nav_.nav-link {color:#fff;}_.navbar-nav_.nav-link.active',
             dark1:'{$bs-bg-opacity:1;bg:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;} {color:#fff;}_.navbar-brand {color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1);}_.navbar-toggler',
             light:'{background-image:url("hamburg.svg");}_.navbar-toggler-icon {color:rgba(0,0,0,.55);}_.navbar-text {color:rgba(0,0,0,.9);}_.navbar-brand {color:rgba(0,0,0,.9);}_.navbar-nav_.nav-link.active {color:rgba(0,0,0,.55);}_.navbar-nav_.nav-link {color:rgba(0,0,0,.55);}_.navbar-text',
             expand:{
                  '':'',
                  lg:'{flex-wrap:nowrap;jc:flex-start;}@bs-lg {display:flex!;flex-basis:auto;}_.navbar-collapse@bs-lg {flex-direction:row;}_.navbar-nav@bs-lg  {display:none;}_.navbar-toggler@bs-lg {pr:0.5rem;pl:0.5rem;}_.navbar-nav_.nav-link@bs-lg {overflow: visible;}_.navbar-nav-scroll@bs-lg {flex-direction:row;}_.navbar-nav@bs-lg',
             },
             collapse:'{flex-basis:100%;flex-grow:1;ai:center;}',
             toggler:{
                  '':'{p:0.25rem|0.75rem;f:1.25rem;line-height:1;bg:transparent;b:1px|solid|transparent;r:0.25rem;transition:box-shadow|.15s|ease-in-out;} {text-decoration:none;}:hover {text-decoration:none;outline:0;box-shadow:0|0|0|0.25rem;}:focus',
                  icon:'{display:inline-block;w:1.5em;h:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%;}',
             },
             text:'{pt:0.5rem;pb:0.5rem;}',
             nav:{
                '':'{display:flex;flex-direction:column;pl:0;mb:0;list-style:none;} {pr:0;pl:0;}_.nav-link', 
             scroll:'{max-h:$(bs-scroll-height,75vh);overflow-y:auto;}',
             },
        },


        nav:{
            '':'{display:flex;flex-wrap:wrap;pl:0;mb:0;list-style:none;}',
            link:'{display:block;p:0.5rem|1rem;color:#0d6efd;text-decoration:none;transition:color|.15s|ease-in-out,background-color|.15s|ease-in-out,border-color|.15s|ease-in-out;}  {color:#6c757d;pointer-events:none;cursor:default;}.disabled ',
            tabs:'bb:1px|solid|#dee2e6 {mb:-1px;background:0|0;b:1px|solid|transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;}_.nav-link {color:#6c757d;bg:transparent;border-color:transparent;}_.nav-link.disabled   {color:#495057;bg:#fff;border-color:#dee2e6|#dee2e6|#fff;}_.nav-link.active ',
            item:' {color:#495057;bg:#fff;b:#dee2e6|#dee2e6|#fff;}.show',
            pills:'  {background:0|0;b:0;r:0.25rem;}_.nav-link {color:#fff;bg:#0d6efd;}_.nav-link.active {color:#fff;bg:#0d6efd;}.show>.nav-link',
            fill:'{flex:1|1|auto;text-align:center;}_.nav-item {w:100%;}>.nav-item>.nav-link',
            justified:'{flex-basis:0;flex-grow:1;text-align:center;}>.nav-item {w:100%}>.nav-item>.nav-link {flex-basis:0;flex-grow:1;text-align:center;}>.nav-link',
            
          
 
        },
        list:{
            '':'',
            group:{
                '':'{display:flex;flex-direction:column;pl:0;mb:0;r:0.25rem;}',
                item:{
                    '':'{rel;display:block;p:0.5rem|1rem;color:#212529;text-decoration:none;bg:#fff;b:1px|solid|rgba(0,0,0,.125);} {border-top-left-radius:inherit;border-top-right-radius:inherit;}:first-child {border-top-width:0;}+.list-group-item {border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}:last-child {z-index:2!;color:#fff!;bg:#0d6efd!;b:#0d6efd!;}.active {color:#6c757d;pointer-events:none;bg:#fff;}.disabled {color:#6c757d;pointer-events:none;bg:#fff;}:disabled',
                    action:'{w:100%;color:#495057;text-align:inherit;} {z-index:1;color:#495057;text-decoration:none;bg:#f8f9fa;}:focus {z-index:1;color:#495057;text-decoration:none;bg:#f8f9fa;}:hover {color:#212529;bg:#e9ecef;}:active   ',
                    primary:'{color:#084298!;bg:#cfe2ff!;}',
                    secondary:'{color:#41464b!;bg:#e2e3e5!;}',
                    success:'{color:#0f5132!;bg:#d1e7dd!;}',
                    danger:'{color:#842029!;bg:#f8d7da!;}',
                    warning:'{color:#664d03!;bg:#fff3cd!;}',
                    info:'{color:#055160!;bg:#cff4fc!;}',
                    light:'{color:#636464!;bg:#fefefe!;}',
                    dark:'{color:#141619!;bg:#d3d3d4!;}',
                },
                flush:'r:0! {border-width:0|0|1px;}>.list-group-item',
                numbered:'{list-style-type:none;counter-reset:section;} {content:counters(section,".")|".";counter-increment:section;}>li::before',
                horizontal:{
                        '':'flex-direction:row!',
                        sm:'{flex-direction:row!;}@bs-sm',
                        md:'{flex-direction:row!;}@bs-md',
                        lg:'{flex-direction:row!;}@bs-lg',
                        xl:'{flex-direction:row!;}@bs-xl',
                        xxl:'{flex-direction:row!;}@bs-xxl',
                },
            },
        },
        tab:{
           content:'{display:none;}>.tab-pane', 
            
        },
        toast:{     //吐司 (Toasts)
             '':'{w:350px;max-w:100%;f:.875rem;pointer-events:auto;bg:rgba(255,255,255,.85);background-clip:padding-box;b:1px|solid|rgba(0,0,0,.1);box-shadow:0|0.5rem|1rem|rgba(0,0,0,.15);r:0.25rem;}',
             header:'{display:flex;ai:center;p:0.5rem|0.75rem;color:#6c757d;bg:rgba(255,255,255,.85);background-clip:padding-box;bb:1px|solid|rgba(0,0,0,.05);rtl:calc(0.25rem-1px);rtr:calc(0.25rem-1px);}',   
             body:'{p:0.75rem;word-wrap:break-word;}',
             container:'{w:-webkit-max-content;w:-moz-max-content;w:max-content;max-w:100%;pointer-events:none;} {mb:0.75rem;}>:not(:last-child)',
        },
 
  
   // progress:{
        //    '':'{display:flex;h:1rem;overflow:hidden;font-size:.75rem;bg:#e9ecef;r:0.25rem;}',
        //    bar:'{flex;flex-direction:column;jc:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;bg:#0d6efd;transition:width|.6s|ease;}',
        //}, 
  
        table:{
             '':'{$bs-table-bg:transparent;$bs-table-accent-bg:transparent;$bs-table-striped-color:#212529;$bs-table-striped-bg:rgba(0,0,0,0.05);w:100%;mb:1rem;color:#212529;vertical-align:top;border-color:#dee2e6;} {vertical-align:bottom;}>thead {border-color:inherit;border-style:solid;border-width:0;}_tr {p:0.5rem|0.5rem;bg:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset|0|0|0|9999px|var(--bs-table-accent-bg);}>*',
            
            
        },
        h1:'{mt:0;mb:0.5rem;font-weight:500;line-height:1.2;font-size:calc(1.375rem+1.5vw);}',
        h2:'{mt:0;mb:0.5rem;font-weight:500;line-height:1.2;font-size:calc(1.325rem+0.9vw);}',
        h3:'{mt:0;mb:0.5rem;font-weight:500;line-height:1.2;font-size:calc(1.3rem+0.6vw);}',
        h4:'{mt:0;mb:0.5rem;font-weight:500;line-height:1.2;font-size:calc(1.275rem+0.3vw);}',
        h5:'{mt:0;mb:0.5rem;font-weight:500;line-height:1.2;font-size:1.25rem;}',
        h6:'{mt:0;mb:0.5rem;font-weight:500;line-height:1.2;font-size:1;}',

        display:{
              '1':'{font-size:calc(1.625rem+4.5vw);font-weight:300;line-height:1.2;}',  
              '2':'{font-size:calc(1.575rem+3.9vw);font-weight:300;line-height:1.2;}',  
              '3':'{font-size:calc(1.525rem+3.3vw);font-weight:300;line-height:1.2;}',  
              '4':'{font-size:calc(1.475rem+2.7vw);font-weight:300;line-height:1.2;}',  
              '5':'{font-size:calc(1.425rem+2.1vw);font-weight:300;line-height:1.2;}',  
              '6':'{font-size:calc(1.375rem+1.5vw);font-weight:300;line-height:1.2;}',  
        }, 
        placeholder:{   //佔位符
                '':'{display:inline-block;min-h:1em;vertical-align:middle;cursor:wait;bg:currentColor;opacity:.5;}',
                glow:'{-webkit-animation:placeholder-glow|2s|ease-in-out|infinite;animation:placeholder-glow|2s|ease-in-out|infinite;}>.placeholder',
                
                xs:'min-h:0.6em!',
                sm:'min-h:0.8em!',
                lg:'min-h:1.2em!',
                wave:'{-webkit-mask-image:linear-gradient(130deg,#000|55%,rgba(0,0,0,0.8)|75%,#000|95%);-webkit-mask-size:200%|100%;mask-size:200%|100%;-webkit-animation:placeholder-wave|2s|linear|infinite;animation:placeholder-wave|2s|linear|infinite;}',
        },
        pagination:{    //分頁
                 '':'{display:flex;pl:0;list-style:none;}',
                 lg:'{p:0.75rem|1.5rem;f:1.25rem;}_.page-link {rtl:0.3rem;rbl:0.3rem;}>.page-item:first-child>.page-link {rtl: 0.3rem;rbr:0.3rem;}>.page-item:last-child>.page-link ',
                 sm:'{p:0.25rem|0.5rem;f:.875rem;}_.page-link {rtl: 0.2rem;rbl:0.2rem;}>.page-item:first-child>.page-link {rtr:0.2rem;rbr:0.2rem;}>.page-item:last-child>.page-link',
                 
                    
        }, 
        page:{
            '':'',
            item:'{rtl:0.25rem;rbl:0.25rem;}:first-child>.page-link {ml:-1px;}:not(:first-child)>.page-link {rtr:0.25rem;rbr:0.25rem;}:last-child>.page-link {color:#6c757d;pointer-events:none;bg:#fff;b:#dee2e6;}.disabled>.page-link {z-index:3;color:#fff;bg:#0d6efd;b:#0d6efd;}.active>.page-link',
            link:'{p:0.375rem|0.75rem} {rel;display:block;color:#0d6efd;text-decoration:none;bg:#fff;b:1px|solid|#dee2e6;transition:color|.15s|ease-in-out,background-color|.15s|ease-in-out,border-color|.15s|ease-in-out,box-shadow|.15s|ease-in-out;} {z-index:2;color:#0a58ca;bg:#e9ecef;b:#dee2e6;}:hover {z-index:3;color:#0a58ca;bg:#e9ecef;outline:0;box-shadow:0|0|0|0.25rem|rgba(13,110,253,.25);}:focus ',
        },
        rounded:{     //class:rounded 圓形的
              '':'border-radius:0.25rem!',
              'pill':'border-radius:50rem!',
              'circle':'border-radius:50%!',
              '0':'border-radius:0!',
              '1':'border-radius:0.2rem!',      
              '2':'border-radius:0.25rem!',      
              '3':'border-radius:0.3rem!',  
              start:'{border-bottom-left-radius:0.25rem!;border-top-left-radius:0.25rem!;}',  
        },
        offcanvas:{//畫布
                '':'{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-w:100%;visibility:hidden;bg:#fff;background-clip:padding-box;outline:0;transition:transform|.3s|ease-in-out;} {transform:none;}.show',
                start:'{top:0;left:0;w:400px;br:1px|solid|rgba(0,0,0,.2);transform:translateX(-100%);}',
                end:'{top:0;right:0;w:400px;bl:1px|solid|rgba(0,0,0,.2);transform:translateX(100%);}',
                top:'{top:0;right:0;left:0;h:30vh;max-h:100%;bb:1px|solid|rgba(0,0,0,.2);transform:translateY(-100%);}',
                bottom:'{right:0;left:0;h:30vh;max-h:100%;bt:1px|solid|rgba(0,0,0,.2);transform:translateY(100%);}',
                header:'{display:flex;ai:center;jc:space-between;p:1rem|1rem;} {p:0.5rem|0.5rem;mt:-0.5rem;mr:-0.5rem;mb:-0.5rem;}>.btn-close',
                body:'{flex-grow:1;p:1rem|1rem;overflow-y:auto;}',
                title:'{mb:0;line-height:1.5;}',
                        
                backdrop:'{position:fixed;top:0;left:0;z-index:1040;w:100vw;h:100vh;bg:#000;} {opacity:.5;}.show',
        },
        scrollspy:{
                '':'',
                example:'{rel;h:200px;mt:0.5rem;overflow:auto;}',
            
        },
 
 
 
 

        lead:'{font-size:1.25rem;font-weight:300;}',
 
        position:{
            relative:'position:relative!',
            absolute:'position:absolute!',
            
        },

        visually:{
                hidden:'{abs!;w:1px!;h:1px!;p:0!;m:-1!;overflow:hidden!;clip:rect(0,0,0,0)!;white-space:nowrap!;border:0!;} '
            
            
        },
        overflow:{
                auto:'overflow:auto!',
                hidden:'overflow:hidden!',
                visible:'overflow:visible!',
                scroll:'overflow:scroll!'
        },
        shadow:{    //陰影
            '':'box-shadow:0|0.5rem|1rem|rgba(0,0,0,0.15)!',
            none:'box-shadow:none!',
            sm:'box-shadow:0|.125rem|.25rem|rgba(0,0,0,.075)!',
            lg:'box-shadow:0|1rem|3rem|rgba(0,0,0,.175)!',
            
        },
       
        opacity:{       //透明度
            '0':'opacity:0!',
            '25':'opacity:0.25!',
            '50':'opacity:0.5!',
            '75':'opacity:0.75!',
            '100':'opacity:1!', 
            
        },
        translate:{
            middle:{
                '':'transform:translate(-50%,-50%)!',
                x:'transform:translateX(-50%)!',
                y:'transform:translateY(-50%)!'
            },
            
            
        },
        start:{
            '0':'left:0!',
            '50':'left:50%!',
            '100':'left:100%!',
        },
        top:{
            '0':'top:0!',
            '50':'top:50%!',
            '100':'top:100%!',
        },    
        end:{
            '0':'right:0!',
            '50':'right:50%!',
            '100':'right:100%!',
        },        
        bottom:{
            '0':'bottom:0%!',
            '50':'bottom:50%!',
            '100':'bottom:100%!',
        },
        
        is:{
            valid:"{border-color:#198754!;pr:calc(1.5em+0.75rem)!;background-image:url('danger2.svg');background-repeat:no-repeat;background-position:right|calc(0.375em+0.1875rem)|center;background-size:calc(0.75em+0.375rem)|calc(0.75em+0.375rem);} display:block~.valid-feedback",
            invalid:"{border-color:#dc3545!;pr:calc(1.5em+0.75rem)!;background-image:url('danger2.svg');background-repeat:no-repeat;background-position:right|calc(0.375em+0.1875rem)|center;background-size:calc(0.75em+0.375rem)|calc(0.75em+0.375rem);} display:block~.valid-feedback",
            invalid2:"{border-color:red;pr:calc(1.5em + 0.75rem)!;background-image:url('danger2.svg');background-repeat:no-repeat;background-position:right|calc(0.375em+0.1875rem)|center;background-size:calc(0.75em+0.375rem)|calc(0.75em+0.375rem);}"
        },        
     
        
//.is-valid~.valid-feedback, .is-valid~.valid-tooltip, .was-validated :valid~.valid-feedback, .was-validated :valid~.valid-tooltip {
//    display: block;
//}        
        
        valid:{
             feedback:'{display:none;w:100%;mt:0.25rem;f:.875em;color:#198754;}',
            
        },
        invalid:{
             feedback:'{display:none;w:100%;mt:0.25rem;f:.875em;color:#dc3545;}',
            
        },
        fixed:{
             top:'{position:fixed!;top:0;right:0;left:0;z-index:1030;}',  
             bottom:'{position:fixed!;right:0;bottom:0;left:0;z-index:1030;} ',

             
        },
        sticky:{
            top:'{position:-webkit-sticky;position:sticky;top:0;z-index:1020;}',
            
        },  
        dropstart:{
                '':'rel {vertical-align:0;}_.dropdown-toggle::before {display:inline-block;mr:0.255em;vertical-align:0.255em;content:"";bt:0.3em|solid|transparent;br:0.3em|solid;bb:0.3em|solid|transparent;}_.dropdown-toggle::before {mr:0;}_.dropdown-toggle-split::before {display:none;}_.dropdown-toggle::after {display:inline-block;ml:0.255em;vertical-align:0.255em;content:"";}_.dropdown-toggle::after',
            
        },
        dropend:{
                '':'{vertical-align:0;}_.dropdown-toggle::after {display:inline-block;ml:0.255em;vertical-align:0.255em;content:"";bt:0.3em|solid|transparent;br:0;bb:0.3em|solid|transparent;bl:0.3em|solid;}_.dropdown-toggle::after',
        },
        
        //user-select-all
        user:{
            select:{
               all:'{-webkit-user-select:all!;-moz-user-select:all!;user-select:all!;}',
               auto:'{-webkit-user-select:auto!;-moz-user-select:auto!;user-select:auto!;}',
               none:'{-webkit-user-select:none!;-moz-user-select:none!;user-select:none!;}',
                 
            },
        },      
        pe:{
          auto:'pointer-events:auto!',
          none:'pointer-events:none!'
        },
        position:{
           static:'position:static!',
           relative:'position:relative!',
           absolute:'position:absolute!',
           fixed:'position:fixed!',
           sticky:'position:sticky!'
           
        },
        fade:'transition:opacity|.15s|linear {opacity:0;}:not(.show)',
        clearfix:'{display:block;clear:both;content:"";}::after',   //clear:both消除左右兩邊的浮動
 
        bd:{
            example:{
                '':'{rel;p:1rem;m:1rem|-0.75rem|0;b:1|solid|#dee2e6;} {p:1.5rem;mr:0;ml:0;border-width:1px;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;}@bs-sm   {content:"";display:block;clear:both;}::after {mb:0;}>:last-child {m:0.25rem|0.125rem;}>.btn {m:0.25rem|0.125rem;}>.btn-group {mt:0.5rem;}>.form-control+.form-control {mt:1rem;}>.alert {mt:1rem;}>.nav+.nav {mt:1rem;}>.alert+.alert {mt:1rem;}>.navbar+.navbar {mt:1rem;}>.progress+.progress {max-w:400px;}>.list-group  {max-w:100%;}>[class*="list-group-horizontal"] {mt:0.5rem;mb:0.5rem;}_.pagination {position:static;margin:-1rem|-1rem|1rem;}>.fixed-top {margin:-1.5rem|-1.5rem|1rem;}>.fixed-top@bs-sm {position:static;margin:1rem|-1rem|-1rem;}>.fixed-bottom {m:1rem|-1.5rem|-1.5rem;}>.fixed-bottom@bs-sm {position:static;display:block;}>.dropdown-menu',
                'ver1':'{rel;p:1rem;m:10px;border:solid|#dee2e6;border-width:1px|0|0;} {content:"";display:block;clear:both;}::after {mb:0;}>:last-child {pt:0.75rem;pb:0.75rem;bg:rgba(39,41,43,0.03);b:1px|solid|rgba(39,41,43,0.1);}_.col {pt:0.75rem;pb:0.75rem;bg:rgba(39,41,43,0.03);b:1px|solid|rgba(39,41,43,0.1);}_[class^="col-"]  ',
                row:{
                    '':'{pt:0.75rem;pb:0.75rem;bg:rgba(39,41,43,0.03);b:1px|solid|rgba(39,41,43,0.1);}_.col {pt:0.75rem;pb:0.75rem;bg:rgba(39,41,43,0.03);b:1px|solid|rgba(39,41,43,0.1);}_[class^="col-"] {mt:1rem;}_.row ',
                    flex:{
                        cols:'{min-h:10rem;bg:rgba(255,0,0,0.1);}_.row',

                    }, 

                    
 
                 
                },//class:bd-example-row類別 結束
                
 

            
                toasts:'min-h:240px;',
                offcanvas:'{rtl:0;rbl:0;} {position:static;display:block;h:200px;visibility:visible;transform:translate(0);}>.offcanvas',
                cssgrid: 'text-align:center {pt:0.75rem;pb:0.75rem;bg:rgba(255,0,255,0.1);b:1px|solid|rgba(255,0,255,0.25);}_.g-grid>*',   
                container:'{h:50;m:10px;bg:rgba(255,0,255,0.1);b:1px|solid|rgba(255,0,255,0.25);}_[class^="container"]',
                'border-utils':{
                        '':'{display:inline-block;w:5rem;h:5rem;m:0.25rem!;bg:#f5f5f5;}_[class^="bs-border"] {display:inline-block;w:5rem;h:5rem;m:0.25rem;bg:#f5f5f5;}_[class^="bs-border*"]',
                        '0':'{b:1px|solid|#dee2e6}_[class^="bs-border"] {b:1px|solid|#dee2e6}_[class^="bs-border*"]',
                        
                        
                },
                'rounded-utils':{
                        '':'{display:inline-block;m:0.25rem;}_[class*="bs-rounded"]',
                },
                'position-utils':'{position:relative;p:3em;} {h:200px;bg:#f5f5f5;}_[class*="position-relative"] {w:2em;h:2em;bg:#212529;r:.25rem;}_[class*="position-absolute"]',
                modal:'bg:#fafafa {position:static;display:block;}>.modal',
                placeholder:{
                        cards:'{w:18rem;}>.card',
                    
                    
                },
                
            },//class:bd-example
            placeholder:{//class:bd-placeholdere
                      '':'',
                      img:{
                         '':'{f:1.125rem;text-anchor:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;}',     
                         lg:'f:calc(1.475rem+2.7vw)! {f:3.5rem!;}@bs-xl',   
                      }, 
                        
            },

            highlight:'{bg:rgba(86,61,124,0.15);b:1px|solid|rgba(86,61,124,0.15);}',
            




        },   //class:bd類別 結束
        themed:{    //class:themed-grid-col
             'grid-col':'{pt:0.75rem;pb:0.75rem;bg:rgba(86,61,124,0.15);b:1px|solid|rgba(86,61,124,0.2);}',
             'container':'{p:0.75rem;mb:1.5rem;bg:rgba(0,123,255,0.15);b:1px|solid|rgba(0,123,255,0.2);}' 
        },
        blockquote:{
               '':'{mb:1rem;f:1.25rem;} {mb:0;}>:last-child',
               footer:'{mt:-1rem;mb:1rem;f:.875em;color:#6c757d;} {content:"— ";}::before',
        },

 
        
        div1: 'width:100 height:100 bg:blue color:white f:34 margin:20',
        div2: 'width:100 height:100 bg:red color:white f:34',
        div3: 'width:100 height:100 bg:yellow-80 color:black  f:34',
        transsrhover: '{scale(2)|rotate(60deg)}:hover',
        test2:'bg:red! {bg:red!;}>*',

    },
    semantics: {
    //    show: {     //作法: <div class="show" hidden>show</div>
    //        display: 'block!important;'
    //    },
        'hide-text': {
            'font-size': 0
        }
    },
    breakpoints: {
        bs:{        //相容於Bootstrap斷點規格,網格系統支援六個響應式斷點   
            xs: 0,              //最小寬度為0    //用法 class="hide@bs-xs"
            sm: 576,            //min-width:576 
            md: 768,            //最小寬度為768
            lg: 992,
            xl: 1200,
            xxl: 1400            
        }

    }   
      
};    

window.masterCSSConfig = config ;