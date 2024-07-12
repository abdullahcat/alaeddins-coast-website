
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "3udf5izs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
})

const builder = imageUrlBuilder(client);

type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

export default client;