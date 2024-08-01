import Link from 'next/link'
import PropertyCard from "@/components/PropertyCard";
import connectDB from '@/config/database';
import Property from '@/models/Property';

const HomeProperties = async () => {
    await connectDB();
  const recentProperties = await Property.find({})
  .sort({createdAt:-1})
  .limit(3)
  .lean();

  return (
    <>
      <section className="px-4 py-6">
        <div className="container lg:container m-auto">
          <h2 className="text-blue-700 text-3xl font-bold text-center mb-6">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4 rounded-lg">
            {recentProperties === 0 ? (
              <p>No Properties Found!</p>
            ) : (
                recentProperties.map((property)=>(
                    <PropertyCard key={property._id} property={property}/>
                ))
            
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
