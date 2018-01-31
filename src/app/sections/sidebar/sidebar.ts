export const userMenu = [
      {
        title: 'Dashboard',
        url: '/'
      },
      {
        title: 'My Tickets',
        url: '/section/mytickets'
      },
      {
        title: 'Work Area',
        url: '/section/workarea'
      }
    ];

export const adminMenu = [
      {
        title: 'Dashboard',
        url: '/admindashboard'
      },
      {
        title: 'Workflow Management',
        url: '',
        children: [
          {
            title: 'List',
            url: '/section/admin/workflowmanagement/'
          },
          {
            title: 'Create',
            url: '/section/admin/workflowmanagement/create'
          },
          {
            title: 'Parameters',
            url: '',
            children: [
              {
                title: 'Activities',
                url: '/section/admin/parameters/activities'
              },
              {
                title: 'Dropdown Values',
                url: '/section/admin/parameters/dropdownValues'
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
