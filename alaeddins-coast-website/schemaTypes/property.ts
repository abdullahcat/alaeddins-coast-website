// schemas/property.js
export default {
    name: 'property',
    type: 'document',
    title: 'Property',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Property Title',
            validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(0),
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'images',
            type: 'array',
            title: 'Property Images',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
            validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1),
        },
        {
            name: 'bedrooms',
            type: 'number',
            title: 'Bedrooms',
        },
        {
            name: 'bathrooms',
            type: 'number',
            title: 'Bathrooms',
        },
        {
            name: 'size',
            type: 'number',
            title: 'Size (sq ft)',
            validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(0),
        },
        {
            name: 'yearBuilt',
            type: 'number',
            title: 'Year Built',
        },
        {
            name: 'propertyType',
            type: 'string',
            title: 'Property Type',
            options: {
                list: [
                    { title: 'House', value: 'house' },
                    { title: 'Apartment', value: 'apartment' },
                    { title: 'Condo', value: 'condo' },
                    { title: 'Townhouse', value: 'townhouse' },
                    { title: 'Land', value: 'land' },
                    { title: 'Commercial', value: 'commercial' },
                ],
            },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'listingStatus',
            type: 'string',
            title: 'Listing Status',
            options: {
                list: [
                    { title: 'For Sale', value: 'forSale' },
                    { title: 'For Rent', value: 'forRent' },
                    { title: 'Sold', value: 'sold' },
                ],
            },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'location',
            type: 'geopoint',
            title: 'Location',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // Maximum length of the slug
            },
        },
    ],
};