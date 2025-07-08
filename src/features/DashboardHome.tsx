import { Button } from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Table, TableHeader, TableBody, TableRow, TableCell, TableHead} from '@/components/ui/table'

const DashboardHome = () => {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <span>Admin</span>
                    <Button variant="ghost" size="sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"/>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                       <div className="text-4xl font-bold">246</div>
                        <p className="text-sm text-muted-foreground">Clients</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="text-4xl font-bold">1,246</div>
                        <p className="text-sm text-muted-foreground">Transactions</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="text-4xl font-bold">65</div>
                        <p className="text-sm text-muted-foreground">Récompenses</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="text-4xl font-bold">Argent</div>
                        <p className="text-sm text-muted-foreground">Repartition</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl">Client list</CardTitle>
                    <Button variant="link" className="text-primary">View all</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Points</TableHead>
                                <TableHead>Rank</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Jenny Wilson</TableCell>
                                <TableCell>jwitsion@am.com</TableCell>
                                <TableCell>150</TableCell>
                                <TableCell>VIP</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Darrell Steward</TableCell>
                                <TableCell>a.stoward@argent</TableCell>
                                <TableCell>320</TableCell>
                                <TableCell>Argent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Arlene McCoy</TableCell>
                                <TableCell>dmccy@ec.com</TableCell>
                                <TableCell>80</TableCell>
                                <TableCell>Bronze</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Robert Fox</TableCell>
                                <TableCell>Jenny Wilson</TableCell>
                                <TableCell>400</TableCell>
                                <TableCell>VIP</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl">Transaction List</CardTitle>
                    <Button variant="link" className="text-primary">View all</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Points</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>04/25/2024</TableCell>
                                <TableCell>Jenny Wilson</TableCell>
                                <TableCell>$200</TableCell>
                                <TableCell>20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>04/24/2024</TableCell>
                                <TableCell>Arlene McCoy</TableCell>
                                <TableCell>$150</TableCell>
                                <TableCell>15</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>04/25/2023</TableCell>
                                <TableCell>Darrell Steward</TableCell>
                                <TableCell>$300</TableCell>
                                <TableCell>30</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>04/22/2022</TableCell>
                                <TableCell>Jenny Wilson</TableCell>
                                <TableCell>$250</TableCell>
                                <TableCell>25</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    )
}

export default DashboardHome;
