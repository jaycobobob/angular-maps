export interface MarkerProperties {
    position: google.maps.LatLngLiteral;
    title: string;
    uid: string;
}

export interface LocationProperties {
    uid: string;
    contents: string;
    src: string;
    logo: string;
    displayName: string;
}

export const nullLocation: LocationProperties = {
    uid: '',
    contents: 'No contents specified.',
    src: 'https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg',
    logo: '...',
    displayName: '---',
};

export const usCenter: google.maps.LatLngLiteral = {
    lat: 39.5,
    lng: -98.35,
};

export const markers: MarkerProperties[] = [
    {
        position: { lat: 42.366238, lng: -71.06231 },
        title: 'Boston Celtics',
        uid: 'BOS',
    },
    {
        position: { lat: 40.6844, lng: -73.9777 },
        title: 'Brooklyn Nets',
        uid: 'BKN',
    },
    {
        position: { lat: 40.750496, lng: -73.99339 },
        title: 'New York Knicks',
        uid: 'NYK',
    },
    {
        position: { lat: 39.90111, lng: -75.17194 },
        title: 'Philadelphia 76ers',
        uid: 'PHI',
    },
    {
        position: { lat: 43.643925, lng: -79.37833 },
        title: 'Toronto Raptors',
        uid: 'TOR',
    },
    {
        position: { lat: 41.881145, lng: -87.6742 },
        title: 'Chicago Bulls',
        uid: 'CHI',
    },
    {
        position: { lat: 41.49656, lng: -81.68815 },
        title: 'Cleveland Cavaliers',
        uid: 'CLE',
    },
    {
        position: { lat: 42.341087, lng: -83.055275 },
        title: 'Detroit Pistons',
        uid: 'DET',
    },
    {
        position: { lat: 39.763924, lng: -86.155807 },
        title: 'Indiana Pacers',
        uid: 'IND',
    },
    {
        position: { lat: 43.04503, lng: -87.91817 },
        title: 'Milwaukee Bucks',
        uid: 'MIL',
    },
    {
        position: { lat: 33.75722, lng: -84.39639 },
        title: 'Atlanta Hawks',
        uid: 'ATL',
    },
    {
        position: { lat: 35.22516, lng: -80.83926 },
        title: 'Charlotte Hornets',
        uid: 'CHA',
    },
    {
        position: { lat: 25.781441, lng: -80.188332 },
        title: 'Miami Heat',
        uid: 'MIA',
    },
    {
        position: { lat: 28.539293, lng: -81.38396 },
        title: 'Orlando Magic',
        uid: 'ORL',
    },
    {
        position: { lat: 38.898129, lng: -77.021172 },
        title: 'Washington Wizards',
        uid: 'WAS',
    },
    {
        position: { lat: 39.74869, lng: -105.007545 },
        title: 'Denver Nuggets',
        uid: 'DEN',
    },
    {
        position: { lat: 44.97984, lng: -93.27657 },
        title: 'Minnesota Timberwolves',
        uid: 'MIN',
    },
    {
        position: { lat: 35.463497, lng: -97.515114 },
        title: 'Oklahoma City Thunder',
        uid: 'OKC',
    },
    {
        position: { lat: 45.53159, lng: -122.666824 },
        title: 'Portland Trail Blazers',
        uid: 'POR',
    },
    {
        position: { lat: 40.768265, lng: -111.90113 },
        title: 'Utah Jazz',
        uid: 'UTA',
    },
    {
        position: { lat: 37.76786, lng: -122.38748 },
        title: 'Golden State Warriors',
        uid: 'GSW',
    },
    {
        position: { lat: 34.043077, lng: -118.267606 },
        title: 'LA Clippers',
        uid: 'LAC',
    },
    {
        position: { lat: 34.043087, lng: -118.267616 },
        title: 'Los Angeles Lakers',
        uid: 'LAL',
    },
    {
        position: { lat: 33.445938, lng: -112.071487 },
        title: 'Phoenix Suns',
        uid: 'PHX',
    },
    {
        position: { lat: 38.580215, lng: -121.49959 },
        title: 'Sacramento Kings',
        uid: 'SAC',
    },
    {
        position: { lat: 32.7905, lng: -96.810394 },
        title: 'Dallas Mavericks',
        uid: 'DAL',
    },
    {
        position: { lat: 29.751625, lng: -95.36236 },
        title: 'Houston Rockets',
        uid: 'HOU',
    },
    {
        position: { lat: 35.13823, lng: -90.05046 },
        title: 'Memphis Grizzlies',
        uid: 'MEM',
    },
    {
        position: { lat: 29.94903, lng: -90.082298 },
        title: 'New Orleans Pelicans',
        uid: 'NOP',
    },
    {
        position: { lat: 29.42694, lng: -98.43747 },
        title: 'San Antonio Spurs',
        uid: 'SAS',
    },
];

export const locations: LocationProperties[] = [
    {
        uid: 'BOS',
        contents: `The Boston Celtics are an American professional basketball team based in Boston. The Celtics compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. Founded in 1946 as one of the league's original eight teams, the Celtics play their home games at TD Garden, which they share with the National Hockey League's Boston Bruins. The Celtics are one of the most successful basketball teams in NBA history. The franchise is one of two teams with 17 NBA Championships, the other franchise being the Los Angeles Lakers. The Celtics currently hold the record for the most recorded wins of any NBA team.[10][11]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        displayName: 'Boston Celtics',
        src: 'https://th.bing.com/th/id/OIP.aCx9109Yer3EmzVJgXe_jwHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        uid: 'BKN',
        contents: `The Brooklyn Nets are an American professional basketball team based in the New York City borough of Brooklyn. The Nets compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. The team plays its home games at Barclays Center. They are one of two NBA teams located in New York City; the other is the New York Knicks. The club was established in 1967 as a charter franchise of the NBA's rival league, the American Basketball Association (ABA). They played in New Jersey as the New Jersey Americans during their first season, before relocating to Long Island, New York, in 1968 and changing their name to the New York Nets. During this time, the Nets won two ABA championships (in 1974 and 1976). In 1976, the ABA merged with the NBA, and the Nets were absorbed into the NBA along with three other ABA teams (the San Antonio Spurs, Indiana Pacers, and Denver Nuggets), all of whom remain in the league to this day.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        displayName: 'Brooklyn Nets',
        src: 'https://th.bing.com/th/id/OIP._4Iv9BbPUTt8xJGZRrq3ugHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    },
    {
        uid: 'NYK',
        contents: `The New York Knickerbockers,[3][7] shortened and more commonly referred to as the New York Knicks, are an American professional basketball team based in the New York City borough of Manhattan. The Knicks compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. The team plays its home games at Madison Square Garden, an arena they share with the New York Rangers of the National Hockey League (NHL). They are one of two NBA teams located in New York City; the other team is the Brooklyn Nets. Alongside the Boston Celtics, the Knicks are one of two original NBA teams still located in its original city.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        displayName: 'New York Knicks',
        src: 'https://th.bing.com/th/id/OIP.BgCWWk6QLiTADHNn5skIRwHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7',
    },
    {
        uid: 'PHI',
        contents: `The Philadelphia 76ers, colloquially known as the Sixers, are an American professional basketball team based in the Philadelphia metropolitan area. The 76ers compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division and play at the Wells Fargo Center. Founded in 1946 and originally known as the Syracuse Nationals, they are one of the oldest franchises in the NBA and one of only eight (out of 23) to survive the league's first decade.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        displayName: 'Philadelphia 76ers',
        src: 'https://th.bing.com/th/id/OIP.Q3IZJnFN68L7RA76R_3ddAHaFS?pid=ImgDet&rs=1',
    },
    {
        uid: 'TOR',
        contents: `The Toronto Raptors are a Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. They play their home games at Scotiabank Arena, which they share with the Toronto Maple Leafs of the National Hockey League (NHL). The team was founded in 1995 as part of the NBA's expansion into Canada, along with the Vancouver Grizzlies. Since the 2001–02 season, the Raptors have been the only Canadian-based team in the league, as the Grizzlies relocated from Vancouver to Memphis, Tennessee.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        displayName: 'Toronto Raptors',
        src: 'https://th.bing.com/th/id/OIP.KrY09touQt7LghzXVNjSMgHaE7?pid=ImgDet&rs=1',
    },
    {
        uid: 'CHI',
        contents: `The Chicago Bulls are an American professional basketball team based in Chicago. The Bulls compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division.[9] The team was founded on January 16, 1966, and played its first game during the 1966–67 NBA season.[1] The Bulls play their home games at the United Center, an arena on Chicago's West Side.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        displayName: 'Chicago Bulls',
        src: 'https://th.bing.com/th/id/OIP.MVU9k-w11ktVmUt1em3UDwHaEK?w=268&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        uid: 'CLE',
        contents: `The Cleveland Cavaliers (often referred to as the Cavs) are an American professional basketball team based in Cleveland. The Cavaliers compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. The team began play as an expansion team in 1970, along with the Portland Trail Blazers and Buffalo Braves. Home games were first held at Cleveland Arena from 1970 to 1974, followed by the Richfield Coliseum from 1974 to 1994. Since 1994, the Cavs have played home games at Rocket Mortgage FieldHouse in downtown Cleveland, which is shared with the Cleveland Monsters of the American Hockey League. Dan Gilbert has owned the team since March 2005.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        displayName: 'Cleveland Cavaliers',
        src: 'https://th.bing.com/th/id/OIP.V1zda1rDeUr5WXZPYj0NRgHaE7?w=284&h=189&c=7&r=0&o=5&pid=1.7',
    },
    {
        uid: 'DET',
        contents: `The Detroit Pistons are an American professional basketball team based in Detroit. The Pistons compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division and play their home games at Little Caesars Arena, located in Midtown. Founded in Fort Wayne, Indiana as a semi-professional company basketball team called the Fort Wayne Zollner Pistons in 1937, they would turn pro in 1941 as a member of the National Basketball League (NBL), where they won two NBL championships: in 1944 and 1945. The Pistons later joined the Basketball Association of America (BAA) in 1948. The NBL and BAA merged to become the NBA in 1949, and the Pistons became part of the merged league.[1][7] In 1957, the franchise moved to Detroit. The Pistons have won three NBA championships: in 1989, 1990 and 2004.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        displayName: 'Detroit Pistons',
        src: 'https://th.bing.com/th/id/OIP.y2ryze2lA2e0wePIID111AHaEk?w=281&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Indiana Pacers',
        contents: `The Indiana Pacers are an American professional basketball team based in Indianapolis. The Pacers compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. The Pacers were first established in 1967 as a member of the American Basketball Association (ABA) and became a member of the NBA in 1976 as a result of the ABA–NBA merger. They play their home games at Gainbridge Fieldhouse. The team is named after the state of Indiana's history with the Indianapolis 500's pace cars and with the harness racing industry.[8][9]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        uid: 'IND',
        src: 'https://th.bing.com/th/id/OIP.QIlA5ekwraIwHUHlgOkiggHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Milwaukee Bucks',
        contents: `The Milwaukee Bucks are an American professional basketball team based in Milwaukee. The Bucks compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. The team was founded in 1968 as an expansion team, and play at Fiserv Forum. Former U.S. Senator Herb Kohl was the long-time owner of the team, but on April 16, 2014, a group led by billionaire hedge fund managers Wes Edens and Marc Lasry agreed to purchase a majority interest in the team from Kohl, a sale which was approved by the owners of the NBA and its Board of Governors one month later on May 16.[11] The team is managed by Jon Horst the team's former director of basketball operations, who took over from John Hammond.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        uid: 'MIL',
        src: 'https://th.bing.com/th/id/OIP.pjMpMoWiUmu3FYRTNnZCSAHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Atlanta Hawks',
        contents: `The Atlanta Hawks are an American professional basketball team based in Atlanta. The Hawks compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The team plays its home games at State Farm Arena.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        uid: 'ATL',
        src: 'https://th.bing.com/th/id/OIP.LV08XBfQcH-9gVxR74G9lAHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Charlotte Hornets',
        contents: `The Charlotte Hornets are an American professional basketball team based in Charlotte, North Carolina. The Hornets compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division, and play their home games at the Spectrum Center in Uptown Charlotte. The Charlotte Hornets are mainly owned by Basketball Hall of Famer Michael Jordan, who acquired a controlling interest in the team in 2010.[8][9]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        uid: 'CHA',
        src: 'https://th.bing.com/th/id/OIP.sYj0-_Npf3hBsV1LgoKPCAHaFK?w=282&h=196&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Miami Heat',
        contents: `The Miami Heat are an American professional basketball team based in Miami. The Heat compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The club plays its home games at FTX Arena, and has won three NBA championships.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        uid: 'MIA',
        src: 'https://th.bing.com/th/id/OIP.WKyxsDVsWN3SEQU9n2KoMwHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Orlando Magic',
        contents: `The Orlando Magic are an American professional basketball team based in Orlando, Florida. The Magic compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The franchise was established in 1989 as an expansion franchise, and such notable NBA stars as Shaquille O'Neal, Penny Hardaway, Grant Hill, Tracy McGrady, Dwight Howard, Jameer Nelson, Rashard Lewis and Nikola Vučević have played for the club throughout its history. As of 2021, the franchise has played in the NBA playoffs 16 times in 32 seasons, and twice went to the NBA Finals, in 1995 and 2009. Orlando has been the second most successful of the four expansion teams brought into the league in 1988 and 1989 in terms of winning percentage and playoff success, after the Miami Heat.[8]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        uid: 'ORL',
        src: 'https://th.bing.com/th/id/OIP.-fPxSU4tc4QM6QViYJBS4wHaEK?w=278&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Washington Wizards',
        contents: `The Washington Wizards are an American professional basketball team based in Washington, D.C. The Wizards compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The team plays its home games at the Capital One Arena, in the Chinatown neighborhood of Washington, D.C.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        uid: 'WAS',
        src: 'https://snagfilms-a.akamaihd.net/32fe2852-2f70-4c25-92eb-4144030c5ea4/images/31/05/ed478bb3483f8ef35bd4ef7e5fbe/1521820404005_capitalonearenapromoimages-tab.jpg',
    },
    {
        displayName: 'Denver Nuggets',
        contents: `The Denver Nuggets are an American professional basketball team based in Denver. The Nuggets compete in the National Basketball Association (NBA) as a member of the league's Western Conference Northwest Division. The team was founded as the Denver Larks in 1967 as a charter franchise of the American Basketball Association (ABA), but changed their name to Rockets before the first season.[13] The Rockets then changed their name again to the Nuggets in 1974.[14] After the name change, the Nuggets played for the final ABA Championship title in 1976, losing to the New York Nets.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        uid: 'DEN',
        src: 'https://th.bing.com/th/id/OIP.Rv5WnasB0wTN4vkhzK8s2QHaEa?w=309&h=183&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Minnesota Timberwolves',
        contents: `The Minnesota Timberwolves are an American professional basketball team based in Minneapolis. The Timberwolves compete in the National Basketball Association (NBA) as a member of the league's Western Conference Northwest Division.[8] Founded in 1989, the team is owned by Glen Taylor who also owns the WNBA's Minnesota Lynx.[9] The Timberwolves play their home games at Target Center, their home since 1990.[10]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        uid: 'MIN',
        src: 'https://th.bing.com/th/id/OIP.sY0m4oQhMnT9GTXZL28LWQHaE8?w=300&h=200&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Oklahoma City Thunder',
        contents: `The Oklahoma City Thunder are an American professional basketball team based in Oklahoma City. The Thunder compete in the National Basketball Association (NBA) as a member of the league's Western Conference Northwest Division.[8][9] The team plays its home games at Paycom Center.[10]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        uid: 'OKC',
        src: 'https://th.bing.com/th/id/OIP.OAlwQeXWTJbgh_SYkfD5DwHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Portland Trail Blazers',
        contents: `The Portland Trail Blazers (colloquially known as the Blazers) are an American professional basketball team based in Portland, Oregon. The Trail Blazers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Northwest Division. The team played its home games in the Memorial Coliseum before moving to the Moda Center in 1995 (called the Rose Garden until 2013). The franchise entered the league as an expansion team in 1970, and has enjoyed a strong following: from 1977 through 1995, the team sold out 814 consecutive home games, the longest such streak in American major professional sports at the time, and only since surpassed by the Boston Red Sox.[10] The Trail Blazers are the only NBA team based in the Pacific Northwest, after the Vancouver Grizzlies relocated to Memphis and became the Memphis Grizzlies in 2001 and the Seattle SuperSonics relocated to Oklahoma City and became the Oklahoma City Thunder in 2008.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        uid: 'POR',
        src: 'https://th.bing.com/th/id/R.1d0cad06b6b20dba19c44867f2fd6270?rik=K8YveO1pvnvcpA&pid=ImgRaw&r=0',
    },
    {
        displayName: 'Utah Jazz',
        contents: `The Utah Jazz are an American professional basketball team based in Salt Lake City. The Jazz compete in the National Basketball Association (NBA) as a member of the league's Western Conference, Northwest Division. Since the 1991–92 season, the team has played its home games at Vivint Arena. The franchise began play as an expansion team in the 1974–75 season as the New Orleans Jazz (as a tribute to New Orleans' history of originating jazz music). The Jazz relocated to Salt Lake City prior to the 1979–80 season.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        uid: 'UTA',
        src: 'https://th.bing.com/th/id/R.7fe75f16b318b915763567530f06ddf8?rik=tkd0zmaMWIB%2bng&riu=http%3a%2f%2fcdn.chatsports.com%2fthumbnails%2f1350-39032-original.jpeg&ehk=JbVTBu%2bBdMaVlt1%2f69zLTFbGckg7zaLCi%2bixoPepWTc%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        displayName: 'Golden State Warriors',
        contents: `The Golden State Warriors are an American professional basketball team based in San Francisco. The Warriors compete in the National Basketball Association (NBA), as a member of the league's Western Conference Pacific Division. Founded in 1946 in Philadelphia, the Warriors moved to the San Francisco Bay Area in 1962 and took the city's name, before changing its geographic moniker to Golden State in 1971.[a][b] The club plays its home games at the Chase Center.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        uid: 'GSW',
        src: 'https://th.bing.com/th/id/OIP.38s7TAmJSLKg9VriUIAMCAHaE8?w=290&h=193&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'LA Clippers',
        contents: `The Los Angeles Clippers are an American professional basketball team based in Los Angeles. The Clippers compete in the National Basketball Association (NBA) as a member of the Pacific Division in the league's Western Conference. The Clippers play their home games at Crypto.com Arena, which they share with NBA team Los Angeles Lakers, the Los Angeles Sparks of the Women's National Basketball Association (WNBA), and the Los Angeles Kings of the National Hockey League (NHL). The Clippers plan to move into their own arena, the Intuit Dome, in nearby Inglewood by 2024.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        uid: 'LAC',
        src: 'https://th.bing.com/th/id/OIP.PvlDIgSACUyshtrctMTTIAHaE5?w=272&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Los Angeles Lakers',
        contents: `The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division. The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League.[9] The Lakers are one of the most successful teams in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history.[10]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        uid: 'LAL',
        src: 'https://th.bing.com/th/id/OIP.PvlDIgSACUyshtrctMTTIAHaE5?w=272&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Phoenix Suns',
        contents: `The Phoenix Suns are an American professional basketball team based in Phoenix, Arizona. They compete in the National Basketball Association (NBA), as a member of the league's Western Conference Pacific Division. The Suns are the only team in their division not to be based in California, and play their home games at the Footprint Center. The Suns are one of four major league sports teams based in the Phoenix area, but are the only one to bill themselves as representing the city (the other teams - the Cardinals, Coyotes, and Diamondbacks - all bill themselves as representing the state of Arizona).`,
        logo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        uid: 'PHX',
        src: 'https://th.bing.com/th/id/OIP.K9ENCYHFAeura9My-UR9owHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Sacramento Kings',
        contents: `The Sacramento Kings are an American professional basketball team based in Sacramento, California. The Kings compete in the National Basketball Association (NBA) as a member of the Western Conference Pacific Division. The Kings are the first and only team in the major professional North American sports leagues located in Sacramento. The team plays its home games at the Golden 1 Center. Their best seasons to date in the city were in the early 2000s, including a superintendent season in 2022. They also had a very successful 2001–02 season when they had the best record in the NBA at 61–21 (a winning percentage of .744).`,
        logo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        uid: 'SAC',
        src: 'https://th.bing.com/th/id/OIP.8yqhO-P9VP13BeNnlXaW6QHaD4?w=323&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Dallas Mavericks',
        contents: `The Dallas Mavericks (often referred to as the Mavs) are an American professional basketball team based in Dallas. The Mavericks compete in the National Basketball Association (NBA) as a member of the Western Conference Southwest Division. The team plays its home games at the American Airlines Center, which it shares with the National Hockey League's Dallas Stars.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        uid: 'DAL',
        src: 'https://th.bing.com/th/id/OIP.yoJZnTDSs1UbuNyv8E37ZQHaF8?w=206&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Houston Rockets',
        contents: `The Houston Rockets are an American professional basketball team based in Houston. The Rockets compete in the National Basketball Association (NBA) as a member team of the league's Western Conference Southwest Division. The team plays its home games at the Toyota Center, located in Downtown Houston. Throughout its history, Houston has won two NBA championships and four Western Conference titles. It was established in 1967 as the San Diego Rockets, an expansion team originally based in San Diego. In 1971, the Rockets relocated to Houston.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        uid: 'HOU',
        src: 'https://th.bing.com/th/id/OIP.8bKpqxZt-HGNwKHgpytn5gHaFj?w=287&h=215&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'Memphis Grizzlies',
        contents: `The Memphis Grizzlies (referred to locally as the Grizz) are an American professional basketball team based in Memphis, Tennessee. The Grizzlies compete in the National Basketball Association (NBA) as a member of the league's Western Conference Southwest Division. The Grizzlies play their home games at FedExForum. The team is owned by Robert Pera. The Grizzlies are currently the only team in the major professional North American sports leagues based in the city of Memphis, and the only professional basketball team in the state of Tennessee.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        uid: 'MEM',
        src: 'https://th.bing.com/th/id/OIP.9MIrEEIDqYvXscM08f4vIQHaE7?w=294&h=196&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'New Orleans Pelicans',
        contents: `The New Orleans Pelicans (often referred to as the Pels) are an American professional basketball team based in New Orleans. The Pelicans compete in the National Basketball Association (NBA) as a member of the league's Western Conference Southwest Division and play their home games at the Smoothie King Center. The NBA considers New Orleans an expansion team that began play in the 2002–03 season.[1]`,
        logo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        uid: 'NOP',
        src: 'https://th.bing.com/th/id/OIP.fpozIHcTodrv_peslmaKYwHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
        displayName: 'San Antonio Spurs',
        contents: `The San Antonio Spurs are an American professional basketball team based in San Antonio. The Spurs compete in the National Basketball Association (NBA) as a member of the league's Western Conference Southwest Division. The team plays its home games at the AT&T Center in San Antonio.`,
        logo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        uid: 'SAS',
        src: 'https://th.bing.com/th/id/OIP.8zGKJ-PC-QrL6zL99hcLQgHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7',
    },
];
