import { Component } from "@angular/core";

@Component({
    selector:'app-loading-spinner',
    template:
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
    styleUrls:['./loading-spinner.component.css']
    // styleUrls:['../../assets/loading-spinner.css'] // if loading-spinner.css is in a separate folder in assets directory.  // Angular >= 9 doesn't support relative paths for styleUrls.  So, we use the full path.  'loading-spinner.component.css' should be in the same folder as loading-spinner.component.ts.  Inside loading-spinner.component.ts, we have templateUrl: './loading-spinner.component.html' and styleUrls: ['./loading-spinner.component.css'].  'loading-spinner.component.css' should be in the same folder as loading-spinner.component.ts.  Inside loading-spinner.component.ts, we have templateUrl: './loading-spinner.component.html' and styleUrls:
})
export class LoadingSpinnerComponent{

} 