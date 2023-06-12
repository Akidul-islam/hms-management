import AdminPage from '../pages/admins/AdminPage';
import AppointmentPage from '../pages/admins/AppointmentPage';
import BlogPage from '../pages/admins/BlogPage';
import OverviewPage from '../pages/admins/OverviewPage';
import ReviewsDoctorPage from '../pages/admins/ReviewsDoctorPage';
import DoctorPage from '../pages/admins/DoctorPage';
import PatientPage from '../pages/admins/PatientPage';
// ts types
import { SideBarTypes } from '../services/typescript/navts';
// mui icon
import {
  DashboardOutlined,
  PhoneIphone,
  InsertChart,
  ExtensionSharp,
} from '@mui/icons-material';

const sidebar: SideBarTypes[] = [
  {
    page: 'Dashboard',
    icon: <DashboardOutlined />,
    path: '/admin',
    active: true,
    sub_page: [
      { page: 'Overview', path: '/admin', active: true },
      { page: 'Patients', path: 'dashborad/patient', active: false },
      {
        page: 'Staff',
        path: 'dashborad/staff/doctor',
        staff: [{ job: 'Doctors', path: 'dashborad/staff/doctor' }],
        active: false,
      },
      { page: 'Appointment', path: 'dashborad/appointment', active: false },
      { page: 'Blog', path: 'dashborad/blogs', active: false },
      { page: 'Reviews', path: 'dashborad/review', active: false },
    ],
  },
  {
    page: 'Apps',
    active: false,
    sub_page: [{ page: 'some', path: ' ', active: false }],
    icon: <PhoneIphone />,
    path: '',
  },
  {
    page: 'Charts',
    sub_page: [],
    active: false,
    icon: <InsertChart />,
    path: '',
  },
  {
    page: 'Plugin',
    sub_page: [],
    icon: <ExtensionSharp />,
    active: false,
    path: '',
  },
];

// rotues
const router = [
  {
    parent: 'admin',
    component: AdminPage,
    role: ['admin'],
    child: [
      {
        id: 1,
        component: OverviewPage,
        index: true,
      },
      {
        id: 2,
        path: 'dashborad/patient',
        component: PatientPage,
      },
      {
        id: 3,
        path: 'dashborad/staff/doctor',
        component: DoctorPage,
      },
      {
        id: 4,
        path: 'dashborad/appointment',
        component: AppointmentPage,
      },
      {
        id: 5,
        path: 'dashborad/blogs',
        component: BlogPage,
      },

      {
        id: 6,
        path: 'dashborad/review',
        component: ReviewsDoctorPage,
      },
    ],
  },
  {
    parent: 'patient',
    component: PatientPage,
    role: ['patient'],
  },
];

export { sidebar, router };
