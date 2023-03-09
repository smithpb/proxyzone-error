import { fakeAsync, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { DummyModule } from '@harness-issue/dummy';
import { DummyHarness } from '@harness-issue/dummy/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  async function setup() {
    const { fixture } = await render(AppComponent, {
      imports: [DummyModule],
    });

    return { fixture };
  }

  it('should load the harness with testing-library', fakeAsync(async () => {
    const { fixture } = await setup();
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const dummyHarness = await loader.getHarness(DummyHarness);

    await expect(
      dummyHarness.matchesSelector('harness-issue-dummy')
    ).resolves.toBeTruthy();
  }));

  it(`should load the harness without testing library`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const dummyHarness = await loader.getHarness(DummyHarness);

    await expect(
      dummyHarness.matchesSelector('harness-issue-dummy')
    ).resolves.toBeTruthy();
  });
});
