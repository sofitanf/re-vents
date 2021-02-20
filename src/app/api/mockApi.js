import { delay } from '../common/util/util';
import { sampleData } from './sampleData';

export function fetchSampleData() {
  return delay(3000).then(function () {
    return Promise.resolve(sampleData);
  });
}
