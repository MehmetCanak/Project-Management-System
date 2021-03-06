import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

declare var $: any;

export type Types = 'success' | 'error' | 'warning' | 'info' | 'question';
export type inputTypes = 'text' | 'textarea' ;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }
  public toastMessage(message: string, type:string = "info", duration:number = 3000)
    {
        let temp: string = type;
        let iconType: Types = temp as Types; 

        const Toast = Swal.mixin(
        {
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: duration
        })

        Toast.fire(
        {
            icon: iconType,
            title: message
        });
        
    }
    // public toastMessageAlert(message: string, title = "Mesaj", icon = "danger", duration:number = 100000)
    // {
        
    //     let temp: string = icon;
    //     let iconType: Types = temp as Types;

    //     const Toast = Swal.mixin(
    //     {
    //         toast: true,
    //         showConfirmButton: false,
    //         timer: duration
    //     })

    //     Swal.fire({
    //         title: title,
    //         scrollbarPadding: true
    //     }).then(function() {

    //       Swal.fire({
    //         title: 'deneme',
    //         showCancelButton: false,
    //         showConfirmButton: false,
    //         html: message,
    //         timer: duration,
    //         toast: true,
    //         position: "top",
    //         type: "success",
    //         icon: iconType
    //       })
    //     });
    // }

    public  showToast(){

        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'Sweet Alert Toast', icon: 'success', });
    }
        
    
    public showMessage(){

        Swal.fire({ text: 'Hello!', icon: 'error',timer: 10000});


    }

    public swalPrompt(title:any, confirmText = "Tamam", cancelText = "??ptal", inputType = "text")
    {
        let temp: string = inputType;
        let tempInputType: inputTypes = temp as inputTypes; 
        
        return Swal.fire(
        {
            title: title,
            input: tempInputType,
            inputAttributes: 
            {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: confirmText,
        });
    }
    
    public swalComboBox(title:any, inputOptions:any, confirmText = "Tamam", cancelText = "??ptal")
    {
        return Swal.fire(
        {
            title: title,
            input: "select",
            inputOptions: inputOptions,
            showCancelButton: true,
            confirmButtonText: confirmText,
        });
    }
    
    public swalConfirm(title:any, text:any, icon:any, confirmButtonText = 'Evet', cancelButtonText = 'Hay??r', showCancelButton = true)
    {
        return Swal.fire(
        {
            title: title,
            text: text,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        })
        .then((r) => 
        {
            return r.value;
        });
    }

    public sweetAlert(message:any, title = "Mesaj", icon = "info")
    {
        let temp: string = icon;
        let iconType: Types = temp as Types;

        Swal.fire({
            title: title,
            html: message,
            icon: iconType
        });
    }
}
