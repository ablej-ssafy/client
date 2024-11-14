import Auth from './auth';
import Company from './company';
import GitHub from './github';
import Job from './job';
import Recruitment from './recruitment';
import Resume from './resume';
import Search from './search';

export default {
  ...Auth,
  ...Job,
  ...Resume,
  ...Recruitment,
  ...Search,
  ...Company,
  ...GitHub,
};
