const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    lat: "-37.3159",
    lng: "81.1496",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    companyName: "Romaguera-Crona",
    companyCatchPhrase: "Multi-layered client-server neural-net",
    companyBs: "harness real-time e-markets"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    lat: "-43.9509",
    lng: "-34.4618",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    companyName: "Deckow-Crist",
    companyCatchPhrase: "Proactive didactic contingency",
    companyBs: "synergize scalable supply-chains"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "McKenziehaven",
    zipcode: "59590-4157",
    lat: "-68.6102",
    lng: "-47.0653",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    companyName: "Romaguera-Jacobson",
    companyCatchPhrase: "Face to face bifurcated interface",
    companyBs: "e-enable innovative applications"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    street: "Hoeger Mall",
    suite: "Apt. 692",
    city: "South Elvis",
    zipcode: "53919-4257",
    lat: "29.4572",
    lng: "-164.2990",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    companyName: "Robel-Corkery",
    companyCatchPhrase: "Multi-tiered zero tolerance productivity",
    companyBs: "transition cutting-edge web services"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    street: "Skiles Walks",
    suite: "Suite 351",
    city: "Roscoeview",
    zipcode: "33263",
    lat: "-31.8129",
    lng: "62.5342",
    phone: "(254)954-1289",
    website: "demetris.info",
    companyName: "Keebler LLC",
    companyCatchPhrase: "User-centric fault-tolerant solution",
    companyBs: "revolutionize end-to-end systems"
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    street: "Norberto Crossing",
    suite: "Apt. 950",
    city: "South Christy",
    zipcode: "23505-1337",
    lat: "-71.4197",
    lng: "71.7478",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    companyName: "Considine-Lockman",
    companyCatchPhrase: "Synchronised bottom-line interface",
    companyBs: "e-enable innovative applications"
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    street: "Rex Trail",
    suite: "Suite 280",
    city: "Howemouth",
    zipcode: "58804-1099",
    lat: "24.8918",
    lng: "21.8984",
    phone: "210.067.6132",
    website: "elvis.io",
    companyName: "Johns Group",
    companyCatchPhrase: "Configurable multimedia task-force",
    companyBs: "generate enterprise e-tailers"
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    street: "Ellsworth Summit",
    suite: "Suite 729",
    city: "Aliyaview",
    zipcode: "45169",
    lat: "-14.3990",
    lng: "-120.7677",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    companyName: "Abernathy Group",
    companyCatchPhrase: "Implemented secondary concept",
    companyBs: "e-enable extensible e-tailers"
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    street: "Dayna Park",
    suite: "Suite 449",
    city: "Bartholomebury",
    zipcode: "76495-3109",
    lat: "24.6463",
    lng: "-168.8889",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    companyName: "Yost and Sons",
    companyCatchPhrase: "Switchable contextually-based project",
    companyBs: "aggregate real-time technologies"
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    lat: "-38.2386",
    lng: "57.2232",
    phone: "024-648-3804",
    website: "ambrose.net",
    companyName: "Hoeger LLC",
    companyCatchPhrase: "Centralized empowering task-force",
    companyBs: "target end-to-end models"
  }
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    id: 2,
    userId: 1,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    id: 3,
    userId: 1,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  },
  {
    id: 4,
    userId: 2,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
  },
  {
    id: 5,
    userId: 2,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
  },
  {
    id: 6,
    userId: 2,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
  },
  {
    id: 7,
    userId: 3,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
  },
  {
    id: 8,
    userId: 3,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    id: 9,
    userId: 3,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
  },
  {
    id: 10,
    userId: 4,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
  },
  {
    id: 11,
    userId: 4,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi"
  },
  {
    id: 12,
    userId: 4,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio"
  },
  {
    id: 13,
    userId: 5,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    id: 14,
    userId: 5,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum"
  },
  {
    id: 15,
    userId: 5,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae"
  },
  {
    id: 16,
    userId: 6,
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia voluptatem quis ullam qui in alias quia est consequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    id: 17,
    userId: 6,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui molestias blanditiis quia quae perspiciatis sunt voluptatem voluptatem error inventore quaerat"
  },
  {
    id: 18,
    userId: 6,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet voluptatibus aut sit a amet neque voluptatem recusandae repudiandae ad provident blanditiis sit voluptatem doloribus ipsam sit inventore voluptatem et doloremque"
  },
  {
    id: 19,
    userId: 7,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam ea sed aut omnis veniam maiores ullam consequatur atque adipisci quo iste expedita sit quos voluptas"
  },
  {
    id: 20,
    userId: 7,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos veritatis officiis exercitationem vel fugit aut necessitatibus totam omnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    id: 21,
    userId: 7,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt"
  },
  {
    id: 22,
    userId: 8,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse"
  },
  {
    id: 23,
    userId: 8,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit repudiandae inventore commodi placeat quia sint at et consequuntur neque quidem qui rerum"
  },
  {
    id: 24,
    userId: 8,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla omnis voluptas quia qui voluptatem consequatur numquam aliquam sunt totam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    id: 25,
    userId: 9,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut omnis quis sit vel consequuntur ipsa eligendi ipsum molestiae et omnis error nostrum molestiae illo tempore quia et distinctio"
  },
  {
    id: 26,
    userId: 9,
    title: "est et quae odit qui non",
    body: "similique esse doloribus nihil accusamus omnis doloremque dolorem consequatur neque porro possimus odio quos voluptas voluptatem in corporis qui vero labore"
  },
  {
    id: 27,
    userId: 9,
    title: "quasi id et eos tenetur aut quo autem",
    body: "eum sed dolores ipsam sint possimus debitis occaecati debitis qui qui et ut placeat enim earum aut odit facilis consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
  },
  {
    id: 28,
    userId: 10,
    title: "delectus ullam et corporis nulla voluptas sequi",
    body: "non et quaerat ex quae ad maiores maiores recusandae totam aut blanditiis mollitia quas illo ut voluptatibus voluptatem similique nostrum eum"
  },
  {
    id: 29,
    userId: 10,
    title: "iusto eius quod necessitatibus culpa ea",
    body: "odit magnam ut saepe sed non qui tempora atque nihil accusamus illum doloribus illo dolor eligendi repudiandae odit magni similique sed cum maiores"
  },
  {
    id: 30,
    userId: 10,
    title: "a quo magni similique perferendis",
    body: "alias dolor cumque impedit blanditiis non et voluptas est doloremque dolorem sit molestiae recusandae doloribus vel alias voluptatem et non"
  }
];

const comments = [
  {
    id: 1,
    postId: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
  },
  {
    id: 2,
    postId: 1,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
  },
  {
    id: 3,
    postId: 1,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    id: 4,
    postId: 2,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati"
  },
  {
    id: 5,
    postId: 2,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et"
  },
  {
    id: 6,
    postId: 3,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in"
  },
  {
    id: 7,
    postId: 3,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body: "maiores sed dolores similique labore et inventore et quasi temporibus esse sunt id et eos voluptatem aliquam aliquid ratione corporis molestiae mollitia quia et magnam dolor"
  },
  {
    id: 8,
    postId: 4,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body: "ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque"
  },
  {
    id: 9,
    postId: 5,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body: "sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
  },
  {
    id: 10,
    postId: 6,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@miro.com",
    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla quia quas dolores velit et non aut quia necessitatibus nostrum quaerat nulla et accusamus nisi facilis"
  },
  {
    id: 11,
    postId: 7,
    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
    email: "Veronica_Goodwin@timmothy.net",
    body: "ut dolorum nostrum id quia aut est fuga est inventore vel eligendi explicabo ullam voluptatem sit ullam tempora aut omnis"
  },
  {
    id: 12,
    postId: 8,
    name: "modi ut animi unde quidem eligendi quo",
    email: "Oswald.Vandervort@leanna.org",
    body: "expedita maiores dignissimos facilis ipsum est quo consequatur quia omnis libero voluptatem id hic non sapiente et hic aut"
  },
  {
    id: 13,
    postId: 9,
    name: "aut inventore non pariatur sit vitae voluptatem sapiente",
    email: "Kariane@jadyn.tv",
    body: "fuga eos qui dolor rerum inventore corporis exercitationem corporis cupiditate et deserunt recusandae est sed quis culpa eum maiores corporis et"
  },
  {
    id: 14,
    postId: 10,
    name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    email: "Nathan@solon.io",
    body: "velit animi atque aut laborum ratione vel iste nostrum id dolorem voluptatem vel culpa distinctio omnis excepturi est"
  },
  {
    id: 15,
    postId: 11,
    name: "debitis magnam hic odit aut ullam nostrum tenetur",
    email: "Maynard.Hodkiewicz@roberta.com",
    body: "pariatur omnis in repellendus tempore delectus quo aut voluptatem doloremque aut voluptatem dolorem aut quia voluptas"
  },
  {
    id: 16,
    postId: 12,
    name: "quasi nulla ducimus facilis non voluptas aut",
    email: "Christine@ayana.info",
    body: "eum non blanditiis soluta porro quibusdam voluptas vel voluptatem qui placeat dolores qui velit aut vel"
  },
  {
    id: 17,
    postId: 13,
    name: "explicabo consectetur debitis voluptates quas quae culpa rerum non",
    email: "Preston_Hudson@blaise.tv",
    body: "dolorum eum perferendis voluptatem architecto est ut et voluptatem voluptatibus molestiae sint voluptatibus facilis id laudantium"
  },
  {
    id: 18,
    postId: 14,
    name: "quisquam laborum reiciendis aut",
    email: "Vincenza_Klocko@albertha.name",
    body: "dolores voluptatem voluptatem error aut qui dolor ea molestiae voluptatem debitis id ratione sit veritatis rerum"
  },
  {
    id: 19,
    postId: 15,
    name: "sed illum quis",
    email: "Madelynn.Gorczany@darion.biz",
    body: "nihil accusamus consequatur iusto omnis voluptatem architecto recusandae error unde velit aut voluptatem molestiae voluptatum"
  },
  {
    id: 20,
    postId: 16,
    name: "enim quo cumque",
    email: "Mariana_Orn@preston.org",
    body: "temporibus cumque voluptatem quo voluptatem inventore ut id debitis et qui qui ut et vel et"
  },
  {
    id: 21,
    postId: 17,
    name: "non et nostrum voluptatem molestiae",
    email: "Noemie@marques.me",
    body: "et molestiae qui velit sint voluptatem temporibus omnis nam voluptatem voluptatum mollitia in et non voluptatibus"
  },
  {
    id: 22,
    postId: 18,
    name: "omnis aut facilis sit aliquam",
    email: "Khalil@emile.co.uk",
    body: "qui aliquid facilis amet aut nihil cumque et molestiae est sit quis inventore perferendis repellendus voluptatem"
  },
  {
    id: 23,
    postId: 19,
    name: "non qui facilis ea eaque doloribus",
    email: "Sophia@arianna.co.uk",
    body: "ipsam tempora sequi voluptatem quis varius molestiae et voluptatum omnis labore dolores est ratione accusamus"
  },
  {
    id: 24,
    postId: 20,
    name: "corporis facilis eaque",
    email: "Jeffery_Hayes@quentin.biz",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate"
  },
  {
    id: 25,
    postId: 21,
    name: "nihil vel ut inventore expedita voluptatibus illum",
    email: "Chasity_Gerhold@fanny.biz",
    body: "commodi dolorem ad facilis debitis temporibus aut provident commodi et non velit doloremque aspernatur non"
  },
  {
    id: 26,
    postId: 22,
    name: "laudantium aut et voluptas animi est",
    email: "Decatur_Haley@rebecca.tv",
    body: "quod aut debitis facilis ut architecto distinctio placeat doloribus repellendus voluptatum eos voluptatem error dolor"
  },
  {
    id: 27,
    postId: 23,
    name: "animi ut voluptatem ut eaque",
    email: "Reymundo@stephen.net",
    body: "consectetur ut in voluptatem sed voluptatem veritatis voluptatem sit aut aut voluptatem dolores tempora"
  },
  {
    id: 28,
    postId: 24,
    name: "et rem non provident vel ut",
    email: "Gudrun_Barrows@alida.org",
    body: "dolorum voluptatem cumque perferendis labore tempore aut ut voluptatem doloribus est qui corrupti ut"
  },
  {
    id: 29,
    postId: 25,
    name: "sed animi nostrum nemo vero voluptas voluptatum",
    email: "Domenic_Turcotte@olaf.name",
    body: "dolores voluptatem id non consectetur sint vel ut perferendis nihil voluptatem qui aut sed ut"
  },
  {
    id: 30,
    postId: 26,
    name: "rerum voluptatem cupiditate voluptatibus aut",
    email: "Kenton_Heller@ralph.tv",
    body: "est et et id nemo voluptatem vel expedita dolorum et aut rerum voluptas placeat aut voluptatem"
  }
];

const todos = [
  { id: 1, userId: 1, title: "delectus aut autem", completed: 0 },
  { id: 2, userId: 1, title: "quis ut nam facilis et officia qui", completed: 0 },
  { id: 3, userId: 1, title: "fugiat veniam minus", completed: 0 },
  { id: 4, userId: 1, title: "et porro tempora", completed: 1 },
  { id: 5, userId: 1, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", completed: 0 },
  { id: 6, userId: 2, title: "qui ullam ratione quibusdam voluptatem quia omnis", completed: 0 },
  { id: 7, userId: 2, title: "illo expedita consequatur quia in", completed: 0 },
  { id: 8, userId: 2, title: "quo adipisci enim quam ut ab", completed: 1 },
  { id: 9, userId: 2, title: "molestiae perspiciatis ipsa", completed: 0 },
  { id: 10, userId: 3, title: "illo est ratione doloremque quia maiores aut", completed: 1 },
  { id: 11, userId: 3, title: "vero rerum temporibus dolor", completed: 1 },
  { id: 12, userId: 3, title: "ipsa repellendus fugit nisi", completed: 1 },
  { id: 13, userId: 4, title: "et doloremque nulla", completed: 0 },
  { id: 14, userId: 4, title: "repellendus sunt dolores architecto voluptatum", completed: 1 },
  { id: 15, userId: 4, title: "ab voluptatum amet voluptas", completed: 1 },
  { id: 16, userId: 5, title: "accusamus eos facilis sint et aut voluptatem", completed: 1 },
  { id: 17, userId: 5, title: "quo laboriosam deleniti aut qui", completed: 1 },
  { id: 18, userId: 5, title: "dolorum est consequatur ea mollitia in culpa", completed: 0 },
  { id: 19, userId: 6, title: "molestiae ipsa aut voluptatibus pariatur dolor nihil", completed: 1 },
  { id: 20, userId: 6, title: "ullam nobis libero sapiente ad optio sint", completed: 1 },
  { id: 21, userId: 7, title: "suscipit qui totam", completed: 1 },
  { id: 22, userId: 7, title: "voluptates eum voluptas et dicta", completed: 0 },
  { id: 23, userId: 8, title: "quidem at rerum quis ex aut sit quam", completed: 1 },
  { id: 24, userId: 8, title: "sunt veritatis ut voluptate", completed: 0 },
  { id: 25, userId: 9, title: "et quia ad iste a", completed: 1 },
  { id: 26, userId: 9, title: "incidunt ut fugit autem", completed: 1 },
  { id: 27, userId: 10, title: "laudantium voluptate suscipit sunt enim enim", completed: 0 },
  { id: 28, userId: 10, title: "vitae aut excepturi laboriosam sint aliquam et et accusantium", completed: 0 },
  { id: 29, userId: 10, title: "sequi dolorem sed", completed: 1 },
  { id: 30, userId: 10, title: "explicabo voluptate hic molestias facere adipisci", completed: 0 }
];

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic Fiction",
    year: 1960,
    pages: 281,
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    pages: 328,
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&auto=format&fit=crop&q=80",
    description: "A chilling prophecy about the future and the struggle of an individual against an all-seeing totalitarian regime."
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    year: 1925,
    pages: 180,
    rating: 4.4,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80",
    description: "A portrait of the Jazz Age and Jay Gatsby's pursuit of the elusive green light and the American Dream."
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science",
    year: 2008,
    pages: 464,
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=400&auto=format&fit=crop&q=80",
    description: "A handbook of agile software craftsmanship with best practices for writing readable, maintainable code."
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Computer Science",
    year: 2008,
    pages: 176,
    rating: 4.3,
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80",
    description: "Uncovers the beauty and elegant subset of the JavaScript programming language."
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    genre: "Computer Science",
    year: 1999,
    pages: 352,
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80",
    description: "A journey from journeyman to master programmer with practical tips and modern approaches."
  },
  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    year: 1965,
    pages: 412,
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides who would become a messiah."
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    pages: 310,
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&auto=format&fit=crop&q=80",
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable life, until Gandalf and thirteen dwarves sweep him on an epic adventure."
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    year: 2011,
    pages: 443,
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&auto=format&fit=crop&q=80",
    description: "Explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be human."
  },
  {
    id: 10,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    year: 2018,
    pages: 320,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&auto=format&fit=crop&q=80",
    description: "An easy and proven way to build good habits and break bad ones through tiny, compound changes."
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    year: 1932,
    pages: 268,
    rating: 4.3,
    cover: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&auto=format&fit=crop&q=80",
    description: "A visionary tour de force exploring a futuristic society governed by consumerism and genetic conditioning."
  },
  {
    id: 12,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic Fiction",
    year: 1951,
    pages: 234,
    rating: 4.1,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=80",
    description: "Holden Caulfield's cynical and touching wanderings through New York City after being expelled from prep school."
  },
  {
    id: 13,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    genre: "Computer Science",
    year: 2017,
    pages: 616,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80",
    description: "The definitive guide to the architecture and principles of modern reliable and scalable distributed systems."
  },
  {
    id: 14,
    title: "Foundation",
    author: "Isaac Asimov",
    genre: "Science Fiction",
    year: 1951,
    pages: 255,
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
    description: "Hari Seldon creates psychohistory to preserve knowledge and guide humanity through a coming galactic dark age."
  },
  {
    id: 15,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    year: 2011,
    pages: 499,
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&auto=format&fit=crop&q=80",
    description: "A tour of the mind explaining the two systems that drive the way we think and make judgments."
  },
  {
    id: 16,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1954,
    pages: 423,
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80",
    description: "The first part of Tolkien's epic masterpiece of courage, friendship, and the battle against darkness in Middle-earth."
  }
];

module.exports = {
  users,
  posts,
  comments,
  todos,
  books
};
