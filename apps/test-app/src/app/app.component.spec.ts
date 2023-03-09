import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DummyModule } from '@harness-issue/dummy';
import { DummyHarness } from '@harness-issue/dummy/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyModule],
      declarations: [AppComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  it('should create the app', fakeAsync(async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const dummyHarness = await loader.getHarness(DummyHarness);

    tick(1000);

    await expect(
      dummyHarness.matchesSelector('harness-issue-dummy')
    ).resolves.toBeTruthy();
  }));

  it(`should have as title 'test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-app');
  });
});
