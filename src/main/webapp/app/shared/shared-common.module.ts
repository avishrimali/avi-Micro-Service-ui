import { NgModule } from '@angular/core';

import { AviMicroServiceUiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AviMicroServiceUiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AviMicroServiceUiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AviMicroServiceUiSharedCommonModule {}
