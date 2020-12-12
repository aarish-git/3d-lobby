let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color("grey");

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 10000);
  camera.rotation.y = (5 / 180) * Math.PI;
  camera.position.x = -4744;
  camera.position.y = 874;
  camera.position.z = 44;

  controls = new THREE.OrbitControls(camera);
  controls.addEventListener("change", render);

  function render() {
    renderer.render(scene, camera);
    console.log("position", camera.position.x, camera.position.y, camera.position.z )
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  light = new THREE.DirectionalLight("#B16A1D", 2);
  light.position.set(50, 50, 100);
  scene.add(light);

  light = new THREE.PointLight("#dbd1c7", 2);
  light.position.set(-4744, -874, 44);
  scene.add(light);

  let loader = new THREE.GLTFLoader();
 
  document.querySelector('#mainView').addEventListener('click', () => {
    console.log("meetingRoom");
    camera.position.x = -4744;
    camera.position.y = 874;
    camera.position.z = 44;
    controls.update();
  });

  function floor(valueX, valueZ) {
    loader.load("floor/scenee.gltf", function (gltf) {
      floor = gltf.scene.children[0];
      floor.scale.set(20, 27, 22);
      // floor.rotation.z += 3.17
      floor.position.set(valueX, 100, valueZ);
      scene.add(gltf.scene);
    });
  }

  floor(-1000, 440);

  function reception(valueX, valueZ) {
    loader.load("reception2/scene.gltf", function (gltf) {
      reception = gltf.scene.children[0];
      reception.scale.set(3, 3, 3);
      reception.rotation.z += 1.55;
      reception.position.set(valueX, 100, valueZ);
      scene.add(gltf.scene);
    });
  }
  reception(120, 340);
  
  document.querySelector('#reception').addEventListener('click', () => {
    console.log("meetingRoom");
    camera.position.x = -1389;
    camera.position.y = 228;
    camera.position.z = 45;
    controls.update();
  });

  function sofa1(valueX, valueZ) {
    loader.load("sofa/scene.gltf", function (gltf) {
      sofa1 = gltf.scene.children[0];
      sofa1.scale.set(2, 2, 2);
      sofa1.rotation.z += 3.15;
      sofa1.position.set(valueX, 170, valueZ);
      scene.add(gltf.scene);
    });
  }

  sofa1(-580, 1240);
  sofa1(-1080, 1240);

  function sofa2(valueX, valueZ) {
    loader.load("sofa/scene.gltf", function (gltf) {
      sofa2 = gltf.scene.children[0];
      sofa2.scale.set(2, 2, 2);
      sofa2.rotation.z += 6.25;
      sofa2.position.set(valueX, 170, valueZ);
      scene.add(gltf.scene);
    });
  }
  sofa2(-580, -540);
  sofa2(-1080, -540);

  function fountain(valueX, valueZ) {
    loader.load("fountain/scene.gltf", function (gltf) {
      fountain = gltf.scene.children[0];
      fountain.scale.set(1, 1, 1);
      fountain.position.set(valueX, 100, valueZ);
      scene.add(gltf.scene);
    });
  }

  fountain(-1880, 440);

  function cstall(valueX, valueZ) {
    loader.load("cstall1/scene.gltf", function (gltf) {
      cstall = gltf.scene.children[0];
      cstall.scale.set(4, 4, 4);
      cstall.rotation.z += 3.1;
      cstall.position.set(valueX, 100, valueZ);
      scene.add(gltf.scene);
    });
  }

  cstall(-2580, 2840);
  cstall(-1080, 2870);

  function studio(valueX, valueZ) {
    loader.load("studio/scene.gltf", function (gltf) {
      studio = gltf.scene.children[0];
      studio.scale.set(140, 210, 210);
      studio.rotation.z += 3.1;
      studio.position.set(valueX, 100, valueZ);
      scene.add(gltf.scene);
    });
  }

  studio(780, 2040);
  
  document.querySelector('#studio').addEventListener('click', () => {
    camera.position.x = 1129;
    camera.position.y = 494;
    camera.position.z = 2953;
    controls.update();
  });

  function conferenceRoom(valueX, valueZ) {
    loader.load("conference-room/scenee.gltf", function (gltf) {
      conferenceRoom = gltf.scene.children[0];
      conferenceRoom.scale.set(0.26, 0.14, 0.2);
      conferenceRoom.rotation.z += 3.15;
      conferenceRoom.position.set(valueX, -550, valueZ);
      scene.add(gltf.scene);
    });
  }

  conferenceRoom(1000, -2080, 0.2);
  
  document.querySelector('#meetingRoom').addEventListener('click', () => {
    console.log("meetingRoom");
    camera.position.x = -2764;
    camera.position.y = 506;
    camera.position.z = -2745;
    controls.update();
  });
  
  function door(valueX, valueZ) {
    loader.load("door/scene.gltf", function (gltf) {
      door = gltf.scene.children[0];
      door.scale.set(2, 2, 2);
      door.rotation.z += 1.53;
      door.position.set(valueX, 120, valueZ);
      scene.add(gltf.scene);
    });
  }
  door(-1400, -1790);


  function dCabin(valueX, valueZ) {
    loader.load("D-cabin/scene.gltf", function (gltf) {
      dCabin = gltf.scene.children[0];
      dCabin.scale.set(7, 8, 9.6);
      dCabin.rotation.z += -3.13;
      dCabin.position.set(valueX, 120, valueZ);
      scene.add(gltf.scene);
    });
  }
  dCabin(-320, -2290);
  
  document.querySelector('#cabin').addEventListener('click', () => {
    camera.position.x = -514;
    camera.position.y = 610;
    camera.position.z = -3272;
    controls.update();
  });
  

  function lectureHall(valueX, valueZ) {
    loader.load("lecture-hall/scene.gltf", function (gltf) {
      lectureHall = gltf.scene.children[0];
      lectureHall.scale.set(120, 210, 210);
      lectureHall.rotation.z += 0;
      lectureHall.position.set(valueX, 100, valueZ);
      scene.add(gltf.scene);
    });
  }

  lectureHall(780, -1590);
  
  document.querySelector('#conferenceHall').addEventListener('click', () => {
    camera.position.x = 1369;
    camera.position.y = 708;
    camera.position.z = -2620;
    controls.update();
  });

  function standingBanner(valueX, valueZ) {
    loader.load("standing-banner/scene.gltf", function (gltf) {
      standingBanner = gltf.scene.children[0];
      standingBanner.scale.set(0.2, 0.2, 0.2);
      standingBanner.rotation.z += 3.1;
      standingBanner.position.set(valueX, 120, valueZ);
      scene.add(gltf.scene);
    });
  }

  standingBanner(-2580, 1440);

  animate();
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();

// function changePosition(e) {
//   $("#meetingRoom").click(function () {
//     console.log("hi");
//     camera.position.set(0, 5, 30);
//   }); 
// }
