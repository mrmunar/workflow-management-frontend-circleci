export const userMenu = [
      {
        title: 'Dashboard',
        url: '/'
      },
      {
        title: 'My Tickets',
        url: '/myTickets'
      },
      {
        title: 'Work Area',
        url: '/workArea'
      }
    ];

export const adminMenu = [
      {
        title: 'Dashboard',
        url: '/adminDashboard'
      },
      {
        title: 'Workflow Management',
        url: 'javascript:void(0)',
        children: [
          {
            title: 'List',
            url: '/admin/workflowManagement/list'
          },
          {
            title: 'Create',
            url: '/admin/workflowManagement/create'
          },
          {
            title: 'Parameters',
            url: 'javascript:void(0)',
            children: [
              {
                title: 'Activities',
                url: '/admin/parameters/activities'
              },
              {
                title: 'Dropdown Values',
                url: '/admin/parameters/dropdownValues'
              }
            ]
          }
        ]
      }
    ];

export interface NavItem {
  title: string;
  url: string;
  children: NavItem[];
}
