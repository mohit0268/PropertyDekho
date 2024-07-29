import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section className='px-4 py-6'>
        <div className='container lg:container m-auto'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2  p-4 rounded-lg'>
            <InfoBox
            heading='For Renters'
            backgroundColor='bg-gray-200'
            buttoninfo={{
                text:'Browse Properties',
                link:'/properties',
                backgroundColor:"bg-black"
            }}>Find Your dream rental property. Bookmark properties and contact.</InfoBox>
            <InfoBox
            heading='For Property Owners'
            backgroundColor='bg-blue-200'
            buttoninfo={{
                text:'Add Properties',
                link:'/properties',
                backgroundColor:"bg-blue-500"
            }}>List your property and reach potential tenants. Rent as an Airbnb or long term.</InfoBox>
        </div>
        </div>
        
    </section>
)
}

export default InfoBoxes