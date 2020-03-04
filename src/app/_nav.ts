import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Administração'
  },
  {
    name: 'Usuários',
    url: '/user',
    icon: 'icon-user'
  },
  {
    name: 'Perfil',
    url: '/perfil',
    icon: 'icon-drop'
  },
  {
    name: 'Convênios',
    url: '/convenios',
    icon: 'icon-pencil'
  },
  {
    name: 'Especialidades',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Estabelecimentos',
    url: '/estabelecimento',
    icon: 'icon-pencil'
  },
  {
    name: 'Guias',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Médico'
  },
  {
    name: 'Produção Diária',
    url: '/base',
    icon: 'icon-puzzle'
  },
  {
    name: 'Provisão de Recebimento',
    url: '/buttons',
    icon: 'icon-cursor'
  },
  {
    name: 'Relatórios',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notificações',
    url: '/notifications',
    icon: 'icon-bell'
  },
  {
    name: 'Abertura de Chamado',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Financeiro',
  },
  {
    name: 'Solicitações',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: '2ª Via Boleto',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Plano',
        url: '/register',
        icon: 'icon-star'
      }
    ]
  }
];
