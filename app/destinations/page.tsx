import Header from "@/src/components/header/Header";
import DestinationList from "@/src/features/destinations/DestinationList";

const DestinationsPage = () => {
  return (
    // bg-linear-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2fe] 
    <main className="w-full bg-white">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="bg-[#0c4423]"
      >
        <Header
          title="Destinations"
          subtitle=""
          backgroundImage=""
          showSearch
          searchValue=""
          // onSearchChange={() => {}}
        />
      </section>

      <section
        id="section-2-content"
        aria-label="Destinations and Filters"
        className="max-w-7xl mx-auto"
      >
        {/* Client component handles everything */}
        <DestinationList />
      </section>
    </main>
  );
};

export default DestinationsPage;
