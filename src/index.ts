import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Typeahead } from "./ng2-typeahead";

@NgModule({
    imports: [CommonModule],
    declarations: [Typeahead],
    exports: [Typeahead]
})
export class TypeaheadModule {
}