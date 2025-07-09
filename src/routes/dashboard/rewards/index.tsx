import RewardList from "@/features/rewards/RewardList.tsx";

const RewardRoutes = [
    {
        path: 'rewards',
        children: [
            {
                index: true,
                element: <RewardList />
            },
        ]

    }
]
export default RewardRoutes;
