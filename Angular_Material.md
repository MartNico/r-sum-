To Install Angular Material : (from https://alligator.io/angular/angular-material-2/)

1. npm install --save @angular/material @angular/animations @angular/cdk

2. npm install --save hammerjs

3. Inside angular-cli.json => "scripts": [
  "../node_modules/hammerjs/hammer.min.js"
],

4. In app.module.ts => import { MaterialModule } from './material.module';

5. Put MaterialModule in the imports array

6. Add Theme into the main styles.css

@import '~https://fonts.googleapis.com/icon?family=Material+Icons';
@import '~@angular/material/prebuilt-themes/indigo-pink.css';

7. Use it : <button mat-button>All</button>
