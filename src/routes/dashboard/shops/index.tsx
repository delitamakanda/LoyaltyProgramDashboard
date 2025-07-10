import ShopList from "@/features/shops/ShopList.tsx";

const ShopRoutes = [
    {
        path: 'shops',
        children: [
            {
                index: true,
                element: <ShopList />
            },
        ]
    }
]
export default ShopRoutes;
