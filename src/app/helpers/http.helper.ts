import {HttpHeaders} from '@angular/common/http'


export const headers = new HttpHeaders({
    'Authorization': 'Basic '+btoa('victor@gmail.com:victor')
})