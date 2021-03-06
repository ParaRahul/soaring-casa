import React from 'react'
import image from '../3d/g3.glb'
import './css/LPage4.css'



const Lpage4=()=> {
    return (<React.Fragment>
        <div className="aero">
            <div className="row">
                <div className="col s6"><div className="content">
                <h1 className="heading1">Soaring Casa</h1>
                <h5 className="heading2">We help you fly high like an eagle <span className="typed"></span></h5>
                </div></div>
                <div className="col s6">
                <model-viewer id="reveal"  src={image} alt="A 3d glider" auto-rotate camera-controls disable-zoom ></model-viewer>
                </div>
            </div>
        </div>
        </React.Fragment>
        

    )
}



export default Lpage4






































                            // recent almst try

// import React,{useRef,useEffect,useState} from 'react'
// import image from '../../src/3d/FiddleleafFigPottedPlant.gltf'
// import * as THREE from "three";
// import './css/LPage4.scss'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';


// export default function Lpage4() {

//     const obj = useRef()
//     let  obj2;

//     const [child, setChild] = useState([])

//     const scene = new THREE.Scene()
//     const renderer = new THREE.WebGLRenderer()
//     const light=new THREE.HemisphereLight(0xffffff,0x000000,2)
//     const loader = new GLTFLoader();


//     useEffect(() => {
//         console.log(obj.current.clientHeight)
//         console.log(obj.current.clientWidth)

//         const camera = new THREE.PerspectiveCamera(75, obj.current.clientWidth/obj.current.clientHeight, 0.01, 1000)
        
//         renderer.setSize(obj.current.clientWidth ,obj.current.clientHeight)
          
//         // obj.appendChild(renderer.domElement)
//         console.log(renderer.domElement)
//         // child = renderer.domElement
//         setChild(renderer.domElement)

//         loader.load(image, function(gltf) {
//             obj2= gltf.scene
//             scene.add(gltf.scene);
              
//         });
//         scene.add(light);
//         camera.position.set(0,0,100)

//         scene.background= new THREE.Color(0xFFFFFF)
        
//       console.log(image)
     

//         function animate(){
//             requestAnimationFrame(animate)
//             renderer.render(scene,camera)
//         }
    
//         animate()


//     }, [])
//     // console.log(window.innerHeight)

//    console.log(child)

//    const canVas = ()=>(child)


//     return (
//        <React.Fragment>
//         <div className="aero" ref={obj} >
//         <canVas />

//         {console.log(child)}
//         {child[0]}

//         oekfoeoffdmefofjof
//         kfoekfpoekpkepf
//         </div>
       
//        </React.Fragment>
//     )


// }




































// import React, { useRef, useState } from "react";
// //R3F
// import { Canvas, useFrame } from "react-three-fiber";
// // Deai - R3F
// import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
// //Components

// // Styles
// import './css/LPage4.scss';
// // React Spring
// import { useSpring, a } from "react-spring/three";

// // soft Shadows
// softShadows();

// const SpinningMesh = ({ position, color, speed, args }) => {
//   //ref to target the mesh
//   const mesh = useRef();

//   //useFrame allows us to re-render/update rotation on each frame
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

//   //Basic expand state
//   const [expand, setExpand] = useState(false);
//   // React spring expand animation
//   const props = useSpring({
//     scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
//   });
//   return (
//     <a.mesh
//       position={position}
//       ref={mesh}
//       onClick={() => setExpand(!expand)}
//       scale={props.scale}
//       castShadow>
//       <boxBufferGeometry attach='geometry' args={args} />
//       <MeshWobbleMaterial
//         color={color}
//         speed={speed}
//         attach='material'
//         factor={0.6}
//       />
//     </a.mesh>

//     //Using Drei box if you want
//     // <Box {...props} ref={mesh} castShadow>
//     //   <MeshWobbleMaterial
//     //     {...props}
//     //     attach='material'
//     //     factor={0.6}
//     //     Speed={1}
//     //   />
//     // </Box>
//   );
// };

// const LPage = () => {
//   return (
//     <React.Fragment>

//       {/* Our Scene & Camera is already built into our canvas */}
//       <Canvas
//         colorManagement
//         shadowMap
//         camera={{ position: [-5, 2, 10], fov: 60 }}>
//         {/* This light makes things look pretty */}
//         <ambientLight intensity={0.3} />
//         {/* Our main source of light, also casting our shadow */}
//         <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={1.5}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />
//         {/* A light to help illumnate the spinning boxes */}
//         <pointLight position={[-10, 0, -20]} intensity={0.5} />
//         <pointLight position={[0, -10, 0]} intensity={1.5} />
//         <group>
//           {/* This mesh is the plane (The floor) */}
//           <mesh
//             rotation={[-Math.PI / 2, 0, 0]}
//             position={[0, -3, 0]}
//             receiveShadow>
//             <planeBufferGeometry attach='geometry' args={[100, 100]} />
//             <shadowMaterial attach='material' opacity={0.3} />
//           </mesh>
//           <SpinningMesh
//             position={[0, 1, 0]}
//             color='lightblue'
//             args={[3, 2, 1]}
//             speed={2}
//           />
//           <SpinningMesh position={[-2, 1, -5]} color='pink' speed={6} />
//           <SpinningMesh position={[5, 1, -2]} color='pink' speed={6} />
//         </group>
//         {/* Allows us to move the canvas around for different prespectives */}
//         <OrbitControls />
//       </Canvas>
//     </React.Fragment>
//   );
// };

// export default LPage;




















































// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from 'react-three-fiber'

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01
//   })
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// export default function LPage4() {
//   return (
//       <div className="aero">
//         <h3>hellokokdefepfpjooooooooooooooooooooo</h3>
//         <Canvas className="can">
//             <ambientLight intensity={0.5} />
//             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//             <pointLight position={[-10, -10, -10]} />
//             <Box position={[-1.2, 0, 0]} />
//             <Box position={[1.2, 0, 0]} />
//         </Canvas>
//     </div>
//   )
// }




















// 2









// import React,{useRef,useEffect} from 'react'
// import * as THREE from 'three'
// import { Scene, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import model from '../3d/scene.gltf'



// export default function Lpage4() {


//     const container = useRef()

//     let camera;
//     let renderer;
//     let scene;
//     let house;
//     let child;


    
//     function init() {
//     //   container = document.querySelector(".scene");
    
//       //Create scene
//       scene = new THREE.Scene();
    
//       const fov = 35;
//       const aspect = container.current.clientWidth / container.current.clientHeight;
//       const near = 0.1;
//       const far = 1000;
      
        

//       console.log(container.current.clientWidth)

//       //Camera setup
//       camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//       camera.position.set(0, 5, 30);
    
//       const ambient = new THREE.AmbientLight(0x404040, 2);
//       scene.add(ambient);
    
//       const light = new THREE.DirectionalLight(0xffffff, 2);
//       light.position.set(50, 50, 100);
//       scene.add(light);
//       //Renderer
//       renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//       renderer.setSize(container.current.clientWidth, container.current.clientHeight);
//       renderer.setPixelRatio(container.current.devicePixelRatio);
    
//       container.current.appendChild(renderer.domElement);
    
//       //Load Model
//       let loader = new GLTFLoader();
//       loader.load("../3d/scene.gltf", function(gltf) {
//         scene.add(gltf.scene);
//         house = gltf.scene.children[0];
//         animate();
//       });
//     }
    
//     function animate() {
//       requestAnimationFrame(animate);
//       house.rotation.z += 0.005;
//       renderer.render(scene, camera);
//     }
    
 
//     useEffect(() => {
//       init()
//       child = onWindowResize()
//     }, [])
    
//     function onWindowResize() {
//       camera.aspect = container.current.clientWidth / container.current.clientHeight;
//       camera.updateProjectionMatrix();
//             console.log(camera.aspect)
//       renderer.setSize(container.current.clientWidth, container.current.clientHeight);
//     }
    
//     // window.addEventListener("resize", onWindowResize);
    
    

//     return (
//         <div className="scene" ref={container} >
//             {child}
//         </div>
//     )
// }


















































// import React from 'react'
// import './css/LPage4.scss'
// import gsap from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'

// import * as THREE from 'three';
// import OBJLoader from 'three/examples/jsm/loaders/OBJLoader'

// import {DrawSVGPlugin } from "gsap/dist/gsap";
// // import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";


// function loadModel() 
// {
// 	gsap.registerPlugin(ScrollTrigger);
// 	gsap.registerPlugin(DrawSVGPlugin);
// 	gsap.set('#line-length', {drawSVG: 0})
// 	gsap.set('#line-wingspan', {drawSVG: 0})
// 	gsap.set('#circle-phalange', {drawSVG: 0})
	
// 	var object;

// 	function onModelLoaded() {
// 		object.traverse( function ( child ) {
// 			let mat = new THREE.MeshPhongMaterial( { color: 0x171511, specular: 0xD0CBC7, shininess: 5, flatShading: true } );
// 			child.material = mat;
// 		});

// 		setupAnimation(object);
// 	}

// 	var manager = new THREE.LoadingManager( onModelLoaded );
// 	manager.onProgress = ( item, loaded, total ) => console.log( item, loaded, total );

// 	var loader = new THREE.LoadingManager( manager );
// 	loader.load( 'https://assets.codepen.io/557388/1405+Plane_1.obj', function ( obj ) { object = obj; });
// }

// function setupAnimation(model)
// {
// 	let scene = new Scene(model);
// 	let plane = scene.modelGroup;
	
// 	gsap.fromTo('canvas',{x: "50%", autoAlpha: 0},  {duration: 1, x: "0%", autoAlpha: 1});
// 	gsap.to('.loading', {autoAlpha: 0})
// 	gsap.to('.scroll-cta', {opacity: 1})
// 	gsap.set('svg', {autoAlpha: 1})
	
// 	let tau = Math.PI * 2;

// 	gsap.set(plane.rotation, {y: tau * -.25});
// 	gsap.set(plane.position, {x: 80, y: -32, z: -60});
	
// 	scene.render();
	
// 	var sectionDuration = 1;
// 	gsap.fromTo(scene.views[1], 
// 		{ 	height: 1, bottom: 0 }, 
// 		{
// 			height: 0, bottom: 1,
// 			ease: 'none',
// 			scrollTrigger: {
// 			  trigger: ".blueprint",
// 			  scrub: true,
// 			  start: "bottom bottom",
// 			  end: "bottom top"
// 			}
// 		})
	
// 	gsap.fromTo(scene.views[1], 
// 		{ 	height: 0, bottom: 0 }, 
// 		{
// 			height: 1, bottom: 0,
// 			ease: 'none',
// 			scrollTrigger: {
// 			  trigger: ".blueprint",
// 			  scrub: true,
// 			  start: "top bottom",
// 			  end: "top top"
// 			}
// 		})
	
// 	gsap.to('.ground', {
// 		y: "30%",
// 		scrollTrigger: {
// 		  trigger: ".ground-container",
// 		  scrub: true,
// 		  start: "top bottom",
// 		  end: "bottom top"
// 		}
// 	})
	
// 	gsap.from('.clouds', {
// 		y: "25%",
// 		scrollTrigger: {
// 		  trigger: ".ground-container",
// 		  scrub: true,
// 		  start: "top bottom",
// 		  end: "bottom top"
// 		}
// 	})
	
// 	gsap.to('#line-length', {
// 		drawSVG: 100,
// 		scrollTrigger: {
// 		  trigger: ".length",
// 		  scrub: true,
// 		  start: "top bottom",
// 		  end: "top top"
// 		}
// 	})
	
// 	gsap.to('#line-wingspan', {
// 		drawSVG: 100,
// 		scrollTrigger: {
// 		  trigger: ".wingspan",
// 		  scrub: true,
// 		  start: "top 25%",
// 		  end: "bottom 50%"
// 		}
// 	})	
	
// 	gsap.to('#circle-phalange', {
// 		drawSVG: 100,
// 		scrollTrigger: {
// 		  trigger: ".phalange",
// 		  scrub: true,
// 		  start: "top 50%",
// 		  end: "bottom 100%"
// 		}
// 	})
	
// 	gsap.to('#line-length', {
// 		opacity: 0,
// 		drawSVG: 0,
// 		scrollTrigger: {
// 		  trigger: ".length",
// 		  scrub: true,
// 		  start: "top top",
// 		  end: "bottom top"
// 		}
// 	})
	
// 	gsap.to('#line-wingspan', {
// 		opacity: 0,
// 		drawSVG: 0,
// 		scrollTrigger: {
// 		  trigger: ".wingspan",
// 		  scrub: true,
// 		  start: "top top",
// 		  end: "bottom top"
// 		}
// 	})	
	
// 	gsap.to('#circle-phalange', {
// 		opacity: 0,
// 		drawSVG: 0,
// 		scrollTrigger: {
// 		  trigger: ".phalange",
// 		  scrub: true,
// 		  start: "top top",
// 		  end: "bottom top"
// 		}
// 	})
	
// 	let tl = new gsap.timeline(
// 	{
// 		onUpdate: scene.render,
// 		scrollTrigger: {
// 		  trigger: ".content",
// 		  scrub: true,
// 		  start: "top top",
// 		  end: "bottom bottom"
// 		},
// 		defaults: {duration: sectionDuration, ease: 'power2.inOut'}
// 	});
	
// 	let delay = 0;
	
// 	tl.to('.scroll-cta', {duration: 0.25, opacity: 0}, delay)
// 	tl.to(plane.position, {x: -10, ease: 'power1.in'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * .25, y: 0, z: -tau * 0.05, ease: 'power1.inOut'}, delay)
// 	tl.to(plane.position, {x: -40, y: 0, z: -60, ease: 'power1.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * .25, y: 0,  z: tau * 0.05, ease: 'power3.inOut'}, delay)
// 	tl.to(plane.position, {x: 40, y: 0, z: -60, ease: 'power2.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * .2, y: 0, z: -tau * 0.1, ease: 'power3.inOut'}, delay)
// 	tl.to(plane.position, {x: -40, y: 0, z: -30, ease: 'power2.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, { x: 0, z: 0, y: tau * .25}, delay)
// 	tl.to(plane.position, { x: 0, y: -10, z: 50}, delay)
	
// 	delay += sectionDuration;
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * 0.25, y: tau *.5, z: 0, ease:'power4.inOut'}, delay)
// 	tl.to(plane.position, {z: 30, ease:'power4.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * 0.25, y: tau *.5, z: 0, ease:'power4.inOut'}, delay)
// 	tl.to(plane.position, {z: 60, x: 30, ease:'power4.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * 0.35, y: tau *.75, z: tau * 0.6, ease:'power4.inOut'}, delay)
// 	tl.to(plane.position, {z: 100, x: 20, y: 0, ease:'power4.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {x: tau * 0.15, y: tau *.85, z: -tau * 0, ease: 'power1.in'}, delay)
// 	tl.to(plane.position, {z: -150, x: 0, y: 0, ease: 'power1.inOut'}, delay)
	
// 	delay += sectionDuration;
	
// 	tl.to(plane.rotation, {duration: sectionDuration, x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none'}, delay)
// 	tl.to(plane.position, {duration: sectionDuration, x: 0, y: 30, z: 320, ease: 'power1.in'}, delay)
	
// 	tl.to(scene.light.position, {duration: sectionDuration, x: 0, y: 0, z: 0}, delay)
// }

// loadModel();


// export default class Scene
// {
// 	constructor(model)
// 	{
// 		this.views = [
// 			{ bottom: 0, height: 1 },
// 			{ bottom: 0, height: 0 }
// 		];
		
// 		this.renderer = new THREE.WebGLRenderer({
// 			antialias: true,
// 			alpha: true
// 		});
		
// 		this.renderer.setSize(window.innerWidth, window.innerHeight);
// 		this.renderer.shadowMap.enabled = true;
// 		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// 		this.renderer.setPixelRatio(window.devicePixelRatio);

// 		document.body.appendChild( this.renderer.domElement );
		
// 		// scene

// 		this.scene = new THREE.Scene();
		
// 		for ( var ii = 0; ii < this.views.length; ++ ii ) {

// 			var view = this.views[ ii ];
// 			var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
// 			camera.position.fromArray([0, 0, 180] );
// 			camera.layers.disableAll();
// 			camera.layers.enable( ii );
// 			view.camera = camera;
// 			camera.lookAt(new THREE.Vector3(0, 5, 0));
// 		}
		
// 		//light

// 		this.light = new THREE.PointLight( 0xffffff, 0.75 );
// 		this.light.position.z = 150;
// 		this.light.position.x = 70;
// 		this.light.position.y = -20;
// 		this.scene.add( this.light );

// 		this.softLight = new THREE.AmbientLight( 0xffffff, 1.5 );
// 		this.scene.add(this.softLight)

// 		// group

// 		this.onResize();
// 		window.addEventListener( 'resize', this.onResize, false );
		
// 		var edges = new THREE.EdgesGeometry( model.children[ 0 ].geometry );
// 		let line = new THREE.LineSegments( edges );
// 		line.material.depthTest = false;
// 		line.material.opacity = 0.5;
// 		line.material.transparent = true;
// 		line.position.x = 0.5;
// 		line.position.z = -1;
// 		line.position.y = 0.2;	
		
// 		this.modelGroup = new THREE.Group();
		
// 		model.layers.set( 0 );
// 		line.layers.set( 1 );
			
// 		this.modelGroup.add(model);
// 		this.modelGroup.add(line);
// 		this.scene.add(this.modelGroup);
// 	}
	
// 	render = () =>
// 	{
// 		for ( var ii = 0; ii < this.views.length; ++ ii ) {

// 			var view = this.views[ ii ];
// 			var camera = view.camera;

// 			var bottom = Math.floor( this.h * view.bottom );
// 			var height = Math.floor( this.h * view.height );

// 			this.renderer.setViewport( 0, 0, this.w, this.h );
// 			this.renderer.setScissor( 0, bottom, this.w, height );
// 			this.renderer.setScissorTest( true );

// 			camera.aspect = this.w / this.h;
// 			this.renderer.render( this.scene, camera );
// 		}


//         return (
        
//             <div class="content">
//             <div class="loading">Loading</div>
//             <div class="trigger"></div>
//             <div class="section">
                
//                 <h1>Airplanes.</h1>
//                 <h3>The beginners guide.</h3>
//                 <p>You've probably forgotten what these are.</p>
//             {/* 	<div class="phonetic">/ ˈɛərˌpleɪn /</div>  */}
//                 <div class="scroll-cta">Scroll</div>
//             </div>
    
//             <div class="section right">
//                 <h2>They're kinda like buses...</h2>
//             </div>
    
//             <div class="ground-container">
//                 <div class="parallax ground"></div>
//                 <div class="section right">
//                     <h2>..except they leave the ground.</h2>
//                     <p>Saaay what!?.</p>
//                 </div>
    
//                 <div class="section">
//                     <h2>They fly through the sky.</h2>
//                     <p>For realsies!</p>
//                 </div>
                
//                 <div class="section right">
//                     <h2>Defying all known physical laws.</h2>
//                     <p>It's actual magic!</p>
//                 </div>
//                 <div class="parallax clouds"></div>
//             </div>
    
//             <div class="blueprint">
//                 <svg width="100%" height="100%" viewbox="0 0 100 100">
//                     <line id="line-length" x1="10" y1="80" x2="90" y2="80" stroke-width="0.5"></line>
//                     <path id="line-wingspan" d="M10 50, L40 35, M60 35 L90 50" stroke-width="0.5"></path>
//                     <circle id="circle-phalange" cx="60" cy="60" r="15" fill="transparent" stroke-width="0.5"></circle>
//                 </svg>
//                 <div class="section dark ">
//                     <h2>The facts and figures.</h2>
//                     <p>Lets get into the nitty gritty...</p>
//                 </div>
//                 <div class="section dark length">
//                     <h2>Length.</h2>
//                     <p>Long.</p>
//                 </div>
//                 <div class="section dark wingspan">
//                     <h2>Wing Span.</h2>
//                     <p>I dunno, longer than a cat probably.</p>
//                 </div>
//                 <div class="section dark phalange">
//                     <h2>Left Phalange</h2>
//                     <p>Missing</p>
//                 </div>
//                 <div class="section dark">
//                     <h2>Engines</h2>
//                     <p>Turbine funtime</p>
//                 </div>
//                 {/* <div class="section"></div> */}
//             </div>
//             <div class="sunset">
//                 <div class="section"></div>
//                 <div class="section end">
//                     <h2>Fin.</h2>
//                     <ul class="credits">
//                         <li>Plane model by <a href="https://poly.google.com/view/8ciDd9k8wha" target="_blank">Google</a></li>
//                         <li>Animated using <a href="https://greensock.com/scrolltrigger/" target="_blank">GSAP ScrollTrigger</a></li>
//                     </ul>
//                 </div>
//             </div>
//             </div>
//         )
        
// 	}
	
// 	onResize = () => 
// 	{
// 		this.w = window.innerWidth;
// 		this.h = window.innerHeight;
		
// 		for ( var ii = 0; ii < this.views.length; ++ ii ) {
// 			var view = this.views[ ii ];
// 			var camera = view.camera;
// 			camera.aspect = this.w / this.h;
// 			let camZ = (window.screen.width - (this.w * 1)) / 3;
// 			camera.position.z = camZ < 180 ? 180 : camZ;
// 			camera.updateProjectionMatrix();
// 		}

// 		this.renderer.setSize( this.w, this.h );		
// 		this.render();
// 	}
// }



















