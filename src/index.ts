import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Typeahead } from "./ng2-typeahead";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [Typeahead],
    exports: [Typeahead]
})
export class TypeaheadModule {
}