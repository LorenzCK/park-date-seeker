
import { ParkingSearch } from "@/components/ParkingSearch";
import { ParkingResults } from "@/components/ParkingResults";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Mostra occupazione
        </h1>
        <ParkingSearch />
        <ParkingResults data={[]} />
      </div>
    </div>
  );
};

export default Index;
