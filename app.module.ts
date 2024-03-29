import { NgModule, ErrorHandler } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DateValueAccessor } from './shared/date-value-accessor';

import { AppRoutingModule, RoutingComponents } from './app.route';

import { ProjectGroupPlanListComponent } from './components/projectGroupPlan/projectGroupPlanList.component';
import { ProjectGroupPlanFormComponent } from './components/projectGroupPlan/projectGroupPlanForm.component';
import { ProjectGroupComponent } from './components/projectGroupPlan/projectGroup.component';
import { AssociatePlanStatusComponent } from './components/associatePlan/associatePlanStatus.component';
import { AssociatePlanDetailComponent } from './components/associatePlan/associatePlanDetail.component';
import { ConfirmationDialogComponent } from './shared/confirmationDialog.component';
import { AlertComponent } from './shared/alert.component';

import { ProjectGroupPlanService } from './service/projectGroupPlan.service';
import { ProjectGroupService } from './service/projectGroup.service';
import { ProjectService } from './service/project.service';
import { ModeService } from './service/mode.service';
import { RoleService } from './service/role.service';
import { KnowledgeTransferService } from './service/knowledgeTransfer.service';
import { AssociateService } from './service/associate.service';
import { AssociatePlanService } from './service/associatePlan.service';
import { UserRoleService } from './service/userRole.service';
import { DownloadService } from './service/download.service';
import { ConfirmationDialogsService } from './shared/confirmationDialog.service';
import { AlertService } from './shared/alert.service';
import { DashboardService } from './service/dashboard.service';

import { GroupByPipe, FilterPipe } from './shared/pipe';
import { ModalComponent } from './shared/model.component';

import { PreLoaderComponent } from './shared/preLoader.component';
import { PreLoaderService } from './shared/preLoader.service';
import { HttpInterceptorService } from './shared/httpInterceptor.service';

import { AssociateDetailComponent } from './components/associatePlan/associateDetail.component';
import { AssociateDetailService } from './service/associateDetail.service';
import { ChartsModule } from 'ng2-charts';
import { TeamService } from './service/team.service';
import { AccountRoleService } from './service/accountRole.service';
import { DisableControlDirective } from './shared/disableControl.directive';
import { RedirectOnBoardComponent } from './shared/redirect-onboard.component';
import { AllocationDetailsComponent } from './components/allocation-details/allocation-details.component';
import { UpdateDetailsComponent } from './components/update-details/update-details.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { Data } from './shared/Data';
import { BulkModifyComponent } from './components/allocation-details/bulk-modify/bulk-modify.component';
import { BulkModifyService } from './service/bulkModify.service';
import { ProgressSummaryService } from './service/progressSummary.service';

import { AlertDialogBoxService } from './shared/alertDialogBox.service';
import { AlertDialogBoxComponent } from './shared/alertDialogBox.component';
import { ExcelFileExportService } from './service/excelFileExport.service';
import { MarginListComponent } from './components/allocation-details/margin-list/margin-list.component';
import { CourseProgressComponent } from './components/course-progress/course-progress.component';
import { CourseProgressService } from './service/courseProgress.service';
import { ProgressSummaryComponent } from './components/progress-summary/progress-summary.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxViewerModule } from 'ngx-viewer';

export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreLoaderService) {
    return new HttpInterceptorService(backend, defaultOptions, preloaderService);
}

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatNativeDateModule,
        NgxPaginationModule,
        ChartsModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        NgxViewerModule
    ],
    declarations: [
        AppComponent,
        RoutingComponents,
        ProjectGroupPlanFormComponent,
        AssociatePlanDetailComponent,
        ProjectGroupComponent,
        ProjectGroupPlanListComponent,
        ModalComponent,
        GroupByPipe,
        FilterPipe,
        AssociatePlanStatusComponent,
        ConfirmationDialogComponent,
        AlertComponent,
        DateValueAccessor,
        PreLoaderComponent,
        AssociateDetailComponent,
        DisableControlDirective,
        RedirectOnBoardComponent,
        AllocationDetailsComponent,
        UpdateDetailsComponent,
        UpdateFormComponent,
        BulkModifyComponent,
        AlertDialogBoxComponent,
        MarginListComponent,
        CourseProgressComponent,
        ProgressSummaryComponent
    ],
    providers:
    [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: HttpInterceptorService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, PreLoaderService]
        },
        ProjectGroupPlanService,
        ProjectGroupService,
        ProjectService,
        ModeService,
        RoleService,
        KnowledgeTransferService,
        AssociateService,
        AssociatePlanService,
        UserRoleService,
        ConfirmationDialogsService,
        AlertDialogBoxService,
        DownloadService,
        AlertService,
        AlertDialogBoxService,
        PreLoaderService,
        AssociateDetailService,
        DashboardService,
        TeamService,
        AccountRoleService,
        BulkModifyService,
        CourseProgressService,
        ExcelFileExportService,
        Data,
        ProgressSummaryService
    ],
    entryComponents: [
        ProjectGroupPlanFormComponent,
        ProjectGroupComponent, AssociatePlanDetailComponent,
        AssociatePlanStatusComponent,
        ConfirmationDialogComponent,
        AlertDialogBoxComponent,
        AllocationDetailsComponent,
        AlertComponent,
        ProgressSummaryComponent
    ],

    bootstrap: [AppComponent]

})
export class AppModule { }

