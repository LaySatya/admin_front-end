import Card from "../components/Card";

const Dashboard = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-5">📦 Dashboard Page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Today's Sales">
                    <button className="mt-2 bg-yellow-500 text-white px-4 py-1 rounded">Export</button>
                </Card>
                <Card title="Total Revenue"></Card>
                <Card title="Total Orders"></Card>
                <Card title="Total Users"></Card>
                <Card title="Total Products"></Card>
                <Card title="Top Products"></Card>
            </div>
        </>
            
    );
};

export default Dashboard;
