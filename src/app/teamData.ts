export interface StadiumData {
    name: string;
    src: string;
    capacity: number;
}

export interface WinLossRecord {
    win: number;
    loss: number;
}

export interface TeamHistory {
    championships: number;
    playoffAppearances: number;
    noteablePlayers: string[];
    allTimeBestPlayer: string;
    winLossRecord: WinLossRecord;
}

export interface TeamData {
    title: string;
    uid: string;
    position: google.maps.LatLngLiteral;
    logo: string;
    stadiumData: StadiumData;
    teamHistory: TeamHistory;
    summary: string;
}

export const nullTeam: TeamData = {
    title: '---',
    uid: '---',
    position: { lat: 0, lng: 0 },
    logo: 'https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg',
    stadiumData: {
        name: '---',
        src: 'https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg',
        capacity: 0,
    },
    teamHistory: {
        championships: 0,
        playoffAppearances: 0,
        noteablePlayers: [],
        allTimeBestPlayer: '---',
        winLossRecord: {
            win: 0,
            loss: 0,
        },
    },
    summary: 'No content specified.',
};

export const teams: TeamData[] = [
    {
        title: 'Boston Celtics',
        uid: 'BOS',
        position: { lat: 42.366238, lng: -71.06231 },
        logo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        stadiumData: {
            name: 'TD Garden',
            src: 'https://th.bing.com/th/id/OIP.aCx9109Yer3EmzVJgXe_jwHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 17565,
        },
        teamHistory: {
            championships: 17,
            playoffAppearances: 59,
            noteablePlayers: [
                'Bill Russell',
                'Larry Bird',
                'Paul Pierce',
                'John Havlicek',
                'Kevin McHale',
                'Kevin Garnett',
                'Ray Allen',
                'Jayson Tatum',
            ],
            allTimeBestPlayer: 'Bill Russell',
            winLossRecord: {
                win: 3513,
                loss: 2437,
            },
        },
        summary: '',
    },
    {
        title: 'Brooklyn Nets',
        uid: 'BKN',
        position: { lat: 40.6844, lng: -73.9777 },
        logo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        stadiumData: {
            name: "Barclay's Center",
            src: 'https://th.bing.com/th/id/OIP._4Iv9BbPUTt8xJGZRrq3ugHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7',
            capacity: 17000,
        },
        teamHistory: {
            championships: 2,
            playoffAppearances: 30,
            noteablePlayers: ['Jason Kidd', 'Julius Irving'],
            allTimeBestPlayer: 'Julius Irving',
            winLossRecord: {
                win: 1951,
                loss: 2497,
            },
        },
        summary: '',
    },
    {
        title: 'New York Knicks',
        uid: 'NYK',
        position: { lat: 40.750496, lng: -73.99339 },
        logo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        stadiumData: {
            name: 'Madison Square Garden',
            src: 'https://th.bing.com/th/id/OIP.BgCWWk6QLiTADHNn5skIRwHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7',
            capacity: 18200,
        },
        teamHistory: {
            championships: 2,
            playoffAppearances: 43,
            noteablePlayers: [
                'Patrick Ewing',
                'Walt Fraizer',
                'Charles Oakley',
                'John Starks',
                'Carmelo Anthony',
            ],
            allTimeBestPlayer: 'Patrick Ewing',
            winLossRecord: {
                win: 2877,
                loss: 3064,
            },
        },
        summary: '',
    },
    {
        title: 'Philadelphia 76ers',
        uid: 'PHI',
        position: { lat: 39.90111, lng: -75.17194 },
        logo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        stadiumData: {
            name: 'Wells Fargo Center',
            src: 'https://th.bing.com/th/id/OIP.Q3IZJnFN68L7RA76R_3ddAHaFS?pid=ImgDet&rs=1',
            capacity: 21000,
        },
        teamHistory: {
            championships: 3,
            playoffAppearances: 52,
            noteablePlayers: [
                'Julius Irving',
                'Charles Barkley',
                'Allen Iverson',
                'Wilt Chamberlain',
                'Joel Embiid',
            ],
            allTimeBestPlayer: 'Allen Iverson',
            winLossRecord: {
                win: 3000,
                loss: 2777,
            },
        },
        summary: '',
    },
    {
        title: 'Toronto Raptors',
        uid: 'TOR',
        position: { lat: 43.643925, lng: -79.37833 },
        logo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        stadiumData: {
            name: 'Scotiabank Arena',
            src: 'https://th.bing.com/th/id/OIP.KrY09touQt7LghzXVNjSMgHaE7?pid=ImgDet&rs=1',
            capacity: 19800,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 13,
            noteablePlayers: [
                'Kyle Lowry',
                'Chris Bosh',
                'Demar DeRozan',
                'Vince Carter',
            ],
            allTimeBestPlayer: 'Kyle Lowry',
            winLossRecord: {
                win: 1030,
                loss: 1116,
            },
        },
        summary: '',
    },
    {
        title: 'Chicago Bulls',
        uid: 'CHI',
        position: { lat: 41.881145, lng: -87.6742 },
        logo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        stadiumData: {
            name: 'United Center',
            src: 'https://th.bing.com/th/id/OIP.MVU9k-w11ktVmUt1em3UDwHaEK?w=268&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 20500,
        },
        teamHistory: {
            championships: 6,
            playoffAppearances: 36,
            noteablePlayers: [
                'Micheal Jordan',
                'Scottie Pippen',
                'Dennis Rodman',
                'Derick Rose',
            ],
            allTimeBestPlayer: 'Micheal Jordan',
            winLossRecord: {
                win: 2304,
                loss: 2212,
            },
        },
        summary: '',
    },
    {
        title: 'Cleveland Cavaliers',
        uid: 'CLE',
        position: { lat: 41.49656, lng: -81.68815 },
        logo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        stadiumData: {
            name: 'Rocket Mortgage Fieldhouse',
            src: 'https://th.bing.com/th/id/OIP.V1zda1rDeUr5WXZPYj0NRgHaE7?w=284&h=189&c=7&r=0&o=5&pid=1.7',
            capacity: 20562,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 22,
            noteablePlayers: ['LeBron James', 'Mark Price', 'Brad Daugherty'],
            allTimeBestPlayer: 'LeBron James',
            winLossRecord: {
                win: 1933,
                loss: 2256,
            },
        },
        summary: '',
    },
    {
        title: 'Detroit Pistons',
        uid: 'DET',
        position: { lat: 42.341087, lng: -83.055275 },
        logo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        stadiumData: {
            name: 'Little Caesars Arena',
            src: 'https://th.bing.com/th/id/OIP.y2ryze2lA2e0wePIID111AHaEk?w=281&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 20332,
        },
        teamHistory: {
            championships: 3,
            playoffAppearances: 42,
            noteablePlayers: [
                'Bill Lambier',
                'Bob Lanier',
                'Joe Dumars',
                'Isaiah Thomas',
                'Chauncey Billups',
                'Ben Wallace',
            ],
            allTimeBestPlayer: 'Isaiah Thomas',
            winLossRecord: {
                win: 2796,
                loss: 3038,
            },
        },
        summary: '',
    },
    {
        title: 'Indiana Pacers',
        uid: 'IND',
        position: { lat: 39.763924, lng: -86.155807 },
        logo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        stadiumData: {
            name: 'Gainbridge Fieldhouse',
            src: 'https://th.bing.com/th/id/OIP.QIlA5ekwraIwHUHlgOkiggHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 18345,
        },
        teamHistory: {
            championships: 3,
            playoffAppearances: 36,
            noteablePlayers: ['Reggie Miller', 'Billy Knight', 'Paul George'],
            allTimeBestPlayer: 'Reggie Miller',
            winLossRecord: {
                win: 2275,
                loss: 2173,
            },
        },
        summary: '',
    },
    {
        title: 'Milwaukee Bucks',
        uid: 'MIL',
        position: { lat: 43.04503, lng: -87.91817 },
        logo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        stadiumData: {
            name: 'Fiserv Forumn',
            src: 'https://th.bing.com/th/id/OIP.pjMpMoWiUmu3FYRTNnZCSAHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 17385,
        },
        teamHistory: {
            championships: 2,
            playoffAppearances: 34,
            noteablePlayers: [
                'Kareem Abdul-Jabbar',
                'Sidney Moncrieff',
                'Giannis Antetokounmpo',
                'Oscar Robertson',
            ],
            allTimeBestPlayer: 'Kareem Abdul-Jabbar',
            winLossRecord: {
                win: 2282,
                loss: 2079,
            },
        },
        summary: '',
    },
    {
        title: 'Atlanta Hawks',
        uid: 'ATL',
        position: { lat: 33.75722, lng: -84.39639 },
        logo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        stadiumData: {
            name: 'State Farm Arena',
            src: 'https://th.bing.com/th/id/OIP.LV08XBfQcH-9gVxR74G9lAHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7',
            capacity: 19050,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 48,
            noteablePlayers: [
                'Bob Pettit',
                'Dominique Wilkins',
                'Dikembe Mutumbo',
            ],
            allTimeBestPlayer: 'Dominique Wilkins',
            winLossRecord: {
                win: 2850,
                loss: 2923,
            },
        },
        summary: '',
    },
    {
        title: 'Charlotte Hornets',
        uid: 'CHA',
        position: { lat: 35.22516, lng: -80.83926 },
        logo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        stadiumData: {
            name: 'Spectrum Center',
            src: 'https://th.bing.com/th/id/OIP.sYj0-_Npf3hBsV1LgoKPCAHaFK?w=282&h=196&c=7&r=0&o=5&pid=1.7',
            capacity: 20200,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 10,
            noteablePlayers: [
                'Kemba Walker',
                'Muggsy Bouges',
                'Gerald Wallace',
                'Alonzo Mourning',
            ],
            allTimeBestPlayer: 'Kemba Walker',
            winLossRecord: {
                win: 1126,
                loss: 1423,
            },
        },
        summary: '',
    },
    {
        title: 'Miami Heat',
        uid: 'MIA',
        position: { lat: 25.781441, lng: -80.188332 },
        logo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        stadiumData: {
            name: 'FTX Arena',
            src: 'https://th.bing.com/th/id/OIP.WKyxsDVsWN3SEQU9n2KoMwHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 21000,
        },
        teamHistory: {
            championships: 3,
            playoffAppearances: 23,
            noteablePlayers: [
                'Dwayne Wade',
                'Lebron James',
                'Alonzo Mourning',
                'Tim Hardaway',
            ],
            allTimeBestPlayer: 'Dwayne Wade',
            winLossRecord: {
                win: 1431,
                loss: 1290,
            },
        },
        summary: '',
    },
    {
        title: 'Orlando Magic',
        uid: 'ORL',
        position: { lat: 28.539293, lng: -81.38396 },
        logo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        stadiumData: {
            name: 'Amway Center',
            src: 'https://th.bing.com/th/id/OIP.-fPxSU4tc4QM6QViYJBS4wHaEK?w=278&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 20000,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 16,
            noteablePlayers: [
                'Dwight Howard',
                "Shaquille O'Neal",
                'Tracy McGrady',
            ],
            allTimeBestPlayer: "Shaquille O'Neal",
            winLossRecord: {
                win: 1234,
                loss: 1405,
            },
        },
        summary: '',
    },
    {
        title: 'Washington Wizards',
        uid: 'WAS',
        position: { lat: 38.898129, lng: -77.021172 },
        logo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        stadiumData: {
            name: 'Capital One Arena',
            src: 'https://snagfilms-a.akamaihd.net/32fe2852-2f70-4c25-92eb-4144030c5ea4/images/31/05/ed478bb3483f8ef35bd4ef7e5fbe/1521820404005_capitalonearenapromoimages-tab.jpg',
            capacity: 20356,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 30,
            noteablePlayers: [
                'Wes Unseld',
                'Bradley Beal',
                'John Wall',
                'Gilbert Arenas',
            ],
            allTimeBestPlayer: 'Wes Unseld',
            winLossRecord: {
                win: 2222,
                loss: 2701,
            },
        },
        summary: '',
    },
    {
        title: 'Denver Nuggets',
        uid: 'DEN',
        position: { lat: 39.74869, lng: -105.007545 },
        logo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        stadiumData: {
            name: 'Ball Arena',
            src: 'https://th.bing.com/th/id/OIP.Rv5WnasB0wTN4vkhzK8s2QHaEa?w=309&h=183&c=7&r=0&o=5&pid=1.7',
            capacity: 18007,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 37,
            noteablePlayers: [
                'Alex English',
                'Nikola Jokic',
                'Carmelo Anthony',
                'Dikembe Mutumbo',
            ],
            allTimeBestPlayer: 'Nikola Jokic',
            winLossRecord: {
                win: 2257,
                loss: 2192,
            },
        },
        summary: '',
    },
    {
        title: 'Minnesota Timberwolves',
        uid: 'MIN',
        position: { lat: 44.97984, lng: -93.27657 },
        logo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        stadiumData: {
            name: 'Target Center',
            src: 'https://th.bing.com/th/id/OIP.sY0m4oQhMnT9GTXZL28LWQHaE8?w=300&h=200&c=7&r=0&o=5&pid=1.7',
            capacity: 20500,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 10,
            noteablePlayers: [
                'Kevin Garnett',
                'Karl Anthony Towns',
                'Kevin Love',
            ],
            allTimeBestPlayer: 'Kevin Garnett',
            winLossRecord: {
                win: 1049,
                loss: 1581,
            },
        },
        summary: '',
    },
    {
        title: 'Oklahoma City Thunder',
        uid: 'OKC',
        position: { lat: 35.463497, lng: -97.515114 },
        logo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        stadiumData: {
            name: 'Chesapeake Energy Arena',
            src: 'https://th.bing.com/th/id/OIP.OAlwQeXWTJbgh_SYkfD5DwHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 20000,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 32,
            noteablePlayers: [
                'Gary Payton',
                'Kevin Durant',
                'Russell Westbrook',
                'Shawn Kemp',
            ],
            allTimeBestPlayer: 'Kevin Durant',
            winLossRecord: {
                win: 2373,
                loss: 2069,
            },
        },
        summary: '',
    },
    {
        title: 'Portland Trail Blazers',
        uid: 'POR',
        position: { lat: 45.53159, lng: -122.666824 },
        logo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        stadiumData: {
            name: 'Moda Center',
            src: 'https://th.bing.com/th/id/R.1d0cad06b6b20dba19c44867f2fd6270?rik=K8YveO1pvnvcpA&pid=ImgRaw&r=0',
            capacity: 19393,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 37,
            noteablePlayers: [
                'Clyde Drexler',
                'Damian Lillard',
                'LaMarcus Aldridge',
                'Rasheed Wallace',
            ],
            allTimeBestPlayer: 'Damian Lillard',
            winLossRecord: {
                win: 2238,
                loss: 1960,
            },
        },
        summary: '',
    },
    {
        title: 'Utah Jazz',
        uid: 'UTA',
        position: { lat: 40.768265, lng: -111.90113 },
        logo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        stadiumData: {
            name: 'Vivint Smarthome Arena',
            src: 'https://th.bing.com/th/id/R.7fe75f16b318b915763567530f06ddf8?rik=tkd0zmaMWIB%2bng&riu=http%3a%2f%2fcdn.chatsports.com%2fthumbnails%2f1350-39032-original.jpeg&ehk=JbVTBu%2bBdMaVlt1%2f69zLTFbGckg7zaLCi%2bixoPepWTc%3d&risl=&pid=ImgRaw&r=0',
            capacity: 19980,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 31,
            noteablePlayers: [
                'Karl Malone',
                'John Stockton',
                'Rudy Gobert',
                'Adran Dantley',
                'Andre Kirelinko',
                'Jeff Hornacek',
                'Pete Maravich',
            ],
            allTimeBestPlayer: 'Karl Malone',
            winLossRecord: {
                win: 2109,
                loss: 1759,
            },
        },
        summary: '',
    },
    {
        title: 'Golden State Warriors',
        uid: 'GSW',
        position: { lat: 37.76786, lng: -122.38748 },
        logo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        stadiumData: {
            name: 'Chase Center',
            src: 'https://th.bing.com/th/id/OIP.38s7TAmJSLKg9VriUIAMCAHaE8?w=290&h=193&c=7&r=0&o=5&pid=1.7',
            capacity: 18064,
        },
        teamHistory: {
            championships: 7,
            playoffAppearances: 36,
            noteablePlayers: [
                'Steph Curry',
                'Wilt Chamberlain',
                'Rick Barry',
                'Nate Thurmond',
                'Draymond Green',
                'Klay Thompson',
            ],
            allTimeBestPlayer: 'Steph Curry',
            winLossRecord: {
                win: 2879,
                loss: 3060,
            },
        },
        summary: '',
    },
    {
        title: 'LA Clippers',
        uid: 'LAC',
        position: { lat: 34.043077, lng: -118.267606 },
        logo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        stadiumData: {
            name: 'Crypto.com Arena',
            src: 'https://th.bing.com/th/id/OIP.PvlDIgSACUyshtrctMTTIAHaE5?w=272&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 19067,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 16,
            noteablePlayers: [
                'Chris Paul',
                'DeAndre Jordan',
                'Blake Griffin',
                'Kawhi Leonard',
            ],
            allTimeBestPlayer: 'Chris Paul',
            winLossRecord: {
                win: 1748,
                loss: 2448,
            },
        },
        summary: '',
    },
    {
        title: 'Los Angeles Lakers',
        uid: 'LAL',
        position: { lat: 34.043087, lng: -118.267616 },
        logo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        stadiumData: {
            name: 'Crypto.com Arena',
            src: 'https://th.bing.com/th/id/OIP.PvlDIgSACUyshtrctMTTIAHaE5?w=272&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 19067,
        },
        teamHistory: {
            championships: 17,
            playoffAppearances: 62,
            noteablePlayers: [
                'Kobe Bryant',
                'Jerry West',
                'Kareen Abdul-Jabbar',
                'Magic Johnson',
                'Elgin Baylor',
                "Shaquille O'Neal",
                'Wilt Chamberlain',
            ],
            allTimeBestPlayer: 'Kobe Bryant',
            winLossRecord: {
                win: 3460,
                loss: 2380,
            },
        },
        summary: '',
    },
    {
        title: 'Phoenix Suns',
        uid: 'PHX',
        position: { lat: 33.445938, lng: -112.071487 },
        logo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        stadiumData: {
            name: 'Talking Stick Arena',
            src: 'https://th.bing.com/th/id/OIP.K9ENCYHFAeura9My-UR9owHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 18000,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 31,
            noteablePlayers: [
                'Shawn Marrion',
                'Steve Nash',
                "Amar'e Stoudamire",
                'Charles Barkley',
            ],
            allTimeBestPlayer: 'Charles Barkley',
            winLossRecord: {
                win: 2335,
                loss: 2026,
            },
        },
        summary: '',
    },
    {
        title: 'Sacramento Kings',
        uid: 'SAC',
        position: { lat: 38.580215, lng: -121.49959 },
        logo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        stadiumData: {
            name: 'Golden 1 Center',
            src: 'https://th.bing.com/th/id/OIP.8yqhO-P9VP13BeNnlXaW6QHaD4?w=323&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 17608,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 29,
            noteablePlayers: [
                'Oscar Robertson',
                'Peja Stojakovic',
                'Tiny Archibald',
                'Chris Webber',
            ],
            allTimeBestPlayer: 'Oscar Robertson',
            winLossRecord: {
                win: 2654,
                loss: 3187,
            },
        },
        summary: '',
    },
    {
        title: 'Dallas Mavericks',
        uid: 'DAL',
        position: { lat: 32.7905, lng: -96.810394 },
        logo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        stadiumData: {
            name: 'American Airlines Center',
            src: 'https://th.bing.com/th/id/OIP.yoJZnTDSs1UbuNyv8E37ZQHaF8?w=206&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 18500,
        },
        teamHistory: {
            championships: 1,
            playoffAppearances: 24,
            noteablePlayers: [
                'Dirk Nowitzki',
                'Jason Terry',
                'Sam Perkins',
                'Luka Doncic',
            ],
            allTimeBestPlayer: 'Dirk Nowitzki',
            winLossRecord: {
                win: 1709,
                loss: 1670,
            },
        },
        summary: '',
    },
    {
        title: 'Houston Rockets',
        uid: 'HOU',
        position: { lat: 29.751625, lng: -95.36236 },
        logo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        stadiumData: {
            name: 'Toyota Center',
            src: 'https://th.bing.com/th/id/OIP.8bKpqxZt-HGNwKHgpytn5gHaFj?w=287&h=215&c=7&r=0&o=5&pid=1.7',
            capacity: 18055,
        },
        teamHistory: {
            championships: 2,
            playoffAppearances: 34,
            noteablePlayers: [
                'Hakeem Olajuwon',
                'James Harden',
                'Moses Malone',
                'Yao Ming',
            ],
            allTimeBestPlayer: 'Hakeem Olajuwon',
            winLossRecord: {
                win: 2306,
                loss: 2136,
            },
        },
        summary: '',
    },
    {
        title: 'Memphis Grizzlies',
        uid: 'MEM',
        position: { lat: 35.13823, lng: -90.05046 },
        logo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        stadiumData: {
            name: 'FedExForum',
            src: 'https://th.bing.com/th/id/OIP.9MIrEEIDqYvXscM08f4vIQHaE7?w=294&h=196&c=7&r=0&o=5&pid=1.7',
            capacity: 18119,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 12,
            noteablePlayers: [
                'Marc Gasol',
                'Mike Conley',
                'Zach Randolph',
                'Shane Battier',
            ],
            allTimeBestPlayer: 'Marc Gasol',
            winLossRecord: {
                win: 920,
                loss: 1227,
            },
        },
        summary: '',
    },
    {
        title: 'New Orleans Pelicans',
        uid: 'NOP',
        position: { lat: 29.94903, lng: -90.082298 },
        logo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        stadiumData: {
            name: 'Smoothie King Center',
            src: 'https://th.bing.com/th/id/OIP.fpozIHcTodrv_peslmaKYwHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 18000,
        },
        teamHistory: {
            championships: 0,
            playoffAppearances: 8,
            noteablePlayers: [
                'Chris Paul',
                'Anthony Davis',
                'David West',
                'Zion Williamson',
            ],
            allTimeBestPlayer: 'Chris Paul',
            winLossRecord: {
                win: 740,
                loss: 864,
            },
        },
        summary: '',
    },
    {
        title: 'San Antonio Spurs',
        uid: 'SAS',
        position: { lat: 29.42694, lng: -98.43747 },
        logo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        stadiumData: {
            name: 'AT&T Center',
            src: 'https://th.bing.com/th/id/OIP.8zGKJ-PC-QrL6zL99hcLQgHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7',
            capacity: 18581,
        },
        teamHistory: {
            championships: 5,
            playoffAppearances: 47,
            noteablePlayers: [
                'Tim Duncan',
                'David Robinson',
                'Tony Parker',
                'George Gervin',
                'Manu Ginobli',
                'Kawhi Leonard',
            ],
            allTimeBestPlayer: 'Tim Duncan',
            winLossRecord: {
                win: 2639,
                loss: 1808,
            },
        },
        summary: '',
    },
];
