import TransactionList from "@/features/transactions/TransactionList.tsx";

const TransactionRoutes = [
    {
        path: 'transactions',
        children: [
            {
                index: true,
                element: <TransactionList />
            },
        ]
    }
]

export default TransactionRoutes;