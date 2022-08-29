/*
const btnAdd = document.querySelector(".randomizer");
btnAdd.addEventListener("click", addNew);
const btnAdd2 = document.querySelector(".randomizer2");
btnAdd.addEventListener("click", addNew);
*/
let championList = [{ 
    name: 'Aatrox', realName: 'Aatrox'
}, { 
    name: 'Ahri', realName: 'Ahri'
}, { 
    name: 'Akali', realName: 'Akali'
}, { 
    name: 'Akshan', realName: 'Akshan'
}, { 
    name: 'Alistar', realName: 'Alistar'
}, { 
    name: 'Amumu', realName: 'Amumu'
}, { 
    name: 'Anivia', realName: 'Anivia'
}, { 
    name: 'Annie', realName: 'Annie'
}, { 
    name: 'Aphelios', realName: 'Aphelios'
}, { 
    name: 'Ashe', realName: 'Ashe'
}, { 
    name: 'AurelionSol', realName: 'Aurelion Sol'
}, { 
    name: 'Azir', realName: 'Azir'
}, { 
    name: 'Bard', realName: 'Bard'
}, { 
    name: 'Belveth', realName: 'Bel&#39;Veth'
}, { 
    name: 'Blitzcrank', realName: 'Blitzcrank'
}, { 
    name: 'Brand', realName: 'Brand'
}, { 
    name: 'Braum', realName: 'Braum'
}, { 
    name: 'Caitlyn', realName: 'Caitlyn'
}, { 
    name: 'Camille', realName: 'Camille'
}, { 
    name: 'Cassiopeia', realName: 'Cassiopeia'
}, { 
    name: 'Chogath', realName: 'Cho&#39;Gath'
}, { 
    name: 'Corki', realName: 'Corki'
}, { 
    name: 'Darius', realName: 'Darius'
}, { 
    name: 'Diana', realName: 'Diana'
}, { 
    name: 'DrMundo', realName: 'Dr. Mundo'
}, { 
    name: 'Draven', realName: 'Draven'
}, { 
    name: 'Ekko', realName: 'Ekko'
}, { 
    name: 'Elise', realName: 'Elise'
}, { 
    name: 'Evelynn', realName: 'Evelynn'
}, { 
    name: 'Ezreal', realName: 'Ezreal'
}, { 
    name: 'Fiddlesticks', realName: 'Fiddlesticks'
}, { 
    name: 'Fiora', realName: 'Fiora'
}, { 
    name: 'Fizz', realName: 'Fizz'
}, { 
    name: 'Galio', realName: 'Galio'
}, { 
    name: 'Gangplank', realName: 'Gangplank'
}, { 
    name: 'Garen', realName: 'Garen'
}, { 
    name: 'Gnar', realName: 'Gnar'
}, { 
    name: 'Gragas', realName: 'Gragas'
}, { 
    name: 'Graves', realName: 'Graves'
}, { 
    name: 'Gwen', realName: 'Gwen'
}, { 
    name: 'Hecarim', realName: 'Hecarim'
}, { 
    name: 'Heimerdinger', realName: 'Heimerdinger'
}, { 
    name: 'Illaoi', realName: 'Illaoi'
}, { 
    name: 'Irelia', realName: 'Irelia'
}, { 
    name: 'Ivern', realName: 'Ivern'
}, { 
    name: 'Janna', realName: 'Janna'
}, { 
    name: 'JarvanIV', realName: 'Jarvan IV'
}, { 
    name: 'Jax', realName: 'Jax'
}, { 
    name: 'Jayce', realName: 'Jayce'
}, { 
    name: 'Jhin', realName: 'Jhin'
}, { 
    name: 'Jinx', realName: 'Jinx'
}, { 
    name: 'Kaisa', realName: 'Kaisa'
}, { 
    name: 'Kalista', realName: 'Kalista'
}, { 
    name: 'Karma', realName: 'Karma'
}, { 
    name: 'Karthus', realName: 'Karthus'
}, { 
    name: 'Kassadin', realName: 'Kassadin'
}, { 
    name: 'Katarina', realName: 'Katarina'
}, { 
    name: 'Kayle', realName: 'Kayle'
}, { 
    name: 'Kayn', realName: 'Kayn'
}, { 
    name: 'Kennen', realName: 'Kennen'
}, { 
    name: 'Khazix', realName: 'Kha&#39;Zix'
}, { 
    name: 'Kindred', realName: 'Kindred'
}, { 
    name: 'Kled', realName: 'Kled'
}, { 
    name: 'KogMaw', realName: 'Kog&#39;Maw'
}, { 
    name: 'Leblanc', realName: 'LeBlanc'
}, { 
    name: 'LeeSin', realName: 'Lee Sin'
}, { 
    name: 'Leona', realName: 'Leona'
}, { 
    name: 'Lillia', realName: 'Lillia'
}, { 
    name: 'Lissandra', realName: 'Lissandra'
}, { 
    name: 'Lucian', realName: 'Lucian'
}, { 
    name: 'Lulu', realName: 'Lulu'
}, { 
    name: 'Lux', realName: 'Lux'
}, { 
    name: 'Malphite', realName: 'Malphite'
}, { 
    name: 'Malzahar', realName: 'Malzahar'
}, { 
    name: 'Maokai', realName: 'Maokai'
}, { 
    name: 'MasterYi', realName: 'Master Yi'
}, { 
    name: 'MissFortune', realName: 'Miss Fortune'
}, { 
    name: 'Mordekaiser', realName: 'Mordekaiser'
}, { 
    name: 'Morgana', realName: 'Morgana'
}, { 
    name: 'Nami', realName: 'Nami'
}, { 
    name: 'Nasus', realName: 'Nasus'
}, { 
    name: 'Nautilus', realName: 'Nautilus'
}, { 
    name: 'Neeko', realName: 'Neeko'
}, { 
    name: 'Nidalee', realName: 'Nidalee'
}, { 
    name: 'Nilah', realName: 'Nilah'
}, { 
    name: 'Nocturne', realName: 'Nocturne'
}, { 
    name: 'Nunu', realName: 'Nunu &#38; Willump'
}, { 
    name: 'Olaf', realName: 'Olaf'
}, { 
    name: 'Orianna', realName: 'Orianna'
}, { 
    name: 'Ornn', realName: 'Ornn'
}, { 
    name: 'Pantheon', realName: 'Pantheon'
}, { 
    name: 'Poppy', realName: 'Poppy'
}, { 
    name: 'Pyke', realName: 'Pyke'
}, { 
    name: 'Qiyana', realName: 'Qiyana'
}, { 
    name: 'Quinn', realName: 'Quinn'
}, { 
    name: 'Rakan', realName: 'Rakan'
}, { 
    name: 'Rammus', realName: 'Rammus'
}, { 
    name: 'RekSai', realName: 'Rek&#39;Sai'
}, { 
    name: 'Rell', realName: 'Rell'
}, { 
    name: 'Renata', realName: 'Renata Glasc'
}, { 
    name: 'Renekton', realName: 'Renekton'
}, { 
    name: 'Rengar', realName: 'Rengar'
}, { 
    name: 'Riven', realName: 'Riven'
}, { 
    name: 'Rumble', realName: 'Rumble'
}, { 
    name: 'Ryze', realName: 'Ryze'
}, { 
    name: 'Samira', realName: 'Samira'
}, { 
    name: 'Sejuani', realName: 'Sejuani'
}, { 
    name: 'Senna', realName: 'Senna'
}, { 
    name: 'Seraphine', realName: 'Seraphine'
}, { 
    name: 'Sett', realName: 'Sett'
}, { 
    name: 'Shaco', realName: 'Shaco'
}, { 
    name: 'Shen', realName: 'Shen'
}, { 
    name: 'Shyvana', realName: 'Shyvana'
}, { 
    name: 'Singed', realName: 'Singed'
}, { 
    name: 'Sion', realName: 'Sion'
}, { 
    name: 'Sivir', realName: 'Sivir'
}, { 
    name: 'Skarner', realName: 'Skarner'
}, { 
    name: 'Sona', realName: 'Sona'
}, { 
    name: 'Soraka', realName: 'Soraka'
}, { 
    name: 'Swain', realName: 'Swain'
}, { 
    name: 'Sylas', realName: 'Sylas'
}, { 
    name: 'Syndra', realName: 'Syndra'
}, { 
    name: 'TahmKench', realName: 'Tahm Kench'
}, { 
    name: 'Taliyah', realName: 'Taliyah'
}, { 
    name: 'Talon', realName: 'Talon'
}, { 
    name: 'Taric', realName: 'Taric'
}, { 
    name: 'Teemo', realName: 'Teemo'
}, { 
    name: 'Thresh', realName: 'Thresh'
}, { 
    name: 'Tristana', realName: 'Tristana'
}, { 
    name: 'Trundle', realName: 'Trundle'
}, { 
    name: 'Tryndamere', realName: 'Tryndamere'
}, { 
    name: 'TwistedFate', realName: 'Twisted Fate'
}, { 
    name: 'Twitch', realName: 'Twitch'
}, { 
    name: 'Udyr', realName: 'Udyr'
}, { 
    name: 'Urgot', realName: 'Urgot'
}, { 
    name: 'Varus', realName: 'Varus'
}, { 
    name: 'Vayne', realName: 'Vayne'
}, { 
    name: 'Veigar', realName: 'Veigar'
}, { 
    name: 'Velkoz', realName: 'Vel&#39;Koz'
}, { 
    name: 'Vex', realName: 'Vex'
}, { 
    name: 'Vi', realName: 'Vi'
}, { 
    name: 'Viktor', realName: 'Viktor'
}, { 
    name: 'Viego', realName: 'Viego'
}, { 
    name: 'Vladimir', realName: 'Vladimir'
}, { 
    name: 'Volibear', realName: 'Volibear'
}, { 
    name: 'Warwick', realName: 'Warwick'
}, { 
    name: 'MonkeyKing', realName: 'Wukong'
}, { 
    name: 'Xayah', realName: 'Xayah'
}, { 
    name: 'Xerath', realName: 'Xerath'
}, { 
    name: 'XinZhao', realName: 'Xin Zhao'
}, { 
    name: 'Yasuo', realName: 'Yasuo'
}, { 
    name: 'Yone', realName: 'Yone'
}, { 
    name: 'Yorick', realName: 'Yorick'
}, { 
    name: 'Yuumi', realName: 'Yuumi'
}, { 
    name: 'Zac', realName: 'Zac'
}, { 
    name: 'Zed', realName: 'Zed'
}, { 
    name: 'Zeri', realName: 'Zeri'
}, { 
    name: 'Ziggs', realName: 'Ziggs'
}, { 
    name: 'Zilean', realName: 'Zilean'
}, { 
    name: 'Zoe', realName: 'Zoe'
}, { 
    name: 'Zyra', realName: 'Zyra'
}];

let randomList = [{ 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}, { 
    name: 'null', id: '161'
}];

let numList0 = [];
let numList1 = [];

function run(num1)
{
    setList(num1);
    createList(num1);
    createRandomChampList(num1);
    //randomize(num1);
    document.getElementById('grid' + num1).innerHTML = '';
    for (let i = (0 + num1*20); i < (20 + num1*20); i++)
    {
        addNew(num1, randomList[i].name, randomList[i].id);
    }
}

function setList(num1)
{
    for (let i=0;i<20;i++)
    {
        if (num1 == 0)
        {
            numList0[i] = 162;
        }
        else
        {
            numList1[i] = 162;
        }
    }
}

function createList(num1)
{
    let noRepeat = true;
    let count = 0;
    while (count < 20)
    {
        // resets to true to avoid infinite loop
        noRepeat = true;
        // randomizing number
        let champNum = Math.floor(Math.random() * 161);
        // printing out numbers before removing dupes
        //cout << champNum << endl; 
        // checks all the numbers in the array to see if the number generated is a dupe 
        for (let i = 0; i < 20; i++)
        {
            console.log(numList0[i]);
            console.log(numList1[i]);
            console.log(champNum);
            if (numList1[i] == champNum || numList0[i] == champNum)
            {
                // printing out when dupe is found
                // cout << "Dupe found " << champNum << endl;
                console.log('Dupe Found');
                noRepeat = false;
            }
        }
        // if not dupe then add to array
        if (noRepeat)
        {
            if (num1 == 0)
            {
                numList0[count] = champNum;
            }
            else
            {
                numList1[count] = champNum;
            }
            count++;
        }
    }
}

function createRandomChampList(num1)
{
    for (let i = 0; i < 20; i++)
        {
            if (num1 == 0)
            {
                randomList[i].name = championList[numList0[i]].name;
                randomList[i].id = championList[numList0[i]].realName;
            }
            else
            {
                randomList[i + 20].name = championList[numList1[i]].name;
                randomList[i + 20].id = championList[numList1[i]].realName;                       
            }
        }
}

/*
function randomize(num1)
{
    for (let i = (0 + num1*20); i < (20 + num1*20); i++)
    {
        let randomNum = Math.floor(Math.random() * 90);
        randomList[i].name = championList[randomNum].name;
        randomList[i].id = randomNum;
    }
}
*/

function addNew(num1, name, id)
{
    let container = document.getElementById('grid' + num1);
    let cell = document.createElement("div");
    cell.classList.add('div-border');
    cell.style.textAlign = 'center';
    container.appendChild(cell);

    let textContainer = cell;
    let textCell = document.createElement('div');
    textCell.style.color = 'white';
    textCell.style.fontSize = '75%';
    textCell.innerHTML = id;
    textCell.classList.add('div-border');
    textContainer.appendChild(textCell);
    
    let imgContainer = cell;
    let imgCell = document.createElement('div');
    let img = document.createElement("img");
    img.setAttribute("src", 'https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/' + name + '.png');
    img.classList.add('image');
    imgCell.appendChild(img);
    imgContainer.appendChild(imgCell);
}