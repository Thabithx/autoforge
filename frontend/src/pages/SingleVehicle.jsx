import React, { Suspense, useContext, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  TrackballControls,
  Bounds,
} from '@react-three/drei';
import BmwM5 from '../../models/bmwM5/BmwM5.jsx';
import Cybertruck from '../../models/cybertruck/Cybertruck.jsx';
import Fordeverest from '../../models/fordeverest/Fordeverest.jsx';
//import Bugattitourbillion from '../../models/bugattitourbillion/Bugattitourbillion';
//import Cadillac75 from '../../models/cadillac75/Cadillac75.jsx';

import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';

const SingleVehicle = () => {
  const { id } = useParams();
  const { productdata, fetchProductData } = useContext(ShopContext);

  useEffect(() => {
    fetchProductData();
  }, []);

  const matchedObject = productdata.find(pro => pro._id.toString() === id);

  if (!matchedObject) {
    return <div className="text-center mt-10 text-xl">Loading vehicle details...</div>;
  }

  var { image, brand } = matchedObject;

  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  image = capitalize(image);
  console.log(image);

  if (!image) {
    return <div className="text-center mt-10 text-xl">Model not found.</div>;
  }

  return (
    <div>
      {/* 3D Canvas Section */}
      <div
        className="w-screen h-screen relative"
        style={{
          background: 'radial-gradient(circle at center, #bfbfbf 0%, #eaeaea 40%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        {/* Background text */}
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl sm:text-[7vw] md:text-[9w] lg:text-[12vw] xl:text-[16vw] font-bold opacity-30" >
          {image}
        </div>

        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={4}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-5, 5, -5]} intensity={2} color="#ffffff" />
            <Environment preset="studio" background={false} />
            <Bounds fit clip adjustCamera margin={1}>
              <group rotation={[0, Math.PI / 2 + 0.01, -0.1]}>
                <group rotation={[Math.PI / 2 - 0.02, 0, 0]}>
                  <group >{image === "BmwM5" && <BmwM5 color="#ffffff"/>}</group>
                  <group rotation={[1, Math.PI+1.9, -3.7]}>{image === "Cybertruck" && <Cybertruck color="#ffffff"/>}</group>
                  <group rotation={[-1.57, Math.PI+0.01, 0]}>{image === "Fordeverest" && <Fordeverest color="#ffffff" />}</group>
                </group>
              </group>
            </Bounds>
            
          </Suspense>
          <TrackballControls
            noZoom={true}
            noPan={false}
            staticMoving={false}
            dynamicDampingFactor={0.2}
            rotateSpeed={3.5}
          />
        </Canvas>
      </div>

      {/* Displaying brand and image */}
      <p className="text-3xl text-center mt-4 font-semibold">
        {brand}
      </p>

      <div className="flex justify-center mt-4">
        <img
          src={image}
          alt={`${brand} car`}
          className="w-[500px] h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SingleVehicle;
