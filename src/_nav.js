export default {
    defaultItemIndex: 1,
    items: [
    {
        title: true,
        name: 'اطلاعات تورها',
    },
    {
        name: 'تورهای جدید',
        path: '/tours/new',
        icon: 'picture', 
        parent: 'اطلاعات تورها',
    },
    {
        name: 'تورهای برگزار شده',
        path: '/tours/participated',
        icon: 'inbox', 
        parent: 'اطلاعات تورها',
    },
    {
        title: true,
        name: 'اطلاعات مالی',
    },
    {
        name: 'تراکنش ها',
        path: '/tours/participated',
        icon: 'dollar',
        parent: 'اطلاعات مالی',
    },
    {
        name: 'اطلاعات حساب',
        path: '/tours/participated',
        icon: 'setting',
        parent: 'اطلاعات مالی',
    },
    ]  
};
