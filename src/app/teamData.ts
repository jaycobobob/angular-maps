export interface StadiumData {
    name: string;
    src: string;
    capacity: number;
    address: string;
    avgTicketPrice: number;
    cheapestTicketPrice: number;
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
        address: '',
        avgTicketPrice: 0,
        cheapestTicketPrice: 0,
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
            src: 'https://th.bing.com/th/id/R.a2bd0fe97c81d9de15f3784de448d674?rik=jOUAO3CazVFHVA&pid=ImgRaw&r=0',
            capacity: 17565,
            address: '100 Legends Way, Boston, MA 02114',
            avgTicketPrice: 309,
            cheapestTicketPrice: 13,
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
        summary:
            "The Boston Celtics are one of the most storied franchises in the NBA, tied for the most number of championships in NBA History with the Los Angeles Lakers at 17 each.  The majority of their championships were won in the 1960's led by Bill Russell.  His 11 championships are the most of any player in NBA history.  Even after Russell, the Celtics continued to enjoy success, drafting Larry Bird and forming one of the most legendary rivalies of all time between him and Magic Johnson.  In 2008, the Celtics won a championship led by Paul Piece, Ray Allen, Kevin Garnett, and Rajon Rondo.  Most recently, they lost in the 2022 NBA finals to the Golden State Warriors.",
    },
    {
        title: 'Brooklyn Nets',
        uid: 'BKN',
        position: { lat: 40.6844, lng: -73.9777 },
        logo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        stadiumData: {
            name: "Barclay's Center",
            src: 'https://th.bing.com/th/id/OIP.IOX51YczTa5JNrExObRNrwHaEb?pid=ImgDet&rs=1',
            capacity: 17000,
            address: '620 Atlantic Ave, Brooklyn, NY 11217',
            avgTicketPrice: 339,
            cheapestTicketPrice: 12,
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
        summary:
            'The Brooklyn Nets began their history as the New Jersey Nets as part of the American Basketball Association.  In 2002 and 2003, the Nets reached the NBA finals, led by superstar point guard Jason Kidd, but were defeated by the Kobe and Shaq Lakers both times. In 2012, the team moved to Brooklyn, where it has been ever since.  In 2013, the team traded for Celtics stars Kevin Garnett and Paul Piece, a trade that ended up very poorly for the Nets.  In the summer of 2019, the team signed free agents Kevin Durant and Kyrie Irving, and then traded for superstar James Harden in October 2021.  After multiple shortcomings in the playoffs, Harden requested a trade, and was traded to Philadelphia.  Most recently, both Kevin Durant and Kyrie Irving have also requested to be traded, making this another failed superteam for the Nets.',
    },
    {
        title: 'New York Knicks',
        uid: 'NYK',
        position: { lat: 40.750496, lng: -73.99339 },
        logo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        stadiumData: {
            name: 'Madison Square Garden',
            src: 'https://media.timeout.com/images/102717039/image.jpg',
            capacity: 18200,
            address: '4 Pennsylvania Plz, New York, NY 10001',
            avgTicketPrice: 394,
            cheapestTicketPrice: 32,
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
        summary:
            "The New York Knickerbockers, more commonly referred to as the New York Knicks, were one of the founding members of the National Basketball Association.  They won championships in 1970 and 1973, but have since failed to reclaim the glory of their early days.  Throughout the 1990's, the Knicks, lead by Patrick Ewing, were repeatedly eliminated by Micheal Jordan and the Chicago Bulls, and despite playing in the biggest market in the NBA, have failed to recruit any superstar players to help them reclaim their spot atop the NBA.  Most recently, they signed Mavericks guard Jalen Brunson to a 4 year, 110 million dollar deal and are hoping him and young star guard RJ Barret can help them make a deep playoff run.",
    },
    {
        title: 'Philadelphia 76ers',
        uid: 'PHI',
        position: { lat: 39.90111, lng: -75.17194 },
        logo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        stadiumData: {
            name: 'Wells Fargo Center',
            src: 'https://th.bing.com/th/id/R.4163c36d0f5c447f76ebe07355ebabe2?rik=%2fzBO9Mm9OOtGcA&riu=http%3a%2f%2ffastphillysports.com%2fwp-content%2fuploads%2f2018%2f03%2fwells.jpg&ehk=T0VIg%2b5iX7eU%2bKIdScq33a1Kd8%2bhpjsOCUVpaZ15hoY%3d&risl=&pid=ImgRaw&r=0',
            capacity: 21000,
            address: '3601 S Broad St, Philadelphia, PA 19148',
            avgTicketPrice: 204,
            cheapestTicketPrice: 9,
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
        summary:
            'The Philadelphia 76ers, commonly referred to as the Sixers, have enjoyed a prominent history, with many Hall of Fame players having played for the organization.  They won three championships before 1983, but have failed to win since.  The 76ers have only been back to the NBA Finals once since then: in 2001, where they were led by Iverson and lost to the Los Angeles Lakers in five games.  In 2012, the Sixers began what would become known as "The Process", during which they tried to lose as many games as possible with the hopes of landing multiple high draft picks in the lottery.  The Process resulted in Joel Embiid and Ben Simmons, two superstar NBA talents.  Most recently, due to numerous playoff disappointments, the Sixers traded Simmons for James Harden, and are hoping to make a deep run with him and Joel Embiid.',
    },
    {
        title: 'Toronto Raptors',
        uid: 'TOR',
        position: { lat: 43.643925, lng: -79.37833 },
        logo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        stadiumData: {
            name: 'Scotiabank Arena',
            src: 'https://media.blogto.com/articles/20190530-gameday.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
            capacity: 19800,
            address: '40 Bay Street, Toronto Ontario M5J 2X2',
            avgTicketPrice: 208,
            cheapestTicketPrice: 37,
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
        summary:
            'The Toronto Raptors started as an expansion team in 1995.  As with most expansion teams, the Raptors struggled in their early seasons, before eventually drafting Vince Carter and Chris Bosh.  After limited playoff success, both players left the team.  The Raptors rebuilt their roster around guard Kyle Lowry and wing DeMar DeRozen.  This team was significantly better, but unfortunately ran into LeBron James and the Cavaliers, earning the city the nickname "LeBronto" due how dominant Lebron was in those series against them.  In 2018, the Raptors traded DeRozan for disgrunted superstar Kawhi Leonard.  The Raptors won the championship that season, but lost Leonard in free agency.  Most recently, they drafted Scottie Barnes and are looking to retool the roster into a contender once more.',
    },
    {
        title: 'Chicago Bulls',
        uid: 'CHI',
        position: { lat: 41.881145, lng: -87.6742 },
        logo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        stadiumData: {
            name: 'United Center',
            src: 'https://th.bing.com/th/id/OIP.MVU9k-w11ktVmUt1em3UDwHaEK?pid=ImgDet&rs=1',
            capacity: 20500,
            address: '1901 W Madison St, Chicago, IL 60612',
            avgTicketPrice: 225,
            cheapestTicketPrice: 26,
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
        summary:
            "The Bulls saw their greatest success during the 1990s when they played a major part in popularizing the NBA worldwide. They are known for having one of the NBA's greatest dynasties, winning six NBA championships between 1991 and 1998 with two three-peats. All six of their championship teams were led by Hall of Famers Michael Jordan, Scottie Pippen, and coach Phil Jackson. The Bulls are the only NBA franchise to win multiple championships while never losing an NBA Finals series in their history. The Bulls won 72 games during the 1995-96 season, setting an NBA record that stood until the Golden State Warriors won 73 games during the 2015–16 season. The Bulls were the first team in NBA history to win 70 games or more in a single season, and the only NBA franchise to do so until the 2015-16 Warriors.  Since 1998, the Bulls have failed to regain their former success. The franchise struggled throughout the 2000s, but showed promise in the early 2010s led by Derrick Rose and Joakim Noah, culminating in back-to-back seasons above .732 in 2010-11 and 2011-12. However due to injuries to and departures of key players, the franchise was never able to build on that success and has sunk back into mediocrity since.",
    },
    {
        title: 'Cleveland Cavaliers',
        uid: 'CLE',
        position: { lat: 41.49656, lng: -81.68815 },
        logo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        stadiumData: {
            name: 'Rocket Mortgage Fieldhouse',
            src: 'https://www.architecturalrecord.com/ext/resources/Issues/2020/08-August/Rocket-Mortgage-FieldHouse-01-B.jpg?1596653435',
            capacity: 20562,
            address: '1 Center Ct, Cleveland, OH 44115',
            avgTicketPrice: 102,
            cheapestTicketPrice: 10,
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
        summary:
            "During the latter half of the 1980s and through much of the 1990s, the Cavs were a regular playoff contender, led by players such as Mark Price and Brad Daugherty, and advanced to the Eastern Conference Finals in 1992. After the team's playoff appearance in 1998, however, the Cavs had six consecutive losing seasons with no playoff action. Cleveland was awarded with the top overall pick in the 2003 draft, and they selected LeBron James. Behind James and Zydrunas Ilgauskas, the Cavaliers again became a regular playoff contender by 2005. They made their first appearance in the NBA Finals in 2007 after winning the first Eastern Conference championship in franchise history. After failing to return to the NBA Finals in the ensuing three seasons, James joined the Miami Heat in 2010. As a result, the Cavaliers finished the 2010–11 season last in the conference, enduring a 26-game losing streak, the second-longest in NBA history. Between 2010 and 2014, however, the team won the top pick in the NBA draft lottery three times, first in 2011 where they selected Kyrie Irving, and again in 2013 and 2014.  James returned to the Cavs in 2014 and led the team to four straight NBA Finals appearances. In 2016, the Cavaliers won their first NBA Championship, marking Cleveland's first major sports title since 1964. The 2016 NBA Finals victory over the Golden State Warriors marked the first time in Finals history a team had come back to win the series after trailing three games to one.  Since then, LeBron has left for the Los Angeles Lakers and the team is rebuilding around All Star Darius Garland and rookie bigman Evan Mobley.",
    },
    {
        title: 'Detroit Pistons',
        uid: 'DET',
        position: { lat: 42.341087, lng: -83.055275 },
        logo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        stadiumData: {
            name: 'Little Caesars Arena',
            src: 'https://bluewatertech-com.exactdn.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-10-at-2.47.19-PM.png?strip=all&lossy=1&ssl=1',
            capacity: 20332,
            address: '2645 Woodward Avenue, Detroit, MI 48201',
            avgTicketPrice: 102,
            cheapestTicketPrice: 12,
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
        summary:
            'The Detroit Pistons are primarily known for the Bad Boy Pistons Era, during which they beat teams with their physical style of play and defense first philosophy.  Lead by super star guard Isaiah Thomas and bigman Bill Lambier, the Pistons won two titles in 1989 and 1990.  Due to player retirements and injuries, the Bad Boy Pistons were never able to achieve the same level of success again.  Until 2004, that is.  In 2004, the Pistons, now lead by Ben Wallace and Chauncey Billups, were able to defeat the defending champion Los Angeles Lakers lead by Shaq and Kobe. This Pistons team is largely considered the only team to win a championship without a true superstar, relying on their teamwork, disciple, and tough defense rather than star power to win.  Most recently, the Pistons have drafted guards Cade Cunningham and Jaden Ivey and hope to build a contending roster around them.',
    },
    {
        title: 'Indiana Pacers',
        uid: 'IND',
        position: { lat: 39.763924, lng: -86.155807 },
        logo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        stadiumData: {
            name: 'Gainbridge Fieldhouse',
            src: 'https://cloudinary-assets.dostuffmedia.com/res/dostuff-media/image/upload/venue-45792/1477518155.jpg',
            capacity: 18345,
            address: '125 S Pennsylvania St, Indianapolis, IN 46204',
            avgTicketPrice: 141,
            cheapestTicketPrice: 12,
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
        summary:
            "Despite being a dynasty in the American Basketball Association, the Pacers have struggled since joining the NBA.  Throughout the 1980's, the Pacers struggled for relevance, falling victim to several poor trades by the front office.  In 1987, the Pacers drafted Reggie Miller, who would go on to become one of the greatest shooters in NBA history.  Despite this, the Pacers struggled to make a deep playoff run.  In 2010, the Pacers drafted Paul George, who would go on to become a superstar.  However, like many teams in the east in the 2010's, they would fail to reach an NBA finals due to LeBron James's dominance over the conference.  George was traded to the thunder in 2017.  Most recently, the Pacers traded for young guard Tyrese Haliburton, and are attempting to rebuild the roster around him.",
    },
    {
        title: 'Milwaukee Bucks',
        uid: 'MIL',
        position: { lat: 43.04503, lng: -87.91817 },
        logo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        stadiumData: {
            name: 'Fiserv Forumn',
            src: 'https://static.billboard.com/files/media/Exterior-with-statue-credit-Kenny-Yoo-Milwaukee-Bucks-2018-billboard-1548-1024x677.jpg',
            capacity: 17385,
            address: '1111 N Vel R Phillips Ave, Milwaukee, WI 53203',
            avgTicketPrice: 265,
            cheapestTicketPrice: 20,
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
        summary:
            "The Bucks enjoyed dominance in the late 1960's and early 1970's due to superstars Kareem Abdul-Jabbar and Oscar Robertson, winning the championship in the 1971 season.  In 1975, Kareem requested a trade to the Lakers, after which the Bucks would suffer in mediocrity until the 1980's.  Due to the strong play of Sidney Moncrief, the Bucks would go on to have a winning record from 1979 to 1990.  After injuries and trades dismantled the team, the Bucks would once again return to mediocrity.  In 2013, the Bucks drafted Giannis Antetokounmpo, a raw prospect from Greece.  His selection was viewed as a risk, but with high upside should he develop properly.  Every season since, Giannis has continued to get better and better as a player, and is currently viewed as the best player in the world.  In 2021, Giannis lead the Bucks to a championship against the Phoenix Suns, the first since Kareem's days with the team.  This dominant run culimated in a 50 point close out game.  Most recently, the Bucks are continuing to compete for titles with Giannis and will mostly likely do so for the next decade.",
    },
    {
        title: 'Atlanta Hawks',
        uid: 'ATL',
        position: { lat: 33.75722, lng: -84.39639 },
        logo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        stadiumData: {
            name: 'State Farm Arena',
            src: 'https://cdn.vox-cdn.com/thumbor/z-N7VC1VoZBm9Os1JHGWHokgM3k=/0x0:920x613/1200x800/filters:focal(387x234:533x380)/cdn.vox-cdn.com/uploads/chorus_image/image/61897909/State_Farm_Arena__Brow.0.0.jpg',
            capacity: 19050,
            address: '1 Philips Drive, Atlanta, GA 30303',
            avgTicketPrice: 219,
            cheapestTicketPrice: 15,
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
        summary:
            "The Hawks currently own the second-longest drought (behind the Sacramento Kings) of not winning an NBA championship at 63 seasons. The franchise's lone NBA championship, as well as all four NBA Finals appearances, occurred when the team was based in St. Louis. Meanwhile, they went 48 years without advancing past the second round of the playoffs in any format, until finally breaking through in 2015. However, the Hawks are one of only four NBA teams that have qualified to play in the NBA playoffs in 10 consecutive seasons in the 21st century. They achieved this feat between 2008 and 2017.  Most recently, the Hawks drafted superstar guard Trae Young, and after making the conference finals in 2021, are looking to continue to build a team that can compete for an NBA championship.",
    },
    {
        title: 'Charlotte Hornets',
        uid: 'CHA',
        position: { lat: 35.22516, lng: -80.83926 },
        logo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        stadiumData: {
            name: 'Spectrum Center',
            src: 'https://th.bing.com/th/id/R.b188f4fbf3697f7841b15d4b82828f08?rik=Sbmtw6Jp%2bGtxnw&riu=http%3a%2f%2fwww.odell.com%2fwp-content%2fgallery%2fspectrum-center%2fBobcats.plaza_.jpg&ehk=XLcnpd5GZh1ORBj4IRiNJaaV9GBLVXUL%2fyWijoT7ym0%3d&risl=&pid=ImgRaw&r=0',
            capacity: 20200,
            address: '333 E Trade St, Charlotte, NC 28202',
            avgTicketPrice: 142,
            cheapestTicketPrice: 6,
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
        summary:
            'The Charlotte Hornets franchise was established in 1988 as an expansion team owned by George Shinn. In 2002, Shinn relinquished his original franchise and acquired a new franchise in New Orleans. Although Shinn was controversially permitted to relocate his basketball organization to that city, an agreement was eventually reached in which Charlotte was permitted to retain the history and records of the team spanning from 1988 to 2002.  After suspending operations for two seasons the Charlotte franchise, rebranded at the time as the Charlotte Bobcats, was reactivated under new ownership in the 2004-05 NBA season.  In 2013, the Bobcats announced that they would change their name to the Charlotte Hornets once again for the 2014-15 season.  The Charlotte Hornets are mainly owned by Basketball Hall of Famer Michael Jordan, who acquired a controlling interest in the team in 2010.  The Hornets have achieved very little success over the years, and are currently hoping to build a competitive team around superstar guard LaMelo Ball.',
    },
    {
        title: 'Miami Heat',
        uid: 'MIA',
        position: { lat: 25.781441, lng: -80.188332 },
        logo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        stadiumData: {
            name: 'FTX Arena',
            src: 'https://images.miamiandbeaches.com/crm/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/AAArena_Miami_Heat_aerial_1440x9000-cb3c4e215056a36_cb3c4f3a-5056-a36a-0b9a70bbc9e9dc68.jpg',
            capacity: 21000,
            address: '601 Biscayne Blvd, Miami, FL 33132',
            avgTicketPrice: 219,
            cheapestTicketPrice: 9,
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
        summary:
            'The franchise began play in the 1988-89 season as an expansion team. After a period of mediocrity, the Heat gained relevance in the mid-1990s when Pat Riley became team president and head coach. Riley constructed the trades of Alonzo Mourning and Tim Hardaway, which propelled the team into playoff contention. Mourning and Hardaway led the Heat to four consecutive division titles prior to their departures in 2001 and 2002, respectively. The team also experienced success after drafting Dwyane Wade in 2003.  Led by Wade and, following a trade for former NBA Most Valuable Player (MVP) Shaquille O\'Neal, the Heat won their first NBA title in 2006, after Riley named himself head coach for a second stint. After the departure of O\'Neal two years later, the team struggled for the remainder of the 2000s. Riley remained team president, but was replaced as head coach by Erik Spoelstra. In 2010, the Heat signed reigning league MVP LeBron James and NBA All-Star Chris Bosh, creating the "Big Three" along with Wade. During their four years together, Spoelstra, James, Wade, and Bosh led the Heat to the NBA Finals in every season, culminating in back-to-back championships in 2012 and 2013. All three departed by 2016, and the team entered a period of rebuilding. After acquiring All-Star Jimmy Butler in 2019, the Heat returned to the NBA Finals in 2020. Most recently, the Heat acquired six-time NBA All-Star Kyle Lowry in 2021, and are hoping to return to the NBA Finals once again.',
    },
    {
        title: 'Orlando Magic',
        uid: 'ORL',
        position: { lat: 28.539293, lng: -81.38396 },
        logo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        stadiumData: {
            name: 'Amway Center',
            src: 'https://th.bing.com/th/id/R.a185c8142d1024450b15251f0913c9bf?rik=7L9w2C5ujQ4lcQ&riu=http%3a%2f%2fstadiumparkingguides.com%2fwp-content%2fuploads%2f2014%2f12%2fOrlando-ExternalPicture.jpg&ehk=pfY3CkiWF3foUJ5JeudUmj%2fh%2f10Dx1wGFCqnBvKv%2bs8%3d&risl=&pid=ImgRaw&r=0',
            capacity: 20000,
            address: '',
            avgTicketPrice: 105,
            cheapestTicketPrice: 11,
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
        summary: `The franchise, along with the Minnesota Timberwolves, joined the NBA as an expansion team in the 1989-90 season. During its first three years the Magic's play was mediocre and the team posted losing records, but the Magic began a remarkably quick turnaround when it selected centre Shaquille O'Neal with the first overall pick of the 1992 NBA draft. Led by O'Neal, the Magic added 20 wins to its previous year's total in his first season to finish with a 41-41 record and a tie for the last playoff position in the Eastern Conference, which it lost in a tiebreaker with the Indiana Pacers. The lost tiebreaker proved fortuitous, for it placed the Magic in the 1993 draft lottery, which the Magic won despite having only a 1.5 percent chance of attaining the first overall draft choice. The team traded the player it selected, Chris Webber, for the third selection, point guard Penny Hardaway, and future draft picks.  The young Magic team qualified for its first playoff berth in the 1993-94 season, an accomplishment it bettered in 1994-95 by advancing to the NBA finals in its sixth year of existence. The Magic were swept by the Houston Rockets in four games, but the team's future nevertheless seemed bright. At the end of the 1995-96 season, however, O'Neal moved to the Los Angeles Lakers after signing the largest free-agent contract in NBA history, and Orlando was left without its marquee player. The Magic entered into a period of regular-season success followed by losses in the first round of the postseason, during which the franchise traded away the injury-plagued Hardaway in 1999.  Orlando sank to the worst record in the league in 2003-04, but the team again won the draft lottery at the end of the season. The Magic used its selection to draft high-school centre Dwight Howard, who provided the low-post dominance the team had lacked since O'Neal's departure, and the Magic began another turnaround. The Magic added free-agent forwards Hedo Turkoglu and Rashard Lewis, and the team reached the second round of the playoffs in 2007-08. Behind the exceptional play of the star trio, the Magic once again advanced to the NBA finals during the 2008-09 season, where it lost to the Lakers in five games. Turkoglu left the team the following off-season, but the Magic had another strong campaign in 2009-10 before ultimately losing to the Boston Celtics in the Eastern Conference finals. Howard began to openly agitate for a trade during the 2011-12 season, and he was ultimately dealt to the Lakers in August 2012. The rebuilding Magic then posted the worst record in the NBA in 2012-13, which was the first of five consecutive last-place finishes in the divisional standings for the beleaguered franchise. In 2018-19 new head coach Steve Clifford guided the Magic to a surprising division title and a first-round postseason loss. The team repeated that playoff result in 2019-20, but an injury-riddled 2020-21 season saw the team trade away many of its major contributors and finish with the third worst record in the NBA, leading the franchise and Clifford to part ways at season's end.  Most recently, the Magic Drafted Paolo Banchero and are hoping to rebuild around him.`,
    },
    {
        title: 'Washington Wizards',
        uid: 'WAS',
        position: { lat: 38.898129, lng: -77.021172 },
        logo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        stadiumData: {
            name: 'Capital One Arena',
            src: 'https://th.bing.com/th/id/R.0d08b40fd5fd60f444300edbd2c2cda0?rik=USb9kAt6REJOQw&riu=http%3a%2f%2fsnagfilms-a.akamaihd.net%2fcf%2f9b%2fe264fb9047c7b96f3018eb0faf01%2fwashington-valor-sign-on-verizon-center.jpg&ehk=qtY1yadFeUfqsjFH9PEGMHBQuXS2r%2fgyRczf59a31oI%3d&risl=&pid=ImgRaw&r=0',
            capacity: 20356,
            address: '400 W Church St, Orlando, FL 32801',
            avgTicketPrice: 130,
            cheapestTicketPrice: 12,
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
        summary:
            'In 2000 retired NBA superstar Michael Jordan became minority owner and the president of basketball operations of the team. He came out of retirement to play for the Wizards the following year, but he was relatively ineffective in his return to the court and retired permanently in 2003. Soon thereafter, citing poor management decisions by Jordan, Pollin shocked fans and commentators by choosing not to retain the best-known player in basketball history as team president. The Wizards returned to the postseason in the mid-decade, led by the play of All-Stars Gilbert Arenas, Antawn Jamison, and Caron Butler, but fell back to the lower echelons of the league in the 2008-09 season and traded most of their star players over the following years.  Behind the play of outstanding young point guard John Wall, the Wizards made it back to the playoffs in the 2013–14 season. In 2016–17 Wall led the Wizards to the team’s first division title in 38 years, and their season ended with a hard-fought seven-game series loss in the conference semifinals. An injury-riddled Wizards team returned to the postseason the following year, losing in the first round of the playoffs. Wall suffered a ruptured Achilles tendon during the 2018–19 season, which ended with Washington winning just 32 games and finishing outside of postseason contention.  Most recently, the Wizards gave superstar guard Bradley Beal a 5 year, 250 million dollar extension, signalling that the franchise has no idea what direction it wants to go in.',
    },
    {
        title: 'Denver Nuggets',
        uid: 'DEN',
        position: { lat: 39.74869, lng: -105.007545 },
        logo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        stadiumData: {
            name: 'Ball Arena',
            src: 'https://www.multivu.com/players/English/8651052-ball-corporation-kroenke-sports-and-entertainment-partnership/image/BallArenaExterior_1603371160943-HR.jpg',
            capacity: 18007,
            address: '1000 Chopper Cir, Denver, CO 80204',
            avgTicketPrice: 200,
            cheapestTicketPrice: 11,
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
        summary:
            "In the 2003 NBA draft, the Nuggets selected forward Carmelo Anthony with the third overall pick. In the 2003-04 season, Anthony's presence helped spur a 26-win improvement from the previous season, and the Nuggets ended an eight-year playoff drought. Denver qualified for the postseason each year from the 2003-04 season to 2007-08, but the Nuggets failed to advance past the first round on each occasion. The team acquired veteran point guard Chauncey Billups early in 2008-09, and at the end of the season he helped Anthony guide the Nuggets to victories in both the first and second round of the Western Conference playoffs before losing to the Los Angeles Lakers in the conference finals. Following another first-round postseason elimination in 2009-10 and amid speculation that Anthony, a free agent at the end of the 2010-11 season, was soon to leave the franchise, both he and Billups were traded to the New York Knicks in February 2011.  The Nuggets rebuilt around a core of young versatile players who helped the team win a franchise-record (for an 82-game NBA season) 57 games in 2012-13, but the Nuggets' string of postseason disappointments continued as the team was upset in the opening round of the playoffs. The team surprisingly fired reigning NBA Coach of the Year George Karl in the off-season, and Denver's 10-year streak of playoff berths ended the following season. The Nuggets won a division title and returned to the playoffs (which ended in a conference semifinals loss) in 2018-19 behind the play of superstar center Nikola Jokic.  Most recently, the Nuggets are attempting to build a competetive roster around Jokic, now a two time MVP, suffering from repetitve injuries to his two best teammates, Jamal Murray and Micheal Porter Jr.",
    },
    {
        title: 'Minnesota Timberwolves',
        uid: 'MIN',
        position: { lat: 44.97984, lng: -93.27657 },
        logo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        stadiumData: {
            name: 'Target Center',
            src: 'https://th.bing.com/th/id/R.342dc5bd2416cb92c9c6bf9c985cd1de?rik=3bvE1aByN5UhIA&riu=http%3a%2f%2farenadigest.com%2fwp-content%2fuploads%2f2017%2f12%2ftargetcenter2017-1280.jpg&ehk=PdKKMfFZXFY%2fuxR254E%2f%2fJ0TFpZjaKCYm3nq6S4zMo8%3d&risl=&pid=ImgRaw&r=0',
            capacity: 20500,
            address: '600 1st Ave N, Minneapolis, MN 55403',
            avgTicketPrice: 91,
            cheapestTicketPrice: 22,
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
        summary:
            'Like most expansion teams, the Timberwolves struggled in their early years, but after the acquisition of Kevin Garnett in the 1995 NBA draft, the team qualified for the playoffs in eight consecutive seasons from 1997 to 2004. Despite losing in the first round in their first seven attempts, the Timberwolves won their first division championship in 2004 and advanced to the Western Conference Finals that same season. Garnett was also named the NBA Most Valuable Player for that season. The team then went into rebuilding mode for more than a decade after missing the postseason in 2005, and trading Garnett to the Boston Celtics in 2007. Garnett returned to the Timberwolves in a February 2015 trade and finished his career there, retiring in the 2016 offseason. The Timberwolves ended a 14-year playoff drought when they returned to the postseason in 2018.  In 2020, the Timberwolves drafted guard Anthony Edwards, and in 2021 made the playoffs, losing to the Memphis Grizzlies in 6 games.  Most recently, the Timberwolves traded for superstar center Rudy Gobert, and hope that the duo of him and Karl-Anthony Towns will be enough to propel them into contention.',
    },
    {
        title: 'Oklahoma City Thunder',
        uid: 'OKC',
        position: { lat: 35.463497, lng: -97.515114 },
        logo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        stadiumData: {
            name: 'Paycom Center',
            src: 'https://arenadigest.com/wp-content/uploads/2021/07/paycom_center.jpg',
            capacity: 20000,
            address: '100 W Reno Ave., Oklahoma City, OK 73102',
            avgTicketPrice: 163,
            cheapestTicketPrice: 4,
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
        summary:
            "The Oklahoma City Thunder was based in  Seattle for the first 41 years of its existence, during which, as the Seattle SuperSonics, it won three conference titles (1978, 1979, 1996) and the 1979 NBA championship. In 2008 the Supersonics moved to Oklahoma City and rebranded to the Thunder.  quickly rebuilt, and, behind the standout play of forward Kevin Durant and guard Russell Westbrook, the Thunder qualified for the playoffs in their second season in Oklahoma City. The team's rapid ascent resulted in Oklahoma City's advancing to the Western Conference finals in both 2010-11 and 2013-14 and to the NBA finals in 2011-12. The team returned to the conference finals in 2015-16 and took a 3-1 series lead over the Golden State Warriors (who had won an NBA-record 73 games during the regular season) before ultimately being eliminated by the Warriors in seven games. Durant surprisingly left Oklahoma City for the Warriors in the following off-season, and the Thunder then rebuilt around Westbrook. While he made NBA history by averaging a triple-double and setting the league record for most triple-double games in a season (42) in 2016-17, the team did not have enough great complementary players, and its season ended with a first-round playoff exit. The team added star wing Paul George before the 2017-18 season, and Westbrook averaged another triple-double that campaign, but the one-dimensional Thunder again failed to advance past the first round in the following playoffs. Despite Westbrook’s third straight season averaging a triple-double and George breaking out as one of the NBA’s best players in 2018–19, the Thunder again disappointed in the postseason with a first-round loss.  After the 2019 season, the team traded Westbrook to the Houston Rockets and Paul George to the LA Clippers and have begun to rebuild around young guard Shai Gilgeous-Alexander.  Most recently, the Thunder drafted bigman Chet Holmgren and are hoping to build a competitive team around the two.",
    },
    {
        title: 'Portland Trail Blazers',
        uid: 'POR',
        position: { lat: 45.53159, lng: -122.666824 },
        logo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        stadiumData: {
            name: 'Moda Center',
            src: 'https://i.pinimg.com/originals/e4/c2/53/e4c253d6d5541e189d338d1a0fc6a9f2.jpg',
            capacity: 19393,
            address: '1 N Center Court St, Portland, OR 97227',
            avgTicketPrice: 127,
            cheapestTicketPrice: 6,
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
        summary: `The franchise entered the league as an expansion team in 1970, and has enjoyed a strong following: from 1977 through 1995, the team sold out 814 consecutive home games, the longest such streak in American major professional sports at the time, and only since surpassed by the Boston Red Sox. The Trail Blazers are the only NBA team based in the Pacific Northwest, after the Vancouver Grizzlies relocated to Memphis and became the Memphis Grizzlies in 2001 and the Seattle SuperSonics relocated to Oklahoma City and became the Oklahoma City Thunder in 2008.  Since drafting superstar guard Damian Lillard, the team has struggled to build a strong roster around him, peaking in the 2019 season where they made the Western Conference Finals and were swept by the Golden State Warriors.  In 2021, the team traded Lillard's backcourt partner CJ McCollum.  Most recently, the Trail Blazers drafted young guard Shaedon Sharpe and traded for veteran wing Jerami Grant, hoping to build a contending roster in an attempt to convince Lillard to stay.`,
    },
    {
        title: 'Utah Jazz',
        uid: 'UTA',
        position: { lat: 40.768265, lng: -111.90113 },
        logo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        stadiumData: {
            name: 'Vivint Smarthome Arena',
            src: 'https://sportsvenuebusiness.com/wp-content/uploads/2017/10/Vivint-SmartHome-Arena-main-entry-view-from-300-west-north-temple.jpg',
            capacity: 19980,
            address: '301 W South Temple, Salt Lake City, UT 84101',
            avgTicketPrice: 157,
            cheapestTicketPrice: 12,
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
        summary:
            "The Jazz were one of the least successful teams in the league in their early years. Although 10 seasons elapsed before the Jazz qualified for their first playoff appearance in 1984, they did not miss the playoffs again until 2004. During the late 1980s, John Stockton and Karl Malone arose as the franchise players for the team and formed one of the most famed point guard–power forward duos in NBA history. Led by coach Jerry Sloan, who took over from Frank Layden in 1988, they became one of the powerhouse teams of the 1990s, culminating in two NBA Finals appearances in 1997 and 1998, where they lost both times to the Chicago Bulls, led by Michael Jordan.  Both Stockton and Malone moved on in 2003. After missing the playoffs for three consecutive seasons the Jazz returned to prominence under the on-court leadership of point guard Deron Williams. However, partway through the 2010–11 season, the Jazz began restructuring after Sloan's retirement and Williams' trade to the New Jersey Nets. Quin Snyder was hired as head coach in June 2014. With the development of Rudy Gobert and Donovan Mitchell into All-Stars, the Jazz launched themselves back into title contention, eventually earning the league's best regular season record in the 2020-21 season.  After multiple dissapointing playoff exits, the Jazz traded Gobert and will most likely look to move Donovan Mitchell in the future, as they begin to rebuild the roster.",
    },
    {
        title: 'Golden State Warriors',
        uid: 'GSW',
        position: { lat: 37.76786, lng: -122.38748 },
        logo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        stadiumData: {
            name: 'Chase Center',
            src: 'https://cdnassets.hw.net/55/eb/4123c56e48aeab189c0376a76c39/chase-center-east-side-view-with-seeing-spheres2-photo-credit-jason-orear.jpg',
            capacity: 18064,
            address: '1 Warriors Way, San Francisco, CA 94158',
            avgTicketPrice: 589,
            cheapestTicketPrice: 43,
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
        summary:
            'The Warriors won the inaugural Basketball Association of America (BAA) championship in 1947,[c] and won again in 1956, led by Hall of Fame trio Paul Arizin, Tom Gola, and Neil Johnston. After the trade of star Wilt Chamberlain in January 1965, the team finished the 1964-65 season with the NBA\'s worst record (1-–63). Their rebuilding period was brief due in large part to the Warriors\' drafting of Rick Barry four months after the trade. In 1975, star players Barry and Jamaal Wilkes powered the Warriors to their third championship, widely considered one of the biggest upsets in NBA history.  The team struggled in the 1980s, then became playoff regulars at the turn of the decade with stars Tim Hardaway, Mitch Richmond, and Chris Mullin, nicknamed "Run TMC". The team returned to championship glory in 2015, led by Stephen Curry, Klay Thompson, and Draymond Green; they won again in 2017 and 2018 (with the help of former MVP Kevin Durant) and again in 2022.  Nicknamed the "Dubs" as a shortening of "W\'s", the Warriors hold several NBA records: best regular season, most wins in a season (regular season and postseason combined), and best postseason run. Curry and Thompson are generally considered among the greatest backcourts of all time.[8][9] The Warriors have the third most NBA championships and have the third most Finals appearances; only the Los Angeles Lakers and Boston Celtics have more. Wilt Chamberlain and Stephen Curry have been named the NBA\'s MVPs while playing for the Warriors, for a total of three MVP awards.  Most recently, the Warriors won the 2022 NBA championship and look to continue their success as they pass the torch to the next generation of Warriors, lead by Jordan Poole, Jonathan Kuminga, and James Wiseman.',
    },
    {
        title: 'LA Clippers',
        uid: 'LAC',
        position: { lat: 34.043077, lng: -118.267606 },
        logo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        stadiumData: {
            name: 'Crypto.com Arena',
            src: 'https://static.billboard.com/files/media/staples-center-exterior-billboard-a-1548-compressed.jpg',
            capacity: 19067,
            address: '1111 S Figueroa St, Los Angeles, CA 90015',
            avgTicketPrice: 242,
            cheapestTicketPrice: 6,
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
        summary: `The franchise was founded as the Buffalo Braves in 1970 as an expansion team. Led by Hall of Famer Bob McAdoo, the Braves reached the NBA playoffs three times during their eight seasons in Buffalo. Conflicts with the Canisius Golden Griffins over the Buffalo Memorial Auditorium and the sale of the franchise led to their relocation from Buffalo to San Diego, California in 1978 and subsequent rebranding as the San Diego Clippers, in reference to the sailing ships seen in San Diego Bay.[9] The team saw little success on the court and missed the playoffs during all six of their years in San Diego.  In 1984, owner Donald Sterling controversially relocated the franchise to Los Angeles without NBA approval, which was permitted following legal action between the league and Sterling. Over the course of their first 27 seasons in Los Angeles, the Clippers qualified for the postseason only four times and won a single playoff round. They were frequently considered a perennial loser in American professional sports, drawing unfavorable comparisons to the historically successful Lakers.  The Clippers' reputation improved during the 2010s, which saw them transform into consistent postseason contenders. Aided by the "Lob City" lineup of Blake Griffin, DeAndre Jordan, and Chris Paul, the team qualified for the playoffs in six consecutive seasons from 2012 to 2017 and won two consecutive division titles in 2013 and 2014, both firsts for the franchise. Despite this success, the Clippers struggled in the postseason and were frequently eliminated in the Conference Semifinals; the team reached the Conference Finals for the first time in 2021. To date, they are the league's oldest franchise to have never played in the NBA Finals.`,
    },
    {
        title: 'Los Angeles Lakers',
        uid: 'LAL',
        position: { lat: 34.043087, lng: -118.267616 },
        logo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        stadiumData: {
            name: 'Crypto.com Arena',
            src: 'https://static.billboard.com/files/media/staples-center-exterior-billboard-a-1548-compressed.jpg',
            capacity: 19067,
            address: '1111 S Figueroa St, Los Angeles, CA 90015',
            avgTicketPrice: 562,
            cheapestTicketPrice: 41,
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
        summary: `The Lakers are one of the most successful teams in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history.  The franchise began with the 1947 purchase of a disbanded team, the Detroit Gems of the National Basketball League (NBL). The new team began playing in Minneapolis, Minnesota, calling themselves the Minneapolis Lakers.[11] Initially a member of the NBL, the Lakers won the 1948 NBL championship before joining the rival Basketball Association of America, where they would win five of the next six championships, led by star George Mikan.[12] After struggling financially in the late 1950s following Mikan's retirement, they relocated to Los Angeles before the 1960–61 season.  Led by Hall of Famers Elgin Baylor and Jerry West, Los Angeles made the NBA Finals six times in the 1960s, but lost every series to the Celtics, beginning their long and storied rivalry. In 1968, the Lakers acquired four-time NBA Most Valuable Player (MVP) Wilt Chamberlain, and won their sixth NBA title—and first in Los Angeles—in 1972, led by new head coach Bill Sharman. After the retirement of West and Chamberlain, the team traded for superstar Kareem Abdul-Jabbar, who would win three MVP awards as a Laker. While the team was unable to advance to the Finals in the late 1970s, two momentous changes came in 1979 that would inaugurate a new golden era for the franchise. First, Jerry Buss purchased the Lakers, and as the team's owner, pioneered a vision of basketball games as entertainment spectacles as well as sporting events.[13] Second, the Lakers drafted Magic Johnson first overall in the 1979 NBA draft.  The combination of Johnson, a passing prodigy point guard, and a dominant center in Abdul-Jabbar provided the Lakers with two superstars to anchor their roster. The promotion of head coach Pat Riley in 1981 and the addition of forward James Worthy through the 1982 draft established the Lakers as an NBA powerhouse throughout the 1980s. The team was nicknamed the "Showtime Lakers" due to its fast break, transition offense facilitated by Johnson. The franchise won five championships in a nine-year span, including winning two out of three marquee Finals matchups against the Celtics. The Lakers were defeated by their Boston archrivals in the 1984 Finals, but triumphed over the Celtics in 1985 and 1987.  After Riley departed and Abdul-Jabbar, Johnson, and Worthy all retired, the Lakers struggled in the early 1990s. It was not until 1996 when the team drafted Kobe Bryant out of high school and signed star center Shaquille O'Neal that the Lakers returned to dominance. The superstar duo of Bryant and O'Neal, along with Hall of Fame coach Phil Jackson, led the Lakers to three consecutive championships between 2000 to 2002, securing the franchise's second "three-peat." The dynamic but tumultuous "Shaq-and-Kobe" era ended when the Lakers traded away O'Neal after the team lost the 2004 Finals. It was not until after the Lakers traded for Pau Gasol that Bryant and Jackson returned to the NBA Finals, losing to the Celtics in 2008 but winning two more championships in 2009 and 2010. The 2010 Finals marked the latest matchup of the Lakers and Celtics, with Los Angeles winning its 16th title against its ancient rival in a seven-game series.  Jackson retired from coaching in 2011, and after a string of tumultuous playoff exits, the Lakers endured their longest playoff drought in franchise history. Gasol departed as a free agent in 2014, and Bryant retired in 2016 after twenty years as a Laker. After multiple rebuilding seasons with young, highly rated prospects, the Lakers signed superstar LeBron James in 2018.[14] In 2019, the team traded several of those prospects for star big man Anthony Davis.[15] The Lakers—led by James, Davis, and head coach Frank Vogel—won the team's 17th championship in 2020, tying the Celtics for the most titles in NBA history.  Most recently, the Lakers traded for Russell Westbrook, a trade that has been a disaster for the franchise.  The Lakers look to move off of his contract ahead of the 2022-23 NBA season.`,
    },
    {
        title: 'Phoenix Suns',
        uid: 'PHX',
        position: { lat: 33.445938, lng: -112.071487 },
        logo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        stadiumData: {
            name: 'Talking Stick Arena',
            src: 'https://venuecoalition.com/wp-content/uploads/2017/07/talking_stick2.jpg',
            capacity: 18000,
            address: '201 E Jefferson St, Phoenix, AZ 85004',
            avgTicketPrice: 213,
            cheapestTicketPrice: 9,
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
        summary: `The franchise began play in 1968 as an expansion team, and their early years were shrouded in mediocrity, but their fortunes changed in the 1970s after partnering Dick Van Arsdale and Alvan Adams with Paul Westphal; the team reached the 1976 NBA Finals, in what is considered to be one of the biggest upsets in NBA history. However, after failing to capture a championship, the Suns would rebuild around Walter Davis for a majority of the 1980s, until the acquisition of Kevin Johnson in 1988.  Under Johnson, and after trading for perennial NBA All-Star Charles Barkley, and combined with the output of Tom Chambers and Dan Majerle, the Suns reached the playoffs for a franchise-record thirteen consecutive appearances and remained a regular title contender throughout the 1990s, and reached the 1993 NBA Finals. However, the team would again fail to win a championship, and entered into another period of mediocrity until the early part of the 2000s.  In 2004, the Suns signed free agent Steve Nash (who had blossomed for the Dallas Mavericks after being traded from Phoenix six years earlier), and returned into playoff contention. With Nash, Shawn Marion, and Amar'e Stoudemire, and under head coach Mike D'Antoni, the Suns became renowned worldwide for their quick, dynamic offense, which led them to tie a franchise record in wins in the 2004-05 season. Two more top two Conference placements followed, but the Suns again failed to attain an NBA championship, and were forced into another rebuild. After ten consecutive seasons without a playoff berth, the Suns reached the 2021 NBA Finals after acquiring Chris Paul, forming a quartet with their young core of Devin Booker, Deandre Ayton, Mikal Bridges and Cameron Johnson . They also set a franchise record in wins during the 2021-22 season yet failed once again to win an NBA championship.  Most recently, the Suns are looking to trade for superstar Kevin Durant, who has requested a trade from the Brooklyn Nets.`,
    },
    {
        title: 'Sacramento Kings',
        uid: 'SAC',
        position: { lat: 38.580215, lng: -121.49959 },
        logo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        stadiumData: {
            name: 'Golden 1 Center',
            src: 'https://d3nxoulyw7bc8u.cloudfront.net/images/venue/None/98e27946-7a53-4b13-b26f-dfdef6fc960b.jpg',
            capacity: 17608,
            address: '500 David J Stern Walk, Sacramento, CA 95814',
            avgTicketPrice: 126,
            cheapestTicketPrice: 11,
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
        summary: `The Kings had a losing record in each of their first 13 years in Sacramento—finishing in last or second-to-last place 10 times during that stretch—despite the strong play of all-star shooting guard Mitch Richmond for much of the 1990s. The franchise's fortunes began to turn in 1998-99, as the Kings qualified for the first of eight consecutive postseason appearances. The high point of this streak came in 2001-02, when the team, led by forwards Chris Webber and Peja Stojakovic, had the best record in the NBA and reached the Western Conference finals, which it lost to the Los Angeles Lakers in an exciting seven-game series. Since 2006-07 Sacramento has failed to return to the play-offs, and the team became known more for managerial and off-court dysfunction than it was for its on-court play in the following years.  The prime example of this happened in the tail end of the 2021-22 season, where the Kings traded promising young guard Tyrese Haliburton for veteran Domantis Sabonis.  Haliburton was one of the only players who welcomed being drafted by the Kings, and was their most promising young talent.  Most recently, the Kings drafted swingman Keegan Murray and look to make a push for the play in tournament, breaking their 16 year playoff drought.`,
    },
    {
        title: 'Dallas Mavericks',
        uid: 'DAL',
        position: { lat: 32.7905, lng: -96.810394 },
        logo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        stadiumData: {
            name: 'American Airlines Center',
            src: 'https://th.bing.com/th/id/R.b290e4bc64752134879a39c90cac924f?rik=UvbUPNTrcnn8lw&pid=ImgRaw&r=0',
            capacity: 18500,
            address: '2500 Victory Ave, Dallas, TX 75219',
            avgTicketPrice: 160,
            cheapestTicketPrice: 11,
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
        summary: `Throughout the 1980s, the Mavericks were a perennial playoff team, led by All-Stars Rolando Blackman and Mark Aguirre. The team struggled during the 1990s, entering into a period of rebuilding. In 1998, the franchise's fortunes would change drastically with the acquisition of Dirk Nowitzki, who would become the cornerstone of the most successful period in franchise history, leading the team to its first NBA championship in 2011. The Mavericks later entered a rebuilding phase in the tail end of Nowitzki's storied career. They missed the playoffs in three consecutive years from 2017 to 2019, after which Nowitzki retired following his record-breaking 21st season with Dallas. Led by 2019 Rookie of the Year Luka Dončić, the Mavericks returned to the playoffs in 2020 and reached the Western Conference Finals in 2022 for the first time since their 2011 championship.  Most recently, the Mavs let young guard Jalen Brunson walk in restricted free agency and traded for bigman Christian Wood.`,
    },
    {
        title: 'Houston Rockets',
        uid: 'HOU',
        position: { lat: 29.751625, lng: -95.36236 },
        logo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        stadiumData: {
            name: 'Toyota Center',
            src: 'https://stadiumjourney.com/wp-content/uploads/2017/08/Toyota-Center-Aerial-View-Photo-courtesy-of-the-Houston-Rockets.jpg',
            capacity: 18055,
            address: '1510 Polk St, Houston, TX 77002',
            avgTicketPrice: 169,
            cheapestTicketPrice: 9,
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
        summary: `In the 1984 NBA draft, once again with the first overall pick, the Rockets drafted center Hakeem Olajuwon, who would become the cornerstone of the most successful period in franchise history. Paired with 7-foot-4-inch (2.24 m) Ralph Sampson, they formed one of the tallest front courts in the NBA. Nicknamed the "Twin Towers", they led the team to the 1986 NBA Finals—the second NBA Finals appearance in franchise history—where Houston was again defeated by Larry Bird and the 67-win Boston Celtics. The Rockets continued to reach the playoffs throughout the 1980s, but failed to advance past the first round for several years following a second-round defeat to the Seattle SuperSonics in 1987. Rudy Tomjanovich took over as head coach midway through the 1991-92 season, ushering in the most successful period in franchise history. Led by Olajuwon, the Rockets dominated the 1993-94 season, setting a then-franchise record 58 wins and went to the 1994 NBA Finals—the third NBA Finals appearance in franchise history—and won the franchise's first championship against Patrick Ewing and the New York Knicks. During the following season, reinforced by another All-Star, Clyde Drexler, the Rockets—in their fourth NBA Finals appearance in franchise history—repeated as champions with a four-game sweep of the Orlando Magic, which was led by a young Shaquille O'Neal and Penny Hardaway. Houston, which finished the season with a 47-35 record and was seeded sixth in the Western Conference during the 1995 playoffs, became the lowest-seeded team in NBA history to win the title.  The Rockets acquired all-star power forward Charles Barkley in 1996, but the presence of three of the NBA's 50 greatest players of all-time (Olajuwon, Drexler, and Barkley) was not enough to propel Houston past the Western Conference Finals. Each one of the aging trio had left the team by 2001. The Rockets of the early 2000s, led by superstars Tracy McGrady and Yao Ming, followed the trend of consistent regular-season respectability followed by playoff underachievement as both players struggled with injuries. After Yao's early retirement in 2011, the Rockets entered a period of rebuilding, completely dismantling and retooling their roster.  The acquisition of franchise player James Harden in 2012 launched the Rockets back into perennial championship contention throughout the rest of the 2010s, with zero losing seasons in Harden's nine-season tenure with the team. Harden broke countless franchise and NBA records while on the team, winning three consecutive scoring titles between 2018 and 2020, and leading the team to two Western Conference Finals appearances (both times losing to the Golden State Warriors). Following the 2019-20 season, head coach Mike D'Antoni and general manager Daryl Morey left the organization, followed shortly by James Harden requesting a trade to the Brooklyn Nets.  In the 2021 draft, the Rockets drafted promising young guard Jalen Green, and in 2022 drafted Jabari Smith Jr.  The Rockets hope to continue to aquire young talent as they build around their two young prospects.`,
    },
    {
        title: 'Memphis Grizzlies',
        uid: 'MEM',
        position: { lat: 35.13823, lng: -90.05046 },
        logo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        stadiumData: {
            name: 'FedExForum',
            src: 'https://stadiumjourney.com/wp-content/uploads/2017/08/FedExForum-exterior.jpg',
            capacity: 18119,
            address: '191 Beale St, Memphis, TN 38103',
            avgTicketPrice: 107,
            cheapestTicketPrice: 5,
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
        summary: `The Grizzlies played their first game in 1995 and were originally based in Vancouver as one of the two Canadian expansion franchises (alongside the Toronto Raptors) to join the NBA that year. They were immediately one of the worst teams in the league, winning no more than 19 games in each of their first four seasons and finishing at the bottom of their divisional standings in five of the six years they spent in Vancouver. This prolonged futility took its toll on the Grizzlies' attendance numbers and profitability, and the team's ownership moved the franchise to Memphis in 2001 in a bid to increase revenue.  In the newly relocated team's first draft, it added Spanish forward Pau Gasol, who would go on become the Grizzlies' first all-star player. The team hired basketball icon Jerry West to serve as general manager in 2002. West quickly turned the team's fortunes around, and in 2003-04 Memphis won 50 games (a 22-win improvement from the previous season) to earn the first play-off berth in franchise history. The Grizzlies lost in their opening postseason series that year and experienced the same fate in both 2004-05 and 2005-06. Memphis's successful run was short-lived, and the team fell to a last-place finish in 2006-07. West left the Grizzlies in 2007, and Gasol was traded in 2008 as the team began a rebuilding effort.  Memphis returned to the postseason in 2010-11 behind the play of forwards Zach Randolph and Rudy Gay, and the team proceeded to upset the top-seeded San Antonio Spurs in six games to record its first play-off series victory. In 2012-13 Randolph, Marc Gasol (Pau's brother), and a young, defensive-minded squad advanced to the conference finals for the first time in team history, where the Grizzlies lost to the Spurs. Memphis continued to qualify for the play-offs in the following years, but the aging roster produced diminishing returns, the team being swept by the Spurs in the 2015-16 play-offs after having posted a 42-40 record in the regular season and putting an NBA record 28 players on the floor over the course of the year because of rampant injuries. During the 2017-18 season the team was beset by injuries to most of its key players and limped to a division-worst 22-60 record.  After the season, the Grizzlies traded veteran guard Mike Conley to the Utah Jazz and Gasol to the Toronto Raptors.  Their fortunes quickly changed when they jumped up in the lottery, selecting electrifying young guard Ja Morant.  After making the playoffs in the 2021-22 season, the Grizzlies hope to continue to develop their young core into a contender.`,
    },
    {
        title: 'New Orleans Pelicans',
        uid: 'NOP',
        position: { lat: 29.94903, lng: -90.082298 },
        logo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        stadiumData: {
            name: 'Smoothie King Center',
            src: 'https://d3nxoulyw7bc8u.cloudfront.net/images/venue/None/9c4f0db8-277f-430f-9fc5-25f877a7ea3f.jpg',
            capacity: 18000,
            address: '1599 Le Rouge St, New Orleans, LA 70113',
            avgTicketPrice: 144,
            cheapestTicketPrice: 7,
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
        summary: `The Pelicans, founded in 1988, were originally located in Charlotte, North Carolina, and were known as the Hornets. Early teams featured fleet-footed 5-foot 3-inch (1.60-metre) point guard Muggsy Bogues and sharpshooter Dell Curry, but, like most expansion teams, they won few of their games. The team drafted forward Larry Johnson in 1991 and centre Alonzo Mourning in 1992, and the pair helped Charlotte to its first playoff appearance (and postseason series win) in the 1992-93 season. The Hornets went on to make the playoffs three additional times in the 1990s but never advanced past the second round.  In 1999-2000 the Hornets, behind the standout play of guard Baron Davis, began a stretch of five consecutive postseason appearances but again failed to progress any farther than one series win in a given year. Despite the team's on-court success, the Hornets had game attendance numbers among the lowest in the league. Shinn moved the franchise to New Orleans in 2002 after his last bid for a new arena was rejected by Charlotte voters.  After playing just three years in New Orleans, the Hornets were forced to temporarily relocate to Oklahoma City for the 2005-06 and 2006-07 seasons because of damage caused to their home arena by Hurricane Katrina. Upon their return to New Orleans for the 2007-08 season, the team—which was coming off of two consecutive fourth-place finishes—surprisingly posted a 56-26 record and won the first division title in franchise history. Led by budding-star point guard Chris Paul and forward David West, the Hornets advanced to the conference semifinals that season only to lose in seven games. In 2010 Shinn's continuing financial difficulties forced him to sell the team, but because no viable purchaser could be found, the NBA bought the franchise. In 2011 the franchise traded Paul to the Los Angeles Clippers (after NBA commissioner David Stern controversially vetoed an earlier proposed trade of Paul to the powerhouse Los Angeles Lakers), and the Hornets were sold to Tom Benson, owner of the New Orleans Saints, in 2012. Looking to cement ties with its home city, the franchise changed its name from the Hornets (which was a reference to the “hornet's nest” of American rebels in Charlotte during the American Revolution) to the Pelicans in 2013.  On the court, New Orleans took a major step toward contention when the team won the 2012 NBA draft lottery and selected forward-centre Anthony Davis with the first overall selection of the draft. Davis took the league by storm and led the team to a return to the playoffs in the 2014-15 season. After a first-round elimination in that postseason, the Pelicans struggled through an injury-riddled 2015-16, posting a 30-52 record. New Orleans rebounded in 2017-18, winning 48 games to qualify for the playoffs, where the team won its first postseason series of the Davis era before ultimately getting eliminated in the second round. During the 2018-19 season a frustrated Davis demanded a trade from New Orleans, noting that the team had failed to build a consistent winner around him over the course of his career. However, the trade never materialized, and the off-court drama seemed to affect the team's on-court play, as the Pelicans posted a 33-49 record.  Their fortunes changed for the better when they Pelicans won the NBA Draft lottery, and selected young superstar Zion Williamson.  Williamson has been plagued by injuries in his first seasons, but signed a rookie max extension in 2022, and the Pelicans hope to continue to build a contending roster around their young superstar.`,
    },
    {
        title: 'San Antonio Spurs',
        uid: 'SAS',
        position: { lat: 29.42694, lng: -98.43747 },
        logo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        stadiumData: {
            name: 'AT&T Center',
            src: 'https://www.texasgigs.com/wp-content/uploads/2020/08/ATT-Center.jpg',
            capacity: 18581,
            address: '1 At And T Center Pkwy, San Antonio, TX 78219',
            avgTicketPrice: 163,
            cheapestTicketPrice: 9,
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
        summary: `The Spurs joined the NBA when the league agreed to absorb the four most successful ABA franchises in 1976 after the younger league began to struggle financially. Defying predictions of mediocrity, the team immediately posted winning records and stood up to the NBA's best teams. Capturing five division titles in their first seven seasons of NBA play, the Spurs continually made the playoffs but could not surmount the championship hurdle.  Fortune shone on the Spurs in 1997 when, after an injury-plagued 20-62 season, the Spurs won the NBA draft lottery, which allowed them to choose forward Tim Duncan with the first overall selection of that year's draft. Duncan teamed with a healthy Robinson to lead the Spurs to a 36-win improvement in the 1997-98 season, and the duo, nicknamed the “Twin Towers,” followed that remarkable year by guiding the team to the 1999 NBA championship. In 2003, which was Robinson's last season with the team, they won another title and thus allowed him to end an illustrious career on top.  Duncan was joined by rising stars Manu Ginobili and Tony Parker (who both played complementary roles in the Spurs' 2003 title) during championship runs in 2005 and 2007. In 2010-11 the Spurs tied an all-time NBA mark by recording their 12th consecutive season with at least 50 victories, but they were met with disappointment in the following postseason as they became just the second top-seeded NBA team to be upset by an eighth-seeded (lowest-seeded) team in an opening seven-game playoff series when they were eliminated by the Memphis Grizzlies. The Spurs established a new NBA record by reaching 50 wins over the next two campaigns, each of which saw the team advance to the conference finals, with San Antonio defeating the Grizzlies in that round to reach the NBA finals in 2012-13, where the Spurs lost a thrilling seven-game series to the Miami Heat. The team won a league-high 62 games the following season and, in the ensuing playoffs, won its way into a rematch with the Heat in the NBA finals. There the Spurs put on one of the most effective and prolific scoring displays in finals history, setting numerous finals shooting records en route to winning the franchise's fifth title, in a five-game series.  Led by emerging star forward Kawhi Leonard, the Spurs continued to be among the NBA's elite teams in the years following their fifth championship. In 2015-16 San Antonio won a franchise-record 67 games, which was tied for the fifth highest win total in league history at the time, but the team failed to get past the second round of the playoffs, where it was upset by the Oklahoma City Thunder. The Spurs won 61 games in 2016-17, the second highest total in the league that season, and advanced to the Western Conference finals. There San Antonio ran out to a surprising 23-point second-half lead over the heavily favoured Golden State Warriors in game one when Leonard sustained a postseason-ending ankle injury. Without their best player, the Spurs proceeded to lose that game as well as the next three for one of the more disappointing postseason outcomes in franchise history. Leonard struggled to recover from his injury and was limited to just nine games during the 2017-18 season, which saw the Spurs fail to win at least 50 games (or post the equivalent winning percentage during the lockout-shortened 1998-99 season) for the first time since the team drafted Tim Duncan—a remarkable 20-year run of elite play. That campaign ended with a first-round loss to the Warriors in the playoffs. Leonard was traded away in the off-season.  Most recently, the Spurs traded young guard Dejounte Murray and have committed to a full rebuild for the first time since 1985.`,
    },
];
