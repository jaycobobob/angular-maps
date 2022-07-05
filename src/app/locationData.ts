export interface MarkerProperties {
    position: google.maps.LatLngLiteral;
    title: string;
    uid: string;
}

export interface locationProperties {
    uid: string;
    contents: string;
    src: string;
}

export const markers: MarkerProperties[] = [
    {
        position: { lat: 30.26759, lng: -97.74299 },
        title: 'Austin',
        uid: 'austin',
    },
    {
        position: { lat: 29.42458, lng: -98.49461 },
        title: 'San Antonio',
        uid: 'san-antonio',
    },
];

export const locations: locationProperties[] = [
    {
        uid: 'austin',
        contents: `Austin is the capital city of the U.S. state of Texas, as well 
         as the seat and largest city of Travis County, with portions extending 
         into Hays and Williamson counties. Incorporated on December 27, 1839, 
         it is the 11th-most populous city in the United States,[7] the fourth-
         most-populous city in Texas, the second-most-populous state capital city, 
         one of two state capitals with a population of over one million people,[8] 
         after Phoenix, Arizona,[9][10] and the most populous state capital that 
         is not also the most populous city in its state.[9] It has been one of the 
         fastest growing large cities in the United States since 2010.[11][12][13] 
         Downtown Austin and Downtown San Antonio are approximately 80 miles (129 km) 
         apart, and both fall along the Interstate 35 corridor. Some observers 
         believe that the two regions may some day form a new "metroplex" similar to 
         Dallas and Fort Worth.[14][15] Austin is the southernmost state capital in 
         the contiguous United States and is considered a "Beta -" global city as 
         categorized by the Globalization and World Cities Research Network.[16]`,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg/402px-Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg',
    },
    {
        uid: 'san-antonio',
        contents: `San Antonio (Spanish for "Saint Anthony"), officially the City of San 
         Antonio, is the seventh-most populous city in the United States, second largest 
         city in the Southern United States,[9] and the second-most populous city in Texas 
         as well as the 12th most populous city in North America with 1,434,625 residents
         in 2020.[10] Founded as a Spanish mission and colonial outpost in 1718, the city 
         became the first chartered civil settlement in present-day Texas in 1731. The area
         was still part of the Spanish Empire, and later of the Mexican Republic. It is the
         state's oldest municipality, having celebrated its 300th anniversary on May 1, 
         2018.[11][12][13]`,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Pearl_San_Antonio_2019.jpg/420px-The_Pearl_San_Antonio_2019.jpg',
    },
];
