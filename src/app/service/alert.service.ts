import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'
//Decorador 

@Injectable ({
    providedIn: 'root'

})

export class AlertService {
    questionAlert(
        title: string,
        text: string,
        confirmButtoText: string,
        cancelButtonText: string
    ) {
        return Swal.fire({ 
            title: title,
            text: text,
            backdrop: 'rgba(255,255,255)',
            icon: 'question',
            showCancelButton:true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#dc3545',
            confirmButtonText: confirmButtoText,
            cancelButtonText: cancelButtonText,
        });
    }
}