"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var profile_page_component_1 = require("./profile-page.component");
describe('ProfilePageComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [profile_page_component_1.ProfilePageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(profile_page_component_1.ProfilePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-page.component.spec.js.map