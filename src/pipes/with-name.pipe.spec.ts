import { WithNamesPipe } from "./with-name.pipe";


describe('WithNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new WithNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
