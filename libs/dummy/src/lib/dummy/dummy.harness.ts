import { ComponentHarness } from '@angular/cdk/testing';

export class DummyHarness extends ComponentHarness {
  static readonly hostSelector = 'harness-issue-dummy';

  async matchesSelector(cl: string): Promise<boolean> {
    return (await this.host()).matchesSelector(cl);
  }
}
