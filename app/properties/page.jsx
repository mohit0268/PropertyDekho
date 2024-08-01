import React from 'react'
import PropertyCard from '@/components/PropertyCard'
import connectDB from '@/config/database'
import Property from '@/models/Property';



const PropertyPage = async () => {
  await connectDB();
  const properties = await Property.find({}).lean();

  return (
    <section>
      <div className='container lg:container m-auto'>

        {properties.length === 0 ? "No Properties Found!" : (
          
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3 p-4 rounded-lg'>
            {properties.map(property => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      
      </div>
    </section>
  )
}

export default PropertyPage