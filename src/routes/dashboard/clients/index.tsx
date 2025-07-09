import ClientList from "@/features/clients/ClientList.tsx";
import ClientDetail from "@/features/clients/ClientDetail.tsx";

const ClientRoutes = [
    {
        path: 'clients',
        children: [
            {
                index: true,
                element: <ClientList />
            },
            {
                path: ':id',
                element: <ClientDetail />
            }
        ]
    }
]
export default ClientRoutes;
