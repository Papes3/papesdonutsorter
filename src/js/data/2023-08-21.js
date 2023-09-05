dataSetVersion = "2023-09-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter out characters",
      key: "erp",
      tooltip: "Check this to restrict stuff",
      checked: false,
      sub: [
        { name: "Interrobang", key: "anti" },
        { name: "No Post", key: "noast" },
        { name: "Fan Character", key: "FC" }
      ]
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Yval",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Oliv",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Carabosse",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Polymnia",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Nikolai",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Lyrette",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Sigurd",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Deitra",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Mayda",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Alexandre",
      img: "fire.png",
      opts: {
        game: ["anti"]
      }
    },
    {
      name: "Nikolai - En2rety",
      img: "fire.png",
      opts: {
        game: ["anti"]
      }
    },
    {
      name: "Vaellys",
      img: "fire.png",
      opts: {
        game: ["anti"]
      }
    },
    {
      name: "Rein",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Oliv - Al2rety",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Smollys",
      img: "fire.png",
      opts: {
        erp: [ "anti"]
      }
    },
    {
      name: "Spark",
      img: "fire.png",
      opts: {
        erp: [ "FC"]
      }
    },
    {
      name: "Mila",
      img: "fire.png",
      opts: {
        erp: [ "noast"]
      }
    }
  ]
