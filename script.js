
                document.addEventListener('DOMContentLoaded', () => {
                    const container = document.getElementById('container');
                    const trailSpace = document.getElementById('trail-space');
                    const navBarHeight = document.querySelector('nav').offsetHeight;
                    const pTextTop = document.querySelector('p').offsetTop;
                    const pTextBottom = pTextTop + document.querySelector('p').offsetHeight;
                  const exclaim_button = document.getElementById('underlineEffectLink');
                  
                  


                  exclaim_button.onclick = function() {
                    document.getElementById('ex-point').style.backgroundColor = "yellow";

                  };
                    // Array of four image paths
                   const imagePaths = [
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066173162491964/interaction_prototypes-02.png?ex=65e1ee4c&is=65cf794c&hm=d6bd6ade20a1fa694dc940c46b5f75bedeefc924a753c130762037b92007607c&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066161607184394/interaction_prototypes-01.png?ex=65e1ee49&is=65cf7949&hm=c1c5f0749044ef4e63bf6c6fb118c11d0b813f578b9c696a2b1cddbcca9cd1cb&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066187783700480/interaction_prototypes-03.png?ex=65e1ee4f&is=65cf794f&hm=3546a6308d566546f072208ce5b98969bbfc2010729d6c1191137eebd243bbeb&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066198810664960/interaction_prototypes-04.png?ex=65e1ee52&is=65cf7952&hm=27b46bfe9a67452bc33a54f5abe77101a47f6d1d4968c22e94088d412cbf1d2a&',
                ];
                  
                    document.addEventListener('mousemove', (event) => {
                      const mouseX = event.clientX;
                      const mouseY = event.clientY + window.scrollY; // Consider the scroll position
                  
                      // Check if mouse coordinates are within the specified region (trail space)
                      const withinTrailSpace = mouseY > navBarHeight && mouseY < pTextTop && mouseX > trailSpace.offsetLeft && mouseX < trailSpace.offsetLeft + trailSpace.offsetWidth;
                  
                      if (withinTrailSpace) {
                        const image = document.createElement('img');
                        const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)]; // Randomly choose an image from the array
                  
                        image.src = imagePath;
                        image.classList.add('trail-image');
                  
                        // Adjust the position of each image to create spacing
                        image.style.left = mouseX + 'px';
                        image.style.top = mouseY + 'px';
                  
                        container.appendChild(image);
                      }
                    });
                  });
                  
              