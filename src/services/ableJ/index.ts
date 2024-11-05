import Announcement from './announcement';
import Auth from './auth';
import Job from './job';
import Resume from './resume';

export default {
  ...Auth,
  ...Job,
  ...Resume,
  ...Announcement,
};
