const names = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Emily Davis",
  "Christopher Wilson",
  "Olivia Martinez",
  "William Anderson",
  "Sophia Thomas",
  "Matthew Taylor",
  "Ava Clark",
  "David Rodriguez",
  "Emma Lee",
  "Daniel Hernandez",
  "Mia Walker",
  "Andrew White"
];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

const images = ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png"];

function getRandomImages() {
  const numImages = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
  const randomImages = [];

  for (let i = 0; i < numImages; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImages.push(images[randomIndex]);
  }

  return randomImages;
}

const products = [
  {
    id: 1,
    images: getRandomImages(),
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    name: "Objet 1",
    price: 10,
    liked: 45,
    selled: 55,
    date: 20190601,
    creator: getRandomName()
  },
  {
    id: 2,
    images: getRandomImages(),
    name: "Objet 2",
    price: 11,
    liked: 98,
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    selled: 200,
    date: 20180215,
    creator: getRandomName()
  },
  {
    id: 3,
    images: getRandomImages(),
    name: "Objet 3",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 5,
    liked: 2,
    selled: 10,
    date: 20191026,
    creator: getRandomName()
  },
  {
    id: 4,
    images: getRandomImages(),
    name: "Objet 4",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 45,
    liked: 15,
    selled: 25,
    date: 20190501,
    creator: getRandomName()
  },
  {
    id: 5,
    images: getRandomImages(),
    name: "Objet 5",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 89,
    liked: 789,
    selled: 10012,
    date: 20191201,
    creator: getRandomName()
  },
  {
    id: 6,
    images: getRandomImages(),
    name: "Objet 6",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 50,
    liked: 23,
    selled: 23,
    date: 20200101,
    creator: getRandomName()
  },
  {
    id: 7,
    images: getRandomImages(),
    name: "Objet 7",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 10,
    liked: 65,
    selled: 10,
    date: 20180301,
    creator: getRandomName()
  },
  {
    id: 8,
    images: getRandomImages(),
    name: "Objet 8",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 3,
    liked: 65,
    selled: 85,
    date: 20170101,
    creator: getRandomName()
  },
  {
    id: 9,
    images: getRandomImages(),
    name: "Objet 9",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 25,
    liked: 96,
    selled: 100,
    date: 20220408,
    creator: getRandomName()
  },
  {
    id: 10,
    images: getRandomImages(),
    name: "Objet 10",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 12,
    liked: 15,
    selled: 105,
    date: 20210905,
    creator: getRandomName()
  },
  {
    id: 11,
    images: getRandomImages(),
    name: "Objet 11",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 17,
    liked: 36974,
    selled: 100012,
    date: 20210325,
    creator: getRandomName()
  },
  {
    id: 12,
    images: getRandomImages(),
    name: "Objet 12",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 46,
    liked: 1151,
    selled: 10123,
    date: 20221127,
    creator: getRandomName()
  },
  {
    id: 13,
    images: getRandomImages(),
    name: "Objet 13",
    price: 10,
    liked: 156,
    selled: 1078,
    date: 20160912,
    creator: getRandomName()
  },
  {
    id: 14,
    images: getRandomImages(),
    name: "Objet 14",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 10,
    liked: 151,
    selled: 145,
    date: 20150826,
    creator: getRandomName()
  },
  {
    id: 15,
    images: getRandomImages(),
    name: "Objet 15",
    description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    price: 10,
    liked: 153,
    selled: 10,
    date: 20200505,
    creator: getRandomName()
  }
];

console.log("version: ", process.version);

export default products;
