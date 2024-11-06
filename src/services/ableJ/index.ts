import Auth from './auth';
import Job from './job';
import Recruitment from './recruitment';
import Resume from './resume';

export default {
  ...Auth,
  ...Job,
  ...Resume,
  ...Recruitment,
};
