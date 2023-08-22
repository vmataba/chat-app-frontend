import { Pipe, PipeTransform } from "@angular/core";
import { Observable, isObservable } from "rxjs";

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{
    transform(items: any[] | null,keyword: string) {
        if (items == null){
            return items
        }
        if (isObservable(items)){
            return items.map(items => items.filter((item:any) => !item?item: JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase())))  
        }
        return items.filter(item => !item?item: JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase()))
    }

}