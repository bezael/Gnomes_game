import { FilterPipe } from './filter.pipe';

describe('Pipe: FilterPipe', () => {
  it('should filter by the input', () => {
    let value = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 3, name: 'three' }];
    let filterString = 'two';
    let propName = 'name';
    let filterPipe = new FilterPipe();
    expect(filterPipe.transform(value, filterString, propName)).toEqual([{ id: 2, name: 'two' }]);
  });
});
