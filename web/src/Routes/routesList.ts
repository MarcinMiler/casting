export const routesList = {
    register: '/register',
    castings: '/castings',
    casting: (id: number) => `/casting/${id}`,
    createCasting: '/create-casting',
    createCompany: '/creat-company',
    myCompanies: '/my-companies',
    myCompany: (id: number) => `/my-company/${id}`
}
