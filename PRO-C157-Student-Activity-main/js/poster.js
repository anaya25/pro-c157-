AFRAME.registerComponent("poster", {
  init: function () {
    this.placesContainer = this.el;
    
  },
  
     createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
     return entityEl ;


      },
  

  createCards: function () {
    const thumbNailsRef = [
    {
          id: "bheem",
          title: "Bheem",
          url: "./Assets/cb.png",
        },
        {
          id: "doraemon",
          title: "Doraemon",
          url: "./Assets/drm.png",
        },
  
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./Assets/spm.png",
        },
        {
          id: "superman",
          title: "Superman",
          url: "./Assets/sum.png",
        },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);
      
      // Thumbnail Element
       const poster= this.createPoster(item);
      borderEl.appendChild(poster);
     
      // Title Text Element
       const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);



      this.placesContainer.appendChild(borderEl);
    }
  },
  
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
      });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
      });
      return entityEl ;
 
  },

    createPoster: function(item) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
        });

    entityE1.setAttribute("position ", { x: 0, y: 5, z: 0.1 });
    entityE1.setAttribute("material", { src: item.url });
     return entityEl ;

    },

});
