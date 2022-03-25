'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "f28b28aed9a9bc431fe838eba9d4803a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "080c89810709a380f4e5f67626e4a649",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "212d7bb7e69b4b892b026263d0389f9e",
".git/logs/refs/heads/master": "2b16da70e3ab298cf26931c868ba19fd",
".git/logs/refs/remotes/origin/master": "d467ea2e067b12408cd7a9815b8afdbd",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/0e/3282d0595ee20a8e984ed66bb954d7c5d0e78e": "58e3fda2e8fe00c020e17faa3dbae657",
".git/objects/0e/e53c2140944136412c831470b49c10f18ca0a8": "e681478931a74dbe800941423dca2cff",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/28a25e653e35a61023455fe3c0ac0872e87a82": "26ccd6d6b82ca30630953764aabc9046",
".git/objects/16/f7767c2c8a826649bc0275e2d50af518bb6235": "de6a3f8c357f9d4e4f6285f91667a3fb",
".git/objects/17/471d48da5fac9622e04b49e842068638bba60a": "621b8ab25a1d1fd40267ca1178656e01",
".git/objects/18/3824048d55e45e37e32acfe13514b075f73d44": "b71a64f4efa7ced1378f0debbe194efc",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/20/71d50cc65ceef898cbe579bf676d19c543ffd7": "53b583473fa985cf9c32ff38791e1cdd",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/c53e4924b019094579ee10aa78a08f894da233": "65407b477fde726970d1f64effde9a59",
".git/objects/28/bffb2d85d83b1fa3f667dd26eb43000f7cdb0d": "bd6b526363a907dfdda00af5a4fc3a4f",
".git/objects/2b/dd18eb3595e06e9c58542a68d84b36d3924366": "429d82f98facdb18b139d03457b69d07",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2d/664265715a9b5b89b9e5a8dcdf6ae9433e9143": "62f37089dc0afab52b38d0fff7ee1af3",
".git/objects/2d/ba7f9adafae04182e60575013086842a299bf0": "02731535797e547fbbcd99e43979e4f8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/739d15c38f5536eda0d8e04a3bcb9f444e1ada": "8ad7f7a4fc7c2d8256120a86830a9c80",
".git/objects/30/084673e747630e4888ce41453543ae19ff182a": "1f1eb3d2874f31179b00389f305276a7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/38/47ea4195e5ce4b4f067cf37c52efbe79a51787": "545a25c1094ef831a1e9160f2de9378f",
".git/objects/3b/9029603fee88ed2571fc2a44f6fadb1c38ae6f": "a48fa5b47e17585f4245669ed72d5f77",
".git/objects/3c/1408c2e4afa2565ff7363d9fc0e22097d4b6f1": "652f762c05a0e407bcc3949b69eaa419",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/68e716e87cb799bc6e81abc0c6775fa26cde5c": "e748a2ea34b8b69d019390868616307b",
".git/objects/3e/88d641f312ae0dc20782fc400ca9ecf6b09a6e": "1049b1e9c8563aa50e008402d727dd64",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/4a/35d073607fc994d5ddc2b11f3f85e0052f768b": "4cf6ce1a0b85292c23250f20bbf0d972",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/0f8eb0aa2680238da5fd91448eab230459a723": "be37282b6de683186617be80d96966be",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/52/6b97b3fb3fec1465561e81f25d7f2310d880d1": "dbebf01c5cd753bd361f8b0a4e491b94",
".git/objects/53/315f57facbc4eecf6843c5351cd7c3bb432f13": "9ccc512fd7ac668255c00c423c6fe1aa",
".git/objects/5a/3a746426f3456e87fde9652cf52b1b8928ba82": "2bb262526e8630fe7d8f9cdedc04e9df",
".git/objects/5b/3866ff6baf6a314826a993d63f8844c9f76b5b": "06de7d62594b2d84b736de1bc091dae3",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/6a/dca1ba081566defa4d58386b8695a01db361c2": "d1251074aa82425b813b33c78ea3aabd",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/70/1c65794728bc26731b61d054151f6e2c0a987a": "3c1a8016b29a6d5c6649912cb569c3f3",
".git/objects/73/b268c2e1a016c77835834c6c91b53ceac954d5": "3391eeab92162adcbbbfcb6c2d0034dc",
".git/objects/73/ea45f410af5d1c2cbb39696cdb387c0f9ca3cf": "4d58a552484f0e7a3d462aa076ff6796",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/2d592d299ed1dac2c0de0f1fa636920876431b": "ffdf9c8a396b241b730ef2a17977a39f",
".git/objects/79/9d4aa5355265d8f763d42649ccfbfb2e213100": "32838dc2d83c205903f7ce59c238518b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7d/dbb22eccf4bdc9ebc14458a3d62e54cf1e12a8": "b675a774b41932ab95a3442b270f3c53",
".git/objects/80/dbcf32f5afeee4e045ba823e21d74024f80d34": "1b6c51f837591a49f52add9c42a9a2b8",
".git/objects/84/e6e7fc08a35d2ff0129b1d12b1d5501fe3543a": "cf63757d6bf0d98521d2abfeeb012006",
".git/objects/87/e0f00168a2137f6d586428303ff4a280cde58b": "304fdeb58e155d24012174f3c2537303",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e15166487359aa11d2cb25878949f6fafc60bd": "44cb7f3416cec881dd1879ea5960131a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2396d1a0bfe8c88ec033d254ddb691812b88b7": "5a4743c614d322aab066ee606bfb3566",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/9a/22dc7875d017f12aac906e955c5e815fdef29a": "2439850c8cb77d63ef9428790e55f9b3",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c5c623839e3b8fc2b4fbf029f5d73f84007b4b": "02fa07ad1b9e7769e5cd0053038ec843",
".git/objects/a3/16c958f7775ce1d697cbf91ce90b9c8b958c93": "d92a1d06c86fc2ffc70f87af455bc30e",
".git/objects/a3/600fcbcdbedc5c2e6f906dd50e3a87e9701e2d": "277d9098c347341cc469d8dfc46f3cbb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/0403278d2a250e8346a5f030fb442a369eadd5": "9e1d03e35fa21aad14976ce63b7166ce",
".git/objects/ac/2207692fcecc7d508b2c8cb564ea2096ae0ebf": "45cf330fa330a5da015c763bfcf778a4",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b1/01da6caac18f54c39771e90cf4b4598818e07e": "382d07ef48c4effc5c19b29870e04b1e",
".git/objects/b1/5fc73410f3994914a8d477071e524b0464d280": "d5e0583655f720ce31f68bafc50f9bcd",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/bde46beec22ae3ac0083ed8b815d1cce4be465": "7ad80703fb0bc9a9f039429fad9b1824",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/70b7dd0de237d5a677df94ae7e0c3c7a5fbf7f": "b3f3cc428a422790c1017d78784f3e96",
".git/objects/ba/0705c6e81378c526714773d644a2579450f64c": "260e84fe1727b7fd5ea4c1ee64f47be8",
".git/objects/bd/2641ef3215a98ef1db8caf4f60e6453f4d4fc5": "3b6091a8074d43e7cc82d21147ad5daf",
".git/objects/bf/9c955d6ef79be0a8300cfae6d0e8517e561ea5": "6787182dfd90dbcd99aeea45b8b03211",
".git/objects/c2/cc2fae0e4a3f5a42dc9c99baeb924aad9dbd34": "2e18c06484cae089eac2f2404fe171d4",
".git/objects/d3/e7fb32e8a518ce473971d92c1fff038b3b013d": "6ad075a867b5dae969ca97dd153a7891",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/a4da20f295f6b94ce57430f1cd6a4f234cf6d9": "8bea488635d599fb4c908c04ecd75015",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/ef/434185b3168597de11867a3f75d10e4d10ec42": "87107cf938edb81ce68b1b70c0d771e5",
".git/objects/f3/8f14cd5585daaf57bf6195f850432c658ff241": "b77f1adac1742adf828ee5b88dee941b",
".git/objects/f4/309238e3afada64ff6b4c41339b3ba1f957bb6": "c3f961905454e7453982b525046136c0",
".git/objects/fc/12c5429521af5255d646b89c04831c67cd3a8b": "f556c71f36e7c8d5550b1d9f12884cf2",
".git/objects/fc/6b89bf85d2596855d6e6a8c990ae2cbaae88e3": "55a49e8d4b56cd5fe734307d66d2267a",
".git/objects/fe/a50485d89c5bad4de0e9f89ce1154d11750502": "a925134fd7285e176292a80fa2ef43f8",
".git/objects/ff/fac869fa4d29755ef43f3e03ce9a08f3157fa5": "2988f8ce42c03457fc0fc9bb0de8ff15",
".git/refs/heads/master": "cb9d3ab4103ccc12faa7d800c8001055",
".git/refs/remotes/origin/master": "cb9d3ab4103ccc12faa7d800c8001055",
"assets/AssetManifest.json": "787e6f20d39a5a5d82a12323ffe2bbca",
"assets/assets/ambibuzzlogo.png": "9e962c9a5ad636ed67ffefe06e007e82",
"assets/assets/ambika_splash_image.png": "4203e6af7499e13089b8e201c19ce5e3",
"assets/assets/icon/account.png": "600d0a7329c2386bf97268936fa087bf",
"assets/assets/icon/account_green.png": "188d480278ebd4ccfe5b63ad268d076d",
"assets/assets/icon/cart.png": "89655e5d4ab33045ac98a2db74fbcc97",
"assets/assets/icon/cart_green.png": "bb855c61709c521abdca8b8354ea0dce",
"assets/assets/icon/favorite.png": "8c40b7230cbc4b2a576c56fb21defd31",
"assets/assets/icon/favorite_green.png": "f6d313be643698789df91e71f36aab04",
"assets/assets/icon/filter.png": "b116eb5cfa08837cea84bf7eaa1a295b",
"assets/assets/icon/home.png": "31521951e008b190e1fa2ad9bb90c744",
"assets/assets/icon/home_4x.png": "ea328198362550b52a903ace837b700f",
"assets/assets/icon/home_green.png": "5538130a3aee6b5d1203149b8dee645d",
"assets/assets/icon/remove.png": "21705d2bc6ecfc3353354dabddf77148",
"assets/assets/illustrations/empty.png": "f19f020d7bd285adff21e3a983af6e23",
"assets/assets/illustrations/login.png": "1d70de7ddeb70fa3063c1751dcac25c5",
"assets/assets/illustrations/no_results.png": "4b56a81d1ae8ec4391da29a0282b9ed3",
"assets/assets/inf.jpg": "0af88e5861abd147366322570450769d",
"assets/assets/logo.png": "bc3a3c88bff0736376ff0b99cb3deabe",
"assets/assets/order_success.png": "ae6259dd3411bea7833f9d8893812ccc",
"assets/assets/rive_assets/check.riv": "a9c5adda96293388d270a38b58c5727b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8866a72ebc074b72eba4370eccd521b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "755e2505e07158ddd553e99faef506ef",
"/": "755e2505e07158ddd553e99faef506ef",
"main.dart.js": "214289d01517f13767ab3241a8db3812",
"manifest.json": "171a1d3004733c618c0b9822c760be67",
"version.json": "09cdd6d9ef18e09e0b4b457020a51190"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
