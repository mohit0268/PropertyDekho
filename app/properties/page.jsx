import React from 'react'
import PropertyCard from '@/components/PropertyCard'
import properties from '@/properties.json'


const PropertyPage = () => {
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