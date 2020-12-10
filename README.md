# 3Doffice
An office created using - three.js


<!DOCTYPE html>
<html>

<head>
  <title>My first three.js app</title>
  <script src="https://unpkg.com/three@0.87.1/build/three.js"></script>
  <script src="https://unpkg.com/three@0.87.1/examples/js/controls/OrbitControls.js"></script>
  <script src="https://unpkg.com/three@0.87.1/examples/js/loaders/GLTFLoader.js"></script>
  <style>
    canvas {
      display: block;
    }

    html {
      overflow: hidden;
      background: #000;
    }
  </style>
</head>

<body>
  <script>
    let scene, camera, renderer;
    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color("grey");

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
      camera.rotation.y = 45 / 180 * Math.PI;
      camera.position.x = -3300;
      camera.position.y = 800;
      camera.position.z = 600;

      controls = new THREE.OrbitControls(camera);
      controls.addEventListener('change', renderer);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // hlight = new THREE.AmbientLight(0x404040, 100);
      // scene.add(hlight);

      // directionalLight = new THREE.DirectionalLight("burlywood", 100);
      // directionalLight.position.set(0, 1, 0);
      // directionalLight.castShadow = true;
      // scene.add(directionalLight);

      light = new THREE.PointLight("whitesmoke", 10);
      light.position.set(0, 700, 900);
      scene.add(light);

      light2 = new THREE.PointLight("grey", 10);
      light2.target = conferenceRoom;
      scene.add(light2);

      // light3 = new THREE.PointLight(0xc4c4c4, 10);
      // light3.position.set(0, 100, -500);
      // scene.add(light3);

      // light4 = new THREE.PointLight(0xc4c4c4, 10);
      // light4.position.set(-500, 300, 500);
      // scene.add(light4);


      let loader = new THREE.GLTFLoader();

      function mainDoor(valueX, valueZ, rotationZ, scaleX) {  
      loader.load('main-door/scene.gltf', function (gltf) {
        mainDoor = gltf.scene.children[0];
        mainDoor.scale.set(scaleX, 400, 150);
        mainDoor.position.set(valueX, 100, valueZ);
        mainDoor.rotation.z += rotationZ;
        scene.add(gltf.scene);
      })
      }

      mainDoor(-2000, 1140, 1.55, 250)
      mainDoor(-2400, 1660, 0, 200)

      function dCabin(valueX,valueZ, posX, rotationZ) {
        loader.load('D-cabin/scene.gltf', function (gltf) {
          dCabin = gltf.scene.children[0];
          dCabin.scale.set(posX, 7, 6);
          dCabin.rotation.z += rotationZ
          dCabin.position.set(valueX, 120, valueZ);
          scene.add(gltf.scene);
        })
      }
      dCabin(-2400, 300, 5.5, -1.6);
      dCabin(-220, -790, 5.5, -3.1);
      dCabin(460, -830, 5.5, -3.1);

      function conferenceRoom(valueX,valueZ, posX) {
        loader.load('conference-room/scenee.gltf', function (gltf) {
          conferenceRoom = gltf.scene.children[0];
          conferenceRoom.scale.set(posX, 0.11, 0.11);
          conferenceRoom.rotation.z += 3.17
          conferenceRoom.position.set(valueX, -200, valueZ);
          scene.add(gltf.scene);
        })
      }

      conferenceRoom(800, -630, 0.2);

      function tableRow(valueX, valueZ) {
        loader.load('computer-desk/scene.gltf', function (gltf) {
          desk1 = gltf.scene.children[0];
          desk1.scale.set(80, 80, 80);
          desk1.position.set(valueX, 180, valueZ);
          desk1.rotation.z += -1.55
          scene.add(gltf.scene);

        });

      }
      tableRow(-1420, 150);
      tableRow(-1180, 150);
      tableRow(-940, 150);
      tableRow(-700, 150);
      tableRow(-460, 150);
      tableRow(-220, 150);
      tableRow(20, 150);
      tableRow(260, 150);
      tableRow(500, 150);
      tableRow(740, 150);
      // tableRow(980, 100);

      tableRow(-1420, 850);
      tableRow(-1180, 850);
      tableRow(-940, 850);
      tableRow(-700, 850);
      tableRow(-460, 850);
      tableRow(-220, 850);
      tableRow(20, 850);
      tableRow(260, 850);
      tableRow(500, 850);
      tableRow(740, 850);
      // tableRow(980, 850);

      tableRow(-2080, 1550);
      tableRow(-1420, 1500);
      tableRow(-1180, 1500);
      tableRow(-940, 1500);
      tableRow(-700, 1500);
      tableRow(-460, 1500);
      tableRow(-220, 1500);
      tableRow(20, 1500);
      tableRow(260, 1500);
      tableRow(500, 1500);
      tableRow(740, 1500);

      function sofa(valueX,valueZ) {
        loader.load('sofa/scene.gltf', function (gltf) {
          sofa = gltf.scene.children[0];
          sofa.scale.set(2,2,2);
          // sofa.rotation.z += 3.17
          sofa.position.set(valueX, 180, valueZ);
          scene.add(gltf.scene);
        })
      }

      sofa(-2280, 740);

      function floor(valueX,valueZ) {
        loader.load('floor/scenee.gltf', function (gltf) {
          floor = gltf.scene.children[0];
          floor.scale.set(15,15,12);
          // floor.rotation.z += 3.17
          floor.position.set(valueX, 100, valueZ);
          scene.add(gltf.scene);
        })
      }

      floor(-1000, 440);

      animate();


    }

    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();

  </script>
</body>

</html>
