import { Icon } from '@iconify/react';
// import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import statisticsIcon from '@iconify-icons/wpf/statistics';
// import manDoctor from '@iconify-icons/si-glyph/man-doctor';
// import doctorMale from '@iconify-icons/healthicons/doctor-male';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  // TODO: CHANGE SIDEBAR ITEMS FROM HERE
  {
    title: 'Tableau de bord',
    path: '/dashboard/app',
    icon: getIcon(statisticsIcon)
  },
  {
    title: 'Patients',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  }
];

export default sidebarConfig;
