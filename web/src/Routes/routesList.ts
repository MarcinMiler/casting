export const routesList = {
    register: '/register',
    castings: '/castings',
    casting: (id: number) => `/casting/${id}`,
    createCasting: '/create-casting',
    createCompany: '/create-company',
    myCompanies: '/my-companies',
    myCompany: (id: string) => `/my-company/${id}`
}
